'use strict';

App.factory('QuestionService', ['$http', '$q', function($http){

	return {
		
	
           uploadFileToUrl:function(file){
               var fd = new FormData();
               fd.append('file', file);
               
               return $http.post("http://localhost:8080/studs/uploadFile/", fd, {
                  transformRequest: angular.identity,
                  headers: {'Content-Type': undefined}
               })
            
               .success(function(){
               })
            
               .error(function(){
               });
            },
        
		
			/*fetchAllUsers: function() {
					return $http.get('http://localhost:8080/studs/user/')
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while fetching users');
										return $q.reject(errResponse);
									}
							);
			},
		    
		    createUser: function(user){
					return $http.post('http://localhost:8080/studs/users/', user)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while creating user');
										return $q.reject(errResponse);
									}
							);
		    },
		    
		    updateUser: function(user, id){
					return $http.put('http://localhost:8080/studs/users/'+id, user)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while updating user');
										return $q.reject(errResponse);
									}
							);
			},*/
		    
			/*deleteUser: function(id){
					return $http.delete('http://localhost:8080/ezs/user/'+id)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while deleting user');
										return $q.reject(errResponse);
									}
							);
			}*/
		
	};

}]);
