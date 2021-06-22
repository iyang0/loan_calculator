it('should calculate the monthly rate correctly', function () {
  // works with default
  expect(calcMonthlyPayment(120, 1, 0.1)).toEqual(10.55)
});

it('should return a monthly rate of 0 if interest is 0',
function () {
  expect(calcMonthlyPayment(120, 1, 0)).toEqual(0)
})