const expreso = require('express');
const trilha = expreso.Router();
const ONGsControl = require('./controladores/ONGsControlador');
const IncidentesControl = require('./controladores/IncidentesControlador');
const ProfileControl = require('./controladores/ProfileControlador');
const SessaoControl = require('./controladores/SessaoControlador');

trilha.get('/profile', ProfileControl.listar);

trilha.post('/sessao', SessaoControl.criar);


trilha.get('/ongs', ONGsControl.listar);
trilha.post('/ongs', ONGsControl.criar);

trilha.get('/Incidentes', IncidentesControl.listar);
trilha.post('/Incidentes', IncidentesControl.criar);
trilha.delete('/Incidentes/:id',IncidentesControl.deletar );

module.exports= trilha;