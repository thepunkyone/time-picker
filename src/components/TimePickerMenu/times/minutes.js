const minutes = [];

for (let i = 0; i < 60; i += 5) {
  const minutesToString = i.toString();
  let label = minutesToString;

  if (minutesToString.length === 1) {
    label = "0" + minutesToString;
  }

  minutes.push({ value: i, label });
}

export default minutes;
