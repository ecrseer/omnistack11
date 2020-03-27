const conexao = require('../../databases/connection');
module.exports = {

    async listar(request,response){
        const ong_id = request.headers.autorizacao;
        const ongsEinci = await conexao('incidentes').where('ong_id',ong_id).select('*');
        return response.json(ongsEinci);


    }
}