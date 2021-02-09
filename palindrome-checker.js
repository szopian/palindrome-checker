function palindrome(str) {
  let result = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  if (result === result.split("").reverse().join("")) {
    return true;
  }

  return false;
}

let r = palindrome("Not a palindrome");
console.log(r);
