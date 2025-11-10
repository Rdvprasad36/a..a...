// Supabase Configuration
const SUPABASE_URL = 'https://bgatlgloylpafniscmym.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnYXRsZ2xveWxwYWZuaXNjbXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3Mzc3OTgsImV4cCI6MjA3NzMxMzc5OH0.OCa0a-VtRsngn8KUJ63KkfTbTrWCN2sPdemWMniluGI';

// Initialize Supabase client
const { createClient } = supabase;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
