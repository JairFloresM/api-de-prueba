const express = require('express');
const app = express();
const morgan = require('morgan');


app.set('port', 4000);
app.set('json spaces', 2);
app.set(express.json());
app.set(morgan('dev'));


//ruta de la api
app.get('/api', (req, res) => {
    res.json(
        {
            "Title": "Hola mundo"
        }
    );
})

//ruta de la api
app.get('/sonar', (req, res) => {
    // Error deliberado: falta de manejo de error
    // throw new Error('Simulated error');
    res.json(
        {
            message: "SonarQube_test",
        }
    );
})

//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});
