/**
 * Created by Alex.W on 2016/8/8.
 */
(function() {
    angular
        .module("doraemonFact")
        .controller("quizCtrl", QuizController);

        QuizController.$inject = ['quizMetrics','dataService'];
        function QuizController(quizMetrics,dataService) {
            var vm = this;
            vm.quizMetrics = quizMetrics;
            vm.dataService = dataService;
            vm.questionAnswered = questionAnswered;
            vm.setActiveQuestion = setActiveQuestion;
            vm.selectAnswer = selectAnswer;
            vm.finaliseAnswer = finaliseAnswer;
            vm.activeQuestion = 0;
            vm.error = false;
            vm.finalise = false;

            var numQuestionAnswered = 0;

            function setActiveQuestion(index) {
                if(index === undefined) {
                    var breakOut = false;
                    var quizLength = dataService.quizQuestion.length - 1;

                    while(!breakOut) {
                        vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;

                        if(vm.activeQuestion === 0) {
                            vm.error = true;
                        }
                        if(dataService.quizQuestion[vm.activeQuestion].selected === null) {
                            breakOut = true;
                        }
                    }
                } else {
                    vm.activeQuestion = index;
                    //this is the indexth button clicked
                }

            }


            function questionAnswered() {

                var quizLength = dataService.quizQuestion.length;

                if(dataService.quizQuestion[vm.activeQuestion].selected !== null) {
                    numQuestionAnswered ++;

                    if(numQuestionAnswered >= quizLength) {
                        for(var i = 0; i < quizLength; i ++) {
                            if(dataService.quizQuestion[i].selected === null) {
                                setActiveQuestion(i);
                                return;
                            }
                        }

                        vm.error = false;
                        vm.finalise = true;
                        return;
                    }
                }
                vm.setActiveQuestion();
            }



            function selectAnswer(index) {
                dataService.quizQuestion[vm.activeQuestion].selected = index;
            }

            function finaliseAnswer() {
                vm.finalise = false;
                numQuestionAnswered = 0;
                vm.activeQuestion = 0;
                quizMetrics.markQuiz();
                quizMetrics.changeState("quiz",false);
                quizMetrics.changeState("result",true);
            }


        }
})();