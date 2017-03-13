<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
  <head>  
    <title>GenQue Home</title>  
     </head>
 <html>
   
   <head>
      <script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
   </head>
   
   <body ng-app = "myApp">
	

 <center><h1><font size="7" color="#0000ff">Ques</font></h1>
  <form method="POST" action="uploadFile" enctype="multipart/form-data" >
  Select a source file: <input type="file" name="file">
  <input type="submit" value="Genques" >
  <hr>
</form></center>
 </body>
</html>
	
      
  