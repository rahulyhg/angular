'use strict';
app.controller('innerCtrl', ['$scope', 'innerService', '$location', 'shareService','$filter',
    function($scope, innerService, $location,shareService, $filter) {

        $scope.logout = function() {
            innerService.logout();
        };

        $scope.getInfo = function(){
        	innerService.getInfo($scope);
        };

        $scope.getCurrentUserProfile = function(){
            
            shareService.getCurrentUserProfile($scope);
        };

        $scope.setProfile = function(data){
            shareService.setProfile(data);
            $location.path('/viewProfile');
        };
        $scope.pageChangeHandler = function(num){
            console.log('going to page' + num);
        };
        $scope.init = function(){
          $scope.getCurrentUserProfile($scope);
           $scope.getInfo();
        };


    }
]);