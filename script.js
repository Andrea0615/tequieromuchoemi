/* =====================================================
   OPEN WHEN... JavaScript
   ===================================================== */

// =====================================================
// DATA: LETTERS
// ===================================================== 
// EDIT THIS SECTION to change letter content
const lettersData = [
    {
        id: 1,
        emoji: "✈️",
        title: "Ábreme cuando llegues",
        text: "¡Lo hiciste! Llegaste a tu nuevo destino de intercambio. Espero que el viaje haya sido increíble. Ahora que estás ahí, quiero que sepas que aunque estoy lejos, estoy tan orgullosa de ti. Eres valiente por atreverte a vivir esta aventura. Cuéntame todo cuando puedas. 💜",
        images: [],
        song: null
    },
    {
        id: 2,
        emoji: "🥺",
        title: "Ábreme cuando me extrañes",
        text: "Sé que a veces te siento lejos, y eso duele. Pero quiero que recuerdes todos esos momentos que compartimos: risas, conversaciones hasta tarde, aventuras sin plan. Esos recuerdos son para siempre y nadie puede quitárnoslos. Los extraño tanto como tú. Pronto nos veremos de nuevo. 💜",
        images: [],
        song: null
    },
    {
        id: 3,
        emoji: "🌧️",
        title: "Ábreme cuando tengas un mal día",
        text: "Hey, los malos días son normales. No estás solo en esto. He tenido muchos días así y pensar en ti siempre me levanta el ánimo. Así que ahora quiero hacer lo mismo por ti. Sal, toma aire fresco, llama a alguien que te importe, o simplemente descansa. Todo mejora. Lo prometo. 💜",
        images: [],
        song: null
    },
    {
        id: 4,
        emoji: "🫂",
        title: "Ábreme cuando te sientas solo",
        text: "Aunque nos separe la distancia, siempre estaré aquí para ti. La soledad a veces duele, pero recuerda que tienes amigos nuevos esperando conocer lo increíble que eres, y de este lado, tienes a alguien que te ama sin condición. Nunca estás realmente solo. 💜",
        images: [],
        song: null
    },
    {
        id: 5,
        emoji: "😂",
        title: "Ábreme cuando necesites reírte",
        text: "Recuerda aquella vez cuando... bueno, tú sabes cuál. ¡Fue para morir de risa! La risa es la mejor medicina, así que ve, llama a tus nuevos amigos y haz que se rían contigo. Cuéntales historias sobre nuestras aventuras. Haz nuevas memorias. La vida es para disfrutarla. 💜",
        images: [],
        song: null
    },
    {
        id: 6,
        emoji: "🇲🇽",
        title: "Ábreme cuando extrañes México",
        text: "Sí, el extranjero es emocionante, pero a veces la nostalgia golpea fuerte. Extrañarás los lugares, las personas, los sonidos, hasta los olores. Eso está bien. Eso significa que tenemos hogar. Pero también significa que tienes la oportunidad de hacer un nuevo hogar donde estés ahora. Puedes amar ambos lugares. 💜",
        images: [],
        song: null
    },
    {
        id: 7,
        emoji: "💪",
        title: "Ábreme cuando dudes de ti",
        text: "Te conozco mejor que nadie, y sé que eres más fuerte de lo que crees. Ese miedo que sientes es solo parte de crecer. Toda persona exitosa y exitosa ha dudado alguna vez. Pero tú tienes algo especial: determinación, corazón y ganas de ser mejor cada día. Confía en ti como yo confío en ti. 💜",
        images: [],
        song: null
    },
    {
        id: 8,
        emoji: "🎉",
        title: "Ábreme cuando te pase algo increíble",
        text: "¡¡¡CUÉNTAMEEEE!!! Estoy tan feliz por ti. Sea lo que sea, mereces toda la alegría del mundo. Quiero escuchar cada detalle, desde cómo empezó hasta el final. Celebra como se debe, porque los logros y las alegrías son para disfrutar sin culpa. Te quiero mucho y estoy tan orgullosa. 💜",
        images: [],
        song: null
    },
    {
        id: 9,
        emoji: "🥂",
        title: "Ábreme cuando conozcas personas nuevas",
        text: "Hacer amigos nuevos es uno de los regalos del viaje. Espero que ya hayas conocido personas increíbles. Recuerda cómo fuimos amigos nosotros: con honestidad, risas y apoyo mutuo. Sé tú mismo. Las personas correctas te amarán por quien realmente eres. Estoy tan emocionada de escuchar sobre tus nuevas amistades. 💜",
        images: [],
        song: null
    },
    {
        id: 10,
        emoji: "🌙",
        title: "Ábreme cuando no puedas dormir",
        text: "A veces la mente no descansa. Luces de la ciudad extraña, pensamiento que no paran, la cama que no es la tuya. Está bien. Cuando no puedas dormir, piensa en los buenos momentos. En sueños que tienes. En todo lo que estás logrando. Pronto tu cuerpo se adaptará. Y mientras, estoy aquí incluso en las noches sin dormir. 💜",
        images: [],
        song: null
    },
    {
        id: 11,
        emoji: "🗓️",
        title: "Ábreme cuando falte un mes para regresar",
        text: "¡¡¡PRONTO ENS VEMOS!!! El tiempo pasa tan rápido, ¿verdad? Sé que estás teniendo la experiencia de tu vida, pero también sé que extrañas el hogar. Falta poco. Disfruta estos últimos días con intensidad, porque aprender a despedirse también es parte del viaje. No es un adiós, es un 'hasta luego, tengo historias para ti'. 💜",
        images: [],
        song: null
    },
    {
        id: 12,
        emoji: "👀",
        title: "Carta secreta",
        text: "¡Encontraste la carta secreta! Esto significa que lo hiciste: leíste todas mis cartas de principio a fin. Significa que en las noches cuando extrañabas, en los días cuando dudabas, en los momentos de alegría, sentiste mi apoyo. Eso es lo que quería. Que supieras que siempre, siempre voy a estar aquí para ti, sin importar la distancia. Te quiero infinito. 💜",
        images: [],
        song: null
    }
];

