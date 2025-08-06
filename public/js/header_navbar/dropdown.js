
const bgNav_home = document.querySelector('.bg_nav_home');
const bgNav = document.querySelector('.bg_nav');
const items = document.querySelectorAll('.content_nav__category__item');
const dropdowns = document.querySelectorAll('.dropdown');

const icon_arrow_lefts = document.querySelectorAll('.icon-arrow-left');

const btn = document.getElementById('menu-toggle');
const menuIcon = btn.querySelector('.menu_icon');
const closeIcon = btn.querySelector('.close_icon');
const menu = document.querySelector('.content_nav__category');

 

    let isMenuOpen = false;

btn.addEventListener('click', () => {
    if (!isMenuOpen) {
        // Đang đóng → mở
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        menu.classList.add('addtoggle');
        if (bgNav) {
            bgNav.classList.add('add_bg_white');
        }
        if (bgNav_home) {
            bgNav_home.classList.add('add_bg_white');
        }

        isMenuOpen = true;
    } else {
        // Đang mở → đóng
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        menu.classList.remove('addtoggle');
        if (bgNav) {
            bgNav.classList.remove('add_bg_white');
        }
        if (bgNav_home) {
            bgNav_home.classList.remove('add_bg_white');
        }
        isMenuOpen = false;
    }
});


items.forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation();

        // Đóng tất cả dropdown
        document.querySelectorAll('.dropdown.active_dropdown').forEach(d => {
            d.classList.remove('active_dropdown');
            if (bgNav) {
                bgNav.classList.remove('add_bg_white');
            }
            if (bgNav_home) {
            bgNav_home.classList.remove('add_bg_white');
            }
            
            
        });

        // Mở dropdown của item vừa bấm
        const dropdown = item.querySelector('.dropdown');
        if(dropdown) {
            if (bgNav) {
                bgNav.classList.add('add_bg_white');
            }
            if (bgNav_home) {
                bgNav_home.classList.add('add_bg_white');
            }
            
            dropdown.classList.add('active_dropdown');
        }
    });
});

icon_arrow_lefts.forEach(icon_arrow_left => {
    icon_arrow_left.addEventListener('click', function(e) {
        e.stopPropagation();
        const dropdown = icon_arrow_left.closest('.dropdown');
        if(dropdown) {
            dropdown.classList.remove('active_dropdown');
        }
    });
});





// Bấm bg_nav toggle active (nền trắng)
// bgNav.addEventListener('click', function(e) {
//     e.stopPropagation();
//     bgNav.classList.toggle('add_bg_white');
// });


// Bấm từng item
// items.forEach(item => {
//     item.addEventListener('click', function(e) {
//         e.stopPropagation();

//         // Nếu item đang active thì tắt (toggle)
//         if (dropdown.classList.contains('active_dropdown')) {
//             dropdown.classList.remove('active_dropdown');
//         } else {
//             // Xóa active của các thằng khác
//             dropdown.forEach(i => i.classList.remove('active_dropdown'));
//             // Bật active cho chính nó
//             dropdown.classList.add('active_dropdown');
//         }

//         // Bất kỳ khi bấm vào item thì giữ bg_nav active
//         bgNav.classList.add('add_bg_white');
//     });
// });

// Bấm ra ngoài: đóng hết
document.addEventListener('click', function() {
    dropdowns.forEach(dropdown => dropdown.classList.remove('active_dropdown'));
    if (bgNav) {
        bgNav.classList.remove('add_bg_white');
    }
    if (bgNav_home) {
        bgNav_home.classList.remove('add_bg_white');
    }
   
    
});

// // Ngăn sự kiện click trong dropdown làm đóng menu
// document.querySelectorAll('.dropdown').forEach(drop => {
//     drop.addEventListener('click', function(e) {
//         e.stopPropagation();
//     });
// });






