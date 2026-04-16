# Panduan Menghubungkan Expo ke Android Studio (Windows)

Dokumen ini menjelaskan cara menyiapkan lingkungan Android di komputer Anda untuk menjalankan aplikasi **intro-app** menggunakan Emulator Android Studio.

## 1. Persiapan Software (Instalasi)

Pastikan Anda telah menginstal software berikut:
- **Android Studio**: [Download di sini](https://developer.android.com/studio)
- **Java Development Kit (JDK)**: Disarankan versi 17 (bisa diunduh via Android Studio atau lgsg dari Oracle/Adoptium).

## 2. Konfigurasi Android SDK di Android Studio

Setelah menginstal Android Studio, buka aplikasinya:
1. Buka **Settings** (atau `More Actions` > `SDK Manager`).
2. Masuk ke **Languages & Frameworks** > **Android SDK**.
3. Di tab **SDK Platforms**, centang versi Android terbaru (misalnya Android 14.0 atau 15.0).
4. Di tab **SDK Tools**, pastikan item berikut tercentang:
   - Android SDK Build-Tools
   - Android Emulator
   - Android SDK Platform-Tools
   - Intel x86 Emulator Accelerator (HAXM) — *jika komputer Anda menggunakan Intel*.
5. Klik **Apply** untuk menginstal.

## 3. Mengatur Environment Variables (PENTING)

Expo perlu tahu di mana letak SDK Android Anda berada.
1. Cari "Edit the system environment variables" di menu Start Windows.
2. Klik **Environment Variables**.
3. Di bagian **User variables**, klik **New**:
   - Variable name: `ANDROID_HOME`
   - Variable value: `%LOCALAPPDATA%\Android\Sdk` (Ini path default, pastikan folder tersebut ada).
4. Di bagian **System variables**, cari variable bernama **Path**, klik **Edit**, lalu klik **New** dan tambahkan path berikut:
   - `%LOCALAPPDATA%\Android\Sdk\platform-tools`
5. Klik **OK** di semua jendela.

## 4. Membuat Emulator (Android Virtual Device)

1. Di Android Studio, klik **More Actions** > **Virtual Device Manager**.
2. Klik **Create Device**.
3. Pilih perangkat (misal: Pixel 7) lalu klik **Next**.
4. Pilih "System Image" (misal: VanillaIceCream / API 35) dan download jika belum ada.
5. Klik **Finish**.
6. Klik tombol **Play** (Segitiga biru) untuk menjalankan Emulator.

## 5. Menjalankan Program dari Terminal

Setelah Emulator menyala, buka terminal di folder `c:\Users\ASUS\OneDrive\Documents\P4\intro-app`:

1. Jalankan server Expo:
   ```bash
   npx expo start
   ```
2. Setelah muncul daftar opsi di terminal, tekan tombol **`a`** pada keyboard Anda.
3. Expo akan mencoba mendeteksi Emulator dan menginstal aplikasi **Expo Go** secara otomatis di dalamnya.
4. Tunggu proses bundling selesai, dan aplikasi Anda akan tampil di Emulator!

## 6. Tips & Troubleshooting

- **Gagal mendeteksi SDK**: Restart terminal atau command prompt setelah Anda mengatur Environment Variables agar perubahannya terbaca.
- **Koneksi ke HP Fisik**: Jika ingin menggunakan HP asli, aktifkan **Developer Options** dan **USB Debugging** di HP Anda, sambungkan dengan kabel data, lalu tekan `a`.
- **Expo Go**: Pastikan Emulator memiliki akses internet untuk mengunduh runtime Expo Go pertama kali.

---
*Dibuat untuk proyek: intro-app*
