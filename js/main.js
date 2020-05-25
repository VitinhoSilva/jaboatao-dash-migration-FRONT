function gerarExcel () {
    var passwordExcel = document.getElementById('passwordExcel');
    if (passwordExcel.value == '') {
        document.getElementById('loading').style.display = 'block';
        $('#buttonGerarExcel').attr('disabled','disabled');
        document.getElementById('avisoSenha').style.display = 'none';
        document.getElementById('avisoVazio').style.display = 'none';
        document.getElementById('sucesso').style.display = 'none';
        document.getElementById('erro').style.display = 'none';
        setTimeout(function(){
          $('#buttonGerarExcel').removeAttr('disabled');
          document.getElementById('loading').style.display = 'none';
          document.getElementById('avisoSenha').style.display = 'none';
          document.getElementById('avisoVazio').style.display = 'block';
          document.getElementById('sucesso').style.display = 'none';
          document.getElementById('erro').style.display = 'none';
          document.getElementById('passwordExcel').focus();
        }, 1500);
    } else {
        document.getElementById('loading').style.display = 'block';
        $('#buttonGerarExcel').attr('disabled','disabled');
        document.getElementById('avisoSenha').style.display = 'none';
        document.getElementById('avisoVazio').style.display = 'none';
        document.getElementById('sucesso').style.display = 'none';
        document.getElementById('erro').style.display = 'none'; 

        var data = {
            password: passwordExcel.value
        };

        $.post('http://localhost:3000/excel',
        data)
        .done(function(data) {
           if (data.Erro == 'Senha incorreta!') {
            setTimeout(function(){
            document.getElementById('loading').style.display = 'none';
            $('#buttonGerarExcel').removeAttr('disabled');
            document.getElementById('avisoSenha').style.display = 'block';
            document.getElementById('avisoVazio').style.display = 'none';
            document.getElementById('sucesso').style.display = 'none';
            document.getElementById('erro').style.display = 'none';
            }, 1500);
           } else if (data.msg == 'Confira as planilhas em result/') {
                setTimeout(function(){
                document.getElementById('loading').style.display = 'none';
                $('#buttonGerarExcel').removeAttr('disabled');
                document.getElementById('avisoSenha').style.display = 'none';
                document.getElementById('avisoVazio').style.display = 'none';
                document.getElementById('sucesso').style.display = 'block';
                document.getElementById('erro').style.display = 'none';
                }, 1500);
           }
        }).fail(function(response) {
            setTimeout(function(){
            document.getElementById('loading').style.display = 'none';
            $('#buttonGerarExcel').removeAttr('disabled');
            document.getElementById('avisoSenha').style.display = 'none';
            document.getElementById('avisoVazio').style.display = 'none';
            document.getElementById('sucesso').style.display = 'none';
            document.getElementById('erro').style.display = 'block  ';
            }, 1500);
    });
    }
}

function enviarEmail () {
    var passwordEmail = document.getElementById('passwordEmail');
    var emailResult = document.getElementById('emailResult');
    if (passwordEmail.value == '') {
        document.getElementById('loadingE').style.display = 'block';
        $('#buttonGerarEmail').attr('disabled','disabled');
        document.getElementById('avisoSenhaE').style.display = 'none';
        document.getElementById('avisoVazioE').style.display = 'none';
        document.getElementById('sucessoE').style.display = 'none';
        document.getElementById('erroE').style.display = 'none';
        setTimeout(function(){
          $('#buttonGerarEmail').removeAttr('disabled');
          document.getElementById('loadingE').style.display = 'none';
          document.getElementById('avisoSenhaE').style.display = 'none';
          document.getElementById('avisoVazioE').style.display = 'block';
          document.getElementById('sucessoE').style.display = 'none';
          document.getElementById('erroE').style.display = 'none';
          document.getElementById('passwordEmail').focus();
        }, 1500);
    } else {
        document.getElementById('loadingE').style.display = 'block';
        $('#buttonGerarEmail').attr('disabled','disabled');
        document.getElementById('avisoSenhaE').style.display = 'none';
        document.getElementById('avisoVazioE').style.display = 'none';
        document.getElementById('sucessoE').style.display = 'none';
        document.getElementById('erroE').style.display = 'none'; 

        var data = {
            password: passwordEmail.value
        };

        $.post('http://localhost:3000/email',
        data)
        .done(function(data) {
           if (data.Erro == 'Senha incorreta!') {
            setTimeout(function(){
            document.getElementById('loadingE').style.display = 'none';
            $('#buttonGerarEmail').removeAttr('disabled');
            document.getElementById('avisoSenhaE').style.display = 'block';
            document.getElementById('avisoVazioE').style.display = 'none';
            document.getElementById('sucessoE').style.display = 'none';
            document.getElementById('erroE').style.display = 'none';
            document.getElementById('passwordEmail').focus();
            }, 1500);
           } else if (data.msg == 'E-mail enviado com sucesso!') {
                setTimeout(function(){
                document.getElementById('loadingE').style.display = 'none';
                $('#buttonGerarEmail').removeAttr('disabled');
                document.getElementById('avisoSenhaE').style.display = 'none';
                document.getElementById('avisoVazioE').style.display = 'none';
                document.getElementById('sucessoE').style.display = 'block';
                document.getElementById('erroE').style.display = 'none';
                var to = data.to.join(', ');
                emailResult.innerHTML = 'E-mail enviado para <strong>' + to +'</strong> com sucesso!';
                }, 1500);
           }
        }).fail(function(response) {
            setTimeout(function(){
            document.getElementById('loadingE').style.display = 'none';
            $('#buttonGerarEmail').removeAttr('disabled');
            document.getElementById('avisoSenhaE').style.display = 'none';
            document.getElementById('avisoVazioE').style.display = 'none';
            document.getElementById('sucessoE').style.display = 'none';
            document.getElementById('erroE').style.display = 'block  ';
            }, 1500);
    });
    }
}

