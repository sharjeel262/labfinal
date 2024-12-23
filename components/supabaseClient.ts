import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ollilmemkzbtagflfvqm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sbGlsbWVta3pidGFnZmxmdnFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5NTE4NjEsImV4cCI6MjA1MDUyNzg2MX0.wxL8YKGu0cTRKdDihnA68zPDkGtzOusszoAE3wzo4Vc';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
