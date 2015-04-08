'use strict';

app.controller('registerCtrl',['$scope','registerService','$upload',function($scope,registerService, $upload){
	$scope.registerProfile = function(data){
        var filename = $('#image_file')[0].files[0].name;
        data.photo_name = filename;
        if (data.gender == 'male')
        {data.opposite_gender = 'female';
            console.log('female');

        }

        else{
            console.log('male');
            data.opposite_gender = 'male';
        }

		registerService.register(data);
	};

    $scope.onFileSelect = function($files) {
        var file = $files[0];
        if (file.type.indexOf('image') == -1) {
            $scope.error = 'image extension not allowed, please choose a JPEG or PNG file.'
        }
        if (file.size > 2097152){
            $scope.error ='File size cannot exceed 2 MB';
        }
        $scope.upload = $upload.upload({
            url: 'ajax/upload.php',
            /*data: {fname: $scope.photo_name},*/
            file: file
        }).success(function(data, status, headers, config) {
            // file is uploaded successfully
            console.log('uploaded');
        })
    };
}]);