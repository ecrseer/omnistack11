const crypto = require('crypto');
//import React,{useState} from 'react';
module.exports = function gerarC(){
    return crypto.randomBytes(4).toString('HEX');
}