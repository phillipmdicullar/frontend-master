const toggle = document.querySelectorAll('.faq-toggle');
toggle.forEach(element => {
    element.addEventListener('click', () => {
        const faq = element.parentElement;
        faq.classList.toggle('active');
    });
});