//К блоком сделать опасити
//скрыть понель при начале
//При нажатии на картинку появление понелиl
//let window = document.querySelector("header");
//header.classList.add("Hello");
let _text = document.querySelector(".window-body p")

document.querySelector(".modal-close").onclick =function(){
    document.querySelector(".modal-window").hidden = true ;
}
document.querySelector(".close").onclick =function(){
    document.querySelector(".modal-window").hidden = true ;
}

document.querySelector(".photo img.photo-1").onclick = function(){
    document.querySelector(".modal-window").hidden = false ;
    _text.innerHTML = "girl in red  from Asia";

}
 //Доделать 
document.querySelector(".photo img.photo-2").onclick = function(){
    document.querySelector(".modal-window").hidden = false ;
}

document.querySelector(".photo img.photo-3").onclick = function(){
    document.querySelector(".modal-window").hidden = false ;
}

document.querySelector(".photo img.photo-4").onclick = function(){
    document.querySelector(".modal-window").hidden = false ;
}

document.querySelector(".photo img.photo-5").onclick = function(){
    document.querySelector(".modal-window").hidden = false ;
}

document.querySelector(".photo img.photo-6").onclick = function(){
    document.querySelector(".modal-window").hidden = false ;
}
//Доделать поверка на 4 и вывод ошибки не алертом, а в инпут
document.querySelector(".send").onclick= function(){
    let name = document.getElementById("full-name");
    //name.id = "ldldld";
    //alert(name.id);
    //name = document.querySelector("#full-name");
    //document.getElementsByClassName("");
    //document.getElementsByName("")
    //document.getElementsByTagName("div");
    let srtCheck = name.value;
    for ( let i in srtCheck){
       if(isNumber(i)) {
           alert("Имя не должно содержать цифры");
           break;
       }
    }
}
function isNumber(item){
    return (item >= '0' && item <= '9');
}

