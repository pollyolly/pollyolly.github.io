(function(){
'use strict';
var module = angular.module('appslistSrv', []);
module.factory('appslistSrv', ['$http', function($http){
    var service = {}
    service.testObject = testObject;
    var appslist = [{
            'title' : 'Test Title 1',
            'date' : '01/02/2013',
            'image' : 'assets/img/img1.jpg',
            'content' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            'title' : 'I am testing 2',
            'date' : '09/02/2017',
            'image' : 'assets/img/img1.jpg',
            'content' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
        ,
        {
            'title' : 'I am testing 3',
            'date' : '09/02/2017',
            'image' : 'assets/img/img1.jpg',
            'content' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
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