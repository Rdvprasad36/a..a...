-- Add parent_dashboard_code column to existing users table
ALTER TABLE users ADD COLUMN IF NOT EXISTS parent_dashboard_code TEXT DEFAULT '1234';

-- Update all existing users to have parent_dashboard_code = '1234'
UPDATE users SET parent_dashboard_code = '1234' WHERE parent_dashboard_code IS NULL OR parent_dashboard_code = '';
