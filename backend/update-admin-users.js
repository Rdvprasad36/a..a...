const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

async function updateAdminUsersEndpoint() {
  const supabase = createClient(
    process.env.SUPABASE_URL || 'https://bgatlgloylpafniscmym.supabase.co',
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
  );

  try {
    // Test the admin users endpoint
    const { data, error } = await supabase
      .from('users')
      .select('id, childname, age, grade, parentemail, photo, signupdate, created_at, updated_at, parent_dashboard_code')
      .order('signupdate', { ascending: false });

    if (error) {
      console.error('Error fetching users:', error);
    } else {
      console.log('Users fetched successfully:', data.length, 'users');
      console.log('Sample user:', data[0]);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

updateAdminUsersEndpoint();
