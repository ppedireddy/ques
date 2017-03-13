'use strict';

App.factory('EnrollmentService', ['$http', '$q', function($http, $q){

	return {
			
			fetchRegTimesMrng: function() {
					return $http.get('http://localhost:8080/studs/regtime?type=MORNING')
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while fetching reg times mrng');
										return $q.reject(errResponse);
									}
							);
			},
			
			fetchRegTimesEvng: function() {
					return $http.get('http://localhost:8080/studs/regtime?type=EVENING')
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while fetching reg times evening');
										return $q.reject(errResponse);
									}
							);
			},
			
			
			searchEnrollment: function(id) {
					return $http.get('http://localhost:8080/studs/enrollment?customerId='+id)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while fetching enrollment info');
										return $q.reject(errResponse);
									}
							);
			},
			
			createEnrollment: function(enrollment){
					return $http.post('http://localhost:8080/studs/enrollment/', enrollment)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while creating enrollment');
										return $q.reject(errResponse);
									}
							);
		    },
		    
		    updateEnrollment: function(enrollment, id){
					return $http.put('http://localhost:8080/studs/enrollment/'+id, enrollment)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while updating enrollment');
										return $q.reject(errResponse);
									}
							);
			},
		    
			/*deleteEnrollment: function(id){
					return $http.delete('http://localhost:8080/studs/enrollment/'+id)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while deleting enrollment');
										return $q.reject(errResponse);
									}
							);
			}*/
		
	};

}]);
