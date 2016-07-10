angular.module('NoteWrangler')
.controller('NotesIndexController',function($http, Note){
    var that = this;
    that.notes = [];
    
    Note.all().success(function(data){
        that.notes = data;
    });
    
});
