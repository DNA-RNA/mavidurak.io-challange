# mavidurak.io-challange
Mavidurak.io mentörlük challange ' ı  C# ile geliştirilen stok takip otomasyonu 
## **Kullanılan Teknolojiler** : 
C# 'da CRUD işlemleri ve veritabanı bağlantısı sağlanmıştır.
Arayüzde Vue.js kullanılmıştır.
Veritabanı Mysql ile oluşturulmuştur.
.Net Framework kullanılmış olup katmanlı mimari ile CRUD işlemleri yapılmıştır. Mysql bağlantısı yapıldıktan sonra WebApı ile controller oluşturularak backend tarafı tamamlanmıştır.


### **Veritabanı Diyagramı**:

![veritabani](https://user-images.githubusercontent.com/77885953/149618507-7404bd74-e3e7-49f4-aee0-8ec147dc79ad.png)

### Oluşturulan tablolardan yazılan sorgular:
**roles ,user ve user details tablolarını birleştirerek kullanıcıların hangi rolde olduğu sorgusunu yazdık.**
![ss-1](https://user-images.githubusercontent.com/77885953/149619037-9df6d761-026d-4ac3-b63a-45f622306983.png)
**stores tablosunu kullanarak hangi depoda hangi ürünün olduğu sorgusunu yazdık.**
![ss-2](https://user-images.githubusercontent.com/77885953/149619151-16532868-0efd-472d-9639-47bb2e192b9a.png)

### **Sınıf Diyagramı**:
![class](https://user-images.githubusercontent.com/77885953/149631609-6865edd6-677d-49f5-af24-56fb7cffe0ef.png)

**Entities Katmanı**: Veritabanındaki tablolara karşılık gelen classları tuttuğumuz katman. 
**DataAccess Katmanı**: Sql bağlantılarının ve CRUD işlemlerinin yapıldığı katman.
**Core Katman**: Entities ve DataAccess katmanlarındaki tekrar eden kod bloklarını ortak katmanda topladığımız katman.
**Bussiness Katmanı**: Ekleme,silme,güncelleme işlemlerini yaparken yapılmasını istediğimiz iş kodlarını tuttuğumuz katman.Örneğin Alış fiyatı satış fiyatından büyük olmamsı için ProductValidator.cs classını oluşturup gerekli kodları yazdık.
**Web API**: Controller ile ekleme,listeleme,silme,güncelleme kodlarını yazdık.
