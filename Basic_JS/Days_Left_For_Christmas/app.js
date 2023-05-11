const cmas = new Date(2022, 11, 25); // December 25, 2022
const today = new Date(); // Current date
if (today.getMonth() == 11 && today.getDate() > 25) {
  // update year
  cmas.setFullYear(cmas.getFullYear() + 1);
}

const one_day = 1000 * 60 * 60 * 24; // Number of milliseconds in one day

const diff = Math.ceil((cmas.getTime() - today.getTime()) / one_day);
console.log(`${diff} left for Christmas.`); // Outputs the number of days between today and December 25, 2022
