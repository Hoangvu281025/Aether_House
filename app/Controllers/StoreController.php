<?php
require_once '../app/config/path.php';
require_once '../app/Models/Store.php';
class StoreController {
    private $storeModel;


    public function __construct() {
        $this->storeModel = new Store();
    }

    public function index() {
        $stores = $this->storeModel->getAll();
        $view = VIEW_PATH. 'store/store.php';
        $title = 'Tìm cửa hàng gần nhất | Aether House';
        include  VIEW_PATH .  'layout/master.php';
    }

    public function storedetail($id) {
        echo " ID: " . $id;
    }

    
}















?>