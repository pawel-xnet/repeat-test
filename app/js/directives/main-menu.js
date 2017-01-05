angular.module('NoteWrangler')
.directive('mainMenu',function( $state, $location){
    return {
        restrict:'E',
        templateUrl:'/templates/main-menu.html',
        controller:function(){
            console.log($state);
            console.log($location.path());
        },
        link:function(scope){
            scope.isActive = function(path){
                return ($location.path().substr(0, path.length) === path) ? 'active' : '';
            };
        }
    };
});