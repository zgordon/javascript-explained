/*
 * Write a function called checkFirst() that confirms if the user wants a "Hi!" and then alerts a "Hi!"
 * if they do and does not if they do not  Call checkFirst() to test it.
 */

function checkFirst() {
	if (confirm(`Do you want a Hi?`)) {
		alert(`Hi!`);
	} else {
		console.log(`You didn't want a Hi.`);
	}
}

checkFirst();
