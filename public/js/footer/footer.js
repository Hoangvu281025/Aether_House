document.querySelectorAll('.footer__title').forEach(title => {
  title.addEventListener('click', () => {
    const parent = title.parentElement;
    const isActive = parent.classList.contains('active');

    // Đóng hết
    document.querySelectorAll('.footer_menu-col').forEach(item => {
      item.classList.remove('active');
      item.querySelector('.toggle-icon').textContent = '+';
    });

    // Nếu lúc đầu chưa active thì mở ra
    if (!isActive) {
      parent.classList.add('active');
      parent.querySelector('.toggle-icon').textContent = '-';
    }
  });
});
