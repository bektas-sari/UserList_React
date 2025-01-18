# Kullanıcı Listesi Uygulaması (Deneme Amaçlı Geliştirilmiştir)

Bu proje, **React** kullanılarak geliştirilmiş bir kullanıcı listesi uygulamasıdır. Proje, aşağıdaki temel özellikleri içerir:

## Özellikler
1. **Kullanıcıları Listeleme**:
   - Bir API’den (Örneğin: JSONPlaceholder) kullanıcı bilgileri çekilir ve liste halinde görüntülenir.

2. **Arama Yapma**:
   - Kullanıcı isimlerine göre filtreleme yapılabilir.

3. **Yeni Kullanıcı Ekleme**:
   - Bir form aracılığıyla listeye yeni kullanıcı eklenebilir.

4. **Kullanıcı Silme**:
   - Listeden istenilen kullanıcı silinebilir.

5. **Detay Sayfası**:
   - Her bir kullanıcının detayları ayrı bir sayfada görüntülenir.

## Projeyi Çalıştırma

### 1. Gereksinimler
- Node.js ve npm bilgisayarınıza yüklenmiş olmalıdır.
- React Routerı’n kurulu olduğundan emin olun.

### 2. Kurulum
Proje dosyalarını klonladıktan sonra aşağıdaki adımları izleyin:

```bash
# Proje klasörünü klonlayın
git clone <repository-url>

# Proje klasörününe girin
cd user-list

# Gerekli paketleri yükleyin
npm install

# Projeyi çalıştırın
npm start
```

### 3. Kullanım
Uygulama tarayıcıda varsayılan olarak `http://localhost:3000` adresinde çalışır.

## Kullanılan Teknolojiler
- **React**: Kullanıcı arayüzü geliştirme
- **React Router**: Sayfa yönlendirmeleri
- **CSS**: Tasarım ve stil
- **JSONPlaceholder**: API verileri

## Proje Yapısı
```
user-list/
|— src/
   |— components/  # Bileşen dosyaları
   |— App.js       # Ana uygulama bileşeni
   |— App.css      # Genel stil dosyası
|— package.json  # Bağımlılıklar ve betikler
```

## Örnek Görüntüler

### Ana Sayfa
- Kullanıcı listesi
- Arama kutusu

### Detay Sayfası
- Kullanıcı detayları
- "Listeye Dön" butonu

## Lisans
Bu proje MIT Lisansı altında sunulmaktadır.
