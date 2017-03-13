'use strict';

App.factory('ReportService', ['$http', '$q', function($http, $q){

	return {
		fetchCommuterData: function() {
					return $http.get('http://localhost:8080/studs/admin/commuterdata/')
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while  fetching commuter date');
										return $q.reject(errResponse);
									}
							);
			},
	
			fetchConversionData: function(fromdate,todate) {
				return $http.get('http://localhost:8080/studs/admin/conversiondata?fromDate='+fromdate+'&&toDate='+todate)
						.then(
								function(response){
									return response.data;
								}, 
								function(errResponse){
									console.error('Error while fetching conversion data');
									return $q.reject(errResponse);
								}
						);
		},
		fetchDroppedCustomerData: function(fromdate,todate) {
			return $http.get('http://localhost:8080/studs/admin/droppedcustomerdata?fromDate='+fromdate+'&&toDate='+todate)
					.then(
							function(response){
								return response.data;
							}, 
							function(errResponse){
								console.error('Error while fetching conversion data');
								return $q.reject(errResponse);
							}
					);
	},
	fetchPaidCustomerData: function(fromdate,todate) {
		return $http.get('http://localhost:8080/studs/admin/paidcustomerdata?fromDate='+fromdate+'&&toDate='+todate)
				.then(
						function(response){
							return response.data;
						}, 
						function(errResponse){
							console.error('Error while fetching conversion data');
							return $q.reject(errResponse);
						}
				);
},
		
	};

}]);
