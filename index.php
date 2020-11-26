<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>

    <script src="./js/login.js"></script>
    <link rel="stylesheet" href="./css/biblioteca_css.css">

</head>

<body class="fundo">

    
    <div class="container">
    <div class="row">
    <div class="col-lg-2 alinharEsquerda col-md-2 alinharCentro col-sm-2 alinharCentro"><img src="../img/logoitau.png" width=100px height=100px> </div>
        <div class="col-lg-10 col-md-10 col-sm-10 menu"></div>
    </div>
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4 menu"></div>
            <div class="col-lg-4 col-md-4 col-sm-4 menu">
                <br>
                <br>
                <br>
                <label>Login</label>
                <br>
                <br>
                <label>Email/Racf</label>
                <input type="text" id="inputUser" class="form-control">
                <br>
                <label>Senha</label>
                <input type="password" id="inputPassword" class="form-control">
                <br>
                <button class="btn btn-primary" onclick="validarLogin(event)">Login</button>
                <div>
                    <div id="msgRetorno"></div>
                    <div id="divUser"></div>
                    <br>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 menu"></div>

</body>

</html>