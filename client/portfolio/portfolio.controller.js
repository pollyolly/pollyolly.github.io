(function(){
    'use strict';
    var portfolioCtrl = function($scope, imagelistSrv){
        var portfolio = this;
        portfolio.title = "Portfolio";
        portfolio.imagesList = function(){
            return imagelistSrv.imagesList();
        }
        portfolio.selectImage = function(cat){
            portfolio.myimages = imagelistSrv.selectImage(cat);
        }
    }
    var module = angular.module('portfolio',[]);
    portfolioCtrl.$inject = ['$scope','imagelistSrv'];
    module.controller('portfolioCtrl', portfolioCtrl);
})();