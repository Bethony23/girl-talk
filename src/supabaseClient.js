import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://apceqpjgpsxsmffgauot.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwY2VxcGpncHN4c21mZmdhdW90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNzUwNDYsImV4cCI6MjA2MDc1MTA0Nn0.PzGeMQgsT9UJiAu_jWG8EkoldFt2I4ISpo2kNpEsma8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
