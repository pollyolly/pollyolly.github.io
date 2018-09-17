(function(){
    angular.module('portfolio2017').
        config(['$routeProvider', '$locationProvider', 
            function config($routeProvider, $locationProvider){
                $routeProvider.when('/about-me',{
                    controller: 'aboutmeCtrl',
                    controllerAs: 'aboutme',
                    templateUrl: 'client/about-me/about-me.template.html'
                }).when('/portfolio',{
                    controller: 'portfolioCtrl',
                    controllerAs: 'portfolio',
                    templateUrl: 'client/portfolio/portfolio.template.html'
                }).when('/apps',{
                    controller: 'appsCtrl',
                    controllerAs: 'apps',
                    templateUrl: 'client/apps/apps.template.html'
                }).otherwise({
                    redirectTo: '/about-me',
                    controller: 'aboutmeCtrl',
                    controllerAs: 'aboutme',
                    templateUrl: 'client/about-me/about-me.template.html'
                });
                // $locationProvider.hashPrefix('#');
                $locationProvider.html5Mode({
                    enable:true,
                    requireBase: false
                });
            }]);
})();