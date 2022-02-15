export function correctFunction() {
    //Plays 
    var correctAnswer = new Audio ('/sounds/correctAnswer.mp3');
    correctAnswer.play();
    //"Correct!" browser alert
    alert("Correct!");
}
//Function for the negative feedback
export function wrongFunction() {
    //Plays wrongAnswer.mp3 audio
    var wrongAnswer = new Audio ('/sounds/wrongAnswer.mp3');
    wrongAnswer.play();
    //"Wrong." browser alert
    alert("Wrong."); 
}
