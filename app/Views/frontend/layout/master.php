<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/NT/public/asset/frontend/style.css">
    <link rel="stylesheet" href="/NT/public/asset/frontend/layout/header.css">
    <link rel="stylesheet" href="/NT/public/asset/frontend/layout/footer.css">
    <link rel="stylesheet" href="/NT/public/asset/frontend/product.css">
    <link rel="stylesheet" href="/NT/public/asset/frontend/store.css">
    <title><?=$title ?? "trang mặc định"?></title>
</head>
<body>
    <div class="container_main">
        <?php
            include_once 'header.php';
        ?>
        <?php
            $controller = $_GET['controller'] ?? 'home';
            $class = ($controller !== 'home') ? 'main_spacing' : 'null';
        ?>
        <main class="<?=$class?>">
            <?php
                include_once $view;
            ?>
        </main>
        <?php
            include_once 'footer.php';
        ?>
    </div>


    <script src="../public/js/header_navbar/navbar.js"></script>
    <script src="../public/js/header_navbar/dropdown.js"></script>
    <script src="../public/js/product/view_layout-product.js"></script>
    <script src="../public/js/product/loading_product.js"></script>
    <script src="../public/js/footer/footer.js"></script>
</body>
</html>

