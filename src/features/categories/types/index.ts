export interface Category {
  id: string;
  name: string;
}

export interface CursorResponse<T> {
  results: T[];
  next: string | null;
  previous: string | null;
}
