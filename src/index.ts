interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetchData<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
  username: string;
}

interface Product {
  title: string;
}

let result = fetchData<Product>("url");
