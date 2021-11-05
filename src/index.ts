import express from 'express';

const app = express();

//Settings

app.set('port',4000)



//Starting the Server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
})