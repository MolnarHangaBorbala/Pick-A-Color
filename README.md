# Szín alapján képek keresése – Pick-A-Color

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
- ***Első fejlesztés után***
- **Témaválasztás** A jobb felső sarokban lévő gombra kattintva a Világos/Sötét témák között lehet váltani. Az ablak bezárása után is megmarad a választott téma (localStorage).
- ***Második fejlesztés után***
- **Telefon** Telefonon a navbar megjelenése és kinézete optimalizálva.

---

## Használat

1. Nyisd meg a `Color.html` fájlt vagy a [`Netlify`](https://pick-a-color-project.netlify.app) oldalt egy modern böngészőben.
2. Válassz egy színt a színválasztóból.
3. A kiválasztott szín neve megjelenik automatikusan.
4. Kattints a "🔍" gombra a kereséshez.
5. A loader megjelenik, majd kis késleltetéssel betöltődnek a színhez illeszkedő képek.

---

## API kulcsok

Az alkalmazás működéséhez két API kulcsra van szükséged:

- [Unsplash API](https://unsplash.com/developers)
- [Pexels API](https://www.pexels.com/api/)

Illeszd be a saját kulcsaidat a `jsColor.js` fájlban a `unsplashKey` és `pexelsApiKey` változókba.

---

## Műszaki részletek

- **Színnév meghatározás:** [`ntc.js`](https://github.com/insomnious0x01/ntc-js/blob/master/ntc.js) (Name That Color)
- **Stílus:** CSS és Bootstrap 4.6.2 alapú megvalósítás, animált hover-hatásokkal, interaktív keresőgombbal és témaválasztó gombbal.
- **Logó:** A ball felső sarokban található logót a [`Logo`](https://logo.com/) oldalán készítettem el.
- **Kereső ikon:** Flaticon: [`ICON`](https://www.flaticon.com/free-icon/search_3686896?term=search&page=1&position=16&origin=tag&related_id=3686896)
- **Font:** [`Groovetastic`](https://www.dafont.com/groovetastic.font)
- **Favicon:** [`Faicon.io`](https://favicon.io/emoji-favicons/artist-palette/) Emoji Favicons > artist palette

---

## Jövőbeli fejlesztések

-    Képek színösszetételének elemzése HTML5 canvas segítségével.
-    Pontosabb színillesztés CIELAB (LAB) színtér és ΔE 1976 távolságmérés alapján (jelenleg nem aktív).
-    Automatikus kép szűrés a kiválasztott szín LAB színtérbeli távolsága (ΔE) alapján.
-    Teljesítmény- és sebességoptimalizálás (például képek méretének csökkentése elemzés előtt).
-    Drag-and-drop képkeresés vagy pipetta eszköz integrálása.
-    Automatikus színazonosítás pixelalapú kép elemzéssel.
-    Felhasználói felület továbbfejlesztése.


-    Mentés funkció (pl. kedvenc színek/képek localStorage-ben).
-    Véletlenszerű szín gomb.
-    Kép mentése vagy letöltése.
-    Színpaletta generálása (pl. hasonló árnyalatok keresése).
-    Animált háttér a kiválasztott szín alapján.
-    Telefonos felület további szépítése


-    A kulcsokat backendből kiszolgálni (proxy), ne frontendben szerepeljenek publikusan -- Biztonsági kockázat

---

## Képernyőkép
### Első megalósítás
![image](https://github.com/user-attachments/assets/a2ed5a95-0c51-4474-9649-6fe22c24d7e1)

### Első fejlesztés után
![image](https://github.com/user-attachments/assets/fb9bf8ed-234c-4520-a7f6-5eba2ce84f94)

### Második fejlesztés után

#### Sötét
![image](https://github.com/user-attachments/assets/cba3f5e2-c652-4a2c-ac22-2e7a05d41087)

#### Világos
![V3-light](https://github.com/user-attachments/assets/6a630e4d-2884-4176-ad41-651a065c4d3a)

#### Favicon 
![V3-favicon](https://github.com/user-attachments/assets/bd067e60-e0a6-4b13-bb96-7b76df208d66)

#### Telefon
![V3-dark-phone](https://github.com/user-attachments/assets/29c9f0b5-632b-40d9-8ddb-0bfded13de24)

---


Configuration for pick-a-color-project

      pick-a-color-project.netlify.app
      Deploys from GitHub.
      Created at 2025.06.09 3:57 AM
      Last update at 2025.06.14 2:28 PM

---
---
# Első fejlesztés

- UI + funkciók

# Második fejlesztés

- 5 kép helyett 12
- Telefonon normálisan néz ki és használhatóbb lett
- Favicon beállítva
- UI színek módosítása

