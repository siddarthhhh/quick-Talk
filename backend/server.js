const express=require('express');
const { chats } = require('./data/data');
const dotenv=require('dotenv');
dotenv.config();


const app=express();

app.get('/',(req,res)=>{
    res.send('chill');
})

app.get('/chats',(req,res)=>{
    res.send(chats);
})

app.get('/chats/:id', (req, res) => {
  const id = req.params.id;
  const chat = chats.find(c => c._id === id);

  if (chat) {
    res.json(chat);
  } else {
    res.status(404).json({ message: 'Chat not found' });
  }
});


app.listen(process.env.PORT||5000,()=>{
    console.log('happyily running server on port 5000')
})


