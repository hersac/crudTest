import app from "./src/app";

app.set('port', process.env.PORT || 2000);

app.listen(app.get('port'), ()=>{
    console.log("Servidor corriendo en puerto:", app.get('port'));
    
});

const dbConfig = require('./src/config/dbConfig');