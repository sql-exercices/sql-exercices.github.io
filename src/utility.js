export function equal_results(r1, r2) {
  if (r1.length == 0 || r2.length == 0) return false;

  const col1 = r1[0].columns,
    val1 = r1[0].values;
  const col2 = r2[0].columns,
    val2 = r2[0].values;

  if (col1.length != col2.length || val1.length != val2.length) return false;

  for (let i = 0; i < col1.length; i++) {
    if (col1[i] != col2[i]) return false;
  }

  for (let i = 0; i < val1.length; i++) {
    if (val1[i].length != val2[i].length) return false;
    for (let j = 0; j < val1[i].length; j++)
      if (val1[i][j] != val2[i][j]) return false;
  }

  return true;
}
