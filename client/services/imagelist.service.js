(function(){
    'use strict';
    var module = angular.module('imagelistSrv',[]);
    module.factory('imagelistSrv', ['$http', function($http) {
        var service = {}
        var imagelist = [{
            'category' : 'php',
            'list' : [
                'assets/img/img1.jpg',
                'assets/img/img2.jpg',
                'assets/img/img3.jpg',
                'assets/img/img4.jpg',
                'assets/img/img5.jpg',
            ]
        },{
            'category' : 'codeigniter',
            'list' : [
                'assets/img/img1.jpg',
                // 'assets/img/img1.jpg',
                // 'assets/img/img1.jpg',
                // 'assets/img/img1.jpg'
            ]
        },
        {
            'category' : 'drupal',
            'list' : [
                'assets/img/img1.jpg',
                // 'assets/img/img1.jpg',
                // 'assets/img/img1.jpg',
                // 'assets/img/img1.jpg',
                // 'assets/img/img1.jpg',
                // 'assets/img/img1.jpg',
                // 'assets/img/img1.jpg'
            ]
        },
        {
            'category' : 'wordpress',
            'list' : [
                'assets/img/img1.jpg',
                // 'assets/img/img1.jpg'
            ]
        },
        {
            'category' : 'angularjs',
            'list' : [
                'assets/img/img1.jpg',
                // 'assets/img/img1.jpg',
                // 'assets/img/img1.jpg',
                // 'assets/img/img1.jpg',
                // 'assets/img/img1.jpg',
                // 'assets/img/img1.jpg',
                // 'assets/img/img1.jpg'
            ]
        },
        {
            'category' : 'nodejs',
            'list' : [
                'assets/img/img1.jpg',
                // 'assets/img/img1.jpg'
            ]
        },
        {
            'category' : 'libraries',
            'list' : [
                'assets/img/img1.jpg',
                // 'assets/img/img1.jpg',
                // 'assets/img/img1.jpg'
            ]
        },
        {
            'category' : 'photoshop',
            'list' : [
                'assets/img/img1.jpg',
                // 'assets/img/img1.jpg',
                // 'assets/img/img1.jpg'
            ]
        }
    ];
        service.imagesList = function(){
            return imagelist;
        }
        service.featuredlist = function(){
            var imagelist = [
                    'assets/img/img1.jpg',
                    // 'assets/img/img1.jpg',
                    // 'assets/img/img1.jpg',
                    // 'assets/img/img1.jpg',
                    // 'assets/img/img1.jpg' 
                ];
            return imagelist;
        }
        service.selectImage = function(cat){
            for(var i=0; i < imagelist.length; i++){
                if(imagelist[i].category == cat){
                    return imagelist[i].list;
                }
            }
        }
        return service
    }]);
})();