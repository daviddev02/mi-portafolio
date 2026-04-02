document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    header.style.opacity = '0';
    
    let opacity = 0;
    const fadeIn = setInterval(() => {
        opacity += 0.05;
        header.style.opacity = opacity;
        if (opacity >= 1) clearInterval(fadeIn);
    }, 50);
});