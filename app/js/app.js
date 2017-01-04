(function () {
    var app = angular.module('NoteWrangler', ['ngRoute','ngMaterial']);

    app.directive('mainMenu',function(){
        return {
            restrict:'E',
            templateUrl:'../templates/main-menu.html'
        };
    });
    
    angular.module('NoteWrangler').config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'/templates/pages/test1.html',
                controller:'Test1Controller',
                controllerAs:'testCtrl'
            })
            .when('/notes',{
                templateUrl:'/templates/pages/notes/index.html',
                controller:'NotesIndexController',
                controllerAs:'indexController'
            })
            .when('/notes/:id',{
                templateUrl:'/templates/pages/notes/show.html',
                controller:'NotesShowController',
                controllerAs:'showController'
            })
            .when('/users',{
                templateUrl:'/templates/pages/users/index.html',
                controller:'UsersIndexController',
                controllerAs:'indexController'
            })
            .when('/test1',{
                templateUrl:'/templates/pages/test1.html',
                controller:'Test1Controller',
            })
            .when('/test2',{
                templateUrl:'/templates/pages/test2.html',
                controller:'Test2Controller',
                controllerAs: 'vm'    
            })
            .when('/test3',{
                templateUrl:'/templates/pages/test3.html',
                controller:'Test3Controller',
                controllerAs: 'vm'    
            })
            .otherwise({
                redirectTo:'/'
            });
    });
    
    angular.module('NoteWrangler').controller('AppCtrl',function($scope, $rootScope){
        $rootScope.$on('$routeChangeStart',function(){
            //alert('start');
        });
        $rootScope.$on('$routeChangeSuccess', function(){
            //alert('success');
        });
    });
    
})();
