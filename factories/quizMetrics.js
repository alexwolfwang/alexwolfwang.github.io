/**
 * Created by Alex.W on 2016/8/8.
 */
(function() {
   angular
       .module('doraemonFact')
       .factory('quizMetrics',QuizMetrics);

        QuizMetrics.$inject = ['dataService']

        function QuizMetrics(dataService) {
            var quizObj = {
                quizActive : false,
                resultActive : false,
                changeState : changeState,
                correctAnswer: [],
                markQuiz : markQuiz,
                numCorrect: 0
            };

            return quizObj;

            function changeState(metric,state) {
                if(metric === "quiz") {
                    quizObj.quizActive = state;
                } else if(metric === "result") {
                    quizObj.resultActive = state;
                } else {
                    return false;
                }
            }


            function markQuiz() {
                quizObj.correctAnswer = dataService.correctAnswer;

                for(var i = 0 ; i < dataService.quizQuestion.length; i ++) {
                    if(dataService.quizQuestion[i].selected === quizObj.correctAnswer[i]) {
                        dataService.quizQuestion[i].correct = true;
                        quizObj.numCorrect ++;
                        //alert(quizObj.numCorrect);
                    } else {
                        dataService.quizQuestion[i].correct = false;
                        //alert(quizObj.numCorrect);
                    }
                }
            }


        }




})();