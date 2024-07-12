// supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl: string = 'https://gpkeunvnuqyxysufkwro.supabase.co/auth/v1/callback';
const supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdwa2V1bnZudXF5eHlzdWZrd3JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA3NjI5ODUsImV4cCI6MjAzNjMzODk4NX0.kRw3fXZCqQLHC5VDkah0v5p96d_sRiNVi-hKFIdFe_Y';

export const supabase = createClient(supabaseUrl, supabaseKey);
