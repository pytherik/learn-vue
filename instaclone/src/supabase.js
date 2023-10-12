import {ACCESS_DATA} from "../config";
import {createClient} from "@supabase/supabase-js";


const supabaseUrl = ACCESS_DATA.DB_URL;
const supabaseKey = ACCESS_DATA.DB_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
