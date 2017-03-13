'use strict';

App.controller('CommuteController', ['$scope', 'CommuteService', function($scope, CommuteService) {
          var self = this;
          self.customer={id:null,firstname:'',address:'',email:''};
          self.commute={id:null,boardedCustomers:[],transactionDate:new Date(),regTimeId:'',timeArrived:'',timeLeft:new Date(),description:''};
          self.customers=[];
          self.all=[];
          self.boarded=[];
          self.boardedcustomers=[];
          self.customerTypes=[];
          self.tripTypes=[];
          self.localRoutes=[];
          self.regTimes=[];
          self.message='';
          self.paidcounter=0;
          self.trailcounter=0;
              
         self.fetchAllCustomers = function(){
              CommuteService.fetchAllCustomers()
                  .then(
      					       function(d) {
      						        self.customers = d;
      					       },
            					function(errResponse){
            						console.error('Error while fetching customers');
            					}
      			       );
          };
                        
          self.fetchRegTimes = function(){
              CommuteService.fetchRegTimes()
                  .then(
      					       function(d) {
      						        self.regTimes = d;
      					       },
            					function(errResponse){
            						console.error('Error while fetching regTimes');
            					}
      			       );
          };    
          self.cancel = function(){
          
					window.location.href = '/ezs/';
			
          };     
                       
	     self.moveItem = function(item, from, to) {
	
	        console.log('Move item   Item: '+item+' From:: '+from+' To:: '+to);
	        //Here from is returned as blank and to as undefined
	
	        var idx=from.indexOf(item);
	        if (idx != -1) {
	            from.splice(idx, 1);
	            to.push(item);      
	        }
	    };
	    self.moveAll = function(from, to) {
	
	        console.log('Move all  From:: '+from+' To:: '+to);
	        //Here from is returned as blank and to as undefined
	
	        angular.forEach(from, function(item) {
	            to.push(item);
	        });
	        from.length = 0;
	    };    
                
	    self.countTrail = function(from) {
	    	self.paidcounter=0;
	    	self.trailcounter=0;
	        console.log('RRRRRRRRRRRR:: '+from+' To:: ');
	        //Here from is returned as blank and to as undefined
	
	        angular.forEach(from, function(item) {
	        	 console.log('customerType'+(item.customerType.customerType));
	        	 if(item.customerType.customerType=='PAID'){
	        		 ++self.paidcounter;
	        	 }
	        	 if(item.customerType.customerType=='TRAIL'){
	        		 ++self.trailcounter;
	        	 }
	        	 
	        });
	        console.log('PAID COUNTER:: '+self.paidcounter+' To:: ');
	        console.log('PAID COUNTER:: '+self.trailcounter+' To:: ');
	    };    
                       
                        
          self.fetchCommuteTypes = function(){
              CommuteService.fetchCommuteTypes()
                  .then(
      					       function(d) {
      						        self.customerTypes = d;
      					       },
            					function(errResponse){
            						console.error('Error while fetching Commute Types');
            					}
      			       );
          };    
          
          self.fetchTripTypes = function(){
              CommuteService.fetchTripTypes()
                  .then(
      					       function(d) {
      						        self.tripTypes = d;
      					       },
            					function(errResponse){
            						console.error('Error while fetching TripTypes');
            					}
      			       );
          };    
                      
          self.fetchAllCommutes = function(){
              CommuteService.fetchAllCommutes()
                  .then(
      					       function(d) {
      						        self.customers = d;
      					       },
            					function(errResponse){
            						console.error('Error while fetching Currencies');
            					}
      			       );
          };
           
           
          self.createCommute = function(commute){
          		commute.boardedCustomers=self.boardedcustomers;
              CommuteService.createCommute(commute)
		              .then(
		              		  function(d) {
      						         $scope.submissionSuccess=true;
      						        
      					       },
				              function(errResponse){
					               console.error('Error while creating Commute.');
					               $scope.submissionFailure=true;
				              }	
                  );
          };

		 self.searchCommute = function(tdate){
              CommuteService.searchCommute(tdate)
		              .then(
				              function(d) {
      						        self.enrollments = d;
      					       }, 
				              function(errResponse){
					               console.error('Error while updating Commute.');
				              }	
                  );
          };

         self.updateCommute = function(commute, id){
              CommuteService.updateCommute(commute, id)
		              .then(
				              self.fetchAllCommutes, 
				              function(errResponse){
					               console.error('Error while updating Commute.');
				              }	
                  );
          };

         self.deleteCommute = function(id){
              CommuteService.deleteCommute(id)
		              .then(
				              self.fetchAllCommutes, 
				              function(errResponse){
					               console.error('Error while deleting Commute.');
				              }	
                  );
          };
		  
		  self.fetchRegTimes();
          self.fetchAllCustomers();
         // self.fetchCommuteTypes();
         // self.fetchTripTypes();
         // self.fetchLocalRoutes();

          self.submit = function() {
              if(self.commute.id==null){
                  console.log('Saving New Commute', self.commute);  
                  self.commute.transactionDate=self.commute.transactionDate.getFullYear() + '-' + (self.commute.transactionDate.getMonth() + 1) +  '-' + self.commute.transactionDate.getDate();
                  self.createCommute(self.commute);
              }else{
                  self.updateCommute(self.commute, self.commute.id);
                  console.log('Commute updated with id ', self.commute.id);
              }
             self.reset();
             self.message='Success';
          };
              
          self.edit = function(id){
              console.log('id to be edited', id);
              for(var i = 0; i < self.customers.length; i++){
                  if(self.customers[i].id == id) {
                     self.customer = angular.copy(self.customers[i]);
                     break;
                  }
              }
          };
              
          self.remove = function(id){
              console.log('id to be deleted', id);
              if(self.customer.id === id) {//clean form if the customer to be deleted is shown there.
                 self.reset();
              }
              self.deleteCommute(id);
          };

          
          self.reset = function(){
              self.commute={id:null,boardedCustomers:[],transactionDate:new Date(),regTimeId:'',timeArrived:'',timeLeft:new Date(),description:''};
              self.boardedcustomers=[];
              $scope.submissionSuccess=false;
              $scope.submissionFailure=false;
              $scope.myForm.$setPristine(); //reset Form
          };        

      }]);
      
      
