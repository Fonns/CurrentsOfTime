function sendForm(){
	var varEmail = document.forms["formReg"]["email"].value;
	var varUser = document.forms["formReg"]["username"].value;
	var varPass = document.forms["formReg"]["password"].value;

	var dataFormReg = {username: varUser, email: varEmail, password: varPass};
	$.post("/login", dataFormReg, function (data) {
	});
}