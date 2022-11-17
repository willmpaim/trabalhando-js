const buttonAdd = document.querySelector("#buscar-pacientes");

buttonAdd.addEventListener("click", function() {
   let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
       let erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
           let resposta = xhr.responseText;
           let dadosPacientes = JSON.parse(resposta);

            dadosPacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();

});

