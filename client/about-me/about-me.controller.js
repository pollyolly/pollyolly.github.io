(function(){
    'use strict';
    function aboutmeCtrl($scope, imagelistSrv){
        var blog = this;
        // var slideIndex = 1;
        $scope.toyear = new Date().getFullYear();
        // blog.loadSlides = function (n){
        //     var i;
        //     var slides = document.getElementsByClassName('slides');
        //     var slidesLenght = slides.length;
        //     if (n > slidesLenght) {
        //         slideIndex = 1;
        //     }
        //     if (n < 1) {
        //         slideIndex = slidesLenght - 1;
        //     }
        //     for (i = 0; i < slidesLenght; i++){
        //         slides[i].style.display = "none";
        //     }
        //     if(slideIndex < slidesLenght){
        //         slides[slideIndex].style.display = "inline-block";
        //      }
        //         slides[slideIndex-1].style.display = "inline-block";
        // }
        // blog.plusSlide = function(n){
        //     blog.loadSlides(slideIndex += n);
        // }
        // blog.featuredlist = function(){
        //     return imagelistSrv.featuredlist();
        // }
    }
    var module = angular.module('about-me',[]);
    module.controller('aboutmeCtrl', aboutmeCtrl);
    aboutmeCtrl.$inject = ["$scope","imagelistSrv"];
})();