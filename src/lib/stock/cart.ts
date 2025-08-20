import { writable, derived } from 'svelte/store';

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}


export const cartItems = writable<CartItem[]>([]);


export function addToCart(product: CartItem) {
    cartItems.update(items => {
        const existingItem = items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += product.quantity;
            return items;
        } else {
            return [...items, product];
        }
    });
}



export function removeFromCart(productId: number) {
    cartItems.update(items => items.filter(item => item.id !== productId));
}


export function updateQuantity(productId: number, newQuantity: number) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    cartItems.update(items => {
        const item = items.find(item => item.id === productId);
        if (item) {
            item.quantity = newQuantity;
        }
        return items;
    });
}

// nombre d'articles dans le panier
export const cartCount = derived(cartItems, $cartItems => 
    $cartItems.reduce((total, item) => total + item.quantity, 0)
);


// cacul du prix total
export const cartTotal = derived(cartItems, $cartItems => 
    $cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
);