

async function retrieve(){
    const $keyword = $("#search").val();
    const response = await axios.get("http://api.giphy.com/v1/gifs/search",
        {params: {q: $keyword, "api_key": "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
    const randIndex = Math.floor(Math.random() * (response.data.data.length + 1));
    display(response.data.data[randIndex].images.original.url);
    $("#search").val(" ");
};

function display(imgUrl){
    $("#party").append(`<img src=${imgUrl} alt="gif image" class="img-thumbnail 
    col-sm-6 col-lg-4 p-0 border border-danger rounded-lg bg-warning" />`)
};

$("#searchBut").on("click",retrieve);
$("#removeBut").on("click",() => $("#party").html(" "));
