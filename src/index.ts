// function wrapInArray<T>(value: T) {
//   return [value];
// }

class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

const numbers = ArrayUtils.wrapInArray(2);
