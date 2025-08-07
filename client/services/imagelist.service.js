(function(){
    'use strict';
    var module = angular.module('imagelistSrv',[]);
    module.factory('imagelistSrv', ['$http', function($http) {
        var service = {}
        var imagelist = [{
            'category' : 'PHP',
            'list' : [
                'assets/img/ilc-helpdesk.JPG',
                'assets/img/ilc-website.png',
                'assets/img/pages-website.png',
                'assets/img/conference-website.png',
                'assets/img/assetmanagement-website.png',
                'assets/img/invites-website.png',
                'assets/img/osticket-website.png',
                'assets/img/iskomunidad-website.png',
                'assets/img/eidr-image.JPG',
            ]
        },{
            'category' : 'Codeigniter',
            'list' : [
                'assets/img/invites-website.png'
            ]
        },
        {
            'category' : 'Drupal',
            'list' : [
                'assets/img/eidr-image.JPG',
                'assets/img/pages-website.png'
            ]
        },
        {
            'category' : 'Wordpress',
            'list' : [
                'assets/img/ilc-website.png'
            ]
        },
        {
            'category' : 'Angularjs',
            'list' : [
                'assets/img/portfolio-website.png'
            ]
        },
        {
            'category' : 'Wikimedia',
            'list' : [
                'assets/img/iskomunidad-website.png'
            ]
        },
        {
            'category' : 'OSticket',
            'list' : [
                'assets/img/osticket-website.png',
                'assets/img/ilc-helpdesk.JPG'
            ]
        },
        {
            'category' : 'OpenDocman',
            'list' : [
                'assets/img/hanay-image.jpg'
            ]
        },
        {
            'category' : 'Streaming',
            'list' : [
                'assets/img/icecast2.jpg'
            ]
        },
         {
            'category' : 'Magazine',
            'list' : [
                'assets/img/ilc-anniv.jpg'
            ]
        },
        {
            'category' : 'Nativescript Vue',
            'list' : [
                'assets/img/iskomo-image.jpg'
            ]
        },
        {
            'category': 'React Native',
            'list': [
                'assets/img/volume-manager.jpg'
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




