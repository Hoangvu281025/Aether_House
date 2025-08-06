
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  const navbar = document.querySelector('header');
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 50) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

