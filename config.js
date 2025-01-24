const moment= require("moment-timezone")

const config = {
    AutoUpdate          : 'on', // on atau off
    API_KEY             : 'e9ebaae16454479d95c1b2ea11814ed1', // APIKEY ANDA AMBIL DI autoresbot.com
    GEMINI_API_KEY      : 'AIzaSyCEYDnys2Pg2-GrKpwLAvyWH3giMMxCHJQ',
    phone_number_bot    : '628988219165',
    type_connection     : 'pairing', // qr atau pairing
    bot_destination     : 'private', // group , private, both
    name_bot            : 'Xenovia AI',
    owner_name          : 'Feyy',
    owner_number        : '6289601671818',
    owner_website       : 'Xenovia.com',
    version             : '2.0.0',
    rate_limit          : 3000, // 3 detik
    total_limit         : 9999, // limit perhari -  user biasa || kalo premium unlimited
    sticker_packname    : 'Xenovia AI',
    sticker_author      : `Xenovia Infinity`,
    notification        : {
        limit           : 'Hai kak, Limit harian anda sudah habis silakan tunggu besok ya atau berlangganan premium untuk menikmati fitur tanpa limit',
        reset           : 'Dialog berhasil dihapus. Semua percakapan kita telah di-reset dan siap memulai dari awal!',
        ig              : 'kirimkan link instagramnya ya kak',
        fb              : 'kirimkan link facebooknya ya kak',
        tt              : 'kirimkan link tiktoknya ya kak',
        waiting         : 'Hai kak mohon tunggu beberapa saat lagi ya, proses sebelumnya belum selesai',
        qc_help         : 'Tulis textnya ya kak, misal *qc halo*',
        only_owner      : '_❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !_'
        
    },
    success             : {
        hd : 'Ini kak hasil gambarnya, Maaf kalau masih blur',
    },
    error               : {
       FILE_TOO_LARGE : `File terlalu besar. Maksimal ukuran file adalah 99 Mb`,
       THROW          : '_Ada masalah saat terhubung ke server_',
       PLAY_ERROR     : 'Yahh Gagal, Sepertinya ada masalah saat mendowload audio',
       HD_ERROR       : 'Yahh Gagal, Mohon maaf kak, tidak bisa hd in gambar',
       IMAGE_ERROR    : 'Yahh Gagal, Mohon maaf kak, tidak bisa carikan kamu gambar',
       qc             : 'Yah gagal bikin qc nya kak'
    }
}; 

module.exports = config;
