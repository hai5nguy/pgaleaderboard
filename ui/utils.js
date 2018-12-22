export const isFocused = element => (document.activeElement === element);

export const isNumber = v => !Number.isNaN(parseFloat(v));

export const isNumeric = n => !Number.isNaN(parseFloat(n)) && Number.isFinite(n);

export const objectEqual = (a, b) => {
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);

  if (aProps.length !== bProps.length) { return false; }

  for (let i = 0; i < aProps.length; i++) {
    const p = aProps[i];
    if (a[p] !== b[p]) { return false; }
  }

  return true;
};
