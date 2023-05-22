// Unknown type......better than any type. forces us to check type on our own.

function render(document: unknown) {
  // Narrowing
  if (document instanceof WordDocument) {
  }
  document.move();
}
