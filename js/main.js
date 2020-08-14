function upload() {
  $('#buttonUploadExcel').attr('disabled','disabled');
  const uploadExcel = document.getElementById('uploadExcel');
  const buttonUploadExcel = document.getElementById('buttonUploadExcel');
  document.getElementById('loadingU').style.display = 'block';
  document.getElementById('avisoVazioU').style.display = 'none';
  document.getElementById('avisoVazioU').style.display = 'none';
  document.getElementById('sucessoU').style.display = 'none';
  document.getElementById('erroU').style.display = 'none';
  document.getElementById('avisoTipoU').style.display = 'none';
  document.getElementById('erroSalvar').style.display = 'none';
    const url = 'http://localhost:3000/upload';
    const formData = new FormData();
    formData.append('file', uploadExcel.files[0]);
    fetch(url, {
      method: 'post',
      body: formData
    }).then(function(response) { 
    response.json().then(function(data) {
      if (data == 'Arquivo salvo com sucesso!') {
        setTimeout(function(){
          document.getElementById('loadingU').style.display = 'none';
          document.getElementById('avisoVazioU').style.display = 'none';
          document.getElementById('sucessoU').style.display = 'block';
          document.getElementById('erroU').style.display = 'none';
          document.getElementById('avisoTipoU').style.display = 'none';
          document.getElementById('erroSalvar').style.display = 'none';
          $('#buttonUploadExcel').removeAttr('disabled');
        }, 1500);
      } else if (data == 'Arquivo vazio!') {
        setTimeout(function(){
          document.getElementById('loadingU').style.display = 'none';
          document.getElementById('avisoVazioU').style.display = 'block';
          document.getElementById('sucessoU').style.display = 'none';
          document.getElementById('erroU').style.display = 'none';
          document.getElementById('avisoTipoU').style.display = 'none';
          document.getElementById('erroSalvar').style.display = 'none';
          $('#buttonUploadExcel').removeAttr('disabled');
          document.getElementById('uploadExcel').focus();
        }, 1500);
      } else if (data == 'O arquivo não possui uma extensão (.xlsx) permitida!') {
        setTimeout(function(){
          document.getElementById('loadingU').style.display = 'none';
          document.getElementById('avisoVazioU').style.display = 'none';
          document.getElementById('sucessoU').style.display = 'none';
          document.getElementById('erroU').style.display = 'none';
          document.getElementById('avisoTipoU').style.display = 'block';
          document.getElementById('erroSalvar').style.display = 'none';
          $('#buttonUploadExcel').removeAttr('disabled');
          document.getElementById('uploadExcel').focus();
        }, 1500);
      } else if (data == 'Erro no upload') {
        setTimeout(function(){
          document.getElementById('loadingU').style.display = 'none';
          document.getElementById('avisoVazioU').style.display = 'none';
          document.getElementById('sucessoU').style.display = 'none';
          document.getElementById('erroU').style.display = 'none';
          document.getElementById('avisoTipoU').style.display = 'none';
          document.getElementById('erroSalvar').style.display = 'block';
          $('#buttonUploadExcel').removeAttr('disabled');
          document.getElementById('uploadExcel').focus();
        }, 1500);
      }
    });

    }).catch(function(err) { 
      setTimeout(function(){
        document.getElementById('loadingU').style.display = 'none';
        document.getElementById('avisoVazioU').style.display = 'none';
        document.getElementById('sucessoU').style.display = 'none';
        document.getElementById('avisoTipoU').style.display = 'none';
        document.getElementById('erroSalvar').style.display = 'none';
        document.getElementById('erroU').style.display = 'block';
        $('#buttonUploadExcel').removeAttr('disabled');
      }, 1500);
    });
}

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
    document.getElementById('resultBairroTeste').style.display = 'none';
    document.getElementById('resultBairroProducao').style.display = 'none';
    var passwordBairro = document.getElementById('passwordBairro');
    var table = document.getElementById("tableBairroTeste");

    if (passwordBairro.value == '') {
        document.getElementById('loadingB').style.display = 'block';
        $('#buttonAtualizarBairro').attr('disabled','disabled');
        document.getElementById('avisoSenhaB').style.display = 'none';
        document.getElementById('avisoVazioB').style.display = 'none';
        document.getElementById('sucessoB').style.display = 'none';
        document.getElementById('erroB').style.display = 'none';
        setTimeout(function(){
          $('#buttonAtualizarBairro').removeAttr('disabled');
          document.getElementById('loadingB').style.display = 'none';
          document.getElementById('avisoSenhaB').style.display = 'none';
          document.getElementById('avisoVazioB').style.display = 'block';
          document.getElementById('sucessoB').style.display = 'none';
          document.getElementById('erroB').style.display = 'none';
          document.getElementById('passwordBairro').focus();
        }, 1500);
    } else {
        document.getElementById('loadingB').style.display = 'block';
        $('#buttonAtualizarBairro').attr('disabled','disabled');
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
            $('#buttonAtualizarBairro').removeAttr('disabled');
            document.getElementById('avisoSenhaB').style.display = 'block';
            document.getElementById('avisoVazioB').style.display = 'none';
            document.getElementById('sucessoB').style.display = 'none';
            document.getElementById('erroB').style.display = 'none';
            document.getElementById('passwordBairro').focus();
            }, 1500);
           } else if (data.msg == 'DADOS DE BAIRROS (PONTOS) ATUALIZADO NO DASHBOARD DE TESTE') {
                setTimeout(function(){
                document.getElementById('loadingB').style.display = 'none';
                $('#buttonAtualizarBairro').removeAttr('disabled');
                document.getElementById('avisoSenhaB').style.display = 'none';
                document.getElementById('avisoVazioB').style.display = 'none';
                document.getElementById('sucessoB').style.display = 'none';
                document.getElementById('erroB').style.display = 'none';

                $(document).ready(function() {
                  $('#tableBairroTeste').dataTable( {
                      data: data.log.updateResults,
                      destroy: true,
                      columns: [
                          { data: "objectId" },
                          { data: "success" },
                          { data: "uniqueId" }
                      ]
                  });
                });

                  document.getElementById('resultBairroTeste').style.display = 'block';
                 }, 1500);
           }
        }).fail(function(response) {
            setTimeout(function(){
            document.getElementById('loadingB').style.display = 'none';
            $('#buttonAtualizarBairro').removeAttr('disabled');
            document.getElementById('avisoSenhaB').style.display = 'none';
            document.getElementById('avisoVazioB').style.display = 'none';
            document.getElementById('sucessoB').style.display = 'none';
            document.getElementById('erroB').style.display = 'block  ';
            }, 1500);
    });
    }
}

