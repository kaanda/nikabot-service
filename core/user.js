const request = require("request");

const configuracoesCabecalhoHttp = {
    "headers": { 
        "content-type": "application/json",
        "Authorization": "Bearer ASSrJVRVjEGNiQ6lHlA+9YOUMkinoNPoJd3O1041PHCv/e51S0Ac7WKWKEbtUiHO7AUSOaXLnBpN6IncZ0dtd5k1GTpQc8qF2scshyERSvaopmK0dPpVKtl6ys1cjPQjHvIna86gDBhI"
    }
  };

module.exports = class user {
    
    constructor(){
        this.id;
        this.name;
        this.custom_ref;
        this.deleted;
        this.presence;
        this.platform_id;
        this.team_id;
        this.is_restricted;
        this.is_ultra_restricted;
        this.is_admin;
        this.is_nikabot_admin;
        this.tz;
        this.tz_label;
        this.tz_offset;
        this.last_feedback;
        this.last_eom_reminder;
        this.is_checkin_excluded;
        this.create_date;
        this.created_at;
        this.type;
        this.updated_at;

        this.totalDeHoras = 0;

    }

    nomeDoUsuario(){
        return this.name;
    }

    adicionaHorario(horario){
        return this.totalDeHoras += horario;
    }

    static buscaTodosOsUsuarios(callback) {
        const urlConsultaAPIUsuarios = "https://api.nikabot.com/api/v1/users?limit=100&page=0";
        const colecaoDeUsuarios = [];
        const recebendoDadosNika2 = (erro, resposta, conteudo) => {
            const usuarios = JSON.parse(conteudo);
            console.log(`Total de usuários da Noone: ${usuarios.result.length}`);
            console.log(`O nome dos usuários são:`);

            for (var i = 0; i < usuarios.result.length; i++) {
                const usuario = Object.assign(new user(), usuarios.result[i]);
                colecaoDeUsuarios.push(usuario);  
            }
            callback(colecaoDeUsuarios);
        }

        request.get(urlConsultaAPIUsuarios, configuracoesCabecalhoHttp, recebendoDadosNika2);
    }

}