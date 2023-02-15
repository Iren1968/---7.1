let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

let months = [],
  i;
for (i = 0; i < 12; i++) {
  months.push(new Date(0, i).toLocaleString({}, { month: 'long' }));
}
for (let expence of expencesExamples) {
  for (i = 0; i < expence.yearlyExpences.length; i++) {
    let exp = expence.yearlyExpences[i];

    if (exp <= 1000) {
      console.log(`В месяце ${months[i]} расходы составляли меньше 1000.`);
    }
  }
}
