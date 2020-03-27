const expreso = require('express');
const caminhar = require('./caminhos.js');
const cors = require('cors');
const app = expreso();

app.use(cors(
    /* {
        origin:"meuapp.com"
    } */
));
app.use(expreso.json());
//ata sei

app.use(caminhar);

app.listen(3333);