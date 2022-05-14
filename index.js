const nasaApi = "https://api.nasa.gov/planetary/apod?api_key=GobOzBSFjyXrROGJWHrOv0BAk9Xyp63P8TYYLLKK";

$("#formData").submit(function (event) {
    event.preventDefault();
    const inputDate = $(this).serializeArray()[0].value;
    const url = `${nasaApi}&date=${inputDate}`;
    console.log(url);

    // Chamar a API da NASA
    $.get(nasaApi, function (result){
        $('#return').load(result);
    })

    // Criar o DOM pra mostrar o retorno
    const submit = document.getElementById('inputDate');
    submit.onclick = url;
});