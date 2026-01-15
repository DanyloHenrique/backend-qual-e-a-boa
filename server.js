import express from "express";

const server = express();

server.get("/", (req, res) => {
    res.send("Hello World!");
});

const port = 3000;
server.listen(port, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${port}`);
});