// =====================================================
// CONSTANTS & DOM ELEMENTS
// ===================================================== 

const STORAGE_KEY = 'openWhenLetters';

// Screens
const screen1 = document.getElementById('screen-1');
const screen2 = document.getElementById('screen-2');
const screen3 = document.getElementById('screen-3');
const screen4 = document.getElementById('screen-4');
const currentScreens = [screen1, screen2, screen3, screen4];

// Buttons
const btnStart = document.getElementById('btn-start');
const btnOpenLetters = document.getElementById('btn-open-letters');
const btnSeeLetters = document.getElementById('btn-see-letters');

// Letters grid
const lettersGrid = document.getElementById('letters-grid');

// Modal
const letterModal = document.getElementById('letter-modal');
const modalOverlay = document.getElementById('modal-overlay');
const btnCloseModal = document.getElementById('modal-close');

// Modal content
const modalDate = document.getElementById('modal-date');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalImages = document.getElementById('modal-images');
const modalSong = document.getElementById('modal-song');

// Photo album lightbox
const memoryButtons = Array.from(document.querySelectorAll('.memory-photo'));
const photoLightbox = document.getElementById('photo-lightbox');
const photoLightboxOverlay = document.getElementById('photo-lightbox-overlay');
const photoLightboxClose = document.getElementById('photo-lightbox-close');
const photoLightboxPrev = document.getElementById('photo-lightbox-prev');
const photoLightboxNext = document.getElementById('photo-lightbox-next');
const photoLightboxImg = document.getElementById('photo-lightbox-img');
const photoLightboxCaption = document.getElementById('photo-lightbox-caption');
const memoriesData = memoryButtons.map(button => {
    const img = button.querySelector('img');
    const caption = button.querySelector('.memory-caption');

    return {
        src: img.getAttribute('src'),
        alt: img.getAttribute('alt'),
        caption: caption ? caption.textContent : ''
    };
});

// =====================================================
// STATE MANAGEMENT
// ===================================================== 

let currentScreen = 0;
let openedLetters = new Set();
let currentOpenedLetterId = null;
let currentMemoryIndex = 0;

// Load opened letters from localStorage
function loadOpenedLetters() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
            openedLetters = new Set(JSON.parse(stored));
        } catch (e) {
            console.error('Error loading opened letters:', e);
            openedLetters = new Set();
        }
    }
}

// Save opened letters to localStorage
function saveOpenedLetters() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(openedLetters)));
}

// =====================================================
// NAVIGATION
// ===================================================== 

function showScreen(screenIndex) {
    currentScreens.forEach((screen, index) => {
        screen.classList.remove('active');
    });
    currentScreens[screenIndex].classList.add('active');
    currentScreen = screenIndex;
}

btnStart.addEventListener('click', () => {
    showScreen(1);
});

btnOpenLetters.addEventListener('click', () => {
    showScreen(2);
});

