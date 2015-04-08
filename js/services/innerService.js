'use strict';
app.factory('innerService', function($http, $location, sessionService) {
    return {
        logout: function() {
            sessionService.destroy('uid');
            $location.path('/home');
        },

        getInfo: function(scope){
        	$http.post("ajax/getProfiles.php").success(function(data){
        	scope.profiles = data;
       		});
        }



    }
});