const conexao = require('../../databases/connection');
const crypto = require('crypto');

module.exports = {
    async listar(request,response){
        console.log('listat');
        const { page = 1 } = request.query;
        //const { page = 1 } = request.params;
        /* let page = request.paramds;
        page = page.IntegerparseInt(); */
        const [cnt] = await conexao('incidentes').count();
        const incidntes = await conexao('incidentes').limit(5)
        .join('ongs','ongs.id','=','incidentes.ong_id')
        .offset((page-1)*5)
        .select(['incidentes.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp', 'ongs.city',
        'ongs.uf'
    
    ]);
        response.header('X-Total-Count',cnt['count(*)']  );
        response.json(incidntes);
    },
    async criar(request,response){
        const { title,description,value } = request.body;
        const ong_id = request.headers.autorizacao;
        
        const [ result ] = await conexao('incidentes').insert({
            title,
            description,
            value,
            ong_id
        });
        //ou const id = result [0];
        console.log(result);
        return response.json({result});



    },
    async deletar(request,response){
        const { id } = request.params;
        const ong_id = request.headers.autorizacao;
        console.log(ong_id);

        const incidntes  = await conexao('incidentes').where('id',id)
        .select('ong_id')
        .first();
        if(incidntes.ong_id != ong_id){
            return response.status(401).json({error: 'operacao nao permitida'});
        }

        await conexao('incidentes').where('id',id).delete();
        return response.status(204).send();

    },
    async deletarTds(request,response){
        
        try{
        await conexao('incidentes').delete();
        return response.status(204).send();
        }catch(err){
        return console.log(err);}

    },

}