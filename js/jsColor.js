// API kulcsok Unsplash, Pexels és Pixabay szolgáltatáshoz
const unsplashKey = 'VNXIU--bktHOdc10dk-7GxCSI9w7P12b3G2RQPVq0J0';
const pexelsApiKey = 'Rnu17TxBMWWMOQxnotJt5mZ8BBrkDkRWAuU3bPtbZGukZ5pO3XVErwEA';
const pixabayApiKey = '51351003-e32b215c2a99c33f999135cc2';

/**
 * Unsplash API-ról képek lekérése adott kulcsszó alapján.
 * Ha túllépjük a limitet (403-as hiba), akkor hibát dobunk.
 */
async function fetchUnsplashImages(query) {
    const url = `https://api.unsplash.com/photos/random?count=30&query=${encodeURIComponent(query)}&client_id=${unsplashKey}`;
    const response = await fetch(url);
    if (response.status === 403) throw new Error('unsplash_limit');
    const photos = await response.json();
    return photos.map(photo => photo.urls.small); // Csak a kis méretű képek URL-jeit adjuk vissza
}

/**
 * Pexels API-ról képek lekérése adott kulcsszó alapján.
 * Az Authorization fejlécben küldjük az API kulcsot.
 */
async function fetchPexelsImages(query) {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=30`;
    const response = await fetch(url, {
        headers: {
            Authorization: pexelsApiKey
        }
    });
    if (!response.ok) throw new Error('pexels_error');
    const data = await response.json();
    return data.photos.map(photo => photo.src.medium); // Közepes méretű képek URL-jeit adjuk vissza
}

/**
 * Pixabay API-ról képek lekérése adott kulcsszó alapján.
 */
async function fetchPixabayImages(query, color) {
    const url = `https://pixabay.com/api/?key=${pixabayKey}&q=${encodeURIComponent(query)}&colors=${color}&image_type=photo&per_page=30`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('pixabay_error');
    const data = await response.json();
    return data.hits.map(hit => hit.webformatURL);
}

/**
 * Először megpróbáljuk az Unsplash-t használni.
 * Ha az túllépte a limitet, átváltunk a Pexels-re.
 * Ha a Pexels is túllépte a limitet, akkor végül a Pixabay-t használjuk.
 */
async function fetchImages(query) {
    try {
        return await fetchUnsplashImages(query);
    } catch (err) {
        if (err.message === 'unsplash_limit') {
            console.warn('Unsplash limit reached, switching to Pexels...');
            try {
                return await fetchPexelsImages(query);
            } catch (pexErr) {
                if (pexErr.message === 'pexels_limit') {
                    console.warn('Pexels limit reached, switching to Pixabay...');
                    return await fetchPixabayImages(query);
                } else {
                    throw pexErr;
                }
            }
        } else {
            throw err;
        }
    }
}

/**
 * Képek megjelenítése a DOM-ban.
 * A korábbi képeket töröljük, majd újakat illesztünk be.
 */
function renderImages(imageUrls) {
    const container = document.getElementById('images');
    container.innerHTML = '';
    imageUrls.forEach(url => {
        const wrapper = document.createElement('div');
        wrapper.className = 'image-wrapper';
        const img = document.createElement('img');
        img.src = url;

        // Ha sötét téma aktív, alkalmazzuk
        if (toggle.checked) {
            img.classList.add('dark-theme');
        }

        wrapper.appendChild(img);
        container.appendChild(wrapper);
    });
}

/**
 * Keresés gomb eseményfigyelője.
 * Szín kiválasztása után lekérdezzük a képeket és megjelenítjük őket.
 */
document.getElementById('searchBtn').addEventListener('click', async () => {
    const hex = document.getElementById('colorPicker').value;
    const colorName = ntc.name(hex)[1]; // ntc.js könyvtár használata a szín nevének meghatározására
    const combinedQuery = `${colorName.toLowerCase()} color`;

    const spinner = document.getElementById('loader');
    spinner.style.display = 'block'; // Betöltés animáció megjelenítése

    try {
        const imageUrls = await fetchImages(combinedQuery);
        setTimeout(() => {
            renderImages(imageUrls);
            spinner.style.display = 'none'; // Animáció elrejtése
        }, 700); // Késleltetés a megjelenítés előtt
    } catch (error) {
        console.error('Error:', error);
        spinner.style.display = 'none'; // Hibakezelés esetén is elrejtjük az animációt
    }
});

/**
 * Színválasztó eseményfigyelője.
 * Valós időben frissíti a szín nevét a felületen.
 */
document.getElementById('colorPicker').addEventListener('input', () => {
    const hex = document.getElementById('colorPicker').value;
    const colorName = ntc.name(hex)[1];
    document.getElementById('colorLabel').innerText = `Color: ${colorName}`;
});

// Amikor az oldal betöltődik, az aktuális színhez tartozó nevet kiírjuk.
window.addEventListener('DOMContentLoaded', () => {
    const hex = document.getElementById('colorPicker').value;
    const colorName = ntc.name(hex)[1];
    document.getElementById('colorLabel').innerText = `Color: ${colorName}`;
});

