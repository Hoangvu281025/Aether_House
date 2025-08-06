<?php
require_once '../app/config/path.php';
class HomeController {
    public function index() {
        $view = VIEW_PATH .  'home/home.php';
        $title = 'Trang chủ | Aether House';
        include VIEW_PATH . 'layout/master.php';
    }

    public function about() {
        echo __METHOD__;
    }
}







?>