btnSeeLetters.addEventListener('click', () => {
    showScreen(3);
});

// =====================================================
// LETTERS GRID GENERATION
// ===================================================== 

function renderLettersGrid() {
    lettersGrid.innerHTML = '';

    lettersData.forEach(letter => {
        const letterCard = createLetterCard(letter);
        lettersGrid.appendChild(letterCard);
    });

    observeRevealItems();
}

function createLetterCard(letter) {
    const card = document.createElement('button');
    card.className = 'letter-card is-staggered';
    card.setAttribute('aria-label', letter.title);
    card.setAttribute('type', 'button');
    
    if (openedLetters.has(letter.id)) {
        card.classList.add('opened');
    }

    if (letter.id === 12) {
        card.classList.add('secret-card');
    }

    const content = document.createElement('div');
    content.className = 'letter-card-content';

    const envelopeShell = document.createElement('div');
    envelopeShell.className = 'envelope-shell';

    const envelopeBody = document.createElement('div');
    envelopeBody.className = 'envelope-body';

    const envelopeFlap = document.createElement('div');
    envelopeFlap.className = 'envelope-flap';

    const envelopeSeal = document.createElement('span');
    envelopeSeal.className = 'envelope-seal';
    envelopeSeal.textContent = letter.id === 12 ? '✷' : '♡';

    const emoji = document.createElement('span');
    emoji.className = 'letter-stamp';
    emoji.textContent = letter.id === 12 ? '✦' : letter.emoji;

    const openHint = document.createElement('span');
    openHint.className = 'open-hint';
    openHint.textContent = 'open me ♡';

    const meta = document.createElement('div');
    meta.className = 'letter-meta';

    const kicker = document.createElement('span');
    kicker.className = 'letter-kicker';
    kicker.textContent = letter.id === 12 ? 'for later...' : 'open when...';

    const title = document.createElement('h3');
    title.className = 'letter-card-title';
    title.textContent = getCardLabel(letter);

    meta.appendChild(kicker);
    meta.appendChild(title);

    envelopeShell.appendChild(envelopeBody);
    envelopeShell.appendChild(envelopeFlap);
    envelopeShell.appendChild(envelopeSeal);
    envelopeShell.appendChild(emoji);
    envelopeShell.appendChild(meta);
    envelopeShell.appendChild(openHint);
    content.appendChild(envelopeShell);

    // Badge for opened letters
    if (openedLetters.has(letter.id)) {
        const badge = document.createElement('span');
        badge.className = 'opened-badge';
        badge.textContent = 'opened ♡';
        card.appendChild(badge);
    }

    if (letter.id === 12 && !openedLetters.has(letter.id)) {
        envelopeShell.classList.add('is-secret');
    }

    card.appendChild(content);

    card.addEventListener('click', () => {
        openLetter(letter);
    });

    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openLetter(letter);
        }
    });

    return card;
}

function getCardLabel(letter) {
    if (letter.id === 12) {
        return '???';
    }

    const simplifiedTitle = letter.title
        .replace(/^Ábreme cuando\s+/i, '')
        .replace(/^open when\s+/i, '')
        .trim();

    return simplifiedTitle || letter.title;
}

// =====================================================
// MODAL MANAGEMENT
// ===================================================== 

function openLetter(letter) {
    currentOpenedLetterId = letter.id;
    
    // Mark as opened
    openedLetters.add(letter.id);
    saveOpenedLetters();
    
    // Update grid to show badge
    renderLettersGrid();

    // Populate modal
    modalDate.textContent = letter.id === 12 ? 'for later...' : 'august, 2026';
    modalTitle.textContent = letter.title;
    
    // Text
    modalText.innerHTML = '';
    if (letter.text) {
        const paragraphs = letter.text.split('\n\n');
        paragraphs.forEach(para => {
            const p = document.createElement('p');
            p.textContent = para;
            modalText.appendChild(p);
        });
    }

    // Images
    modalImages.innerHTML = '';
    if (letter.images && letter.images.length > 0) {
        letter.images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = 'Imagen de la carta';
            img.className = 'modal-image';
            modalImages.appendChild(img);
        });
    }

    // Song
    modalSong.innerHTML = '';
    if (letter.song) {
        const songLink = document.createElement('a');
        songLink.href = letter.song;
        songLink.target = '_blank';
        songLink.rel = 'noopener noreferrer';
        songLink.innerHTML = '🎵 Escucha esto mientras lees';
        modalSong.appendChild(songLink);
    }

    // Show modal
    letterModal.classList.add('active');
    letterModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeLetter() {
    letterModal.classList.remove('active');
    letterModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentOpenedLetterId = null;
}