function atualizarBairroProucao () {
    document.getElementById('resultBairroTeste').style.display = 'none';
    document.getElementById('resultBairroProducao').style.display = 'none';
    var passwordBairro = document.getElementById('passwordBairro');
    var table = document.getElementById("tableBairroProducao");

    if (passwordBairro.value == '') {
        document.getElementById('loadingB').style.display = 'block';
        $('#buttonAtualizarBairro').attr('disabled','disabled');
        document.getElementById('avisoSenhaB').style.display = 'none';
        document.getElementById('avisoVazioB').style.display = 'none';
        document.getElementById('sucessoB').style.display = 'none';
        document.getElementById('erroB').style.display = 'none';
        setTimeout(function(){
          $('#buttonAtualizarBairro').removeAttr('disabled');
          document.getElementById('loadingB').style.display = 'none';
          document.getElementById('avisoSenhaB').style.display = 'none';
          document.getElementById('avisoVazioB').style.display = 'block';
          document.getElementById('sucessoB').style.display = 'none';
          document.getElementById('erroB').style.display = 'none';
          document.getElementById('passwordBairro').focus();
        }, 1500);
    } else {
        document.getElementById('loadingB').style.display = 'block';
        $('#buttonAtualizarBairro').attr('disabled','disabled');
        document.getElementById('avisoSenhaB').style.display = 'none';
        document.getElementById('avisoVazioB').style.display = 'none';
        document.getElementById('sucessoB').style.display = 'none';
        document.getElementById('erroB').style.display = 'none'; 

        var data = {
            password: passwordBairro.value
        };

        $.post('http://localhost:3000/dashbairroprod',
        data)
        .done(function(data) {
           if (data.Erro == 'Senha incorreta!') {
            setTimeout(function(){
            document.getElementById('loadingB').style.display = 'none';
            $('#buttonAtualizarBairro').removeAttr('disabled');
            document.getElementById('avisoSenhaB').style.display = 'block';
            document.getElementById('avisoVazioB').style.display = 'none';
            document.getElementById('sucessoB').style.display = 'none';
            document.getElementById('erroB').style.display = 'none';
            document.getElementById('passwordBairro').focus();
            }, 1500);
           } else if (data.msg == 'DADOS DE BAIRROS (PONTOS) ATUALIZADO NO DASHBOARD DE PRODUÇÃO') {
                setTimeout(function(){
                document.getElementById('loadingB').style.display = 'none';
                $('#buttonAtualizarBairro').removeAttr('disabled');
                document.getElementById('avisoSenhaB').style.display = 'none';
                document.getElementById('avisoVazioB').style.display = 'none';
                document.getElementById('sucessoB').style.display = 'none';
                document.getElementById('erroB').style.display = 'none';

                $(document).ready(function() {
                  $('#tableBairroProducao').dataTable( {
                      data: data.log.updateResults,
                      destroy: true,
                      columns: [
                          { data: "objectId" },
                          { data: "success" },
                          { data: "uniqueId" }
                      ]
                  });
                });

                  document.getElementById('resultBairroProducao').style.display = 'block';
                 }, 1500);
           }
        }).fail(function(response) {
            setTimeout(function(){
            document.getElementById('loadingB').style.display = 'none';
            $('#buttonAtualizarBairro').removeAttr('disabled');
            document.getElementById('avisoSenhaB').style.display = 'none';
            document.getElementById('avisoVazioB').style.display = 'none';
            document.getElementById('sucessoB').style.display = 'none';
            document.getElementById('erroB').style.display = 'block  ';
            }, 1500);
    });
    }
}

