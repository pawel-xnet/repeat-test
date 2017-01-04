(function () {
    var app = angular.module('NoteWrangler', ['ngMaterial','ui.router', 'ui.router.stateHelper' ]);

    app.directive('mainMenu',function(){
        return {
            restrict:'E',
            templateUrl:'../templates/main-menu.html'
        };
    });
    
    angular.module('NoteWrangler').config(function($stateProvider, $urlRouterProvider){

//            .when('/notes/:id',{
//                templateUrl:'/templates/pages/notes/show.html',
//                controller:'NotesShowController',
//                controllerAs:'showController'
//            })

        $urlRouterProvider.otherwise('/home');
        
        $stateProvider
        
        .state('home', {
            url: '/home',
            templateUrl:'/templates/pages/test1.html',
            controller:'Test1Controller',
            controllerAs:'testCtrl'
        })
        
        .state('notes', {     
            url: '/notes',
            templateUrl:'/templates/pages/notes/index.html',
            controller:'NotesIndexController',
            controllerAs:'indexController'
            
        })
        .state('users',{
            url: '/users',
            templateUrl:'/templates/pages/users/index.html',
            controller:'UsersIndexController',
            controllerAs:'indexController'
        })
        
        .state('test1',{
            url: '/test1',
            templateUrl:'/templates/pages/test1.html',
            controller:'Test1Controller',
        })
        
        .state('test2',{
            url: '/test2',
            templateUrl:'/templates/pages/test2.html',
            controller:'Test2Controller',
            controllerAs: 'vm'   
        })
        
        .state('test2.list', {
            url: '/list',
            templateUrl:'/templates/pages/partial-test2-list.html',
        })
        
        .state('test2.paragraph', {
            url: '/paragraph',
            templateUrl:'/templates/pages/partial-test2-paragraph.html',
        })
        
        .state('test3',{
            url: '/test3',
            templateUrl:'/templates/pages/test3.html',
            controller:'Test3Controller',
            controllerAs: 'vm'   
        })
        
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
