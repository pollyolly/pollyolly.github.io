(function(){
'use strict';
var module = angular.module('chatbox',[]);
module.component('chatBox',{
    templateUrl: 'client/component/chatbox/chatbox.template.html',
    controller: ['$scope','$http','chatboxSrv', function chatboxCtrl($scope, $http, chatboxSrv){
        var chatbox = this;
        $scope.show = false;
        chatbox.chatlist = function(){
            return chatboxSrv.chatMsg();
            // chatboxSrv.chatMsg(function(results){
            //     return results
            // });
        }
    }],
    controllerAs: 'chat'
});
})();