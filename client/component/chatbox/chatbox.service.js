(function(){
    'use strict';
    var module = angular.module('chatboxSrv',[]);
    module.factory('chatboxSrv', ['$http', function($http){
        var service = {}
		var sheet_url = 'https://script.google.com/macros/s/AKfycbwYD1o-Y19NWhZZJsosTY1up__na2FMbLusumFunkQCk4wedftR/exec';
        var chatlist = [
            {
                'username' : 'Anonymous',
                'message' : 'How are you?',
                'status' : 'response'
            },
            {
                'username' : 'JMR',
                'message' : 'Im good. How about you?',
                'status' : 'sent'
            },
            {
                'username' : 'Anonymous',
                'message' : 'same, what do you do?',
                'status' : 'response'
            },
            {
                'username' : 'JMR',
                'message' : 'Web development.',
                'status' : 'sent'
            },
            {
                'username' : 'JMR',
                'message' : 'If you want my service you can contact me in this number 09998585605. I can give you a discount and I assure you the quality u want. :)',
                'status' : 'sent'
            }
        ];
		service.chatPostsend = function(data){
			//$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
			$http.defaults.useXDomain = true;
			delete $http.defaults.headers.common['X-Requested-With'];
			var data = {
					'nickname': data.chat_user,
	                'message': data.chat_message
			}	
			$http.get(sheet_url, data).then(
				function successCallback(response){
				console.log(response);
			}, function errorCallback(response){
				console.log(response);
			});
		}
        service.chatMsg = function(){
            return chatlist;
        }
        return service;
    }]);   
})();