function atualizarTematicoTeste () {
    document.getElementById('resultTematicoTeste').style.display = 'none';
    document.getElementById('resultTematicoProducao').style.display = 'none';
    var passwordTematico = document.getElementById('passwordTematico');
    var table = document.getElementById("tableTematicoTeste");

    if (passwordTematico.value == '') {
        document.getElementById('loadingT').style.display = 'block';
        $('#buttonAtualizarTematico').attr('disabled','disabled');
        document.getElementById('avisoSenhaT').style.display = 'none';
        document.getElementById('avisoVazioT').style.display = 'none';
        document.getElementById('sucessoT').style.display = 'none';
        document.getElementById('erroT').style.display = 'none';
        setTimeout(function(){
          $('#buttonAtualizarTematico').removeAttr('disabled');
          document.getElementById('loadingT').style.display = 'none';
          document.getElementById('avisoSenhaT').style.display = 'none';
          document.getElementById('avisoVazioT').style.display = 'block';
          document.getElementById('sucessoT').style.display = 'none';
          document.getElementById('erroT').style.display = 'none';
          document.getElementById('passwordTematico').focus();
        }, 1500);
    } else {
        document.getElementById('loadingT').style.display = 'block';
        $('#buttonAtualizarTematico').attr('disabled','disabled');
        document.getElementById('avisoSenhaT').style.display = 'none';
        document.getElementById('avisoVazioT').style.display = 'none';
        document.getElementById('sucessoT').style.display = 'none';
        document.getElementById('erroT').style.display = 'none'; 

        var data = {
            password: passwordTematico.value
        };

        $.post('http://localhost:3000/dashtematicoteste',
        data)
        .done(function(data) {
           if (data.Erro == 'Senha incorreta!') {
            setTimeout(function(){
            document.getElementById('loadingT').style.display = 'none';
            $('#buttonAtualizarTematico').removeAttr('disabled');
            document.getElementById('avisoSenhaT').style.display = 'block';
            document.getElementById('avisoVazioT').style.display = 'none';
            document.getElementById('sucessoT').style.display = 'none';
            document.getElementById('erroT').style.display = 'none';
            document.getElementById('passwordBairro').focus();
            }, 1500);
           } else if (data.msg == 'DADOS DE BAIRROS (TEMÁTICO) ATUALIZADO NO DASHBOARD DE TESTE') {
                setTimeout(function(){
                document.getElementById('loadingT').style.display = 'none';
                $('#buttonAtualizarTematico').removeAttr('disabled');
                document.getElementById('avisoSenhaT').style.display = 'none';
                document.getElementById('avisoVazioT').style.display = 'none';
                document.getElementById('sucessoT').style.display = 'none';
                document.getElementById('erroT').style.display = 'none';

                $(document).ready(function() {
                  $('#tableTematicoTeste').dataTable( {
                      data: data.log.updateResults,
                      destroy: true,
                      columns: [
                          { data: "objectId" },
                          { data: "success" },
                          { data: "uniqueId" }
                      ]
                  });
                });
                
                  document.getElementById('resultTematicoTeste').style.display = 'block';
                 }, 1500);
           }
        }).fail(function(response) {
            setTimeout(function(){
            document.getElementById('loadingT').style.display = 'none';
            $('#buttonAtualizarTematico').removeAttr('disabled');
            document.getElementById('avisoSenhaT').style.display = 'none';
            document.getElementById('avisoVazioT').style.display = 'none';
            document.getElementById('sucessoT').style.display = 'none';
            document.getElementById('erroT').style.display = 'block  ';
            }, 1500);
    });
    }
}