function atualizarBairroTeste () {
    var passwordBairro = document.getElementById('passwordBairro');
    if (passwordBairro.value == '') {
        document.getElementById('loadingB').style.display = 'block';
        $('#buttonAtualizarBairroTeste').attr('disabled','disabled');
        document.getElementById('avisoSenhaB').style.display = 'none';
        document.getElementById('avisoVazioB').style.display = 'none';
        document.getElementById('sucessoB').style.display = 'none';
        document.getElementById('erroB').style.display = 'none';
        setTimeout(function(){
          $('#buttonAtualizarBairroTeste').removeAttr('disabled');
          document.getElementById('loadingB').style.display = 'none';
          document.getElementById('avisoSenhaB').style.display = 'none';
          document.getElementById('avisoVazioB').style.display = 'block';
          document.getElementById('sucessoB').style.display = 'none';
          document.getElementById('erroB').style.display = 'none';
          document.getElementById('passwordBairro').focus();
        }, 1500);
    } else {
        document.getElementById('loadingB').style.display = 'block';
        $('#buttonAtualizarBairroTeste').attr('disabled','disabled');
        document.getElementById('avisoSenhaB').style.display = 'none';
        document.getElementById('avisoVazioB').style.display = 'none';
        document.getElementById('sucessoB').style.display = 'none';
        document.getElementById('erroB').style.display = 'none'; 

        var data = {
            password: passwordBairro.value
        };

        $.post('http://localhost:3000/dashbairroteste',
        data)
        .done(function(data) {
           if (data.Erro == 'Senha incorreta!') {
            setTimeout(function(){
            document.getElementById('loadingB').style.display = 'none';
            $('#buttonAtualizarBairroTeste').removeAttr('disabled');
            document.getElementById('avisoSenhaB').style.display = 'block';
            document.getElementById('avisoVazioB').style.display = 'none';
            document.getElementById('sucessoB').style.display = 'none';
            document.getElementById('erroB').style.display = 'none';
            document.getElementById('passwordBairro').focus();
            }, 1500);
           } else if (data.msg == 'DADOS DE BAIRROS (PONTOS) ATUALIZADO NO DASHBOARD DE TESTE') {
                setTimeout(function(){
                document.getElementById('loadingB').style.display = 'none';
                $('#buttonAtualizarBairroTeste').removeAttr('disabled');
                document.getElementById('avisoSenhaB').style.display = 'none';
                document.getElementById('avisoVazioB').style.display = 'none';
                document.getElementById('sucessoB').style.display = 'block';
                document.getElementById('erroB').style.display = 'none';

                var table = document.getElementById("tableBairroTeste");
                for (var i = document.getElementById('tdBairroTeste').childNodes.length - 1; i >= 0; i--) {
                  var node = document.getElementById("tdBairroTeste");
                  if(document.getElementById('tdBairroTeste').childNodes.length > 1){
                    $(table).find('tbody').remove();
                    $(table).append("<tbody id='tdBairroTeste'></tbody>");
                  }
                };

                for (let i = data.log.updateResults.length - 1; i >= 0; i--) {
                    $(table).find('tbody').append(
                      "<tr><td><div>" + data.log.updateResults[i].objectId
                      + "</div></td><td><div title='"+ data.log.updateResults[i].success +"'>" + data.log.updateResults[i].success
                      + "</div></td><td><div title='"+ data.log.updateResults[i].uniqueId +"'>" + data.log.updateResults[i].uniqueId
                      + "</div></td></tr>");
                  }

                }, 1500);
                $('#tableBairroTeste').dynatable();
               
           }
        }).fail(function(response) {
            setTimeout(function(){
            document.getElementById('loadingB').style.display = 'none';
            $('#buttonAtualizarBairroTeste').removeAttr('disabled');
            document.getElementById('avisoSenhaB').style.display = 'none';
            document.getElementById('avisoVazioB').style.display = 'none';
            document.getElementById('sucessoB').style.display = 'none';
            document.getElementById('erroB').style.display = 'block  ';
            }, 1500);
    });
    }
}

$(document).ready(function() {
    $('#tableBairroTeste').dynatable();
});