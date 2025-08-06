<?php
    
    $controller =  ucfirst($_REQUEST['controller'] ?? 'Home'). "Controller";
    $action = $_REQUEST['action'] ?? 'index';
    $id = $_REQUEST['id'] ?? null;



    require_once "../app/Controllers/$controller.php";
    $controllerObject = new $controller();
    if ($id !== null) {
        $controllerObject->$action($id);
    } else {
        $controllerObject->$action();
    }


    
?>


