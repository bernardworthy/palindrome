function isPalindrome(str) {
  var frontArr = str.split('');
  var frontStr = frontArr.join('');
  var backArr = [];

  for (i = frontArr.length - 1; i >= 0; --i) {
    backArr.push(frontArr[i]);
  }

  var backStr = backArr.join('');

  if (backStr === frontStr) {
    return true;
  } else {
    return false;
  }
}

var str = 'hannah';

isPalindrome(str);
