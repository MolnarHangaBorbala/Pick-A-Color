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

---

## Használat

1. Nyisd meg a `Color.html` fájlt egy modern böngészőben.
2. Válassz egy színt a színválasztóból.
3. A kiválasztott szín neve megjelenik automatikusan.
4. Kattints a "Select a color first"/"Tap to search images" gombra.
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
- **Stílus:** Tiszta CSS alapú megvalósítás, animált hover-hatásokkal és interaktív keresőgombbal.

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

-    A kulcsokat backendből kiszolgálni (proxy), ne frontendben szerepeljenek publikusan -- Biztonsági kockázat

---

## Képernyőkép

![image](https://github.com/user-attachments/assets/a2ed5a95-0c51-4474-9649-6fe22c24d7e1)

---


Configuration for pick-a-color-project

      pick-a-color-project.netlify.app
      Deploys from GitHub.
      Created at 2025.06.09 3:57 AM
      Last update at 2025.06.09 4:15 AM.

---
---
# Első fejlesztés

UI + funkciók
