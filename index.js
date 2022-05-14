const nasaApi = "https://api.nasa.gov/planetary/apod?api_key=GobOzBSFjyXrROGJWHrOv0BAk9Xyp63P8TYYLLKK";

$("#formData").submit(function (event) {
    event.preventDefault();
    const inputDate = $(this).serializeArray()[0].value;
    const url = `${nasaApi}&date=${inputDate}`;
    // console.log(url);

    // Chamar a API da NASA
    $.get(url, function (result) {
        console.log(result);
        $("#return").html("");

        if (result.media_type == "image") {
            const img = document.createElement("img");
            img.setAttribute("src", result.url);
            img.classList.add("imgNasa");
            
            $("#return").append(img);
        }
    });
});