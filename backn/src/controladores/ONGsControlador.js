   
   const conexao = require('../../databases/connection');
   const geraC = require('../../nads/gerador');
module.exports = {
    


    async listar(request,response) {
        
        const ongs = await conexao('ongs').select('*');
        
        return response.json(ongs);
    },

    async criar(request,response){
    const { name,email,whatsapp, city, uf} = request.body;
    //const ukrl = request.query;
    const id = geraC();
    console.log(`vou inserir o ${name}`);
    await conexao('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,    });

    return response.json({ id    });
    }

};

