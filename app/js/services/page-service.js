angular.module('NoteWrangler')
.factory('PageService', function(){
    return { 
        page: 5,
        pageSize: 10
    };
});