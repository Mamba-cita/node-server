const express = require('express');
const auditlog = require('./middleware/auditlogs')
const work = require('./routes/work')
const server = express();



//middleware
server.use(auditlog);
server.use(express.json());




server.use('/afri/api/backend/work',work);





const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running at port ${PORT}/`));