function sendForm(){
	var varEmail = document.forms["formReg"]["email"].value;
	var varUser = document.forms["formReg"]["username"].value;
	var varPass = document.forms["formReg"]["password"].value;

	var dataFormReg = {username: varUser, email: varEmail, password: varPass};
	$.post("/register", dataFormReg, function (data) {
	});
}

function sendLogin(){
	var varUser = document.forms["formLog"]["username"].value;
	var varPass = document.forms["formLog"]["password"].value;

	var dataFormLog = {username: varUser, password: varPass};
	$.post("/login", dataFormLog, function (data) {
	});
}