const nasaApi = "https://api.nasa.gov/planetary/apod?api_key=GobOzBSFjyXrROGJWHrOv0BAk9Xyp63P8TYYLLKK";

//Código desenvolvido em Jquery para estudo
$("#formData").submit(function (event) {
    event.preventDefault();
    //https://api.jquery.com/serializearray/
    //https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input/date
    const inputDate = $(this).serializeArray()[0].value;
    const url = `${nasaApi}&date=${inputDate}`;
    // console.log(url);

    // Chamar a API da NASA utilizando get ao invés de ajax
    //https://api.jquery.com/jquery.get/
    $.get(url, function (result) {
        // console.log(result);
        //https://stackoverflow.com/questions/38491653/jquery-show-a-flex-box -> referencia utilizada para garantir o texto ao lado da imagem, treino sobre display oculto (ver referencia no CSS)
        $("#nasa").css("display", "flex");
        $("#media").html("");

        // Lógica gerada, pois dia 9/05 tem vídeo ao invés de imagem
        if (result.media_type == "image") {
            const img = document.createElement("img");
            //https://www.w3schools.com/jsref/met_element_setattribute.asp
            img.setAttribute("src", result.url);
            //https://api.jquery.com/addclass/
            img.classList.add("imgNasa");
            // Não esquecer de criar a classe para manipular no CSS, a classe não foi criada no HTML pq é uma valor orindo da interação do JS
            $("#media").append(img);
        } else if (result.media_type == "video") {
            // Crio um iframe para incorporar o video do YouTube
            const iframe = document.createElement("iframe");
            // Defino uma class para referenciar o iframe via CSS
            iframe.classList.add("videoNasa");
            // Defino os attributos informados pelo YouTube, para isso, devo ver a opção incorporar e avaliar 
            //https://developers.google.com/youtube/iframe_api_reference
            //https://bobbyhadz.com/blog/javascript-create-element-with-attributes
            iframe.setAttribute("src", result.url);
            iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
            // Atributo importante para a responsividade, o valor é em branco, pq pelo youtube não há valor atribuído
            iframe.setAttribute("allowfullscreen", "");

            $("#media").append(iframe);
        }
        //Para exibir o texto
        $("#dados h3").text(result.title);
        $("#dados p").text(result.explanation);
    });
});