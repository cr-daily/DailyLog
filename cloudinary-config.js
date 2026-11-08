// cloudinary-config.js
// การตั้งค่าและฟังก์ชันอัปโหลดรูปภาพไปยัง Cloudinary สำหรับ Daily Log App

const CLOUDINARY_CLOUD_NAME = 'dp6k1rwj';
const CLOUDINARY_UPLOAD_PRESET = 'DailyLog'; // Unsigned Preset ที่คุณสร้างไว้

/**
 * ฟังก์ชันสำหรับอัปโหลดรูปภาพไปยัง Cloudinary
 * @param {File} file - ไฟล์รูปภาพจาก input type="file"
 * @returns {Promise<string|null>} - คืนค่า URL ของรูปภาพที่อัปโหลดสำเร็จ หรือ null ถ้าผิดพลาด
 */
async function uploadToCloudinary(file) {
    if (!file) {
        alert("กรุณาเลือกไฟล์รูปภาพก่อนอัปโหลด!");
        return null;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        
        if (data.secure_url) {
            console.log("อัปโหลดรูปภาพสำเร็จ:", data.secure_url);
            return data.secure_url; // URL รูปภาพจริงที่จะนำไปใช้แสดงผลหรือเก็บใน Supabase
        } else {
            console.error("Cloudinary Error:", data);
            alert("อัปโหลดรูปภาพไม่สำเร็จ: " + (data.error?.message || 'Unknown error'));
            return null;
        }
    } catch (error) {
        console.error("Network Error:", error);
        alert("เกิดข้อผิดพลาดในการเชื่อมต่อกับ Cloudinary");
        return null;
    }
}
