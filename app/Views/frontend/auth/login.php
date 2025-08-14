<div class="container_login pad">
    <div class="table_form">
        <div class="logo">
            <a href="?controller=home"><img src="images/logo.svg" alt=""></a>
        </div>
        <div class="title">
            <p>Đăng nhập</p>
            <p>Nhập email để nhận mã otp </p>
        </div>
        <hr>
        <form action="?controller=login&action=enterotp" method="post">
            <input type="email" class="email" name="" id="email" placeholder="E-mail">
            <button type="submit" id="loginBtn" disabled>Đăng nhập</button>
        </form>
    </div>
</div>
