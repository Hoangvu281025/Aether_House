// let currentIndex = 0;
// const step = window.innerWidth < 768 ? 4 : 8; 

// function showMoreProducts() {
//     const products = document.querySelectorAll('.product_item');
//     for (let i = currentIndex; i < currentIndex + step && i < products.length; i++) {
//         products[i].style.display = 'block';
//     }
//     currentIndex += step;
// }

// let isLoading = false;

// window.addEventListener('scroll', () => {
//     const spinner = document.getElementById('loading_spinner');
//     if (isLoading) return;

//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 900) {
//         const products = document.querySelectorAll('.product_item');
//         if (currentIndex >= products.length) return;

//         isLoading = true;
//         spinner.style.display = 'block';

//         setTimeout(() => {
//             showMoreProducts();
//             spinner.style.display = 'none';
//             isLoading = false;
//         }, 1000); // giả loading 0.8s
//     }
// });

// // Hiện nhóm đầu tiên khi load trang
// showMoreProducts();
