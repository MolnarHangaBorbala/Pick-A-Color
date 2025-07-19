# Szín alapján képek keresése – Pick-A-Color

[![Live on Netlify](https://img.shields.io/badge/Live_on-Netlify-brightgreen?style=for-the-badge&logo=netlify&logoColor=white)](https://pick-a-color-project.netlify.app)

Egy egyszerű, de látványos webalkalmazás, amely lehetővé teszi, hogy kiválassz egy tetszőleges színt, majd az alapján automatikusan képeket keressen az Unsplash, Pexels vagy Pixabay oldalról. A cél, hogy a megjelenített képek színvilága harmonizáljon a kiválasztott árnyalattal.

**Élő demó:**  
[https://pick-a-color-project.netlify.app](https://pick-a-color-project.netlify.app)

---

## Fő funkciók

- **Színválasztó (color input):** A felhasználó kiválaszthat egy színt HTML5 színpalettából.
- **Valós idejű színnév megjelenítés:** A kiválasztott színhez tartozó elnevezés azonnal frissül (ntc.js használatával).
- **Képkeresés az Unsplash API-n keresztül**, színnév alapú kulcsszavakkal.
- **API fallback:** Ha az Unsplash napi limitje elérte a maximumot, automatikusan átvált a Pexels API-ra, majd ha az is elérte a maximumot akkor a Pixabay API-ra.
- **Loader animáció:** A keresés alatt egy forgó négyzet jelenik meg.
- **Képek kiemelése animációval és hover-effekttel.**
- **Reszponzív UI.**
- **Témaválasztás** A jobb felső sarokban lévő gombra kattintva a (Sötét/Világos) témák között lehet váltani. Az ablak bezárása után is megmarad a választott téma (localStorage).
- **Telefonon** a navbar megjelenése és kinézete optimalizálva.
- **Menü gomb** elhelyezése

<details>
<summary><strong>Pipetta eszköz támogatás</strong> (<a href="https://developer.chrome.com/docs/capabilities/web-apis/eyedropper">EyeDropper API</a>)</summary>

| Böngésző | Verzió | Támogatás |
|----------|--------|-----------|
| ![Chrome](https://img.shields.io/badge/Chrome-95%2B-brightgreen?logo=google-chrome&logoColor=white) | 95+ | ✅ |
| ![Edge](https://img.shields.io/badge/Edge-95%2B-brightgreen?logo=microsoft-edge&logoColor=white) | 95+ | ✅ |
| ![Firefox](https://img.shields.io/badge/Firefox-Nem%20támogatott-red?logo=firefox-browser&logoColor=white) | – | ❌ |
| ![Safari](https://img.shields.io/badge/Safari-Nem%20támogatott-red?logo=safari&logoColor=white) | – | ❌ |

</details>


---

## Használat
      
1. Nyisd meg az `index.html` fájlt vagy a [`Netlify`](https://pick-a-color-project.netlify.app) oldalt egy modern böngészőben.
2. Válassz egy színt a színválasztóból.
3. A kiválasztott szín neve megjelenik automatikusan.
4. Kattints a "🔍" gombra a kereséshez.
5. A loader megjelenik, majd kis késleltetéssel betöltődnek a színhez illeszkedő képek.
      
### + Pipetta használata
      
1. Nyisd meg a menüt a képernyő jobb felső sarkában.
2. Kattints a 💉 ikonra.
3. Válassz egy pixelt a képernyőn.
4. Nyisd meg újra a menüt.
5. Kattints a pipetta melletti színes mezőre a színkód (HEX / RGB / HSL) másolásához.
6. Kattints a színkódra a formátumok közötti váltáshoz.

---

## API kulcsok

Az alkalmazás működéséhez két API kulcsra van szükséged:

- [Unsplash API](https://unsplash.com/developers)
- [Pexels API](https://www.pexels.com/api/)
- [Pixabay API](https://pixabay.com/api/docs/)

Illeszd be a saját kulcsaidat a `jsColor.js` fájlban a `unsplashKey` és `pexelsApiKey` változókba.

---

## Műszaki részletek

<details>
      
- **Színnév meghatározás:** [`ntc.js`](https://github.com/insomnious0x01/ntc-js/blob/master/ntc.js) (Name That Color)
- **Stílus:** CSS és Bootstrap 4.6.2 alapú megvalósítás, animált hover-hatásokkal, interaktív keresőgombbal és témaválasztó gombbal.
- **Logó:** A bal felső sarokban található logót a [`Logo`](https://logo.com/) oldalán készítettem el.
- **Kereső ikon:** Flaticon: [`ICON`](https://www.flaticon.com/free-icon/search_3686896?term=search&page=1&position=16&origin=tag&related_id=3686896) Világos: #ecca2f  Sötét: #9ba7f3
- **Font:** [`Groovetastic`](https://www.dafont.com/groovetastic.font)
- **Favicon:** [`Favicon.io`](https://favicon.io/emoji-favicons/artist-palette/) Emoji Favicons > artist palette
- **Menü ikon:** [`Flaticon`](https://www.flaticon.com/free-icon/menu_660376?term=menu&page=1&position=48&origin=tag&related_id=660376) Világos: #ecca2f  Sötét: #9ba7f3
- **Pipetta ikon:** [`Flaticon`](https://www.flaticon.com/free-icon/dropper_9210683?term=pipette&page=3&position=84&origin=tag&related_id=9210683) + Szinezés
</details>

<details>
      <summary>Fájl struktúra</summary>

      
</details>

---

## Jövőbeli fejlesztések

-    Képek színösszetételének elemzése HTML5 canvas segítségével.
-    Pontosabb színillesztés CIELAB (LAB) színtér és ΔE 1976 távolságmérés alapján (jelenleg nem aktív).
-    Automatikus kép szűrés a kiválasztott szín LAB színtérbeli távolsága (ΔE) alapján.
-    Teljesítmény- és sebességoptimalizálás (például képek méretének csökkentése elemzés előtt).
-    Drag-and-drop képkeresés ~~vagy pipetta eszköz integrálása.~~
-    Automatikus színazonosítás pixelalapú kép elemzéssel.
-    Felhasználói felület továbbfejlesztése.


-    Mentés funkció (pl. kedvenc színek/képek localStorage-ben).
-    Véletlenszerű szín gomb.
-    Kép letöltése.
-    Színpaletta generálása (pl. hasonló árnyalatok keresése).
-    Animált háttér a kiválasztott szín alapján.
-    Telefonos felület további szépítése


-    A kulcsokat backendből kiszolgálni (proxy), ne frontendben szerepeljenek publikusan -- Biztonsági kockázat

---

## Képernyőképek (verziók fejlődése)

<details>
<summary><strong>Első megvalósítás</strong></summary>
      
<img src="https://github.com/user-attachments/assets/a2ed5a95-0c51-4474-9649-6fe22c24d7e1" alt="image" width="550"/>
</details> 

<details> 
<summary><strong>Első fejlesztés után</strong></summary>
      
<img src="https://github.com/user-attachments/assets/fb9bf8ed-234c-4520-a7f6-5eba2ce84f94" alt="image" width="550"/>
</details> 

<details> 
<summary><strong>Második fejlesztés után</strong></summary>
      
#### Sötét
<img src="https://github.com/user-attachments/assets/cba3f5e2-c652-4a2c-ac22-2e7a05d41087" alt="image" width="550"/>

#### Világos
<img src="https://github.com/user-attachments/assets/6a630e4d-2884-4176-ad41-651a065c4d3a" alt="V3-light" width="550"/>

#### Favicon 
<img src="https://github.com/user-attachments/assets/bd067e60-e0a6-4b13-bb96-7b76df208d66" alt="V3-favicon" width="550"/>

#### Telefon
<img src="https://github.com/user-attachments/assets/29c9f0b5-632b-40d9-8ddb-0bfded13de24" alt="V3-dark-phone" width="250"/>
</details> 

<details> 
<summary><strong>Harmadik fejlesztés után</strong></summary>

#### Sötét
<img src="https://github.com/user-attachments/assets/dc0ddbff-c783-48d3-9310-571df055977c" alt="V4-dark" width="550"/>
</details> 

---


Configuration for pick-a-color-project

      pick-a-color-project.netlify.app
      Deploys from GitHub.
      Created at 2025.06.09 3:57 AM
      Last update at 2025.07.11 5:44 PM

---

# Első fejlesztés

- UI + funkciók
- Témaválasztás

# Második fejlesztés

- 5 kép helyett 12
- Telefonon normálisan néz ki és használhatóbb lett
- Favicon beállítva
- UI színek módosítva
- Nincs scrollbar

# Harmadik fejlesztés

- 12 kép helyett 18
- Menü icon
- Pixabay API integrálása
- Pipetta eszköz
- pipettával kiválasztott szín másolása
- Pipettával kiválasztott szín HEX, RGB, HSL kód megjelenítése

