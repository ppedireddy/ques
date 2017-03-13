'use strict';

App.factory('CustomerService', ['$http', '$q', function($http, $q){

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
			
			fetchLocalRoutes: function() {
					return $http.get('http://localhost:8080/studs/localroutes/')
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while fetching local routes');
										return $q.reject(errResponse);
									}
							);
			},
			
			fetchTripTypes: function() {
					return $http.get('http://localhost:8080/studs/triptypes/')
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while fetching trip types');
										return $q.reject(errResponse);
									}
							);
			},
			
			fetchCustomerTypes: function() {
					return $http.get('http://localhost:8080/studs/customertypes/')
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while fetching customer types');
										return $q.reject(errResponse);
									}
							);
			},
			
			fetchAllCustomers: function() {
					return $http.get('http://localhost:8080/studs/customer/')
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while fetching customers');
										return $q.reject(errResponse);
									}
							);
			},
		    
		    searchCustomer: function(customerId,firstName,lastName,customerTypeId,phone){
					//return $http.post('http://localhost:8080/studs/customers/', customer)
					return $http.get('http://localhost:8080/studs/customer?customerId='+customerId+'&&firstName='+firstName+'&&lastName='+lastName+'&&customerTypeId='+customerTypeId+'&&phone='+phone)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while creating customer');
										return $q.reject(errResponse);
									}
							);
		    },
		    
		    createCustomer: function(user){
					return $http.post('http://localhost:8080/studs/users/', user)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while creating customer');
										return $q.reject(errResponse);
									}
							);
		    },
		    
		    updateCustomer: function(customer, id){
					return $http.put('http://localhost:8080/studs/customer/'+id, customer)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while updating customer');
										return $q.reject(errResponse);
									}
							);
			},
		    
		/*	deleteCustomer: function(id){
					return $http.delete('http://localhost:8080/studs/customer/'+id)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while deleting customer');
										return $q.reject(errResponse);
									}
							);
			}*/
		
	};

}]);
