'use strict';
app.factory('shareService', function($http) {
    var currentUsername;
    var userProfile;
    return {
        setProfile: function(data) {
            userProfile = data;
        },
        getProfile: function(scope){
            scope.userProfiles=userProfile;
        },
        storeUsername: function(username){
            currentUsername = username;
        },

        getCurrentUserProfile: function(scope){
            var data={};
             var $promise = $http.post('ajax/currentUserProfile.php', data);
              $promise.then(function(msg) {
                var profile = msg.data;
                if (profile) {
                    console.log(profile);
                    scope.currentProfile = profile;
                } else {
                    console.log('go awat');
                }
            });

        }
    }
});