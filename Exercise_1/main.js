// Write your solution here




$("#Request").click(function getRequest() {
    
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let response = JSON.parse(xhr.responseText);
            image.src = response.photo;
            // quote.src = response.quote;
            // document.getElementById("image").innerHTML = response.image;
            quote.innerHTML = response.quote;
            author.innerHTML = response.author;
        }
    }

    xhr.open("GET", "https://thatsthespir.it/api", true);
    xhr.send();
})


// let image = document.getElementById("image");
// let quote = document.getElementById("quote");




