const express = require('express');
const routes = require('./routes');
const cors = require("cors");

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json()); // parse incoming JSON requests
app.use('/', routes);
//app.use("/users", routes);

app.listen(port, () => console.log(`Server listening on port ${port}`));
