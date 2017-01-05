angular.module('NoteWrangler')
.controller('Test2Controller', function($scope, $location, PageService, $state){
    //$scope.PageService = PageService;
    var vm = this; 
    
    console.log($state);
    
    vm.goToList = function(){
        $state.go('test2.list', {did:123123123});
    };
    
    vm.goToParagraph = function(){
        $state.go('test2.paragraph', {pid:3333333333333});
    };
    
});