const express = require('express');
const { appendFile } = require('fs');
const path = require('path');
const auditlog = require('./middleware/auditlogs')
const server = express();


// server.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
//   })

//static folder

server.use(express.static(path.join(__dirname, 'public')));

server.use(auditlog);

server.get('/api/backend/user', (req,res)=>{
  res.send('Helloooooo');

})

server.post('/api/backend/user', (req,res)=>{
  res.send(req.body);

})

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running at port ${PORT}/`));