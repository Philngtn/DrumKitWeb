// Click Detection
var numberOfDrumButton = document.querySelectorAll(".drum").length;
for (var i=0; i < numberOfDrumButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
      
    }) 
}
// Keyboard Detection
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);


});
// Make sound func
function makeSound(key){
    switch (key) {
        case "w": 
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a": 
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s": 
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d": 
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j": 
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k": 
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l": 
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default: 
            break;
    }
}

function buttonAnimation (currentKey){
    var activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    }, 100) // 0.1 second
}
