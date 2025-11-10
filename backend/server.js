const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bcrypt = require('bcrypt');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const SALT_ROUNDS = 10;

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:5500', 'file://'],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000 // limit each IP to 1000 requests per windowMs
});
app.use('/api/', limiter);

// Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://bgatlgloylpafniscmym.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnYXRsZ2xveWxwYWZuaXNjbXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3Mzc3OTgsImV4cCI6MjA3NzMxMzc5OH0.OCa0a-VtRsngn8KUJ63KkfTbTrWCN2sPdemWMniluGI'
);

// Service role client for admin operations
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL || 'https://bgatlgloylpafniscmym.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
);

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'KidSpace Backend API is running' });
});

// Auth routes
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { email, password, childName, age, grade, photo } = req.body;

    // Check if user already exists
    const { data: existingUser, error: checkError } = await supabase
      .from('users')
      .select('id')
      .eq('parentemail', email)
      .single();

    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Hash the provided password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Generate a UUID for the user
    const userId = crypto.randomUUID();

    // Create user profile using service role key for signup
    const { data: profileData, error: profileError } = await supabaseAdmin
      .from('users')
      .insert([{
        id: userId,
        childname: childName,
        age,
        grade,
        parentemail: email,
        password: hashedPassword,
        photo
      }])
      .select()
      .single();

    if (profileError) {
      console.error('Profile creation error:', profileError);
      return res.status(500).json({ error: 'Failed to create user profile' });
    }

    res.json({
      success: true,
      user: profileData,
      message: 'Account created successfully'
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Fetch user from database
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('parentemail', email)
      .single();

    if (error || !user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check password using bcrypt
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Return user data (exclude password)
    const userData = {
      id: user.id,
      childname: user.childname,
      age: user.age,
      grade: user.grade,
      parentemail: user.parentemail,
      photo: user.photo,
      signupdate: user.signupdate,
      created_at: user.created_at,
      updated_at: user.updated_at
    };

    res.json({
      success: true,
      user: userData,
      message: 'Login successful'
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user profile
app.get('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('users')
      .select('id, childname, age, grade, parentemail, photo, signupdate, created_at, updated_at')
      .eq('id', id)
      .single();

    if (error) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(data);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Validate parent password
app.post('/api/auth/validate-parent-password', async (req, res) => {
  try {
    const { userId, password } = req.body;

    if (!userId || !password) {
      return res.status(400).json({ error: 'User ID and password are required' });
    }

    // Fetch user and validate password against signup password
    const { data: user, error } = await supabase
      .from('users')
      .select('password')
      .eq('id', userId)
      .single();

    if (error || !user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare passwords using bcrypt
    const isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
      res.json({ valid: true, message: 'Password validated successfully' });
    } else {
      res.status(401).json({ valid: false, error: 'Incorrect password' });
    }
  } catch (error) {
    console.error('Error validating parent password:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all users (admin only)
app.get('/api/admin/users', async (req, res) => {
  try {
    // Use service role client for admin operations
    const supabaseAdmin = createClient(
      process.env.SUPABASE_URL || 'https://bgatlgloylpafniscmym.supabase.co',
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
    );

    const { data, error } = await supabaseAdmin
      .from('users')
      .select('id, childname, age, grade, parentemail, photo, signupdate, created_at, updated_at')
      .order('signupdate', { ascending: false });

    if (error) {
      console.error('Admin users fetch error:', error);
      return res.status(500).json({ error: 'Failed to fetch users' });
    }

    res.json(data);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user activities
app.get('/api/activities/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { data, error } = await supabase
      .from('user_activities')
      .select('*')
      .eq('user_id', userId)
      .order('timestamp', { ascending: false })
      .limit(50);

    if (error) {
      return res.status(500).json({ error: 'Failed to fetch activities' });
    }

    res.json(data);
  } catch (error) {
    console.error('Error fetching activities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Track activity
app.post('/api/activities', async (req, res) => {
  try {
    const { user_id, activity_type, details, page_url } = req.body;

    const { data, error } = await supabaseAdmin
      .from('user_activities')
      .insert([{
        user_id: user_id || null,
        activity_type,
        details: JSON.stringify(details || {}),
        page_url,
        timestamp: new Date().toISOString()
      }]);

    if (error) {
      return res.status(500).json({ error: 'Failed to track activity' });
    }

    res.json({ success: true, data });
  } catch (error) {
    console.error('Error tracking activity:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all user activities (admin only)
app.get('/api/admin/activities', async (req, res) => {
  try {
    // Use service role client for admin operations
    const supabaseAdmin = createClient(
      process.env.SUPABASE_URL || 'https://bgatlgloylpafniscmym.supabase.co',
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
    );

    const { data, error } = await supabaseAdmin
      .from('user_activities')
      .select(`
        id,
        user_id,
        activity_type,
        details,
        timestamp,
        page_url,
        users(childname)
      `)
      .order('timestamp', { ascending: false })
      .limit(20);

    if (error) {
      console.error('Admin activities fetch error:', error);
      return res.status(500).json({ error: 'Failed to fetch activities' });
    }

    res.json(data);
  } catch (error) {
    console.error('Error fetching activities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get chart data for user engagement (last 7 days)
app.get('/api/admin/chart-data', async (req, res) => {
  try {
    const supabaseAdmin = createClient(
      process.env.SUPABASE_URL || 'https://bgatlgloylpafniscmym.supabase.co',
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
    );

    const chartData = [];
    const today = new Date();

    // Get data for last 7 days
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);

      const { count: activitiesCount } = await supabaseAdmin
        .from('user_activities')
        .select('*', { count: 'exact', head: true })
        .gte('timestamp', startOfDay.toISOString())
        .lte('timestamp', endOfDay.toISOString());

      const { count: uniqueUsers } = await supabaseAdmin
        .from('user_activities')
        .select('user_id', { count: 'exact', head: true })
        .gte('timestamp', startOfDay.toISOString())
        .lte('timestamp', endOfDay.toISOString());

      chartData.push({
        date: date.toISOString().split('T')[0],
        activities: activitiesCount || 0,
        uniqueUsers: uniqueUsers || 0
      });
    }

    res.json(chartData);
  } catch (error) {
    console.error('Error fetching chart data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get analytics data with trends
app.get('/api/admin/analytics', async (req, res) => {
  try {
    // Use service role client for admin operations
    const supabaseAdmin = createClient(
      process.env.SUPABASE_URL || 'https://bgatlgloylpafniscmym.supabase.co',
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
    );

    // Get total users
    const { count: totalUsers, error: usersError } = await supabaseAdmin
      .from('users')
      .select('*', { count: 'exact', head: true });

    if (usersError) {
      return res.status(500).json({ error: 'Failed to fetch analytics' });
    }

    // Get total users from previous week for trend calculation
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7);

    const { count: totalUsersLastWeek, error: lastWeekError } = await supabaseAdmin
      .from('users')
      .select('*', { count: 'exact', head: true })
      .lt('signupdate', lastWeek.toISOString());

    // Get today's active users (users with activities today)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const { count: activeToday, error: activeError } = await supabaseAdmin
      .from('user_activities')
      .select('*', { count: 'exact', head: true })
      .gte('timestamp', today.toISOString());

    // Get yesterday's active users for trend
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday.setHours(0, 0, 0, 0);
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const { count: activeYesterday, error: yesterdayError } = await supabaseAdmin
      .from('user_activities')
      .select('*', { count: 'exact', head: true })
      .gte('timestamp', yesterday.toISOString())
      .lt('timestamp', todayStart.toISOString());

    // Get recent activities count
    const { count: totalActivities, error: activitiesError } = await supabaseAdmin
      .from('user_activities')
      .select('*', { count: 'exact', head: true });

    // Get new signups this week
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const { count: newSignupsWeek, error: signupsError } = await supabaseAdmin
      .from('users')
      .select('*', { count: 'exact', head: true })
      .gte('signupdate', weekAgo.toISOString());

    // Get new signups last week for trend
    const twoWeeksAgoForSignups = new Date();
    twoWeeksAgoForSignups.setDate(twoWeeksAgoForSignups.getDate() - 14);
    const { count: newSignupsLastWeek, error: lastWeekSignupsError } = await supabaseAdmin
      .from('users')
      .select('*', { count: 'exact', head: true })
      .gte('signupdate', twoWeeksAgoForSignups.toISOString())
      .lt('signupdate', weekAgo.toISOString());

    // Calculate trends (percentage change)
    const calculateTrend = (current, previous) => {
      if (previous === 0) return current > 0 ? 100 : 0;
      return Math.round(((current - previous) / previous) * 100);
    };

    const totalUsersTrend = calculateTrend(totalUsers || 0, totalUsersLastWeek || 0);
    const activeTodayTrend = calculateTrend(activeToday || 0, activeYesterday || 0);
    const newSignupsTrend = calculateTrend(newSignupsWeek || 0, newSignupsLastWeek || 0);

    // Calculate additional metrics
    const retentionRate = totalUsers > 0 ? Math.round(((activeToday || 0) / totalUsers) * 100) : 0;
    const avgActivitiesPerUser = totalUsers > 0 ? Math.round((totalActivities || 0) / totalUsers) : 0;
    const engagementRate = totalUsers > 0 ? Math.round(((activeToday || 0) / totalUsers) * 100) : 0;

    res.json({
      totalUsers: totalUsers || 0,
      totalUsersTrend,
      activeToday: activeToday || 0,
      activeTodayTrend,
      totalActivities: totalActivities || 0,
      newSignupsWeek: newSignupsWeek || 0,
      newSignupsTrend,
      retentionRate,
      avgActivitiesPerUser,
      engagementRate
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Parent Dashboard API endpoints

// Get parent/child details
app.get('/api/parent/details/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { data, error } = await supabase
      .from('users')
      .select('id, childname, age, grade, parentemail, photo, signupdate')
      .eq('id', userId)
      .single();

    if (error) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(data);
  } catch (error) {
    console.error('Error fetching parent details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get child streak
app.get('/api/parent/streak/:childId', async (req, res) => {
  try {
    const { childId } = req.params;
    const { data, error } = await supabase
      .from('streaks')
      .select('*')
      .eq('child_id', childId)
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 is "not found"
      return res.status(500).json({ error: 'Failed to fetch streak' });
    }

    res.json(data || { current_streak: 0, last_login: null, total_logins: 0 });
  } catch (error) {
    console.error('Error fetching streak:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get recent activities
app.get('/api/parent/activities/:childId', async (req, res) => {
  try {
    const { childId } = req.params;
    const { data, error } = await supabase
      .from('activities')
      .select('*')
      .eq('child_id', childId)
      .order('timestamp', { ascending: false })
      .limit(10);

    if (error) {
      return res.status(500).json({ error: 'Failed to fetch activities' });
    }

    res.json(data || []);
  } catch (error) {
    console.error('Error fetching activities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get messages (suggestions from admin and parent messages to admin)
app.get('/api/parent/messages/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .or(`sender_id.eq.${userId},receiver_id.eq.${userId}`)
      .order('timestamp', { ascending: false })
      .limit(20);

    if (error) {
      return res.status(500).json({ error: 'Failed to fetch messages' });
    }

    res.json(data || []);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Send message from parent to admin
app.post('/api/parent/messages', async (req, res) => {
  try {
    const { sender_id, message, type } = req.body;

    const { data, error } = await supabase
      .from('messages')
      .insert([{
        sender_id,
        receiver_id: null, // Admin
        message,
        type: type || 'general',
        is_from_admin: false
      }])
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: 'Failed to send message' });
    }

    res.json({ success: true, data });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get daily plan for child
app.get('/api/parent/plan/:childId', async (req, res) => {
  try {
    const { childId } = req.params;
    const today = new Date().toISOString().split('T')[0];

    const { data, error } = await supabase
      .from('plans')
      .select('*')
      .eq('child_id', childId)
      .eq('plan_date', today)
      .single();

    if (error && error.code !== 'PGRST116') {
      return res.status(500).json({ error: 'Failed to fetch plan' });
    }

    res.json(data || { plan_details: 'No plan set for today' });
  } catch (error) {
    console.error('Error fetching plan:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get feedback for parent
app.get('/api/parent/feedback/:parentId', async (req, res) => {
  try {
    const { parentId } = req.params;
    const { data, error } = await supabase
      .from('feedback')
      .select('*')
      .eq('parent_id', parentId)
      .order('timestamp', { ascending: false })
      .limit(10);

    if (error) {
      return res.status(500).json({ error: 'Failed to fetch feedback' });
    }

    res.json(data || []);
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin endpoints for messaging

// Get all messages from parents (admin view)
app.get('/api/admin/messages', async (req, res) => {
  try {
    const supabaseAdmin = createClient(
      process.env.SUPABASE_URL || 'https://bgatlgloylpafniscmym.supabase.co',
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
    );

    const { data, error } = await supabaseAdmin
      .from('messages')
      .select(`
        *,
        users(childname, parentemail)
      `)
      .order('timestamp', { ascending: false })
      .limit(50);

    if (error) {
      return res.status(500).json({ error: 'Failed to fetch messages' });
    }

    res.json(data || []);
  } catch (error) {
    console.error('Error fetching admin messages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Send message from admin to parent
app.post('/api/admin/messages', async (req, res) => {
  try {
    const supabaseAdmin = createClient(
      process.env.SUPABASE_URL || 'https://bgatlgloylpafniscmym.supabase.co',
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
    );

    const { receiver_id, message, type } = req.body;

    const { data, error } = await supabaseAdmin
      .from('messages')
      .insert([{
        sender_id: null, // Admin
        receiver_id,
        message,
        type: type || 'suggestion',
        is_from_admin: true
      }])
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: 'Failed to send message' });
    }

    res.json({ success: true, data });
  } catch (error) {
    console.error('Error sending admin message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update or create streak
app.post('/api/parent/streak', async (req, res) => {
  try {
    const { child_id } = req.body;

    // Check if streak exists
    const { data: existingStreak, error: fetchError } = await supabase
      .from('streaks')
      .select('*')
      .eq('child_id', child_id)
      .single();

    const now = new Date();
    const today = now.toISOString().split('T')[0];

    if (existingStreak) {
      // Update existing streak
      const lastLoginDate = existingStreak.last_login ? new Date(existingStreak.last_login).toISOString().split('T')[0] : null;
      let newStreak = existingStreak.current_streak;

      if (lastLoginDate !== today) {
        if (lastLoginDate === new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString().split('T')[0]) {
          newStreak += 1; // Consecutive day
        } else {
          newStreak = 1; // Reset streak
        }
      }

      const { data, error } = await supabase
        .from('streaks')
        .update({
          current_streak: newStreak,
          last_login: now.toISOString(),
          total_logins: existingStreak.total_logins + 1
        })
        .eq('child_id', child_id)
        .select()
        .single();

      if (error) {
        return res.status(500).json({ error: 'Failed to update streak' });
      }

      res.json(data);
    } else {
      // Create new streak
      const { data, error } = await supabase
        .from('streaks')
        .insert([{
          child_id,
          current_streak: 1,
          last_login: now.toISOString(),
          total_logins: 1
        }])
        .select()
        .single();

      if (error) {
        return res.status(500).json({ error: 'Failed to create streak' });
      }

      res.json(data);
    }
  } catch (error) {
    console.error('Error updating streak:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Track activity
app.post('/api/parent/activities', async (req, res) => {
  try {
    const { child_id, activity, duration_minutes } = req.body;

    const { data, error } = await supabase
      .from('activities')
      .insert([{
        child_id,
        activity,
        duration_minutes: duration_minutes || 0
      }])
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: 'Failed to track activity' });
    }

    res.json({ success: true, data });
  } catch (error) {
    console.error('Error tracking activity:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 KidSpace Backend API running on port ${PORT}`);
  console.log(`📊 Supabase connected: ${process.env.SUPABASE_URL ? 'Yes' : 'No'}`);
});

module.exports = app;
