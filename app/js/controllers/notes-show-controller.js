angular.module('NoteWrangler')
.controller('NotesShowController',function($http, $routeParams){
    var that = this;
    
    //$http.get('/notes/'+$routeParams.id)
    $http.get('/notes.json')
        .success(function(data){
            
            that.note = data;
            
        });
    
});