/**
 * Created by Alex.W on 2016/8/7.
 */
(function() {


    angular.module('doraemonFact')
        .controller('listCtrl', listController);

    //function listController($scope) {
    //    $scope.dummyData = "hello world";
    //}

    //if you set controller as a object, you cannot use $scope

    listController.$inject = ['quizMetrics','dataService'];
    function listController(quizMetrics,dataService) {
        var vm = this;
        vm.quizMetrics = quizMetrics;
        vm.data= dataService.doraemonData;

        vm.activeDoraemon = {};
        vm.changeActiveDoraemon = changeActiveDoraemon;
        vm.search = "";

        vm.activeQuiz = activeQuiz;

        function changeActiveDoraemon(index) {
            vm.activeDoraemon = index;
            //the activeDoraemon is gave a refer to the index info to json, so the list.activeDoraemon will change
            //if the changeActiveDoraemon is clicked
        }




        function activeQuiz() {
            quizMetrics.changeState("quiz",true);
        }
    }



})();