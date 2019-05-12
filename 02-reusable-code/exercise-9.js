/*
 * Create a function called askFullName() that will prompt the user for their first name and assign it to a
 * variable called first inside the function.  Then it will prompt them for their last name and save it to
 * a variable called last inside the function.  Finally, it will return the value of the user's full name
 * with a space between.  Log askFullName() to the console to test.
 */

function askFullName() {
	const first = prompt("Please enter your fitst name", "Hermione");
	const last = prompt("Please enter your last name", "Granger");

	return getFullName(first, last);
}

console.log(askFullName());
