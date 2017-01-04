angular.module('NoteWrangler')
.controller('NotesShowController',function($http){
    var that = this;
    
    //$http.get('/notes/'+$routeParams.id)
    $http.get('/notes.json')
        .success(function(data){
            
            that.note = data;
            
        });
    
    
});