function atualizarTematicoProducao () {
    document.getElementById('resultTematicoTeste').style.display = 'none';
    document.getElementById('resultTematicoProducao').style.display = 'none';
    var passwordTematico = document.getElementById('passwordTematico');
    var table = document.getElementById("tableTematicoProducao");

    if (passwordTematico.value == '') {
        document.getElementById('loadingT').style.display = 'block';
        $('#buttonAtualizarTematico').attr('disabled','disabled');
        document.getElementById('avisoSenhaT').style.display = 'none';
        document.getElementById('avisoVazioT').style.display = 'none';
        document.getElementById('sucessoT').style.display = 'none';
        document.getElementById('erroT').style.display = 'none';
        setTimeout(function(){
          $('#buttonAtualizarTematico').removeAttr('disabled');
          document.getElementById('loadingT').style.display = 'none';
          document.getElementById('avisoSenhaT').style.display = 'none';
          document.getElementById('avisoVazioT').style.display = 'block';
          document.getElementById('sucessoT').style.display = 'none';
          document.getElementById('erroT').style.display = 'none';
          document.getElementById('passwordTematico').focus();
        }, 1500);
    } else {
        document.getElementById('loadingT').style.display = 'block';
        $('#buttonAtualizarTematico').attr('disabled','disabled');
        document.getElementById('avisoSenhaT').style.display = 'none';
        document.getElementById('avisoVazioT').style.display = 'none';
        document.getElementById('sucessoT').style.display = 'none';
        document.getElementById('erroT').style.display = 'none'; 

        var data = {
            password: passwordTematico.value
        };

        $.post('http://localhost:3000/dashtematicaprod',
        data)
        .done(function(data) {
           if (data.Erro == 'Senha incorreta!') {
            setTimeout(function(){
            document.getElementById('loadingT').style.display = 'none';
            $('#buttonAtualizarTematico').removeAttr('disabled');
            document.getElementById('avisoSenhaT').style.display = 'block';
            document.getElementById('avisoVazioT').style.display = 'none';
            document.getElementById('sucessoT').style.display = 'none';
            document.getElementById('erroT').style.display = 'none';
            document.getElementById('passwordBairro').focus();
            }, 1500);
           } else if (data.msg == 'DADOS DE BAIRROS (TEMÁTICO) ATUALIZADO NO DASHBOARD DE PRODUÇÃO') {
                setTimeout(function(){
                document.getElementById('loadingT').style.display = 'none';
                $('#buttonAtualizarTematico').removeAttr('disabled');
                document.getElementById('avisoSenhaT').style.display = 'none';
                document.getElementById('avisoVazioT').style.display = 'none';
                document.getElementById('sucessoT').style.display = 'none';
                document.getElementById('erroT').style.display = 'none';

                  $(document).ready(function() {
                  $('#tableTematicoProducao').dataTable( {
                      data: data.log.updateResults,
                      destroy: true,
                      columns: [
                          { data: "objectId" },
                          { data: "success" },
                          { data: "uniqueId" }
                      ]
                  });
                });


                  document.getElementById('resultTematicoProducao').style.display = 'block';
                 }, 1500);
           }
        }).fail(function(response) {
            setTimeout(function(){
            document.getElementById('loadingT').style.display = 'none';
            $('#buttonAtualizarTematico').removeAttr('disabled');
            document.getElementById('avisoSenhaT').style.display = 'none';
            document.getElementById('avisoVazioT').style.display = 'none';
            document.getElementById('sucessoT').style.display = 'none';
            document.getElementById('erroT').style.display = 'block  ';
            }, 1500);
    });
    }
}

