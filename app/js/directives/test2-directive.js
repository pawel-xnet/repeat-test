angular.module('NoteWrangler')
.directive('test2Dir', function(){
    return{
        restrict: 'E',
        templateUrl: '/templates/test2-dir.html',
        controllerAs:'vm',
        controller: function($scope, $rootScope, PageService){
            //$scope.PageService = PageService;
            
//            $scope.copied = 'xxx';
//            $scope.$on('action1',function(event, newValue){
//                console.log(event);
//                $scope.copied = 'xxx '+newValue;
//            });
            $scope.fieldA = 0;
            $scope.fieldB = 0;
            $scope.fieldC = 0;
            
            $scope.$watch('fieldA', function(){
                $rootScope.$broadcast('fieldAChanged',$scope.fieldA);
            });
            $scope.$on('fieldAChanged',function(event, newValue){
                $scope.fieldB = newValue * $scope.key;
                $scope.fieldC = newValue * $scope.value;
                $scope.fieldD = newValue * $scope.value * 2;
                $scope.fieldE = newValue * $scope.value * 3;
                $scope.fieldF = newValue * $scope.value * 4;
                $scope.fieldG = newValue * $scope.value * 5;
                $scope.fieldH = newValue * $scope.value * 6;
                $scope.fieldI = newValue * $scope.value * 7;
            });
            
            
        } 
    };
}); 