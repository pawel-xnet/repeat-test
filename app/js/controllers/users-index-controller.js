angular.module('NoteWrangler')
.controller('UsersIndexController',function($http){
    var that = this;
    that.users = [];
    
    $http.get('/users.json').success(function(data){
        that.users = data;
    });
    
});