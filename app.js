// Practice things seen at lógica de programación. Solve the new game.

let friendList = [];
let ulResult = document.getElementById("result")

const inputFriend = document.getElementById("friendInput");
const ulFriendList = document.getElementById("friendList");

function addFriend() {
    if (inputFriend.value === ""){
        alert("Please write a name. *BRUH'")
    }
    friendList.push(inputFriend.value);
    ulFriendList.innerHTML += `<li>${inputFriend.value}</li>`; 
    cleanTxtBox();
};


// GOT TIRED MID EXERCISE OF DELETING TEST NAMES EACH TIME HAHA.
//Next is the function to clean the box after adding a name.

function cleanTxtBox () {
    document.querySelector("#friendInput").value = "";
}

function raffleFriend() {
    let randomNumber = Math.floor(Math.random()*friendList.length);
    // log to verify number correctly generated, delimited by array length
    //console.log(randomNumber);
    let secretFriend = friendList[randomNumber];
    ulResult.innerHTML = `<li>You'll spend your cash on: "${secretFriend}", lucky them.</li>`;
    
};

console.log(friendList);

//function restartRaffle() {
    //clean box
  //  cleanTxtBox();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    //Deshabilitar el botón de nuevo juego
    //document.querySelector('#reiniciar').setAttribute('disabled','true');
    
//}