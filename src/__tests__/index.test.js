import { multiply } from '../index.js'

import { evenOrOdd } from '../index.js'

const notANumber = 'Not a number'

xdescribe('test multiply', () => {
  it('multiply 1 * 0 to equal 0', () => {
    const result = multiply(1, 0)
    expect(result).toBe(0)
  }),
    it('multiply 1 * 1 to equal 1', () => {
      const result = multiply(1, 1)
      expect(result).toBe(1)
    })
})

describe('test multiply', () => {
  it('the number is even', () => {
    //Проверка на четность
    const result = evenOrOdd(6)
    expect(result).toBe(`Число ${6} четное`)
  }),
    it('the number is odd', () => {
      //Проверка на нечетность
      const result = evenOrOdd(-123)
      expect(result).toBe(`Число ${-123} нечетное`)
    }),
    it('the number is 0', () => {
      // проверка на ноль
      const result = evenOrOdd(0)
      expect(result).toBe(`Число ${0} является нулем`)
    }),
    it('the number with floating point', () => {
      // проверка на целостность
      const result = evenOrOdd(1.1)
      expect(result).toBe(`Число ${1.1} не целое число`)
    }),
    it('is not number', () => {
      // НЕ число
      const result = evenOrOdd(notANumber)
      expect(result).toBe(`Число ${notANumber} не является числом`)
    })
})
