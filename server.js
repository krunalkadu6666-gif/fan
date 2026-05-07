// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.use(express.static('kadu'));

// app.listen(PORT,()=>{
//    console.log(`server running at http://localhost:${PORT}`);
// });
const express = require('express');
const app =express();
const PORT=3000;

app.use(express.static('kadu'));

app.listen(PORT,()=>{
   console.log(`server is running at htpp://localhost:${PORT}`);

});