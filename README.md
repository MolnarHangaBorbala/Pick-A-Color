# Color Picker Site – Pick-A-Color

[![Live on Netlify](https://img.shields.io/badge/Live_on-Netlify-brightgreen?style=for-the-badge&logo=netlify&logoColor=white)](https://pick-a-color-project.netlify.app)

Egy egyszerű, de látványos webalkalmazás, amely lehetővé teszi, hogy kiválassz egy tetszőleges színt, majd az alapján automatikusan képeket keressen az Unsplash vagy Pexels oldalról. A cél, hogy a megjelenített képek színvilága harmonizáljon a kiválasztott árnyalattal.

**Élő demó:**  
[https://pick-a-color-project.netlify.app](https://pick-a-color-project.netlify.app)

---

## Fő funkciók

- **Színválasztó (color input):** A felhasználó kiválaszthat egy színt HTML5 színpalettából.
- **Valós idejű színnév megjelenítés:** A kiválasztott színhez tartozó elnevezés azonnal frissül (ntc.js használatával).
- **Képkeresés az Unsplash API-n keresztül**, színnév alapú kulcsszavakkal.
- **API fallback:** Ha az Unsplash napi limitje elérte a maximumot, automatikusan átvált a Pexels API-ra.
- **Loader animáció:** A keresés alatt egy forgó négyzet jelenik meg.
- **Képek kiemelése animációval és hover-effekttel.**
- **Reszponzív UI.**

---

## Használat

1. Nyisd meg a `Color.html` fájlt egy modern böngészőben.
2. Válassz egy színt a színválasztóból.
3. A kiválasztott szín neve megjelenik automatikusan.
4. Kattints a "Select a color first"/"Tap to search images" gombra.
5. A loader megjelenik, majd kis késleltetéssel betöltődnek a színhez illeszkedő képek.

---

## 🔐 API kulcsok

Az alkalmazás működéséhez két API kulcsra van szükséged:

- [Unsplash API](https://unsplash.com/developers)
- [Pexels API](https://www.pexels.com/api/)

Illeszd be a saját kulcsaidat a `jsColor.js` fájlban a `unsplashKey` és `pexelsApiKey` változókba.

---

## Műszaki részletek

- **Színnév meghatározás:** [`ntc.js`](https://github.com/insomnious0x01/ntc-js/blob/master/ntc.js) (Name That Color)
- **Stílus:** Tiszta CSS alapú megvalósítás, animált hover-hatásokkal és interaktív keresőgombbal.

---

##   Jövőbeli fejlesztések

-    Színanalízis: a `canvas` elem és JavaScript segítségével lehetőség van képek színösszetételének elemzésére.
-    Színillesztés tervezett módja: CIELAB (LAB) színtér és ΔE 1976 távolságmérés a pontosabb színazonosításhoz (jelenleg nem aktív).
-    Képek automatikus szűrése a kiválasztott szín LAB színtérbeli távolsága alapján (ΔE).
-    Teljesítményoptimalizálás (pl. kis méretű képek elemzése canvas segítségével).
-    Drag-and-drop képkeresés vagy pipetta eszköz.
-    Automatikus színazonosítás a képek pixelalapú elemzése alapján.
-    Sebességoptimalizálás (például kép méretének csökkentése elemzés előtt).
-    Felhasználói felület továbbfejlesztése.

---

##   Képernyőkép

![image](https://github.com/user-attachments/assets/77452b33-7ca5-44b4-b3e3-0043559d0196)

---
