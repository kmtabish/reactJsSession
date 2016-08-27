/**
 * Created by ttnd on 27/8/16.
 */
import express from 'express'
import path from 'path'

const app = express();
const port = 9001;

app.use('*', (req, res) => {
res.sendFile(path.join(__dirname, '..src/index.html'))
});

app.listen(port, (err) =>{
    if(err){
  console.log("error")
}else{
open(`http://localhost:${port}`)
}
  })