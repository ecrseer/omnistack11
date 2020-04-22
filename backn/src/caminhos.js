const expreso = require('express');
 const { celebrate,Segments,Joi } = require('celebrate');
const trilha = expreso.Router();
const SessaoControl = require('./controladores/SessaoControlador');
const ONGsControl = require('./controladores/ONGsControlador');
const IncidentesControl = require('./controladores/IncidentesControlador');
const ProfileControl = require('./controladores/ProfileControlador');


trilha.get('/profile',celebrate(
    {
        [Segments.HEADERS]: Joi.object(
            {
                autorizacao: Joi.string().required(),
            }
        ).unknown(),
    }
), ProfileControl.listar);

trilha.post('/sessao',SessaoControl.criar);


trilha.get('/ongs', ONGsControl.listar);
trilha.post('/ongs',celebrate(
    {
        [Segments.BODY]: Joi.object().keys(
            {
                name: Joi.string().required(),
                email: Joi.string().required().email(),
                whatsapp: Joi.string().required().min(10).max(11),
                city: Joi.string().required(),
                uf: Joi.string().required().length(2),
            }
        ),
    }
), ONGsControl.criar);

trilha.get('/Incidentes',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
}), IncidentesControl.listar);
trilha.post('/Incidentes', IncidentesControl.criar);

trilha.delete('/Incidentes/:id',
celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
})
,IncidentesControl.deletar );

trilha.delete('/IncidentesRemove',IncidentesControl.deletarTds);

module.exports= trilha;