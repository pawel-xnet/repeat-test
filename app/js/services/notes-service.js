angular.module('NoteWrangler')
.factory('Note',function NoteFactory($http){
    return{
        all: function(){
            return $http.get('/notes.json');
        }
    }
});