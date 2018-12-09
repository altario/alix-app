export const numericalValues = (value) => {
  return process(value);
}

const process = value => {
  const obj = {};
  obj.fullValue = value;

  if (value >= 1e3 || value <= -1e3) {
    const units = ['k', 'M', 'B', 'T'];
    const unit = Math.floor((Number(value).toFixed(0).length - 1) / 3) * 3;
    obj.scaledValue = (value / Number(('1e' + unit)));
    obj.round = autoRound(obj.scaledValue);
    obj.unitname = units[Math.floor(unit / 3) - 1];
  } else {
    obj.round = autoRound(value);
  }

  obj.percentualValue = autoRound(value * 100);

  return obj;
}

const autoRound = value => {
  if (value >= 1e2 || value <= -1e2) {
    return roundTo(value, 0);
  }
  if (value >= 1e1 || value <= -1e1) {
    return roundTo(value, 1);
  }
  if (value >= 1e0 || value <= -1e0) {
    return roundTo(value, 2);
  }
  if (value < 1 && value > -1) {
    return roundTo(value, 2);
  }
}

const roundTo = (num, scale) => +(Math.round(Number(num + 'e+' + scale))  + 'e-' + scale);