function deletarGeralTeste () {
  document.getElementById('resultGeralTesteDeletar').style.display = 'none';
  document.getElementById('resultGeralProdDeletar').style.display = 'none';
  document.getElementById('resultGeralTeste').style.display = 'none';
  document.getElementById('resultGeralProducao').style.display = 'none';
  var passwordGeral = document.getElementById('passwordGeral');
  var table = document.getElementById("tableTGeralTesteDeletar");

  if (passwordGeral.value == '') {
      document.getElementById('loadingG').style.display = 'block';
      $('#buttonAtualizarGeral').attr('disabled','disabled');
      document.getElementById('avisoSenhaG').style.display = 'none';
      document.getElementById('avisoVazioG').style.display = 'none';
      document.getElementById('sucessoG').style.display = 'none';
      document.getElementById('erroG').style.display = 'none';
      setTimeout(function(){
        $('#buttonAtualizarGeral').removeAttr('disabled');
        document.getElementById('loadingG').style.display = 'none';
        document.getElementById('avisoSenhaG').style.display = 'none';
        document.getElementById('avisoVazioG').style.display = 'block';
        document.getElementById('sucessoG').style.display = 'none';
        document.getElementById('erroG').style.display = 'none';
        document.getElementById('passwordGeral').focus();
      }, 1500);
  } else {
      document.getElementById('loadingG').style.display = 'block';
      $('#buttonAtualizarGeral').attr('disabled','disabled');
      document.getElementById('avisoSenhaG').style.display = 'none';
      document.getElementById('avisoVazioG').style.display = 'none';
      document.getElementById('sucessoG').style.display = 'none';
      document.getElementById('erroG').style.display = 'none'; 

      var data = {
          password: passwordGeral.value
      };

      $.post('http://localhost:3000/deletegeralteste',
      data)
      .done(function(data) {
         if (data.Erro == 'Senha incorreta!') {
          setTimeout(function(){
          document.getElementById('loadingG').style.display = 'none';
          $('#buttonAtualizarGeral').removeAttr('disabled');
          document.getElementById('avisoSenhaG').style.display = 'block';
          document.getElementById('avisoVazioG').style.display = 'none';
          document.getElementById('sucessoG').style.display = 'none';
          document.getElementById('erroG').style.display = 'none';
          document.getElementById('passwordGeral').focus();
          }, 1500);
         } else if (data.msg == 'DADOS GERAL DELETADO NO DASHBOARD DE TESTE') {
              setTimeout(function(){
              document.getElementById('loadingG').style.display = 'none';
              $('#buttonAtualizarGeral').removeAttr('disabled');
              document.getElementById('avisoSenhaG').style.display = 'none';
              document.getElementById('avisoVazioG').style.display = 'none';
              document.getElementById('sucessoG').style.display = 'none';
              document.getElementById('erroG').style.display = 'none';

              
                $(document).ready(function() {
                  $('#tableTGeralTesteDeletar').dataTable( {
                      data: data.log.deleteResults,
                      destroy: true,
                      columns: [
                          { data: "objectId" },
                          { data: "success" },
                          { data: "uniqueId" }
                      ]
                  });
                });

              document.getElementById('resultGeralTesteDeletar').style.display = 'block';
              }, 1500);
         }
      }).fail(function(response) {
          setTimeout(function(){
          document.getElementById('loadingG').style.display = 'none';
          $('#buttonAtualizarGeral').removeAttr('disabled');
          document.getElementById('avisoSenhaG').style.display = 'none';
          document.getElementById('avisoVazioG').style.display = 'none';
          document.getElementById('sucessoG').style.display = 'none';
          document.getElementById('erroG').style.display = 'block  ';
          }, 1500);
  });
  }
}

