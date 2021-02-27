const falsyValues = [undefined, null, false, 0, "", " ", NaN, [], {}];

falsyValues.forEach((value) => {
  console.log("Boolean(", value, "): ", Boolean(value));
});

// Are all of them falsy?
