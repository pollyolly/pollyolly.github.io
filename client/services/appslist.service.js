(function(){
'use strict';
var module = angular.module('appslistSrv', []);
module.factory('appslistSrv', ['$http', function($http){
    var service = {}
    service.testObject = testObject;
    var appslist = [{
            'title' : 'Interactive Learning Center Website',
            'date' : '2017',
            'image' : 'assets/img/ilc-website.png',
            'content' : 'Interactive Learning Center Website is a mixed of blog and company website. Features are embedded contact form, blog posts, google custom search, embedded google forms, google calendar & social media, audio & video playlist, tiles for learning materials, scroll up button, history timeline, slider and support both mobile & desktop view.'
        },
        {
            'title' : 'Pages.UPD',
            'date' : '2017',
            'image' : 'assets/img/pages-website.png',
            'content' : 'A multisite platform created in Drupal 7 opensourced by Openscholar. The website used for faculty, department and projects websites e.g., portfolio and department sites.'
        }
        ,
        {
            'title' : 'Conference',
            'date' : '2018',
            'image' : 'assets/img/conference-website.png',
            'content' : 'Conference website is used for University conferences where students and faculties can submit, host and archive their papers/submissions.'
        }
        ,
        {
            'title' : 'Invites',
            'date' : '2018',
            'image' : 'assets/img/invites-website.png',
            'content' : 'Invites is an web based application tool used for email blasting of html format emails.'
        }
        ,
        {
            'title' : 'ILC Assetmanagement System',
            'date' : '2018',
            'image' : 'assets/img/assetmanagement-website.png',
            'content' : 'ILC Assetmanagement System is an opensource platform of Snipe-It used for recording of company assets e.g., equipments, consumable items etc.'
        }
    ];
    service.appslist = function(){
        return appslist;
    }
    return service;

    function testObject(data){
        return {
            data : data
        }
    }
}]);
})();
