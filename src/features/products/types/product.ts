export interface Product {
  id: string;
  name: string;
  price: number;
  // add more fields based on your backend
}

// export interface ApiResponse {
//   results: Product[]; // This tells TS that results is an array of Product objects
// }