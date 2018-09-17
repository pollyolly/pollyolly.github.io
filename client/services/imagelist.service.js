(function(){
    'use strict';
    var module = angular.module('imagelistSrv',[]);
    module.factory('imagelistSrv', ['$http', function($http) {
        var service = {}
        var imagelist = [{
            'category' : 'php',
            'list' : [
                'assets/img/ilc-website.png',
                'assets/img/pages-website.png',
                'assets/img/conference-website.png',
                'assets/img/assetmanagement-website.jpg',
                'assets/img/invites-website.png',
            ]
        },{
            'category' : 'codeigniter',
            'list' : [
                'assets/img/invites-website.png'
            ]
        },
        {
            'category' : 'drupal',
            'list' : [
                'assets/img/pages-website.png'
            ]
        },
        {
            'category' : 'wordpress',
            'list' : [
                'assets/img/ilc-website.jpg'
            ]
        },
        {
            'category' : 'angularjs',
            'list' : [
                'assets/img/portfolio-website.png'
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
