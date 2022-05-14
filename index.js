// /*https://api.nasa.gov/planetary/apod?api_key=GobOzBSFjyXrROGJWHrOv0BAk9Xyp63P8TYYLLKK*/

const nasaApi = "https://api.nasa.gov/planetary/apod?api_key=GobOzBSFjyXrROGJWHrOv0BAk9Xyp63P8TYYLLKK";

$("#formData").submit(function (event) {
    event.preventDefault();
    const inputDate = $(this).serializeArray()[0].value;
    const url = `${nasaApi}&date=${inputDate}`;
    console.log(url);
    // Chamar a API da NASA
    // Criar o DOM pra mostrar o retorno
});

// let botaoEnviar = document.querySelector("#envia");
// botaoEnviar.addEventListener('click', function(event){
//     event.preventDefault();
//     apod();
// })

// function apod(){
//     let dataInput = document.querySelector ('recebeData[type="date"]').value;

//     $.ajax({'https://api.nasa.gov/planetary/apod?api_key=GobOzBSFjyXrROGJWHrOv0BAk9Xyp63P8TYYLLKK=${dataInput}',success:function(result){
//         let img = result.hdurl
//         $.('#imagem').attr("src",img)
//     })
// }