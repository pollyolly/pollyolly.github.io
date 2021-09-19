(function(){
'use strict';
var module = angular.module('appslistSrv', []);
module.factory('appslistSrv', ['$http', function($http){
    var service = {}
    service.testObject = testObject;
    var appslist = [
        {
            'title' : 'ILC Diliman Helpdesk',
            'date' : '2021',
            'image' : 'assets/img/ilc-helpdesk.JPG',
            'content' : 'ILC Diliman Helpdesk is a ticketing system used for accepting queries about ILC Diliman web, multimedia and other services. Technology used are Bootstrap, JQuery, and OSTicket.'
        },
        {
            'title' : 'Icecast2',
            'date' : '2021',
            'image' : 'assets/img/icecast2.jpg',
            'content' : 'Icecast2 is a streaming server for video/audio. It can be used to create Internet Radio streaming and broadcast using MIXXX software. Technology used are Icecast2 and MIXXX for boradcasting.'
        },
        {
            'title' : 'OUR Helpdesk',
            'date' : '2021',
            'image' : 'assets/img/osticket-website.png',
            'content' : 'OUR Helpdesk is a ticketing system used for accepting queries from the students, teachers etc of the UPDiliman. Technology used are Bootstrap, JQuery, and OSTicket.'
        },
        {
            'title' : 'Iskomunidad',
            'date' : '2019',
            'image' : 'assets/img/iskomunidad-website.png',
            'content' : 'Iskomunidad is a wiki system where UP Community can create pages/articles/wiki for free. Technology used are mediawiki.'
        },
        
        {
            'title' : 'HANAY',
            'date' : '2019',
            'image' : 'assets/img/hanay-image.jpg',
            'content' : 'It is a curated collection of scholarly research on Philippine communication and media. Technology used Opendocman.'
        },
        {
            'title' : 'ISKOMO',
            'date' : '2019',
            'image' : 'assets/img/iskomo-image.jpg',
            'content' : 'This is the Mobile version of Iskomunidad. Its main purpose is to provide an organized the contents of Iskomunidad and it also have other features like speech to text search and notification. Technology used are Nativescript Vue, php based mediawiki api, and mediawiki.'
        },
         {
            'title' : 'Conference',
            'date' : '2018',
            'image' : 'assets/img/conference-website.png',
            'content' : 'Conference website is used for University conferences where students and faculties can submit, host and archive their papers/submissions. Technology used are Bootstrap, and PKP Open conference system'
        }
        ,
        {
            'title' : 'Invites',
            'date' : '2018',
            'image' : 'assets/img/invites-website.png',
            'content' : 'Invites is an web based application tool used for email blasting of html format emails. Technology used are Codeigniter, JQuery and PHPMailer.'
        }
        ,
        {
            'title' : 'ILC Assetmanagement System',
            'date' : '2018',
            'image' : 'assets/img/assetmanagement-website.png',
            'content' : 'ILC Assetmanagement System is an opensource platform of Snipe-It used for recording of company assets e.g., equipments, consumable items etc. Technology used Snipe-It.'
        },
        
        
        {
            'title' : 'EIDR',
            'date' : '2018',
            'image' : 'assets/img/eidr-image.JPG',
            'content' : 'It is a curated collection of statistics and data created for the use of UP Diliman Statistics. Technology used DKAN.'
        },
        {
            'title' : 'ILC Anniversary Magazine',
            'date' : '2018',
            'image' : 'assets/img/ilc-anniv.jpg',
            'content' : 'e.now.vation adapting to challenges of 21st century. This is a web magazine and was created for the 15th anniversary of ILC Diliman. Technology used Materialized Css and JQuery.'
        },
         {
            'title' : 'Pages.UPD',
            'date' : '2017',
            'image' : 'assets/img/pages-website.png',
            'content' : 'A multisite platform created in Drupal 7 opensourced by Openscholar. The website used for faculty, department and projects websites e.g., portfolio and department sites. Technolgoy used Openscholar and MD Bootstrap.'
        },
        {
            'title' : 'Interactive Learning Center Website',
            'date' : '2017',
            'image' : 'assets/img/ilc-website.png',
            'content' : 'Interactive Learning Center Website is a mixed of blog and company website. Features are embedded contact form, blog posts, google custom search, embedded google forms, google calendar & social media, audio & video playlist, tiles for learning materials, scroll up button, history timeline, slider and support both mobile & desktop view. Technolgy used Wordpress.'
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
