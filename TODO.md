# TODO: Parent Dashboard Enhancements

## Database Schema Updates
- [x] Update supabase-setup.sql to create new tables: messages, streaks, activities, plans, feedback

## Backend Updates
- [x] Update backend/server.js to add API endpoints for fetching/sending messages, plans, feedback, streaks, activities

## Frontend Updates
- [x] Update frontend/parent-dashboard.html to add new sections: Parent/Child Details, Child Streak, Recent Activity, Suggestions from Admin, Suggestion Box (parent to admin), Plan Section, Feedback Section
- [x] Update frontend/script.js to add functions for data fetching (user details, streak, activities, messages, plans, feedback) and sending messages (parent to admin)
- [ ] Update frontend/styles.css to add professional styling for new sections (cards, buttons, modals)
- [ ] Update frontend/admin-dashboard.html to add sections for displaying messages from parents and sending suggestions to parents

## Testing and Verification
- [ ] Run the app and test messaging functionality (parent to admin and admin to parent)
- [ ] Verify data pulls from current Supabase (e.g., existing user details)
- [ ] Ensure professional UI and responsiveness on different devices