// Modal event listeners
btnCloseModal.addEventListener('click', closeLetter);

modalOverlay.addEventListener('click', closeLetter);

// =====================================================
// PHOTO LIGHTBOX
// =====================================================

function openPhoto(index) {
    currentMemoryIndex = index;
    const memory = memoriesData[currentMemoryIndex];

    photoLightboxImg.src = memory.src;
    photoLightboxImg.alt = memory.alt;
    photoLightboxCaption.textContent = memory.caption;
    photoLightbox.classList.add('active');
    photoLightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closePhoto() {
    photoLightbox.classList.remove('active');
    photoLightbox.setAttribute('aria-hidden', 'true');
    photoLightboxImg.removeAttribute('src');
    document.body.style.overflow = letterModal.classList.contains('active') ? 'hidden' : '';
}

function showAdjacentPhoto(direction) {
    const nextIndex = (currentMemoryIndex + direction + memoriesData.length) % memoriesData.length;
    openPhoto(nextIndex);
}

memoryButtons.forEach((button, index) => {
    button.addEventListener('click', () => openPhoto(index));
});

photoLightboxClose.addEventListener('click', closePhoto);
photoLightboxOverlay.addEventListener('click', closePhoto);
photoLightboxPrev.addEventListener('click', () => showAdjacentPhoto(-1));
photoLightboxNext.addEventListener('click', () => showAdjacentPhoto(1));

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && letterModal.classList.contains('active')) {
        closeLetter();
    }

    if (e.key === 'Escape' && photoLightbox.classList.contains('active')) {
        closePhoto();
    }

    if (photoLightbox.classList.contains('active') && e.key === 'ArrowLeft') {
        showAdjacentPhoto(-1);
    }

    if (photoLightbox.classList.contains('active') && e.key === 'ArrowRight') {
        showAdjacentPhoto(1);
    }
});

// =====================================================
// DECORATIVE ELEMENTS
// ===================================================== 

function createDecorativeElements() {
    createStars();
    createHearts();
    createPlanes();
}

function createStars() {
    const starsContainer = document.querySelector('.stars-container');
    const starCount = Math.floor(Math.random() * 6) + 9;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

function createHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    const hearts = ['♡', '✦'];
    const heartCount = Math.floor(Math.random() * 2) + 2;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 4 + 's';
        heart.style.animationDuration = (Math.random() * 2 + 4) + 's';
        heartsContainer.appendChild(heart);
    }
}

function createPlanes() {
    const planesContainer = document.querySelector('.planes-container');
    const planeCount = 1;

    for (let i = 0; i < planeCount; i++) {
        const plane = document.createElement('div');
        plane.className = 'plane';
        plane.textContent = '✈︎';
        plane.style.top = (Math.random() * 70 + 12) + '%';
        plane.style.animationDelay = i * 4 + 's';
        plane.style.animationDuration = (6 + Math.random() * 4) + 's';
        planesContainer.appendChild(plane);
    }
}

function observeRevealItems() {
    const items = document.querySelectorAll('.reveal-item, .letter-card.is-staggered, .memory-photo');

    if (!('IntersectionObserver' in window)) {
        items.forEach(item => item.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const target = entry.target;
                if (target.classList.contains('letter-card')) {
                    const cardIndex = Array.from(lettersGrid.children).indexOf(target);
                    target.style.transitionDelay = `${Math.min(cardIndex, 8) * 90}ms`;
                }
                if (target.classList.contains('memory-photo')) {
                    const photoIndex = memoryButtons.indexOf(target);
                    target.style.transitionDelay = `${Math.min(photoIndex, 5) * 80}ms`;
                }
                target.classList.add('is-visible');
                observerInstance.unobserve(target);
            }
        });
    }, {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px'
    });

    items.forEach(item => observer.observe(item));
}

// =====================================================
// INITIALIZATION
// ===================================================== 

function init() {
    loadOpenedLetters();
    renderLettersGrid();
    createDecorativeElements();
    showScreen(0);
    observeRevealItems();
}

// Start the app
init();

// =====================================================
// EXPORT FOR EASY EDITING
// ===================================================== 
// The lettersData array at the top contains all the letter content
// You can easily modify:
// - emoji: Change the emoji for each letter
// - title: Change the "Open when..." text
// - text: Change the letter content
// - images: Add image URLs (array of strings)
// - song: Add a song link (Spotify, YouTube, etc.)
