var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    let buscaPacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (let i = 0; i < buscaPacientes.length; i++) {
            let paciente = buscaPacientes[i];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
            let expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (let i = 0; i < buscaPacientes.length; i++) {
            let paciente = buscaPacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
