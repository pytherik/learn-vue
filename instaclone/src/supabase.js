import {createClient} from "@supabase/supabase-js";

const { VITE_PROJECT_URL, VITE_API_KEY } = import.meta.env;

const supabaseUrl = VITE_PROJECT_URL;
const supabaseKey = VITE_API_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
