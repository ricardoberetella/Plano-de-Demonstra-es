import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iwwmfdnehzecxpxnnftc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3d21mZG5laHplY3hweG5uZnRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3OTU5NzksImV4cCI6MjA4NTM3MTk3OX0.qRraMNP5v-Cqf6hHmTRQMQQfmsTziBG3vi7nRWyBYew';

export const supabase = createClient(supabaseUrl, supabaseKey);
