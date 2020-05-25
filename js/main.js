function gerarExcel () {
    var passwordExcel = document.getElementById('passwordExcel');
    if (passwordExcel.value == '') {
        document.getElementById("loading").style.display = "block";
        $('#buttonGerarExcel').attr('disabled','disabled');
        document.getElementById("avisoSenha").style.display = "none";
        document.getElementById("avisoVazio").style.display = "none";
        document.getElementById("sucesso").style.display = "none";
        document.getElementById("erro").style.display = "none";
        setTimeout(function(){
          $('#buttonGerarExcel').removeAttr('disabled');
          document.getElementById("loading").style.display = "none";
          document.getElementById("avisoSenha").style.display = "none";
          document.getElementById("avisoVazio").style.display = "block";
          document.getElementById("sucesso").style.display = "none";
          document.getElementById("erro").style.display = "none";
        }, 1500);
    } else {
        document.getElementById("loading").style.display = "block";
        $('#buttonGerarExcel').attr('disabled','disabled');
        document.getElementById("avisoSenha").style.display = "none";
        document.getElementById("avisoVazio").style.display = "none";
        document.getElementById("sucesso").style.display = "none";
        document.getElementById("erro").style.display = "none"; 

        var data = {
            password: passwordExcel.value
        };

        $.post("http://localhost:3003/excel",
        data)
        .done(function(data) {
           if (data.Erro == 'Senha incorreta!') {
            setTimeout(function(){
            document.getElementById("loading").style.display = "none";
            $('#buttonGerarExcel').removeAttr('disabled');
            document.getElementById("avisoSenha").style.display = "block";
            document.getElementById("avisoVazio").style.display = "none";
            document.getElementById("sucesso").style.display = "none";
            document.getElementById("erro").style.display = "none";
            }, 1500);
           } else if (data.msg == 'Confira as planilhas em result/') {
                setTimeout(function(){
                document.getElementById("loading").style.display = "none";
                $('#buttonGerarExcel').removeAttr('disabled');
                document.getElementById("avisoSenha").style.display = "none";
                document.getElementById("avisoVazio").style.display = "none";
                document.getElementById("sucesso").style.display = "block";
                document.getElementById("erro").style.display = "none";
                }, 1500);
           }
        })
        .fail(function(response) {
            setTimeout(function(){
            document.getElementById("loading").style.display = "none";
            $('#buttonGerarExcel').removeAttr('disabled');
            document.getElementById("avisoSenha").style.display = "none";
            document.getElementById("avisoVazio").style.display = "none";
            document.getElementById("sucesso").style.display = "none";
            document.getElementById("erro").style.display = "block  ";
            }, 1500);
    });
    }
}
