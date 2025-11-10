# KidSpace - Educational Platform for Kids

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-2.38+-blue.svg)](https://supabase.com/)

KidSpace is a comprehensive educational platform designed specifically for children, featuring interactive learning activities, parental oversight, and administrative management tools. Built with modern web technologies and powered by Supabase for backend services.

## 🌟 Features

### For Children
- **Interactive Learning Activities**: Drawing, e-learning modules, educational games
- **AI-Powered Storytelling**: Generate personalized stories based on child preferences
- **Video Gallery**: Educational video content
- **Progress Tracking**: Activity logging and streak tracking
- **Child-Friendly Interface**: Intuitive and engaging UI designed for young users

### For Parents
- **Comprehensive Dashboard**: Monitor child's activities, streaks, and progress
- **Real-time Communication**: Direct messaging with administrators
- **Activity Reports**: Detailed insights into child's learning journey
- **Feedback System**: Provide feedback and suggestions
- **Daily Plans**: View and track daily learning plans

### For Administrators
- **User Management**: Complete oversight of all users and their data
- **Analytics Dashboard**: Real-time analytics and engagement metrics
- **Communication Hub**: Send suggestions and receive feedback from parents
- **Activity Monitoring**: Track user activities and system usage
- **Content Management**: Manage educational content and plans

## 🏗️ Architecture

### Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Real-time Features**: Supabase Realtime
- **Security**: Helmet, CORS, Rate Limiting, bcrypt

### Project Structure
```
kidspace/
├── backend/                 # Express.js API server
│   ├── server.js           # Main server file with all API endpoints
│   ├── package.json        # Backend dependencies and scripts
│   ├── config.js           # Supabase configuration (deprecated - now uses .env)
│   └── *.sql               # Database migration scripts
├── frontend/                # Static web application
│   ├── *.html              # HTML pages for different sections
│   ├── styles.css          # Global styles and responsive design
│   ├── script.js           # Frontend logic and API integration
│   ├── config.js           # Supabase client configuration
│   └── package.json        # Development dependencies
├── .env                     # Environment variables (local development)
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── supabase-setup.sql      # Complete database schema
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git
- Supabase account

### 1. Clone and Setup
```bash
# Clone the repository
git clone https://github.com/Rdvprasad36/a..a...
cd kidspace

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
cd ..
```

### 2. Environment Configuration
```bash
# Copy environment template
cp .env.example .env

# Edit .env with your Supabase credentials
# SUPABASE_URL=your_supabase_project_url
# SUPABASE_ANON_KEY=your_supabase_anon_key
# SUPABASE_SERVICE_ROLE_KEY=your_service_role_key (for admin operations)
# PORT=3001
```

### 3. Database Setup
1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Go to SQL Editor in your Supabase dashboard
3. Copy and paste the entire contents of `supabase-setup.sql`
4. Execute the SQL commands to create all tables and policies

### 4. Start the Application
```bash
# Terminal 1: Start backend server
cd backend
npm run dev

# Terminal 2: Start frontend server
cd ../frontend
npm run dev
```

### 5. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Health Check**: http://localhost:3001/api/health

## 📊 API Documentation

### Core Endpoints

#### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/validate-parent-password` - Parent password validation

#### User Management
- `GET /api/users/:id` - Get user profile
- `GET /api/admin/users` - Get all users (admin only)

#### Activity Tracking
- `GET /api/activities/:userId` - Get user activities
- `POST /api/activities` - Track new activity
- `GET /api/admin/activities` - Get all activities (admin only)

#### Analytics
- `GET /api/admin/chart-data` - Get engagement chart data
- `GET /api/admin/analytics` - Get comprehensive analytics

#### Parent Dashboard
- `GET /api/parent/details/:userId` - Get parent/child details
- `GET /api/parent/streak/:childId` - Get child login streak
- `GET /api/parent/activities/:childId` - Get recent activities
- `GET /api/parent/messages/:userId` - Get messages
- `POST /api/parent/messages` - Send message to admin
- `GET /api/parent/plan/:childId` - Get daily plan
- `GET /api/parent/feedback/:parentId` - Get feedback

#### Admin Dashboard
- `GET /api/admin/messages` - Get all parent messages
- `POST /api/admin/messages` - Send message to parent

### Response Format
All API responses follow a consistent format:
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

## 🔧 Configuration

### Environment Variables
| Variable | Description | Required |
|----------|-------------|----------|
| `SUPABASE_URL` | Your Supabase project URL | Yes |
| `SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (admin operations) | No |
| `PORT` | Backend server port | No (default: 3001) |

### Security Features
- **Rate Limiting**: 1000 requests per 15 minutes per IP
- **CORS**: Configured for localhost development
- **Helmet**: Security headers
- **bcrypt**: Password hashing
- **Input Validation**: Server-side validation for all inputs

## 🎨 Frontend Pages

- `index.html` - Landing page
- `login.html` - User authentication
- `home.html` - Child's main dashboard
- `parent-dashboard.html` - Parent monitoring interface
- `admin-dashboard.html` - Administrative control panel
- `drawing.html` - Drawing activity
- `elearning.html` - Educational content
- `games.html` - Educational games
- `ai-story.html` - AI-powered storytelling
- `video-gallery.html` - Educational videos

## 🗄️ Database Schema

### Core Tables
- **users**: User profiles and authentication
- **user_activities**: Activity tracking and analytics
- **messages**: Parent-admin communication
- **streaks**: Login streak tracking
- **activities**: Detailed activity logs
- **plans**: Daily learning plans
- **feedback**: Parent feedback system

### Key Relationships
- Users can have multiple activities, messages, and feedback entries
- Activities are linked to specific users
- Messages can be from parents to admin or admin to parents
- Plans are assigned to specific children

## 🧪 Testing

### Manual Testing Checklist
- [ ] User registration and login
- [ ] Activity tracking on page visits
- [ ] Parent dashboard data loading
- [ ] Admin dashboard analytics
- [ ] Message sending between parents and admin
- [ ] Streak calculation and display
- [ ] Responsive design on mobile devices

### API Testing
```bash
# Test health endpoint
curl http://localhost:3001/api/health

# Test user creation (replace with actual data)
curl -X POST http://localhost:3001/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## 🚀 Deployment

### Backend Deployment
```bash
# Build for production
cd backend
npm run build

# Deploy to your preferred hosting (Heroku, Railway, etc.)
# Make sure to set environment variables in production
```

### Frontend Deployment
```bash
# Build optimized version
cd frontend
npm run build

# Deploy static files to CDN or hosting service
```

### Environment Setup for Production
- Set `NODE_ENV=production`
- Configure production Supabase keys
- Set up proper CORS origins
- Enable HTTPS
- Configure rate limiting based on your needs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow ES6+ JavaScript standards
- Use meaningful variable and function names
- Add comments for complex logic
- Test all new features thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Supabase](https://supabase.com/) for the amazing backend-as-a-service platform
- [Express.js](https://expressjs.com/) for the robust web framework
- [Node.js](https://nodejs.org/) for the runtime environment
- All contributors and the open-source community

## 📞 Support

For support, please:
1. Check the [Issues](https://github.com/Rdvprasad36/a..a.../issues) page
2. Create a new issue with detailed description
3. Include error messages, browser console logs, and steps to reproduce

## 🗺️ Roadmap

### Upcoming Features
- [ ] Mobile app development (React Native)
- [ ] Advanced analytics and reporting
- [ ] Multi-language support
- [ ] Offline learning capabilities
- [ ] Integration with popular educational platforms
- [ ] Advanced AI features for personalized learning
- [ ] Parent-teacher communication portal

### Known Issues
- [ ] Admin authentication needs refinement
- [ ] Some mobile responsiveness improvements needed
- [ ] Video gallery needs more content management features

---

**Made with ❤️ for children's education and parental peace of mind**
