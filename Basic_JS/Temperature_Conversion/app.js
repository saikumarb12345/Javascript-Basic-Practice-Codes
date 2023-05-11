// ***Open console to see the output [ctrl+shift+j]

function cTf(celcius) {
  let farenhiet = (9 * celcius + 32 * 5) / 5;
  console.log(`${celcius} C is ${farenhiet} F.`);
}

function fTc(farenhiet) {
  let celcius = (5 * (farenhiet - 32)) / 9;
  console.log(`${farenhiet} F is ${celcius} C.`);
}
cTf(60);
fTc(98);
