/*
 * Create a function called login() .  Inside the function, a prompt asking the user to enter a password.
 * Save the value of the prompt in a variable called password .  Next, check to see if password equals
 * the word "password".  If it does, alert, "Thank you! You are Logged In!".  If they did not enter
 * the word "password" for their password, alert "Incorrect, please try again!".  Call the function
 * to test it.
 */

function login() {
	const password = prompt(`Please enter your Password:`);

	if (password === `password`) {
		alert(`Thank you! You are Logged In!`);
	} else {
		alert(`Incorrect, please try again!`);
	}
}

login();