function atualizarGeralTeste () {
  document.getElementById('resultGeralTesteDeletar').style.display = 'none';
  document.getElementById('resultGeralProdDeletar').style.display = 'none';
  document.getElementById('resultGeralTeste').style.display = 'none';
  document.getElementById('resultGeralProducao').style.display = 'none';
  var passwordGeral = document.getElementById('passwordGeral');
  var table = document.getElementById("tableTGeralTeste");

  if (passwordGeral.value == '') {
      document.getElementById('loadingG').style.display = 'block';
      $('#buttonAtualizarGeral').attr('disabled','disabled');
      document.getElementById('avisoSenhaG').style.display = 'none';
      document.getElementById('avisoVazioG').style.display = 'none';
      document.getElementById('sucessoG').style.display = 'none';
      document.getElementById('erroG').style.display = 'none';
      setTimeout(function(){
        $('#buttonAtualizarGeral').removeAttr('disabled');
        document.getElementById('loadingG').style.display = 'none';
        document.getElementById('avisoSenhaG').style.display = 'none';
        document.getElementById('avisoVazioG').style.display = 'block';
        document.getElementById('sucessoG').style.display = 'none';
        document.getElementById('erroG').style.display = 'none';
        document.getElementById('passwordGeral').focus();
      }, 1500);
  } else {
      document.getElementById('loadingG').style.display = 'block';
      $('#buttonAtualizarGeral').attr('disabled','disabled');
      document.getElementById('avisoSenhaG').style.display = 'none';
      document.getElementById('avisoVazioG').style.display = 'none';
      document.getElementById('sucessoG').style.display = 'none';
      document.getElementById('erroG').style.display = 'none'; 

      var data = {
          password: passwordGeral.value
      };

      $.post('http://localhost:3000/dashgeralteste',
      data)
      .done(function(data) {
         if (data.Erro == 'Senha incorreta!') {
          setTimeout(function(){
          document.getElementById('loadingG').style.display = 'none';
          $('#buttonAtualizarGeral').removeAttr('disabled');
          document.getElementById('avisoSenhaG').style.display = 'block';
          document.getElementById('avisoVazioG').style.display = 'none';
          document.getElementById('sucessoG').style.display = 'none';
          document.getElementById('erroG').style.display = 'none';
          document.getElementById('passwordGeral').focus();
          }, 1500);
         } else if (data.msg == 'DADOS GERAL ATUALIZADO NO DASHBOARD DE TESTE') {
              setTimeout(function(){
              document.getElementById('loadingG').style.display = 'none';
              $('#buttonAtualizarGeral').removeAttr('disabled');
              document.getElementById('avisoSenhaG').style.display = 'none';
              document.getElementById('avisoVazioG').style.display = 'none';
              document.getElementById('sucessoG').style.display = 'none';
              document.getElementById('erroG').style.display = 'none';

                $(document).ready(function() {
                  $('#tableTGeralTeste').dataTable( {
                      data: data.log.addResults,
                      destroy: true,
                      columns: [
                          { data: "objectId" },
                          { data: "success" },
                          { data: "uniqueId" }
                      ]
                  });
                });

                document.getElementById('resultGeralTeste').style.display = 'block';
               }, 1500);
         }
      }).fail(function(response) {
          setTimeout(function(){
          document.getElementById('loadingG').style.display = 'none';
          $('#buttonAtualizarGeral').removeAttr('disabled');
          document.getElementById('avisoSenhaG').style.display = 'none';
          document.getElementById('avisoVazioG').style.display = 'none';
          document.getElementById('sucessoG').style.display = 'none';
          document.getElementById('erroG').style.display = 'block  ';
          }, 1500);
  });
  }
}

