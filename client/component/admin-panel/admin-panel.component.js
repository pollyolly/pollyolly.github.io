(function(){
'use strict';
var module = angular.module('admin-panel',[]);
module.component('adminPanel',{
    templateUrl: 'client/component/admin-panel/admin-panel.template.html',
    controller: ['$scope','$http', function adminpanelCtrl($scope, $http){
        var adminpanel = this;
    }],
    controllerAs: 'panel'
});
})();