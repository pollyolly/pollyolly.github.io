(function(){
    'use strict';
    var appsCtrl = function($scope, appslistSrv, pagerSrv){
        var apps = this;
        apps.title = "Applications";
        var mydata = [];
        for(var k = 0; k < appslistSrv.appslist().length; k++){
            mydata[k] = appslistSrv.appslist()[k];
        }
        // console.log(mydata);
        apps.dataItems = mydata; // dummy array of items to be paged
        apps.pager = {};
        // apps.setPage = setPage;

        // initController();

        // function initController() {
        //     // initialize to page 1
        //     apps.setPage(1);
        // }
        // apps.setPage(1);
        apps.setPage = function (page) {
            if (page < 1 || page > apps.pager.totalPages) {
                return;
            }
            // get pager object from service
            apps.pager = pagerSrv.GetPager(apps.dataItems.length, page);

            // get current page of items
            apps.items = apps.dataItems.slice(apps.pager.startIndex, apps.pager.endIndex + 1);
            // console.log(vm.pager.endIndex);
        }
    }
    var module = angular.module('apps',[]);
    appsCtrl.$inject = ['$scope','appslistSrv','pagerSrv'];
    module.controller('appsCtrl', appsCtrl);
})();