// Dark és Light téma váltása.
const toggle = document.getElementById('theme-switch__checkbox');
const logo = document.getElementById('logo');
const navbar = document.querySelector('.navbar');
const colorPicker = document.getElementById('colorPicker');
const searchButton = document.getElementById('searchBtnImg');
const body = document.getElementById('body');
const menu = document.getElementById('dropbtnimgid');
const dropperButton = document.getElementById('dropperBtnImg');

function applyTheme(isDark) {
    if (isDark) {
        toggle.classList.add('dark-theme');
        body.classList.add('dark-theme');
        navbar.classList.add('dark-theme');
        colorPicker.classList.add('dark-theme');
        logo.src = 'img/pick-a-color-logo-transparent-dark.png';
        searchButton.src = 'img/search-dark.png';
        menu.src = 'img/menu-dark.png';
        dropperButton.src = 'img/dropper-dark.png';
    } else {
        toggle.classList.remove('dark-theme');
        body.classList.remove('dark-theme');
        navbar.classList.remove('dark-theme');
        colorPicker.classList.remove('dark-theme');
        logo.src = 'img/pick-a-color-logo-transparent-light.png';
        searchButton.src = 'img/search-light.png';
        menu.src = 'img/menu-light.png';
        dropperButton.src = 'img/dropper-light.png';
    }
}

// Betöltéskor ellenőrizzük a mentett beállítást
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('dark-theme');
    const isDark = savedTheme === 'true';

    toggle.checked = isDark;
    applyTheme(isDark);
});

// Ha a kapcsolót állítják, mentjük és alkalmazzuk a témát
toggle.addEventListener('change', () => {
    const isDark = toggle.checked;
    localStorage.setItem('dark-theme', isDark);
    applyTheme(isDark);
});

//Menu gomb funkció
function menuButton() {
    document.getElementById("Dropdown").classList.toggle("show");
}

// Bezárja a legördülő menüt, ha a felhasználó azon kívülre kattint
window.onclick = function (event) {
    const isDropbtn = event.target.matches('.dropbtn');
    const isInsideDropdown = event.target.closest('.dropdown-content');
    const isButtonInsideDropdown = isInsideDropdown && event.target.tagName.toLowerCase() === 'img';

    if (!isDropbtn && (!isInsideDropdown || isButtonInsideDropdown)) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

//---------------------------------------------------------------------------------------------------------------------------------------
// Pipetta funkció
const pickColorBtn = document.getElementById('pickColorBtn');
const colorPreview = document.getElementById('colorPreview');
const colorCode = document.getElementById('colorCode');

let currentHex = '#ffffff';
let currentFormat = 'hex'; // hex, rgb, hsl

pickColorBtn.addEventListener('click', async () => {
    if (!window.EyeDropper) {
        alert("This browser doesn't support EyeDropper API.");
        return;
    }

    try {
        const eyeDropper = new EyeDropper();
        const result = await eyeDropper.open();
        currentHex = result.sRGBHex;
        currentFormat = 'hex';
        updateColorDisplay();
        colorPreview.style.backgroundColor = currentHex;
    } catch (err) {
        console.error('Error:', err);
    }
});

colorCode.addEventListener('click', () => {
    if (currentFormat === 'hex') currentFormat = 'rgb';
    else if (currentFormat === 'rgb') currentFormat = 'hsl';
    else currentFormat = 'hex';

    updateColorDisplay();
});

colorPreview.addEventListener('click', async () => {
    let textToCopy = '';

    if (currentFormat === 'hex') textToCopy = currentHex;
    else if (currentFormat === 'rgb') {
        const rgb = hexToRgb(currentHex);
        textToCopy = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    } else if (currentFormat === 'hsl') {
        const rgb = hexToRgb(currentHex);
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        textToCopy = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    }

    try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = colorCode.textContent;
        setTimeout(() => {
            updateColorDisplay();
        }, 1000);
    } catch (err) {
        alert('failed to copy.');
    }
});

function updateColorDisplay() {
    if (currentFormat === 'hex') {
        colorCode.textContent = currentHex;
    } else if (currentFormat === 'rgb') {
        const rgb = hexToRgb(currentHex);
        colorCode.textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    } else if (currentFormat === 'hsl') {
        const rgb = hexToRgb(currentHex);
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        colorCode.textContent = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    }
}

function hexToRgb(hex) {
    hex = hex.replace('#', '');
    const bigint = parseInt(hex, 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
    };
}

function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
            case g: h = ((b - r) / d + 2); break;
            case b: h = ((r - g) / d + 4); break;
        }
        h *= 60;
    }

    return {
        h: Math.round(h),
        s: Math.round(s * 100),
        l: Math.round(l * 100),
    };
}

// "Másolva" alert
colorPreview.addEventListener('click', async () => {
    let textToCopy = '';

    if (currentFormat === 'hex') textToCopy = currentHex;
    else if (currentFormat === 'rgb') {
        const rgb = hexToRgb(currentHex);
        textToCopy = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    } else if (currentFormat === 'hsl') {
        const rgb = hexToRgb(currentHex);
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        textToCopy = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    }

    try {
        await navigator.clipboard.writeText(textToCopy);
        showToast('✔️ Copied to clipboard!');
    } catch (err) {
        showToast('❌ Failed to copy! :(');
    }
});

// Toast üzenet megjelenítése
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}