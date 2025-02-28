window.addEventListener('load', function() {
    document.querySelector('.header-text').classList.add('animate');
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

const sections = [
    { id: 'section-0', colors: ['#000', '#111'], height: 100, start: 0 },
    { id: 'section-1', colors: ['#111', '#222'], height: 200, start: 100 },
    { id: 'section-2', colors: ['#222', '#333'], height: 100, start: 300 },
    { id: 'section-3', colors: ['#333', '#444'], height: 100, start: 400 },
    { id: 'section-4', colors: ['#444', '#555'], height: 100, start: 500 },
    { id: 'section-5', colors: ['#555', '#666'], height: 100, start: 600 }
];

const overlay = document.getElementById('overlay');

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
}

function rgbToHex(rgb) {
    const [r, g, b] = rgb;
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function initScrollTransition() {
    window.addEventListener('scroll', () => {
        requestAnimationFrame(() => {
            const vh = window.innerHeight * 0.01;
            const scrollVh = window.scrollY / vh;
            updateOverlay(scrollVh);
        });
    });
}

function updateOverlay(scrollVh) {
    let currentSection = 0;
    let nextSection = 1;
    let scrollProgress = 0;

    for (let i = 0; i < sections.length; i++) {
        if (scrollVh <= sections[i].start + sections[i].height) {
            currentSection = i;
            nextSection = Math.min(i + 1, sections.length - 1);
            scrollProgress = (scrollVh - sections[i].start) / sections[i].height;
            break;
        }
    }

    const currentStartColor = hexToRgb(sections[currentSection].colors[0]);
    const nextStartColor = hexToRgb(sections[nextSection].colors[0]);

    const interpolatedColor = [
        Math.round(currentStartColor[0] + (nextStartColor[0] - currentStartColor[0]) * scrollProgress),
        Math.round(currentStartColor[1] + (nextStartColor[1] - currentStartColor[1]) * scrollProgress),
        Math.round(currentStartColor[2] + (nextStartColor[2] - currentStartColor[2]) * scrollProgress)
    ];

    const interpolatedHex = rgbToHex(interpolatedColor);
    const nextEndColor = sections[nextSection].colors[1];

    overlay.style.background = `linear-gradient(45deg, ${interpolatedHex}, ${nextEndColor})`;
}

document.addEventListener('DOMContentLoaded', () => {
    initScrollTransition();
    
    // Load Navigation Bar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar.offsetHeight;
            document.body.style.paddingTop = `${navbarHeight}px`;
            
            // Add resize event listener
            window.addEventListener('resize', () => {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar.offsetHeight;
                document.body.style.paddingTop = `${navbarHeight}px`;
            });
        });
});



