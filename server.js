const express = require('express');
const server = express();


server.get('/', (req, res) => {
    res.send('Hello World!')
  })






const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running at port ${PORT}/`));