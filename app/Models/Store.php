<?php

require_once '../app/config/Database.php';

class Store {
    private $db;
    
    public function __construct() {
        $database = new Database();
        $this->db = $database->connect();
    }

    public function getAll() {
        $stmt = $this->db->query("SELECT * FROM stores");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    
}























?>