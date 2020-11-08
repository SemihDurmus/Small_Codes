// ---------------ROMAN TO INTEGER----------------------

const inp_rom = document.querySelector("#inp_rom");
const inp_btn1 = document.querySelector("#btn1");
const output1 = document.querySelector("#output1");

inp_btn1.addEventListener("click", romanToArabic);

function romanToArabic() {
  let romanNumber = inp_rom.value;

  romanNumber = romanNumber.toUpperCase();
  const romanNumList = [
    "CM",
    "M",
    "CD",
    "D",
    "XC",
    "C",
    "XL",
    "L",
    "IX",
    "X",
    "IV",
    "V",
    "I",
  ];
  const corresp = [900, 1000, 400, 500, 90, 100, 40, 50, 9, 10, 4, 5, 1];
  let index = 0;
  let num = 0;

  for (let rn in romanNumList) {
    // console.log(rn);
    // console.log(romanNumList[rn]);
    index = romanNumber.indexOf(romanNumList[rn]);

    while (index != -1) {
      num += corresp[rn];
      romanNumber = romanNumber.replace(romanNumList[rn], "-");
      index = romanNumber.indexOf(romanNumList[rn]);
    }
  }
  output1.innerHTML = num;
}
//
// ---------------INTEGER TO ROMAN----------------------
const inp_int = document.querySelector("#inp_int");
const inp_btn2 = document.querySelector("#btn2");
const output2 = document.querySelector("#output2");

inp_btn2.addEventListener("click", arabicToRoman);

function arabicToRoman() {
  let intNumber = inp_int.value;
  let roman = "";

  let lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  if (intNumber == NaN || intNumber < 1 || intNumber >= 4000) {
    alert("Please insert a valid entry!");
  } else {
    for (let i in lookup) {
      while (intNumber >= lookup[i]) {
        roman += i;
        intNumber -= lookup[i];
      }
    }

    output2.innerHTML = roman;
  }
}

// i _> Key
// [i] _> value
