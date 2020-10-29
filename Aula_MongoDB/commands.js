// show databases;

// show collections;

db.createCollection("suacollection")

// ou

db.hotels.insertOne({
    nome: "teste",
    sobrenome: "teste"
}) // já cria collection e addiciona um documento

db.clientes.insertOne({
    _id: UUID(),
    nome: "teste",
    sobrenome: "teste"
}) // com UUID

db.clientes.insertMany([
    { nome: "Leo", email: "leo@gmail.com" },
    { nome: "Ana", email: "ana@gmail.com" }
]);

// REGEX
db.users.find({
  nome: /^Le/
});

// nome e email
db.users.find({
  $or: [ { nome: /^Le/ }, { email: /^tu/ } ]
});

db.users.find({
  idade: { $gt: 12, $lt: 21 }
})


db.clientes.createIndex( { nome: "text", email: "text" } )

db.clientes.find({
    $text: {
        $search: "Pedro pedrada"
    }
})

// retorna todos os registros
db.hotels.find() // retorna todas collections

db.hotels.find({
    _id: ObjectId('234234235235')
}) // retorna uma collection

db.hotels.find({
    campos: "valor"
})

db.hotels.find({
    campos: /regexp/
})

db.hotels.find({
    $or: [
        { campo: 123 },
        { campo: 456 }
    ]
})

// alterar um campo, { filtro }, { $set: campo: "valor" }
db.hotels.updateOne({ campo: "teste" }, { $set: { campo: "novo valor" } })

// adicionar novo campo
db.hotels.updateOne({ campo: "teste" }, { $set: { novocampo: "valor" } })

// remove um campo
db.hotels.updateOne({ campo: "teste" }, { $unset: { campo: "" } })

db.hotels.updateMany({ campo: "valor" }, { $set: { novocampo: "valor" } })

db.hotels.deleteOne({ campo: "valor" })

db.hotels.deleteMany({ campo: "valor" })

// Join usando aggregate $lookup v4+
db.rooms.aggregate([{
  $lookup: {
      from: "hotels",
      localField: "hotel_id",
      foreignField: "_id",
      as: "hotel"
  }
}])


db.hotels.aggregate([{
  $lookup: {
      from: "rooms",
      localField: "_id",
      foreignField: "hotel_id",
      as: "rooms"
  }
}]);