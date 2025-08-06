<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/NT/public/asset/frontend/login.css">
  <title><?= $title ?? "Đăng nhập" ?></title>
</head>
<body>
  <div class="container_auth">
    <?php include_once $view; ?>
  </div>


    <script src="/NT/public/js/check_auth/check_input.js"></script>

</body>
</html>
