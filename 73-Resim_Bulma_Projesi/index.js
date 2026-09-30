console.clear();

 let formWrapper = document.querySelector(".form-wrapper");
 let form = document.querySelector("#form");
 let searchInput = document.querySelector("#searchInput");
 let buttonWrapper = document.querySelector(".button-wrapper");
 let searchButton = document.querySelector("#searchButton");
 let clearButton = document.querySelector("#clearButton");
 let imageListWrapper = document.querySelector(".imagelist-wrapper");

 runEventListener();

 function runEventListener(){
    form.addEventListener("submit", search);
    clearButton.addEventListener("click", clear);
 }

 function search(e){
    const value = searchInput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method: "GET",
        headers:{
            Authorization: "Client-ID z3GRQaMRT3Xp9EBoqqpTYUa0fHMbJ_MreebI53ipec4"
        }
    })
    .then((res) => res.json())
    .then((data) => {
        Array.from(data.results).forEach((image) =>{
            addImageToUI(image.urls.small)
        })
    })
    .catch((err) => console.log(err))
    e.preventDefault();
 }

 function clear(){
    searchInput.value = "";
    Array.from(imageListWrapper.children).forEach((child) => child.remove())
 }

 function addImageToUI(url){
    let div = document.createElement("div");
    div.className = "card";
    let img = document.createElement("img");
    img.setAttribute("src", url);
    img.height = '400';
    img.width = '400';
    div.append(img);
    imageListWrapper.append(div);
 }