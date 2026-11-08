// supabase-config.js
// การตั้งค่าการเชื่อมต่อ Supabase สำหรับ Daily Log App

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://alyifbjuugctlqiwcrny.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_79rKUSpeFSZbPtUpEPtiEw_t_saz9Hk';

// สร้าง Supabase Client สำหรับนำไปใช้ในหน้าต่างๆ ของเว็บแอป
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

console.log("Supabase Connected Successfully! ✨");
