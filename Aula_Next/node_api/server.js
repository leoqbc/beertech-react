const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Chamou a request: " + req.path);
  next();
});

const mockHotels = [
  {
    id: 1,
    name: "Hotel Estrela",
    desc: "Hotel teste 123 mais 123",
  },
  {
    id: 2,
    name: "Hotel Carvalho de Lima",
    desc: "Hotel 5 estrelas muito bom para descansar",
  },
  {
    id: 3,
    name: "Hotel Garfield",
    desc: "Hotel 4 estrelas com bom preço",
  },
  {
    id: 4,
    name: "Hotel Pipoca",
    desc: "Hotel 5 estrelas com direito a pipoca",
  },
  {
    id: 5,
    name: "Hotel Novo",
    desc: "Hotel 3 começando ainda",
  },
  {
    id: 6,
    name: "Hotel Bora Toma UMA!!",
    desc: "Hotel da AB Inbev",
  },
];

app.get("/hotels", (req, res) => {
  res.statusCode = 200;
  res.json(mockHotels);
});

app.get("/hotels/:id", (req, res) => {
  const id = Number(req.params.id);

  const hotel = mockHotels.filter((hotel) => hotel.id === id);

  res.statusCode = 200;

  res.json(hotel);
});

app.listen(5000, () => {
  console.log("Servidor Node de pé! yahuuuu");
});
