'use strict';

App.controller('CustomerController', ['$scope', 'CustomerService', function($scope, CustomerService) {
          var self = this;
          self.customer={username:'',password:''};
          self.mesge='';
           
          self.cancel = function(){
          
					window.location.href = '/studs/';
			
          }; 
          
          /*self.searchCustomer = function(id,firstName,lastName,customerTypeId,phone){
              CustomerService.searchCustomer(id,firstName,lastName,customerTypeId,phone)
		              .then(
		               			function(d) {
      						        self.customers = d;
      					       },
				              function(errResponse){
					               console.error('Error while creating Customer.');
				              }	
                  );
          };*/
           
           
          self.createCustomer = function(customer){
              CustomerService.createCustomer(customer)
		              .then(
		              		  function(d) {
		              			self.mesge=d;
      						        $scope.submissionSuccess=true;
      						        
      					       },
				              function(errResponse){
					               console.error('Error while creating Customer.');
					               $scope.submissionFailure=true;
				              }	
                  );
          };

        /* self.updateCustomer = function(customer, id){
              CustomerService.updateCustomer(customer, id)
		              .then(
				              self.fetchAllCustomers, 
				              function(errResponse){
					               console.error('Error while updating Customer.');
				              }	
                  );
          };

         self.deleteCustomer = function(id){
              CustomerService.deleteCustomer(id)
		              .then(
				              self.fetchAllCustomers, 
				              function(errResponse){
					               console.error('Error while deleting Customer.');
				              }	
                  );
          };*/

         
         /* self.fetchCustomerTypes();
          self.fetchTripTypes();
          self.fetchLocalRoutes();*/

          self.submit = function() {
              if(self.customer.id==null){
                  console.log('Saving New Customer', self.customer);    
                  self.createCustomer(self.customer);
              }else{
                  self.updateCustomer(self.customer, self.customer.id);
                  console.log('Customer updated with id ', self.customer.id);
              }
             self.reset();
             self.message='Success';
          };
              
  /*        self.edit = function(id){
              console.log('id to be edited', id);
              
              //self.searchCustomer(id,null,null,null,null);
              self.searchCustomer(id,self.customer.firstName,self.customer.lastName,'',self.customer.phone);
              console.log('self.customers to be edited', self.customers.length);
              for(var i = 0; i < self.customers.length; i++){
                  if('EZS'+self.customers[i].id == id) {
                     self.customer = angular.copy(self.customers[i]);
                     console.log('self.customer to be edited', self.customer);
                     break;
                  }
              }
              
              self.customer.creationDate = new Date(self.customer.creationDate);
              self.customer.id=id;
              
          };*/
              
          self.remove = function(id){
              console.log('id to be deleted', id);
              if(self.customer.id === id) {//clean form if the customer to be deleted is shown there.
                 self.reset();
              }
              self.deleteCustomer(id);
          };

          
          self.reset = function(){
              self.customer={id:null,firstName:'',firstName:'',lastName:'',creationDate:new Date(),address1:'',address2:'',city:'Hyderabad',state:'Telangana',email:''};
              $scope.submissionSuccess=false;
              $scope.submissionFailure=false;
              $scope.myForm.$setPristine(); //reset Form
          };        

      }]);
      
      
