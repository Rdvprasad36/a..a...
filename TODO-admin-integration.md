# Admin Dashboard Real Data Integration - Implementation Plan

## Tasks Breakdown

### 1. Enhance Backend Analytics Endpoint (`backend/server.js`)
- [ ] Calculate week-over-week percentage change for total users
- [ ] Calculate day-over-day percentage change for active users
- [ ] Calculate week-over-week percentage change for new signups
- [ ] Add user retention rate calculation (users active in last 7 days / total users)
- [ ] Add average activities per user calculation
- [ ] Add engagement rate calculation (active users / total users)
- [ ] Return trend data alongside counts in JSON response

### 2. Update Frontend User Analytics (`frontend/admin-dashboard.html`)
- [ ] Replace hardcoded trend percentages with dynamic data from API
- [ ] Update stat-value elements to display real trends with proper up/down indicators
- [ ] Add new metric cards for retention rate and engagement rate
- [ ] Handle cases where trend data might be null or zero

### 3. Implement Chart.js for User Engagement
- [ ] Add Chart.js library CDN link to HTML head
- [ ] Create new endpoint `/api/admin/chart-data` for chart data (last 7 days activity)
- [ ] Replace chart placeholder with actual Chart.js canvas element
- [ ] Implement JavaScript to fetch chart data and render line/bar chart
- [ ] Style chart container and add responsive design

### 4. Enhance UI Styling
- [ ] Add more professional icons to metric cards
- [ ] Improve card layouts with better spacing and visual hierarchy
- [ ] Add subtle CSS animations and hover effects
- [ ] Enhance color scheme and typography for better readability

### 5. Testing and Validation
- [ ] Test backend endpoint returns correct trend calculations
- [ ] Verify frontend displays real data correctly
- [ ] Test chart renders properly with sample data
- [ ] Ensure responsive design works on different screen sizes
- [ ] Validate calculations with known data sets
