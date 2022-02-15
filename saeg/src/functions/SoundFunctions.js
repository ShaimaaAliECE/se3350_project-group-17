export function correctFunction() {
    //Plays correctAnswer audio
    var correctAnswer = new Audio(require('./sounds/correctAnswer.mp3'));
    correctAnswer.play();
    //"Correct!" browser alert
    alert("Correct!");
}
//Function for the negative feedback
export function wrongFunction() {
    //Plays wrongAnswer audio
    var wrongAnswer = new Audio(require('./sounds/wrongAnswer.mp3'));
    wrongAnswer.play();
    //"Wrong." browser alert
    alert("Wrong."); 
    window.location.reload();
}
