'use strict';

App.factory('CommuteService', ['$http', '$q', function($http, $q){

	return {
			fetchAllCustomers: function() {
					return $http.get('http://www.ezshuttle.in/ezs/customer/')
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while  fetching customers');
										return $q.reject(errResponse);
									}
							);
			},
			fetchRegTimes: function() {
					return $http.get('http://www.ezshuttle.in/ezs/regtime?type=All')
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while fetching reg times');
										return $q.reject(errResponse);
									}
							);
			},
			
			fetchCommute: function() {
					return $http.get('http://www.ezshuttle.in/ezs/commute/')
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while fetching commute info');
										return $q.reject(errResponse);
									}
							);
			},
			
			searchCommute: function(tdate) {
					return $http.get('http://www.ezshuttle.in/ezs/commute?transactionDate='+tdate)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while fetching commutes info');
										return $q.reject(errResponse);
									}
							);
			},
			
			createCommute: function(commute){
					return $http.post('http://www.ezshuttle.in/ezs/commute/', commute)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while creating commute');
										return $q.reject(errResponse);
									}
							);
		    },
		    
		    updateCommute: function(commute, id){
					return $http.put('http://www.ezshuttle.in/ezs/commute/'+id, commute)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while updating commute');
										return $q.reject(errResponse);
									}
							);
			},
		    
			deleteCommute: function(id){
					return $http.delete('http://www.ezshuttle.in/ezs/commute/'+id)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while deleting commute');
										return $q.reject(errResponse);
									}
							);
			}
		
	};

}]);
