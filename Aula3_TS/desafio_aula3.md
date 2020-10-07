## Desafio BeerTech Talents - Typescript

Transformar o código anterior do player para Typescript, usando funcionalidades como Tipagem(parametros e retornos), Interfaces, Atributos, Classes, Generics e etc..

Segue abaixo a usabilidade como typescript:

```typescript
const video: CustomPlayer = new CustomPlayer(320, 240, "Your browser does not support the video tag.");

video.setSources([
    {src: "movie.mp4", type: "video/mp4"},
    {src: "movie.ogg", type: "video/ogg"}
]);

video.render("MyPlayerId");
```