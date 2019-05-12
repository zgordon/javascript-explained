/*
 * Create a new variable called hash and assign it the value of everything after the # in the testURL string.
 */

const hash = testURL.split(indexOfHash + 1, testURL.length - 1);

console.log(hash);
