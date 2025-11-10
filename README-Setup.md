# KidSpace Setup Guide

## Project Structure
```
kidspace/
├── backend/          # Express.js API server
│   ├── server.js     # Main server file
│   ├── package.json  # Backend dependencies
│   ├── .env         # Environment variables
│   └── config.js    # Supabase configuration
├── frontend/         # Static HTML/CSS/JS files
│   ├── *.html       # HTML pages
│   ├── styles.css   # Styles
│   ├── script.js    # Frontend logic
│   └── package.json # Frontend dev dependencies
└── supabase-setup.sql # Database schema
```

## Backend Setup

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Environment Variables
The `.env` file is already configured with your Supabase credentials:
- SUPABASE_URL: https://bgatlgloylpafniscmym.supabase.co
- SUPABASE_ANON_KEY: [Your key]

### 3. Start Backend Server
```bash
cd backend
npm start
# or for development with auto-reload:
npm run dev
```

The backend will run on `http://localhost:3001`

## Frontend Setup

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Start Frontend Server
```bash
cd frontend
npm start
# or for development:
npm run dev
```

The frontend will run on `http://localhost:3000`

## Database Setup

### 1. Create Supabase Tables
1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Select your project: `bgatlgloylpafniscmym`
3. Go to **SQL Editor**
4. Copy and paste the entire contents of `supabase-setup.sql`
5. Click **Run** to execute

This will create:
- `users` table for user profiles
- `user_sessions` table for session tracking
- `user_activities` table for activity logging
- `admin_logs` table for admin actions

## Testing the Setup

### 1. Test Backend API
Open browser and visit: `http://localhost:3001/api/health`
Should return: `{"status":"OK","message":"KidSpace Backend API is running"}`

### 2. Test Frontend
Open browser and visit: `http://localhost:3000/login.html`
- Try signing up a new user
- Check Supabase dashboard → Table Editor → users table

### 3. Test Admin Dashboard
- Login with admin credentials: `aaavignan@gmail.com` / `Vignan@123`
- Check if user table populates with data from backend

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/users/:id` - Get user profile
- `GET /api/admin/users` - Get all users (admin)
- `GET /api/activities/:userId` - Get user activities
- `POST /api/activities` - Track activity
- `GET /api/admin/analytics` - Get analytics data

## Troubleshooting

### Backend Connection Issues
- Make sure backend server is running on port 3001
- Check `.env` file has correct Supabase credentials
- Check console for error messages

### Frontend Issues
- Make sure frontend server is running on port 3000
- Check browser console for JavaScript errors
- Verify CORS settings allow localhost:3000

### Database Issues
- Verify tables were created in Supabase
- Check Row Level Security (RLS) policies if needed
- Ensure Supabase project is active

## Development Notes

- Frontend makes API calls to `http://localhost:3001/api/*`
- Activity tracking happens automatically on login/signup
- Admin dashboard fetches real-time data from backend
- All authentication goes through Supabase Auth
