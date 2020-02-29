// function ucFirst(str) {

//   let uc;

//   uc = str[0].toUpperCase();
//   console.log(uc + "ася");
// }

// ucFirst("вася");

function checkSpam (str) {
  str.toLowerCase();
  checkSpam('buy ViAgRA now') == true
  checkSpam('free xxxxx') == true
  checkSpam("innocent rabbit") == false
}