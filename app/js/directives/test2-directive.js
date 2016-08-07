angular.module('NoteWrangler')
.directive('test2Dir', function(){
    return{
        restrict: 'E',
        templateUrl: '/templates/test2-dir.html',
        controllerAs:'vm',
        controller: function($scope, $rootScope, PageService, $timeout){
            //$scope.PageService = PageService;

            $scope.fieldA = 0;
            
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
            //////////////////// B -> C
            $scope.$watch('fieldB', function(){
                $rootScope.$broadcast('fieldBChanged', $scope.fieldB);
            }); 
            $scope.$on('fieldBChanged', function(event, newValue){
                $scope.fieldC = newValue * $scope.value;    
            });
            
            //////////////////// C -> D
//            $scope.$watch('fieldC', function(){
//                $rootScope.$broadcast('fieldCChanged', $scope.fieldC);
//            });
//            $scope.$on('fieldCChanged', function(event, newValue){
//                $scope.fieldD = newValue * 2;    
//            });
//            
//            //////////////////// D -> E
//            $scope.$watch('fieldD', function(){
//                $rootScope.$broadcast('fieldDChanged', $scope.fieldD);
//            });
//            $scope.$on('fieldDChanged', function(event, newValue){
//                $scope.fieldE = newValue * 3;    
//            });
//            
//            //////////////////// E -> F
//            $scope.$watch('fieldE', function(){
//                $rootScope.$broadcast('fieldEChanged', $scope.fieldE);
//            });
//            $scope.$on('fieldEChanged', function(event, newValue){
//                $scope.fieldF = newValue * 4;    
//            });
            
        } 
    };
}); 