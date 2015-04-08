'use strict';
app.factory('loginService', function($http, $location, sessionService, shareService) {
    return {
        login: function(data, scope) {
            var $promise = $http.post('ajax/login.php', data); //send data to user.php
            $promise.then(function(msg) {
                var uid = msg.data;
                if (uid) {
                    sessionService.set('uid', uid);
                    shareService.storeUsername(data.name);
                    $location.path('/innerPage');
                } else {
                    scope.msgtxt = 'incorrect information';
                    $location.path('/home');
                }
            });
        },
        
        islogged: function() {
            var $checkSessionServer = $http.post('ajax/check_session.php');
            return $checkSessionServer;
            /*
			if(sessionService.get('user')) return true;
			else return false;
			*/   
        }

    }
});