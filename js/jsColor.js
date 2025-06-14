// API kulcsok Unsplash és Pexels szolgáltatáshoz
const unsplashKey = 'VNXIU--bktHOdc10dk-7GxCSI9w7P12b3G2RQPVq0J0';
const pexelsApiKey = 'Rnu17TxBMWWMOQxnotJt5mZ8BBrkDkRWAuU3bPtbZGukZ5pO3XVErwEA';

/**
 * Unsplash API-ról képek lekérése adott kulcsszó alapján.
 * Ha túllépjük a limitet (403-as hiba), akkor hibát dobunk.
 */
async function fetchUnsplashImages(query) {
    const url = `https://api.unsplash.com/photos/random?count=12&query=${encodeURIComponent(query)}&client_id=${unsplashKey}`;
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
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=12`;
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
 * Először megpróbáljuk az Unsplash-t használni.
 * Ha az túllépte a limitet, átváltunk a Pexels-re.
 */
async function fetchImages(query) {
    try {
        return await fetchUnsplashImages(query);
    } catch (err) {
        if (err.message === 'unsplash_limit') {
            console.warn('Unsplash limit reached, switching to Pexels...');
            return await fetchPexelsImages(query);
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
        }, 900); // Késleltetés a megjelenítés előtt
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

/**
 * Amikor az oldal betöltődik, az aktuális színhez tartozó nevet kiírjuk.
 */
window.addEventListener('DOMContentLoaded', () => {
    const hex = document.getElementById('colorPicker').value;
    const colorName = ntc.name(hex)[1];
    document.getElementById('colorLabel').innerText = `Color: ${colorName}`;
});

/**
 * Dark és Light téma váltása. 
 */
const toggle = document.getElementById('theme-switch__checkbox');
const logo = document.getElementById('logo');
const navbar = document.querySelector('.navbar');
const colorPicker = document.getElementById('colorPicker');
const searchButton = document.getElementById('searchBtnImg');
const body = document.getElementById('body');

function applyTheme(isDark) {
    if (isDark) {
        toggle.classList.add('dark-theme');
        body.classList.add('dark-theme');
        navbar.classList.add('dark-theme');
        colorPicker.classList.add('dark-theme');
        logo.src = 'img/pick-a-color-logo-transparent-dark.png';
        searchButton.src = 'img/search-dark.png';
    } else {
        toggle.classList.remove('dark-theme');
        body.classList.remove('dark-theme');
        navbar.classList.remove('dark-theme');
        colorPicker.classList.remove('dark-theme');
        logo.src = 'img/pick-a-color-logo-transparent-light.png';
        searchButton.src = 'img/search-light.png';
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