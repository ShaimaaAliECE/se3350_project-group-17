//Function for the positive feedback
function correctFunction() {
    //Plays 
    var correctAnswer = Audio ('/sounds/correctAnswer.mp3');
    correctAnswer.play();
    //"Correct!" browser alert
    alert("Correct!");
}
//Function for the negative feedback
function wrongFunction() {
    //Plays wrongAnswer.mp3 audio
    var wrongAnswer = Audio ('/sounds/wrongAnswer.mp3');
    wrongAnswer.play();
    //"Wrong." browser alert
    alert("Wrong."); 
}