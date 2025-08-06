
const productList = document.getElementById('productList');
const btnCol1 = document.querySelector('.btn-col1');
const btnCol2 = document.querySelector('.btn-col2');

btnCol1.addEventListener('click', () => {
    productList.classList.remove('product_list_col-2');
    productList.classList.add('product_list_col-1');
    btnCol1.classList.add('add-btn-col');
    btnCol2.classList.remove('add-btn-col');
});

btnCol2.addEventListener('click', () => {
    productList.classList.remove('product_list_col-1');
    productList.classList.add('product_list_col-2');
    btnCol1.classList.remove('add-btn-col');
    btnCol2.classList.add('add-btn-col');
});





// const sorts = document.querySelector('.filter_right');
// const sort_dropdown = document.querySelector('.sort_dropdown');


// sorts.addEventListener('click', () => {
//     sort_dropdown.classList.toggle('add_sort_dropdown');
// });



const btnToggle = document.querySelector(".filter_right"); // nút mở dropdown
const dropdown = document.querySelector(".sort_dropdown");
const overlay = document.querySelector(".sort_overlay");

const btnfilter = document.querySelector(".filter_left"); // nút mở filter
const filter_list = document.querySelector(".product_filter_list");
const product_filter = document.querySelector(".product_filter");


const close_icon_product = document.querySelector('.close_icon_product');


btnToggle.addEventListener("click", () => {
  dropdown.classList.toggle("add_sort_dropdown");
  filter_list.classList.remove("add_filter_dropdown");

  overlay.classList.toggle("active");
});

btnfilter.addEventListener("click", () => {
  product_filter.classList.add("add_product_filter_fixed")
  filter_list.classList.toggle("add_filter_dropdown");
  dropdown.classList.remove("add_sort_dropdown");
  btnToggle.classList.add("hidden");
  close_icon_product.classList.remove("hidden");
  overlay.classList.toggle("active");
});



// Đóng khi click nền
overlay.addEventListener("click", () => {
  dropdown.classList.remove("add_sort_dropdown");
  filter_list.classList.remove("add_filter_dropdown");
  overlay.classList.remove("active");
});





close_icon_product.addEventListener("click" ,() =>{
  close_icon_product.classList.add("hidden");
  btnToggle.classList.remove("hidden");
  filter_list.classList.remove("add_filter_dropdown");
  product_filter.classList.remove("add_product_filter_fixed");
  overlay.classList.remove("active");
})