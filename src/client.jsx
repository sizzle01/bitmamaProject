import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://dpimptewfxxksfykyonw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwaW1wdGV3Znh4a3NmeWt5b253Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTE0NzEzMjIsImV4cCI6MTk2NzA0NzMyMn0.-48M573eFVbMjnN2M_tklQJw9iawX5tmpLcYK8yeNB4',
)
export { supabase }
