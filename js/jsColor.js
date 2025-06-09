const unsplashKey = 'VNXIU--bktHOdc10dk-7GxCSI9w7P12b3G2RQPVq0J0';
const pexelsApiKey = 'Rnu17TxBMWWMOQxnotJt5mZ8BBrkDkRWAuU3bPtbZGukZ5pO3XVErwEA';

async function fetchUnsplashImages(query) {
    const url = `https://api.unsplash.com/photos/random?count=5&query=${encodeURIComponent(query)}&client_id=${unsplashKey}`;
    const response = await fetch(url);
    if (response.status === 403) throw new Error('unsplash_limit');
    const photos = await response.json();
    return photos.map(photo => photo.urls.small);
}

async function fetchPexelsImages(query) {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5`;
    const response = await fetch(url, {
        headers: {
            Authorization: pexelsApiKey
        }
    });
    if (!response.ok) throw new Error('pexels_error');
    const data = await response.json();
    return data.photos.map(photo => photo.src.medium);
}

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

function renderImages(imageUrls) {
    const container = document.getElementById('images');
    container.innerHTML = '';
    imageUrls.forEach(url => {
        const wrapper = document.createElement('div');
        wrapper.className = 'image-wrapper';
        const img = document.createElement('img');
        img.src = url;
        wrapper.appendChild(img);
        container.appendChild(wrapper);
    });
}

document.getElementById('searchBtn').addEventListener('click', async () => {
    const hex = document.getElementById('colorPicker').value;
    const colorName = ntc.name(hex)[1];
    const combinedQuery = `${colorName.toLowerCase()} color`;

    const spinner = document.getElementById('loader');
    spinner.style.display = 'block';

    try {
        const imageUrls = await fetchImages(combinedQuery);
        setTimeout(() => {
            renderImages(imageUrls);
            spinner.style.display = 'none';
        }, 900); // késleltetés
    } catch (error) {
        console.error('Error:', error);
        spinner.style.display = 'none';
    }
});

// Élő színnév frissítés
document.getElementById('colorPicker').addEventListener('input', () => {
    const hex = document.getElementById('colorPicker').value;
    const colorName = ntc.name(hex)[1];
    document.getElementById('colorLabel').innerText = `Color: ${colorName}`;
});

// Alapértelmezett színnév beállítása betöltéskor
window.addEventListener('DOMContentLoaded', () => {
    const hex = document.getElementById('colorPicker').value;
    const colorName = ntc.name(hex)[1];
    document.getElementById('colorLabel').innerText = `Color: ${colorName}`;
});