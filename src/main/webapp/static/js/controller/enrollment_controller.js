'use strict';

App.controller('EnrollmentController', ['$scope', 'EnrollmentService', function($scope, EnrollmentService) {
          var self = this;
          self.enrollment={id:null,customerId:'',enrollDate:new Date(),regTimeEvening:'',regTimeMorning:''};
          self.enrollments=[];
          self.regTimesMrng=[];
          self.regTimesEvng=[];
          self.message='';
         
              
         
              
          self.fetchRegTimesEvng = function(){
              EnrollmentService.fetchRegTimesEvng()
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
              EnrollmentService.fetchRegTimesMrng()
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
                 
           
          self.createEnrollment = function(enrollment){
              EnrollmentService.createEnrollment(enrollment)
		              .then(
		              		  function(d) {
		              			  if(d == '3'){
      						        $scope.submissionSuccess=true;
		              			  }else if(d == '1'){
		              				console.error('already present');
		              				$scope.submissionAlreadyPresent=true; 
		              			  }else{
		              				console.error('customer not exists');
		              				$scope.customerNotExists=true;  
		              			  }
      						        
      					       },
				              function(errResponse){
					               console.error('Error while creating Enrollment.');
					               $scope.submissionFailure=true;
				              }	
                  );
          };
          
             self.searchEnrollment = function(id){
              EnrollmentService.searchEnrollment(id)
		              .then(
				              function(d) {
      						        self.enrollments = d;
      					       }, 
				              function(errResponse){
					               console.error('Error while searching Enrollment.');
				              }	
                  );
          };

         self.updateEnrollment = function(enrollment, id){
              EnrollmentService.updateEnrollment(enrollment, id)
		              .then(
		            		  function(d) {
		            			  $scope.updateSuccess=true;
		            			  self.searchEnrollment(enrollment.customerId);
    					       }, 
				              function(errResponse){
					               console.error('Error while updating Enrollment.');
					               $scope.submissionFailure=true;
				              }	
                  );
          };

         self.deleteEnrollment = function(id){
              EnrollmentService.deleteEnrollment(id)
		              .then(
				              self.fetchAllEnrollments, 
				              function(errResponse){
					               console.error('Error while deleting Enrollment.');
				              }	
                  );
          };

          //self.fetchAllEnrollments();
          self.fetchRegTimesMrng();
          self.fetchRegTimesEvng();
       
          self.submit = function() {
        	  
        	  if(self.enrollment.id==null){
                  console.log('Saving New Enrollment', self.enrollment); 
                  self.createEnrollment(self.enrollment);
        	  }else{
        		  console.log('Enrollment updated with id ', self.enrollment.id);
                  self.updateEnrollment(self.enrollment, self.enrollment.id);
                  
              }
             self.reset();
             
          };
           
             self.search = function(id){
             console.log('id to be searched', id);
         	 self.searchEnrollment(self.enrollment.customerId);
         	 self.reset();
          };
              
          self.edit = function(id){
              console.log('id to be edited', id);
              for(var i = 0; i < self.enrollments.length; i++){
                  if(self.enrollments[i].id == id) {
                     self.enrollment = angular.copy(self.enrollments[i]);
                     break;
                  }
              }
              self.enrollment.enrollDate = new Date(self.enrollment.enrollDate);
              
              
              for(var i = 0; i < self.regTimesMrng.length; i++){
                  if(self.regTimesMrng[i].id == self.enrollment.regTimeMorning.id) {
                     self.enrollment.regTimeMorning= self.regTimesMrng[i];
                     break;
                  }
              }
             
              for(var i = 0; i < self.regTimesEvng.length; i++){
                  if(self.regTimesEvng[i].id == self.enrollment.regTimeEvening.id) {
                	  self.enrollment.regTimeEvening = self.regTimesEvng[i];
                     break;
                  }
              }
                        
          };
              
          self.remove = function(id){
              console.log('id to be deleted', id);
              if(self.enrollment.id === id) {//clean form if the enrollment to be deleted is shown there.
                 self.reset();
              }
              self.deleteEnrollment(id);
          };

          
          self.reset = function(){
              self.enrollment={id:null,customerId:'',enrollDate:new Date(),regTimeEveningId:'',regTimeMorningId:''};
              $scope.myForm.$setPristine(); //reset Form
              $scope.submissionSuccess=false;
              $scope.submissionAlreadyPresent=false; 
              $scope.submissionFailure=false;
              $scope.customerNotExists=false;
              
          };        

      }]);
      
      
