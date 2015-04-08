'use strict';
app.factory('registerService', function($http, $location){
	return{
		register: function(data,scope){
			var $promise=$http.post('ajax/register.php',data);
			$location.path('/conformation');
			/*$promise.then(function(msg){
				console.log(msg.data);
				if (msg.data == 'successful')
				{
					$location.path('/conformation');
				}
			}
			);*/
			

		}

	}
});