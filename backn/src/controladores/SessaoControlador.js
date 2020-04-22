const conexao = require('../../databases/connection');
const crypto = require('crypto');
module.exports ={

    async criar(request,response){
        
        console.log("la vem ong_id" );
         //const { id } = request.body; 
        const id = request.headers.autorizacao;
        console.log(`vou procurar o ${id}`);
        const ong = await conexao('ongs').
        where('id',id).
        select('name').
        first();

       
        if(!ong)
            return response.status(400).json({ error: 'nenhuma ong encontrada com esse id'});
        
        console.log("la vem json ong" );
        return response.json(ong);


    }
}