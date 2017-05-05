<!DOCTYPE html>
<html>
<head>
	
	<link href="mystyle.css" rel="stylesheet" type="text/css"/> 
	<script type="text/javascript" src="javascript.js"></script>
	<title>Project - Review Website</title>
	<!-- Moira Quinn & McKenna Buckley -->
 <body>
 <?php
	<div id=header>
		<h1>Brisbane Reviews</h1>
	</div>
	 
	<div id=menu>
		<a href="search.html">Search</a>
		<a href="resultspage.html">See All</a>
		<a href="userregpage.html">Sign Up</a> 
		<a href="login.php"> Login </a>
	</div>
	 
	<div id=image-container>
		<div id=form-container>
			<h2>Login</h2>
			
			<form style="text-align:right !important" onsubmit="return validate()">
				
				Username: <input id="username" type="text" name="username"> 
				<br>
				<span id="usernameMissing" class="error-message"> Field Required</span>
				<br>
				<br>
				
				Password: <input type="password" name="password" id="password"> 
				<br>
				<span id="passwordMissing" class="error-message"> Field Required</span>
				<br>
				
				<input type="submit" value="Login">
		
			</form>
		
		</div>
	</div>
	
	<div id=footer>
		<p>Copyright text</p>
		<p> Privacy Policy || Terms and Conditions </p>
	</div>
?>
		
	</body>
	
</html>
