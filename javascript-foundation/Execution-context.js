function printName() {
  return console.log("Sanjit Sarkar");
}

function findName() {
  return printName();
}

function sayMyName() {
  return findName();
}

sayMyName();
