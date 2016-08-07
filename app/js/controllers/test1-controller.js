angular.module('NoteWrangler')
.controller('Test1Controller', function($scope, $rootScope, PageService){
    //$scope.PageService = PageService;
    $scope.divsNumber = 1;
    $scope.arr1 = [];
    
    function buildRandArray(length) {
        var arr = [];

        for(var i = 0; i < (length || 10); i++) {
            var fill = [];
            fill.push(Math.floor((Math.random()*10000000)+1));
            arr.push(fill);
        }

        return arr;
    }
    
    $scope.generateDivs = function(howMany){
        $scope.arr1 = buildRandArray(howMany);
    }
    

});