## Desafio BeerTech EcmaScript

Crie um componente visual usando ES6+ que fará o embed de um vídeo usando a tag video, a classe deve renderizar uma tag vídeo de acordo com a usabilidade abaixo:

E como deve ser a usabilidade do código:
```javascript
const video = new CustomPlayer(320, 240, "Your browser does not support the video tag.");

video.setSources([
    {src: "movie.mp4", type: "video/mp4"},
    {src: "movie.ogg", type: "video/ogg"}
]);

video.render("MyPlayerId");
```

Como deve ser a saída no DOM
```html
<section id="MyPlayerId">
    <video width="320" height="240" controls>
        <source src="movie.mp4" type="video/mp4">
        <source src="movie.ogg" type="video/ogg">
        Your browser does not support the video tag.
    </video>
</section>
```