function deletarGeralProd () {
  document.getElementById('resultGeralTesteDeletar').style.display = 'none';
  document.getElementById('resultGeralProdDeletar').style.display = 'none';
  document.getElementById('resultGeralTeste').style.display = 'none';
  document.getElementById('resultGeralProducao').style.display = 'none';
  var passwordGeral = document.getElementById('passwordGeral');
  var table = document.getElementById("tableTGeralProdDeletar");

  if (passwordGeral.value == '') {
      document.getElementById('loadingG').style.display = 'block';
      $('#buttonAtualizarGeral').attr('disabled','disabled');
      document.getElementById('avisoSenhaG').style.display = 'none';
      document.getElementById('avisoVazioG').style.display = 'none';
      document.getElementById('sucessoG').style.display = 'none';
      document.getElementById('erroG').style.display = 'none';
      setTimeout(function(){
        $('#buttonAtualizarGeral').removeAttr('disabled');
        document.getElementById('loadingG').style.display = 'none';
        document.getElementById('avisoSenhaG').style.display = 'none';
        document.getElementById('avisoVazioG').style.display = 'block';
        document.getElementById('sucessoG').style.display = 'none';
        document.getElementById('erroG').style.display = 'none';
        document.getElementById('passwordGeral').focus();
      }, 1500);
  } else {
      document.getElementById('loadingG').style.display = 'block';
      $('#buttonAtualizarGeral').attr('disabled','disabled');
      document.getElementById('avisoSenhaG').style.display = 'none';
      document.getElementById('avisoVazioG').style.display = 'none';
      document.getElementById('sucessoG').style.display = 'none';
      document.getElementById('erroG').style.display = 'none'; 

      var data = {
          password: passwordGeral.value
      };

      $.post('http://localhost:3000/deletegeralprod',
      data)
      .done(function(data) {
         if (data.Erro == 'Senha incorreta!') {
          setTimeout(function(){
          document.getElementById('loadingG').style.display = 'none';
          $('#buttonAtualizarGeral').removeAttr('disabled');
          document.getElementById('avisoSenhaG').style.display = 'block';
          document.getElementById('avisoVazioG').style.display = 'none';
          document.getElementById('sucessoG').style.display = 'none';
          document.getElementById('erroG').style.display = 'none';
          document.getElementById('passwordGeral').focus();
          }, 1500);
         } else if (data.msg == 'DADOS GERAL DELETADO NO DASHBOARD DE PRODUÇÃO') {
              setTimeout(function(){
              document.getElementById('loadingG').style.display = 'none';
              $('#buttonAtualizarGeral').removeAttr('disabled');
              document.getElementById('avisoSenhaG').style.display = 'none';
              document.getElementById('avisoVazioG').style.display = 'none';
              document.getElementById('sucessoG').style.display = 'none';
              document.getElementById('erroG').style.display = 'none';

                $(document).ready(function() {
                  $('#tableTGeralProdDeletar').dataTable( {
                      data: data.log.deleteResults,
                      destroy: true,
                      columns: [
                          { data: "objectId" },
                          { data: "success" },
                          { data: "uniqueId" }
                      ]
                  });
                });

              document.getElementById('resultGeralProdDeletar').style.display = 'block';
              }, 1500);
         }
      }).fail(function(response) {
          setTimeout(function(){
          document.getElementById('loadingG').style.display = 'none';
          $('#buttonAtualizarGeral').removeAttr('disabled');
          document.getElementById('avisoSenhaG').style.display = 'none';
          document.getElementById('avisoVazioG').style.display = 'none';
          document.getElementById('sucessoG').style.display = 'none';
          document.getElementById('erroG').style.display = 'block  ';
          }, 1500);
  });
  }
}

