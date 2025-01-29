window.onscroll = function() {
    const button = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

document.getElementById('scrollToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const menuToggle = document.querySelector('.menu-toggle');
const links = document.querySelectorAll('nav a');


menuToggle.addEventListener('click', () => {
  links.forEach(link => {
    link.style.display = link.style.display === 'block' ? 'none' : 'block';
  });
});
