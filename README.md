# Ask.htm

**“Manitalarınızı şımartacak bir hediye”**

---

## 📖 Proje Tanımı

Ask.htm, sevdiklerine özel, interaktif bir hediye projesidir. Kalbe tıklandığında şifre paneli açılır; belirlenen şifre girildiğinde fotoğraf albümüne yönlendirilir. Albümde varsayılan olarak otuz adet fotoğraf alanı bulunur, bu sayı istek üzerine artırılıp azaltılabilir.

---

## ⚙️ Özellikler

- Kalp ikonu ile şifre paneli tetiklenir.  
- Doğru şifre girildiğinde kullanıcı fotoğraf albümüne yönlendirilir.  
- Albümde **30** adet fotoğraf için alan var; bu alanlar dinamik olarak değiştirilebiliyor.  
- **PHP** ile sunucu kısmı; **HTML**, **CSS**, **JavaScript** ile ön yüz.  
- Şifre, kaynak kodlarda görünebilir; JS tarafındaki şifreleme iptal/çözülebilir.  
- Şu anda PHP tarafında şifrelemeye dair ek güvenlik önlemleri eksik.

---

## 🛠 Kurulum & Kullanım

1. Depoyu klonla ya da indir:  
   ```bash
   git clone https://github.com/Ardaa24/Ask.htm-.git

   Web sunucuna yerleştir (örneğin XAMPP, LAMP, vs.).

2. index.html dosyasından başlayarak siteyi ziyaret et.

3. giris.php dosyasında şifre ile ilgili ayarları yap; JS tarafında da gerekiyorsa şifre kontrolüyle ilgili bölümlere bak.

4. Fotoğraf alanlarını değiştir/çoğalt/azaltmak istiyorsan, HTML/JS dosyalarında ilgili alan sayısını düzenle.

##⚠️ Uyarılar & Güvenlik

Şifre gizliliği: JS dosyaları kullanıcı tarafından görülebileceğinden, kritik şifre bilgilerini burada saklamak güvenli değildir.

PHP kodu üzerinde daha gelişmiş şifreleme / sunucu tarafı doğrulama eklenmeli.

Kişiye özel kullanım için daha sıkı kontroller yapılmalıdır.

##🔧 Teknolojiler & Yapı

HTML / CSS / JavaScript — ön yüz (front-end)

PHP — arka uç (back-end)

Fotoğraf alanları dinamik olarak JS ve/veya PHP ile kontrol ediliyor.

Tasarım ve UI basit, amaca odaklı.

##🚀 Geliştirme Fikirleri

Kullanıcı kaydı / oturum sistemi ekleyerek şifrenin daha güvenli tutulması.

Fotoğraf yükleme özelliği ekleyerek dinamik albüm oluşturma.

Şifreyi sadece sunucu tarafında doğrulama; JS tarafında hiçbir kritik bilgi saklamama.

Mobil uyum ve görsel düzenlemelerin iyileştirilmesi.


## 🗂 Dosya Yapısı
Ask.htm-/
│
├── README.md
├── index.html        → Giriş / Kalp simgesi & şifre paneli
├── giris.php         → Şifre kontrolü / yönlendirme
├── Assets/           → CSS, JS, görseller vb.
├── foto/             → Albümdeki fotoğraflar
└── js/               → JavaScript dosyaları

##📜 Lisans

Bu proje kendimce kodlanmış ve MIT Lisansı ile lisanslanmıştır.

☑️ Umarım sevdiklerine vereceğin hediye hem anlamlı olur hem de güzel çalışır 💌

##<< Görseller >>

![bir](https://github.com/user-attachments/assets/e9b03e58-c53d-4db6-97f4-b0efa8837532)
![iki](https://github.com/user-attachments/assets/74723f04-0648-4b6a-b0a6-6182348f94a6)
![uc](https://github.com/user-attachments/assets/b993b3ac-c2f5-4c64-8011-ecc750c4e8ba)
![dort](https://github.com/user-attachments/assets/f73da016-02ea-4339-973c-485155d20fca)
