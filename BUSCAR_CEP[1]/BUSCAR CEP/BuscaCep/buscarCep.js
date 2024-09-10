document.getElementById("entradaCep").addEventListener("input", async function (e) {

  let cep = e.target.value
  console.log(cep)

  if (cep.length === 8) {
    try {
      var resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      var objResp = await resp.json();
      //console.log(objResp);

      if (objResp.erro) {
        document.getElementById("erro").value = "CEP não encontrado.";

        document.getElementById("cep").value = "";
        document.getElementById("rua").value = "";
        document.getElementById("bairro").value = "";
        document.getElementById("estado").value = "";
        document.getElementById("cidade").value = "";
        document.getElementById("uf").value = "";
        document.getElementById("erro").innerHTML = "CEP INVÁLIDO"

      } else {

        document.getElementById("cep").value = objResp.cep
        document.getElementById("rua").value = objResp.logradouro
        document.getElementById("bairro").value = objResp.bairro
        document.getElementById("estado").value = objResp.estado
        document.getElementById("cidade").value = objResp.localidade
        document.getElementById("uf").value = objResp.uf
        document.getElementById("erro").innerHTML = ""

      }
    } catch {
      if (objResp.erro) {
        console.log('Erro na consulta do CEP:', error);
      }
    }
  }
}
)