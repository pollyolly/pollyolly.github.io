(function(){
    'use strict';
    var module = angular.module('chatboxSrv',[]);
    module.factory('chatboxSrv', ['$http', function(){
        var service = {}
        var chatlist = [
            {
                'username' : 'Anonymous',
                'message' : 'How are you?',
                'status' : 'sent'
            },
            {
                'username' : 'JMR',
                'message' : 'Im good. How about you?',
                'status' : 'response'
            },
            {
                'username' : 'Anonymous',
                'message' : 'same, what do you do?',
                'status' : 'sent'
            },
            {
                'username' : 'JMR',
                'message' : 'Web development.',
                'status' : 'response'
            },
            {
                'username' : 'JMR',
                'message' : 'If you want my service you can contact me in this number 09998585605. I can give you a discount and I assure you the quality u want. :)',
                'status' : 'response'
            }
        ];
        service.chatMsg = function(){
            return chatlist;
        }
        return service;
    }]);   
})();