const gerarID = require('../../../nads/gerador');

function testeIdUnico(){
    it('deve gerar id unico',idUnicoDeveser);
}
function idUnicoDeveser(){
    const id = gerarID();
    expect(id).toHaveLength(8);
}


describe('gerar id unico',testeIdUnico);