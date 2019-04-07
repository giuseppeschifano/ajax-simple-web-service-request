// Write your solution here

$("#buttonGlass").click(function()  {
    window.location.reload(true);
});


$("#btnSearch").click(function getRequest() {
    
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let response = JSON.parse(xhr.responseText);

            image.src = response.sprites.front_default;

            document.getElementById("name").innerHTML = "<strong> Name: </strong>" + response.name;
            document.getElementById("idPKM").innerHTML = "<strong> Id: </strong>" + response.id;

            console.log(response.name);
            console.log(response.id);
            console.log(response.sprites.front_default);

            var tr;
            for (let i = 0; i < 4; i++) {
                tr = $('<tr/>');
                tr.append("<td>" + response.moves[i].move.name + "</td>");
                $('table').append(tr);

            // document.getElementById("moves").innerHTML = "<strong>Moves: </strong>" + response.moves[i].move.name;
                
            console.log("moves: " + response.moves[i].move.name);

            if (i === 4) {
                break;
            }
            }

            // document.getElementById("height").innerHTML = "<strong>Height: </strong>" + response.height;
            // document.getElementById("weight").innerHTML = "<strong>Weight: </strong>" + response.weight;
            // console.log(response.height);
            // console.log(response.weight);
            
        }
    }
    let myChoise = document.getElementById("myChoise").value;
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + myChoise, true);
    xhr.send();
})



