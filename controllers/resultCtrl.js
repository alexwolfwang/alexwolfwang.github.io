/**
 * Created by Alex.W on 2016/8/10.
 */
(function() {

    angular.module('doraemonFact')
        .controller('resultCtrl', resultController);

        resultController.$inject = ['quizMetrics','dataService'];

        function resultController(quizMetrics,dataService) {
            var vm = this;
            vm.quizMetrics = quizMetrics;
            vm.dataService = dataService;
            vm.getAnswerClass = getAnswerClass;
            vm.setActiveQuestion = setActiveQuestion;
            vm.calcPerc = calcPerc;
            vm.reset = reset;
            vm. activeQuestion = 0;

            function setActiveQuestion(index) {
                vm.activeQuestion = index;
            }

            function calcPerc() {
                return vm.quizMetrics.numCorrect / vm.dataService.quizQuestion.length * 100;
            }

            function getAnswerClass(index) {
                if(index === quizMetrics.correctAnswer[vm.activeQuestion]){
                    return "bg-success";
                } else if(index === dataService.quizQuestion[vm.activeQuestion].selected) {
                    return "bg-danger";
                }
            }

            function reset() {
                vm.quizMetrics.changeState("result",false);
                vm.quizMetrics.numCorrect = 0;
                for(var i = 0; i < dataService.quizQuestion.length; i ++) {
                    var data = dataService.quizQuestion[i];
                    data.correct = null;
                    data.selected = null;
                }

            }
        }


})();