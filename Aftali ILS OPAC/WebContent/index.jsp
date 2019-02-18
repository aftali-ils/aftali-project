<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<html>
    <head>

        <title>Catalog | @libraryname | Aftali</title>
        
        <link rel="stylesheet" media="screen and (min-width: 320px)" href="./css/styles-minwidth320.css">
        <link rel="stylesheet" media="screen and (min-width: 480px)" href="./css/styles-minwidth480.css">
        <link rel="stylesheet" media="screen and (min-width: 600px)" href="./css/styles-minwidth600.css">
        <link rel="stylesheet" media="screen and (min-width: 768px)" href="./css/styles-minwidth768.css">
        <link rel="stylesheet" media="screen and (min-width: 1024px)" href="./css/styles-minwidth1024.css">
        <link rel="stylesheet" media="screen and (min-width: 1200px)" href="./css/styles-minwidth1200.css">
                
    </head>
        
    <body id="main_content_container">
    
     	<div>
     
	    	<div class="top-banner sticky" id="top-banner">   
	     		
	     		<div>
		     		<img class="logo" id="lib-logo" src="./images/example_logo.png" alt="Library Logo">
	     		</div>
	     		
	     		<div>
	     			<span id="date-banner"></span>
	     		</div>
	     		
	     		<div>
			    	<button class="login-top-button" id="login-top">Login</button>
			    </div>
		    
		    </div> 
		          
		    <div style="clear: both"></div>
		   
	       	<div class="col-6">
	       	
	       		<div class="header-sections">
	       		
	       			<span class="library-name">Library Name</span>
	       			
	        	</div>
	        	
	        </div>
	        
	        
	        
	        <div class="col-6">
	      			
	        	<div class="header-sections">
	        		
	        		<div class="info-sections">
	        		
	        			<p class="library-details-text"><img class="info-icons" src="./images/ic_location.svg" alt="location icon"></p>
			        	
		       			<p class="library-details-text">123 Fake Street, Phantom Avenue, Vagueville.</p>
		       			
	       			</div>
	       			
	       			<div class="info-sections">
	        		
	        			<p class="library-details-text"> <img class="info-icons" src="./images/ic_clock.svg" alt="location icon"> </p>
	
						<p class="library-details-text">Mon-Fri 8am - 6pm / Sat-Sun 10am - 3pm</p>
		       			
	       			</div>
	       			
	       			<div class="info-sections">
	        		
			        	<p class="library-details-text"><img class="info-icons" src="./images/ic_info.svg" alt="times icon"></p>
		       			<p class="library-details-text">We will close for a public holiday next Tuesday.</p>
		       			
	       			</div>
	       			
	       		</div>
		     		
		    </div>
		          
		          
		    <div style="clear: both"></div>   
		    
		    
		    <div class="col-3">
	       	
	       		<div class="search-container">
	       		
	       			<input class="library-field" type="text" name="lib-field" placeholder="Library Field">
	       			
	        	</div>
	        	
	        </div>
		    
	        <div class="col-9">
	      			
	        	<div class="search-container">
	        	       	
	       			<input class="search-bar" type="text" name="search-bar" placeholder="Type your search here">
		
		   			<button class="search-button">Search</button>
	       			
	       		</div>
		     		
		    </div>
	        
	        
	        
	        
	        
	        <div class="col-3 left-main">
	        
	        	<p class="left-main-header">
	        			Custom Library Text
	        	</p>
	        		
	        </div>
	        
	        <div class="col-6 middle-main">
	        
	        	<p class="middle-main-header">
	        			Popular Books
	        	</p>
	        		
	        </div>
	        
	        <div class="col-3 right-main">
	        
	        	<div class="right-main-login">
	        	
					<span class="login-header-text">Login Form</span>
					
		        	<br>
		        	
		   			<input class="input-fields" type="text" name="name" placeholder="Username/Email" size="25">
		
		   			<input class="input-fields" type="text" name="password" placeholder="Password" size="25">
		
		   			<button class="login-button">Login</button>
	   			</div>
	   			
	   			<hr>
	   			
	   			<span class="login-header-text">Registration Details</span>
	        		
	        </div>
	       
	        <div class="footer">
	        
	                <p>Powered by Aftali ILS <br class="footer-br"> <span class="footer-divider">|</span> An OpenSource Integrated Library System</p>
	                
	        </div>
	        
	        <div class="btt" id="btt">
				<a href="#main_content_container">
					<img class="btt-icon" src="./images/back_to_top.png">
				</a>
			</div>
        
        </div>
        
        <script src="./js/aftali_ils.js"></script>
        
    </body>
    
</html>