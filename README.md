# Color Picker Site - Pick-A-Color

Egy egyszerű webalkalmazás, amely lehetővé teszi, hogy kiválassz egy színt, majd az alapján képeket keressen az Unsplash-ról. A megjelenített képek színösszetétele alapján szűrve vannak, hogy a kiválasztott szín legalább 70%-ban megtalálható legyen a képen, a pontosabb színillesztés érdekében LAB színtér alapú ΔE távolság számítást használva.

---

## Fő funkciók

- Színválasztó input a felhasználó számára.
- Képkeresés az Unsplash API-n keresztül a színnév alapján (ntc.js segítségével).
- Képek szűrése a LAB színtér alapú színösszetétel elemzésével.
- Csak a releváns képek jelennek meg, amelyek legalább 70%-ban tartalmazzák a kiválasztott színt.

---

## Használat

1. Nyisd meg a `Color.html` fájlt egy böngészőben.
2. Válassz egy színt a színválasztóból.
3. Kattints a "Keresés képekre" gombra.
4. Várj, amíg a program lekéri a képeket, majd megjeleníti a relevánsakat.

---

## API kulcs beszerzése

Az alkalmazás az [Unsplash API](https://unsplash.com/developers) használatával működik, ehhez szükséges egy saját API kulcs beszerzése és beillesztése a kódban az `accessKey` változóba.

---

## Műszaki részletek

- A színnév kereséshez az [ntc.js (Name That Color)]([https://github.com/colorjs/ntc](https://github.com/insomnious0x01/ntc-js/blob/master/ntc.js)) könyvtárat használom.
- A képek színösszetételét canvas segítségével elemzem.
- A színillesztés LAB színtéren és ΔE 1976 távolságmérés alapján történik.

---

## Jövőbeli fejlesztések ötletei

- Több szín támogatása és komplexebb színpaletta elemzés.
- Sebességoptimalizálás (például kép méretének csökkentése elemzés előtt).
- Felhasználói felület továbbfejlesztése.

---
