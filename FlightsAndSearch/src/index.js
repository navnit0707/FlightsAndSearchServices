//common js moduling
const express = require("express");
require("dotenv").config();

const setupAndStartServer = async () => {
  // create the express object
  const app = express();

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
};

setupAndStartServer();
