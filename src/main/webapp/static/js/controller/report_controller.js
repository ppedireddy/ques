'use strict';

App.controller('ReportController', ['$scope', 'ReportService', function($scope, ReportService) {
          var self = this;
          self.customer={transactionDate:'',regTime:'',customerType:'',count:''};
          //self.conversionData={customerName:'',phone:'',email:'',day1:'',day2:'',paid:'',trail:''}
          //self.conversionData={"customerID":'',"firstName":'',"lastName":'',"phone":'',"firstTrialDate":'',"secondTrialDate":'',"paid":'',"notPaid":'',"allDataSet":'',"commuteRecordCount":''},
          self.todate='';
          self.fromDate='';
          self.commuterData=[];
          self.conversionflag=true;
               
              
         self.fetchCommuterData= function(){
              ReportService.fetchCommuterData()
                  .then(
      					       function(d) {
      						        self.commuterData = d;
      					       },
            					function(errResponse){
            						console.error('Error while fetching commuter data');
            					}
      			       );
          };
          
          self.fetchConversionData= function(fromdate,todate){
              ReportService.fetchConversionData(fromdate,todate)
                  .then(
      					       function(d) {
      						        self.conversionData = d;
      					       },
            					function(errResponse){
            						console.error('Error while fetching conversion data');
            					}
      			       );
          };
          
          self.fetchDroppedCustomerData= function(fromdate,todate){
              ReportService.fetchDroppedCustomerData(fromdate,todate)
                  .then(
      					       function(d) {
      						        self.customerData = d;
      					       },
            					function(errResponse){
            						console.error('Error while fetching customer data');
            					}
      			       );
          };
          
          self.fetchPaidCustomerData= function(fromdate,todate){
              ReportService.fetchPaidCustomerData(fromdate,todate)
                  .then(
      					       function(d) {
      						        self.customerData = d;
      					       },
            					function(errResponse){
            						console.error('Error while fetching customer data');
            					}
      			       );
          };
                        
          self.cancel = function(){
              
				window.location.href = '/ezs/';
		
          }; 
		  
		  self.fetchCommuterData();
      

		  /*self.generate = function(){
			  
			  self.generateConversionReport(self.fromDate,self.toDate);
		  }*/
		  
		   self.getConversionData= function(){
			   if((self.fromDate!=null)&&(self.toDate!=null)){
				   self.fromDate=self.fromDate.getFullYear() + '-' + (self.fromDate.getMonth() + 1) +  '-' + self.fromDate.getDate();
	                  self.toDate=self.toDate.getFullYear() + '-' + (self.toDate.getMonth() + 1) +  '-' + self.toDate.getDate();
	                  console.log('Fetching conversion data', self.fromDate);    
	                  self.fetchConversionData(self.fromDate,self.toDate);
			   
		   }
		   }
		   
			   self.getDroppedCustomerData= function(){
				   if((self.fromDate!=null)&&(self.toDate!=null)){
					   self.fromDate=self.fromDate.getFullYear() + '-' + (self.fromDate.getMonth() + 1) +  '-' + self.fromDate.getDate();
		                  self.toDate=self.toDate.getFullYear() + '-' + (self.toDate.getMonth() + 1) +  '-' + self.toDate.getDate();
					   self.fetchDroppedCustomerData(self.fromDate,self.toDate);
		                  console.log('Fetch customer data', self.fromDate);
				   
			   }
		   
			}
		   
			   self.getPaidCustomerData= function(){
				   if((self.fromDate!=null)&&(self.toDate!=null)){
					   self.fromDate=self.fromDate.getFullYear() + '-' + (self.fromDate.getMonth() + 1) +  '-' + self.fromDate.getDate();
		                  self.toDate=self.toDate.getFullYear() + '-' + (self.toDate.getMonth() + 1) +  '-' + self.toDate.getDate();
					   self.fetchPaidCustomerData(self.fromDate,self.toDate);
		                  console.log('Fetch customer data', self.fromDate);
				   
			   }
		   
			}
			   
          self.submit = function() {
              if((self.fromDate!=null)&&(self.toDate!=null)&&self.conversionflag){
                  console.log('Fetching conversion data', self.fromDate);  
                  self.fromDate=self.fromDate.getFullYear() + '-' + (self.fromDate.getMonth() + 1) +  '-' + self.fromDate.getDate();
                  self.toDate=self.toDate.getFullYear() + '-' + (self.toDate.getMonth() + 1) +  '-' + self.toDate.getDate();
                  
                  self.fetchConversionData(self.fromDate,self.toDate);
              }else{
            	  self.fromDate=self.fromDate.getFullYear() + '-' + (self.fromDate.getMonth() + 1) +  '-' + self.fromDate.getDate();
                  self.toDate=self.toDate.getFullYear() + '-' + (self.toDate.getMonth() + 1) +  '-' + self.toDate.getDate();
            	  self.fetchConversionData(self.fromDate,self.toDate);
                  console.log('Fetch customer data', self.commute.id);
              }
            
             
          };
              
        

          
            

      }]);
      
      
