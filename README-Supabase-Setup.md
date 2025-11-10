# Supabase Setup Guide for KidSpace

This guide will walk you through setting up Supabase for the KidSpace application.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Fill in your project details:
   - **Name**: KidSpace (or any name you prefer)
   - **Database Password**: Choose a strong password
   - **Region**: Select the region closest to your users
5. Click "Create new project"
6. Wait for the project to be fully initialized (this may take a few minutes)

## Step 2: Get Your API Keys

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL**: `https://your-project-id.supabase.co`
   - **anon/public key**: A long string starting with `eyJ...`

## Step 3: Configure Your Application

1. Open `config.js` in your project
2. Replace the placeholder values:

```javascript
const SUPABASE_URL = 'https://your-project-id.supabase.co'; // Your actual project URL
const SUPABASE_ANON_KEY = 'your-anon-key-here'; // Your actual anon key
```

## Step 4: Set Up Database Tables

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy and paste the entire contents of `supabase-setup.sql`
3. Click **Run** to execute the SQL commands

This will create:
- `users` table for storing user profiles
- `user_activities` table for tracking user activities
- Row Level Security policies for data protection
- Indexes for better performance

## Step 5: Configure Authentication

1. In your Supabase dashboard, go to **Authentication** → **Settings**
2. Under **Site URL**, add your application's URL (e.g., `http://localhost:3000` for local development)
3. Under **Redirect URLs**, add your login page URL if needed

## Step 6: Test the Integration

1. Open your application in a web browser
2. Try signing up a new user
3. Check your Supabase dashboard:
   - Go to **Table Editor** → **users** to see if the user was created
   - Go to **Table Editor** → **user_activities** to see signup activity

## Step 7: Set Up Admin Access (Optional)

For admin dashboard access, you can either:
1. Create an admin user through the signup process and manually update their role in Supabase
2. Or modify the admin login logic to check against a separate admin table

## Troubleshooting

### Common Issues:

1. **"Failed to fetch" errors**: Check your internet connection and Supabase project status
2. **Authentication errors**: Verify your API keys are correct in `config.js`
3. **Database errors**: Ensure the tables were created successfully in Step 4
4. **CORS errors**: Make sure your site URL is configured in Authentication settings

### Checking Logs:

- Go to **Reports** → **API** in your Supabase dashboard to see API request logs
- Check browser console for JavaScript errors

## Security Notes

- Never commit your real API keys to version control
- Use environment variables in production
- The current setup uses Row Level Security to ensure users can only access their own data
- Admin functionality should be secured separately

## Next Steps

After setup is complete, you can:
- Add more activity tracking throughout the app
- Implement real analytics in the admin dashboard
- Add password reset functionality
- Set up email confirmations for new signups

For more information, visit the [Supabase Documentation](https://supabase.com/docs).
