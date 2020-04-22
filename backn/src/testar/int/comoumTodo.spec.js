const pseudoserv = require('supertest');
const app = require('../../index');
const knexconex = require('../../../databases/connection');

function comoIncluir(){
    beforeEach(async()=>{
        await knexconex.migrate.rollback();
        await knexconex.migrate.latest();
    })

    it('Ser incluida: ',dessaForma);

    afterEach(async () => {
        await knexconex.destroy();
    });    

}
async function dessaForma(){
    const resposta = await pseudoserv(app).post('/ongs')
    //.set('autorizacao','oi')
    .send({ 
        name: " as animais 42",
        email: "algum@eita.com",
        whatsapp: "4002892211",
        city: "Rio de janeir",
        uf:"RJ"
    });
         
    expect(resposta.body.id).toHaveLength(8);
    expect(resposta.body).toHaveProperty('id');
}

describe('uma ONG deve',comoIncluir);