angular.module('NoteWrangler')
.controller('Test2Controller', function($scope, $location, PageService){
    //$scope.PageService = PageService;
    var vm = this;
    
   vm.calc = function(val1, val2){
       vm.result = parseInt(val1) + parseInt(val2);
   };

});