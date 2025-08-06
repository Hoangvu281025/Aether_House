const loginBtn = document.getElementById('loginBtn');
const emailInput = document.getElementById('email');

emailInput.addEventListener('input', () => {
    const email = emailInput.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isValid) {
        loginBtn.classList.add('active');
        loginBtn.disabled = false;
    } else {
        loginBtn.classList.remove('active');
        loginBtn.disabled = true;
    }
});



loginBtn.addEventListener('click', () => {
    if (!loginBtn.classList.contains('active')) return;
    alert('Đăng nhập thành công!');
});
