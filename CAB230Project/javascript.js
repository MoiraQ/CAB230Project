function getLocation() {
    if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition();
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
    } else { 
    }
}

function validate() {
	checkString("username", "usernameMissing");
	checkString("fName", "fNameMissing");
	checkString("lName", "lNameMissing");
	checkString("email", "emailMissing");
	checkString("password", "passwordMissing");
	checkString("confirmPassword", "cPasswordMissing");
	checkSelection("gender", "genderMissing");
	checkPassword();
	if(!checkString("username", "usernameMissing") || !checkPassword() || !checkString("fName", "fNameMissing") || !checkString("lName", "lNameMissing") ||
	!checkString("email", "emailMissing") || !checkSelection("gender", "genderMissing") || !checkString("password", "passwordMissing") || !checkString("confirmPassword", "cPasswordMissing")){
		window.alert("Please Fill Out Missing Information");
		return false;
	}
	window.alert("ALERT");
	return true;
	
}

function checkString(thing, changeVisibility) {
	if (document.getElementById(thing).value == ""){
		document.getElementById(changeVisibility).style.visibility = "visible";
		return false;
	}
	else{
		document.getElementById(changeVisibility).style.visibility = "hidden";
		return true;
	}
}

function checkSelection(thing, changeVisibility) {
	if (document.getElementById(thing).value == "genderPlaceholder"){
		document.getElementById(changeVisibility).style.visibility = "visible";
		return false;
	}
	else{
		document.getElementById(changeVisibility).style.visibility = "hidden";
		return true;
	}
}

function checkPassword(){
	if (document.getElementById("password").value !== document.getElementById("confirmPassword").value)	{
		document.getElementById("passwordDifferent").style.visibility = "visible";
		return false;
	}
	else{
		return true;
	}
}