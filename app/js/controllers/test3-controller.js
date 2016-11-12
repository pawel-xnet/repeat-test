angular.module('NoteWrangler')
.controller('Test3Controller', function($scope, $location, PageService){
    var vm = this;
    
    vm.array1 = [
        {
            name: 'a11',
            age: '11'
        },{
            name: 'a22',
            age: '22'
        },{
            name: 'a33',
            age: '33'
        },{
            name: 'a44',
            age: '44'
        },{
            name: 'a55',
            age: '55'
        }
    ];
    
});