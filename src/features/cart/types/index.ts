interface CartItem {
  id: string | number;
  quantity: number;
}


export interface cart_display {
  items: CartItem[];
  totalPrice?: number; // Optional, common in cart data
}
