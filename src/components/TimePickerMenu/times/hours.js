const hours = [];

for (let i = 0; i < 24; i++) {
  const hourToString = i.toString();
  let label = hourToString;

  if (hourToString.length === 1) {
    label = "0" + hourToString;
  }

  hours.push({ value: i, label });
}

export default hours;
