'use strict';
app.controller('viewCtrl', ['$scope', 'shareService',
    function ($scope, shareService, $http) {


        $scope.getProfile = function () {
            shareService.getProfile($scope);
        };

    }
]);