function atualizarGeralProducao () {
  document.getElementById('resultGeralTesteDeletar').style.display = 'none';
  document.getElementById('resultGeralProdDeletar').style.display = 'none';
  document.getElementById('resultGeralTeste').style.display = 'none';
  document.getElementById('resultGeralProducao').style.display = 'none';
  var passwordGeral = document.getElementById('passwordGeral');
  var table = document.getElementById("tableTGeralProducao");

  if (passwordGeral.value == '') {
      document.getElementById('loadingG').style.display = 'block';
      $('#buttonAtualizarGeral').attr('disabled','disabled');
      document.getElementById('avisoSenhaG').style.display = 'none';
      document.getElementById('avisoVazioG').style.display = 'none';
      document.getElementById('sucessoG').style.display = 'none';
      document.getElementById('erroG').style.display = 'none';
      setTimeout(function(){
        $('#buttonAtualizarGeral').removeAttr('disabled');
        document.getElementById('loadingG').style.display = 'none';
        document.getElementById('avisoSenhaG').style.display = 'none';
        document.getElementById('avisoVazioG').style.display = 'block';
        document.getElementById('sucessoG').style.display = 'none';
        document.getElementById('erroG').style.display = 'none';
        document.getElementById('passwordGeral').focus();
      }, 1500);
  } else {
      document.getElementById('loadingG').style.display = 'block';
      $('#buttonAtualizarGeral').attr('disabled','disabled');
      document.getElementById('avisoSenhaG').style.display = 'none';
      document.getElementById('avisoVazioG').style.display = 'none';
      document.getElementById('sucessoG').style.display = 'none';
      document.getElementById('erroG').style.display = 'none'; 

      var data = {
          password: passwordGeral.value
      };

      $.post('http://localhost:3000/dashgeralprod',
      data)
      .done(function(data) {
         if (data.Erro == 'Senha incorreta!') {
          setTimeout(function(){
          document.getElementById('loadingG').style.display = 'none';
          $('#buttonAtualizarGeral').removeAttr('disabled');
          document.getElementById('avisoSenhaG').style.display = 'block';
          document.getElementById('avisoVazioG').style.display = 'none';
          document.getElementById('sucessoG').style.display = 'none';
          document.getElementById('erroG').style.display = 'none';
          document.getElementById('passwordGeral').focus();
          }, 1500);
         } else if (data.msg == 'DADOS GERAL ATUALIZADO NO DASHBOARD DE PRODUÇÃO') {
              setTimeout(function(){
              document.getElementById('loadingG').style.display = 'none';
              $('#buttonAtualizarGeral').removeAttr('disabled');
              document.getElementById('avisoSenhaG').style.display = 'none';
              document.getElementById('avisoVazioG').style.display = 'none';
              document.getElementById('sucessoG').style.display = 'none';
              document.getElementById('erroG').style.display = 'none';


                $(document).ready(function() {
                  $('#tableTGeralProducao').dataTable( {
                      data: data.log.addResults,
                      destroy: true,
                      columns: [
                          { data: "objectId" },
                          { data: "success" },
                          { data: "uniqueId" }
                      ]
                  });
                });

                document.getElementById('resultGeralProducao').style.display = 'block';
               }, 1500);
         }
      }).fail(function(response) {
          setTimeout(function(){
          document.getElementById('loadingG').style.display = 'none';
          $('#buttonAtualizarGeral').removeAttr('disabled');
          document.getElementById('avisoSenhaG').style.display = 'none';
          document.getElementById('avisoVazioG').style.display = 'none';
          document.getElementById('sucessoG').style.display = 'none';
          document.getElementById('erroG').style.display = 'block  ';
          }, 1500);
  });
  }
}
