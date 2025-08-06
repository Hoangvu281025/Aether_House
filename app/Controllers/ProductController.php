<?php

    class ProductController {
        public function new() {
            $view = '../app/Views/frontend/products/product.php';
            $title = 'Products - Aether House';
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