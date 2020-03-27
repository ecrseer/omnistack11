const conexao = require('../../databases/connection');

module.exports ={

    async criar(request,response){
        const ong_id = request.headers.autorizacao;
        console.log(ong_id);
        const ong = await conexao('ongs').where('id',ong_id).select('name').first();

        if(!ong)
        return response.status(400).json({ error: 'nenhuma ong encontrada com esse id'});


        return response.json(ong);


    }
}