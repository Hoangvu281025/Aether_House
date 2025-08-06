<?php

class LoginController {
    public function index() {
        $view = '../app/Views/frontend/auth/login.php';
        $title = 'Đăng nhập - Aether House';
        include '../app/Views/frontend/layout/auth.php';
    }

    public function enterotp() {
        $view = '../app/Views/frontend/auth/enter_opt.php';
        include '../app/Views/frontend/layout/auth.php';
    }
}







?>