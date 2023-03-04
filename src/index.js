export function multiply(a, b) {
  return a * b
}

export function evenOrOdd(a) {
  if (a !== 0 && typeof a !== 'string') {
    if (a % 2 == 0) return `Число ${a} четное`
    else if (!Number.isInteger(a)) {
      return `Число ${a} не целое число`
    } else return `Число ${a} нечетное`
  } else if (a === 0) return `Число ${a} является нулем`
  else {
    return `Число ${a} не является числом`
  }
}
