//this variable points out how many drum bottons are there using the class ".drum"
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//this is a for loop where i=0 is the first ; i < numberOfDrumButtons is the end ; and i++ means it increments +1
for (var i = 0; i < numberOfDrumButtons; i++) {
// document.querySelector(".drum")[i] will find i in the for loop ; .addEventListener listen to clicks "click" ; and when it does, it runs the handleClick function
document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

function handleClick() {
    
    var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":                                              // the : or colon sign here is the equivalent of the start of a curly bracket "{"
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;                                                 // the break; here is the equivalent of the end of a curly bracket "}"

            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;

            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;

            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;

            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
            break;

            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
            break;

            case "l":
                var kick= new Audio("sounds/kick-bass.mp3");
                kick.play();
            break;
            
            //the default below is like an else if, it will trigger if there nothing to trigger in the previous/above line of codes
            default: console.log(buttonInnerHTML);
            
        }
    
}
}



