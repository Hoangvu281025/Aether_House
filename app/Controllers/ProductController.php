<?php

include '../app/Models/ProductModel.php';

    class ProductController {

        protected $productModel;

        public function __construct()
        {
            $this ->productModel = new ProductModel();
        }

        public function newProduct() {
            $view = '../app/Views/frontend/products/product.php';
            $title = 'Products - Aether House';
            $data = $this->productModel->getAll();
            include '../app/Views/frontend/layout/master.php';
        }
        public function lighting() {
            $view = '../app/Views/frontend/products/product.php';
            $title = 'Products - Aether House';
            include '../app/Views/frontend/layout/master.php';
        }

        public function detail($id) {
            $view = '../app/Views/frontend/products/detail.php';
            $title = 'Product Detail - Aether House';
            include '../app/Views/frontend/layout/main.php';
        }
    }















?>