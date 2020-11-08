const myFunction = (myString, myLetter)=> {
  var count = 0;
  for (let i=0; i < myString.length; i++) 
    myString[i].toLowerCase() == myLetter.toLowerCase() ? count++ : count;
  return count
}

console.log(myFunction("cLAruswaY", "a"))
