function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

// Best Practice: properly anotate fns (parameters & retrun types) & enable 3 tsconfig settings.
