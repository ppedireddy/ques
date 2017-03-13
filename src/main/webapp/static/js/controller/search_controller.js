'use strict';

App.controller('CustomerController', ['$scope', 'CustomerService', function($scope, CustomerService) {
          var self = this;
          self.customer={id:null,firstName:'',lastName:'',address1:'',address2:'',creationDate:new Date(),city:'Hyderabad',state:'Telangana', email:'',customerType:'',tripType:''};
          self.customers=[];
          self.customerTypes=[];
          self.tripTypes=[];
          self.localRoutes=[];
          self.regTimesMrng=[];
          self.regTimesEvng=[];
          self.showUpdate=false;
              
              
          self.fetchLocalRoutes = function(){
              CustomerService.fetchLocalRoutes()
                  .then(
      					       function(d) {
      						        self.localRoutes = d;
      					       },
            					function(errResponse){
            						console.error('Error while fetching Customer Types');
            					}
      			       );
          };    
              
          self.fetchRegTimesEvng = function(){
              CustomerService.fetchRegTimesEvng()
                  .then(
      					       function(d) {
      						        self.regTimesEvng = d;
      					       },
            					function(errResponse){
            						console.error('Error while fetching regTimesEvng');
            					}
      			       );
          };    
              
          self.fetchRegTimesMrng = function(){
              CustomerService.fetchRegTimesMrng()
                  .then(
      					       function(d) {
      						        self.regTimesMrng = d;
      					       },
            					function(errResponse){
            						console.error('Error while fetching regTimesMrng ');
            					}
      			       );
          };       
          self.cancel = function(){
          
					window.location.href = '/ezs/';
			
          };     
          self.fetchCustomerTypes = function(){
              CustomerService.fetchCustomerTypes()
                  .then(
      					       function(d) {
      						        self.customerTypes = d;
      					       },
            					function(errResponse){
            						console.error('Error while fetching Customer Types');
            					}
      			       );
          };    
          
          self.fetchTripTypes = function(){
              CustomerService.fetchTripTypes()
                  .then(
      					       function(d) {
      						        self.tripTypes = d;
      					       },
            					function(errResponse){
            						console.error('Error while fetching TripTypes');
            					}
      			       );
          };    
                      
          self.fetchAllCustomers = function(){
              CustomerService.fetchAllCustomers()
                  .then(
      					       function(d) {
      						        self.customers = d;
      					       },
            					function(errResponse){
            						console.error('Error while fetching Currencies');
            					}
      			       );
          };
           
            self.searchCustomer = function(id,firstName,lastName,customerTypeId,phone){
              CustomerService.searchCustomer(id,firstName,lastName,customerTypeId,phone)
		              .then(
		               			function(d) {
      						        self.customers = d;
      					       },
				              function(errResponse){
					               console.error('Error while creating Customer.');
				              }	
                  );
          };
           
           
          self.createCustomer = function(customer){
              CustomerService.createCustomer(customer)
		              .then(
				              function(errResponse){
					               console.error('Error while creating Customer.');
				              }	
                  );
          };

         self.updateCustomer = function(customer, id){
        	 
              CustomerService.updateCustomer(customer, id)
		              .then(
		            		  function(d) {
		            			  $scope.updateSuccess=true;
		            			  self.searchCustomer('EZS'+id,self.customer.firstName,self.customer.lastName,(!self.customer.customerType)?'':self.customer.customerType.id,self.customer.phone);
    					       }, 
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
          };

          
          self.fetchCustomerTypes();
          self.fetchTripTypes();
          self.fetchLocalRoutes();

          self.submit = function() {
              if(!self.showUpdate){
                  console.log('Searching Customers', self.customer.customerType);    
               
                  self.searchCustomer(self.customer.id,self.customer.firstName,self.customer.lastName,(!self.customer.customerType)?'':self.customer.customerType.id,self.customer.phone);
              }else{
            	  self.customer.id=self.customer.id.substring(3,6);
                  self.updateCustomer(self.customer, self.customer.id);
                 console.log('Customer updated with id ', self.customer.id);
                 self.showUpdate=false;
              }
              self.reset();
          };
              
          self.edit = function(id){
              console.log('id to be edited', id);
              for(var i = 0; i < self.customers.length; i++){
                  if(self.customers[i].id == id) {
                     self.customer = angular.copy(self.customers[i]);
                     break;
                  }
              }
              
              self.customer.creationDate = new Date(self.customer.creationDate);
              self.customer.id='EZS'+id;
              
              for(var i = 0; i < self.customerTypes.length; i++){
                  if(self.customerTypes[i].id == self.customer.customerType.id) {
                     self.customer.customerType= self.customerTypes[i];
                     console.log('Searching self.customerTypes.', self.customer.customerType.id);    
                     break;
                  }
              }
              for(var i = 0; i < self.tripTypes.length; i++){
                  if(self.tripTypes[i].id == self.customer.tripType.id) {
                     self.customer.tripType= self.tripTypes[i];
                     console.log('Searching self.tripTypes.', self.customer.tripType.id);  
                     break;
                  }
              }
              for(var i = 0; i < self.localRoutes.length; i++){
                  if(self.localRoutes[i].id == self.customer.localRoute.id) {
                     self.customer.localRoute= self.localRoutes[i];
                     console.log('Searching self.localRoutes.', self.customer.localRoute.id);  
                     break;
                  }
              }
              self.showUpdate=true;
              
          };
              
          self.remove = function(id){
              console.log('id to be deleted', id);
              if(self.customer.id === id) {//clean form if the customer to be deleted is shown there.
                 self.reset();
              }
              self.deleteCustomer(id);
          };

          
          self.reset = function(){
        	  self.customer={id:null,firstName:'',lastName:'',address1:'',address2:'',creationDate:new Date(),city:'Hyderabad',state:'Telangana', email:'',customerType:'',tripType:''};
              $scope.myForm.$setPristine(); //reset Form
          };        

      }]);
      
      
