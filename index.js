const request = require("request");
const user = require("./core/user")

const tokenAcessoAPINikabot = "Bearer ASSrJVRVjEGNiQ6lHlA+9YOUMkinoNPoJd3O1041PHCv/e51S0Ac7WKWKEbtUiHO7AUSOaXLnBpN6IncZ0dtd5k1GTpQc8qF2scshyERSvaopmK0dPpVKtl6ys1cjPQjHvIna86gDBhI";
const nomeQueRefenciaPastaProjetoNikabot = "Unimed Mapeamento Beneficiário";

const configuracoesCabecalhoHttp = {
    "headers": { 
        "content-type": "application/json",
        "Authorization": "Bearer ASSrJVRVjEGNiQ6lHlA+9YOUMkinoNPoJd3O1041PHCv/e51S0Ac7WKWKEbtUiHO7AUSOaXLnBpN6IncZ0dtd5k1GTpQc8qF2scshyERSvaopmK0dPpVKtl6ys1cjPQjHvIna86gDBhI"
    }
  };

const urlConsultaAPIProjetos = "https://api.nikabot.com/api/v1/projects?limit=100&page=0";
const recebendoDadosNika = (erro, resposta, conteudo) => {
    const projetos = JSON.parse(conteudo);
    console.log(`Total de projetos que da Noone: ${projetos.result.length}`);
    console.log(`O nome dos projetos são:`);

    for (var i = 0; i < projetos.result.length; i++) {
        const projeto = projetos.result[i];

        if (nomeQueRefenciaPastaProjetoNikabot == projeto.project_name){
            console.log(projeto.project_name);
        }
    
     }
}
request.get(urlConsultaAPIProjetos, configuracoesCabecalhoHttp, recebendoDadosNika);



user.buscaTodosOsUsuarios((usuarios) => console.log(usuarios))


//Consulta de horas pelo id do projeto
//https://api.nikabot.com/api/v1/records?dateEnd=01%2F05%2F2019&dateStart=01%2F04%2F2019&limit=100&page=0&projectId=5c702cb363986f001465fe87