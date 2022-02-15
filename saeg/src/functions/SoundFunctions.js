export default class SoundFunctions {

    constructor(feedback){
        this.feedback = feedback;
    }
//Function for the positive feedback
 correctFunction() {
    //Plays 
    var correctAnswer = Audio ('/sounds/correctAnswer.mp3');
    correctAnswer.play();
    //"Correct!" browser alert
    alert("Correct!");
}
//Function for the negative feedback
 wrongFunction() {
    //Plays wrongAnswer.mp3 audio
    var wrongAnswer = Audio ('/sounds/wrongAnswer.mp3');
    wrongAnswer.play();
    //"Wrong." browser alert
    alert("Wrong."); 
}

}