<script>
    import { fly, slide } from "svelte/transition";
    import { cartItems, removeFromCart, updateQuantity, cartTotal } from "$lib/stock/cart";
    import { Trash2 } from "@lucide/svelte";

    // Fonction pour supprimer un item du panier
    /**
	 * @param {number} productId
	 */

    function handleRemoveItem(productId) {
        removeFromCart(productId);
    }

    // Fonction pour vider complètement le panier
    function clearCart() {
        cartItems.set([]);
    }
</script>

<div class="container">
    <div 
        class="bg-white md:w-96 shadow-2xl w-full fixed 
               top-20 left-0 md:left-auto z-10 md:absolute md:top-24 
               md:right-12 rounded-lg overflow-hidden"
        style="min-height: 200px; max-height: 400px;"
        transition:slide
    >
        <header class="p-3 border-b border-b-dark-grayish-blue">
            <h4 class="font-bold text-dark-blue">Cart</h4>
        </header>
        
        <article class="py-3 px-6 bg-white rounded-b-lg">
            {#if $cartItems.length === 0}
                <!-- Panier vide -->
                <div class="flex items-center justify-center text-center h-32">
                    <p class="font-bold text-dark-grayish-blue">
                        Your cart is empty
                    </p>
                </div>
            {:else}
                <!-- Items du panier -->
                <div class="space-y-4 max-h-48 overflow-y-auto">
                    {#each $cartItems as item (item.id)}
                        <div class="flex items-center gap-3 py-2">
                            <!-- Image du produit -->
                            <img 
                                src={item.image} 
                                alt={item.name}
                                class="w-12 h-12 rounded object-cover"
                            >
                            
                            <!-- Informations du produit -->
                            <div class="flex-1">
                                <h5 class="text-dark-grayish-blue text-sm font-medium truncate">
                                    {item.name}
                                </h5>
                                <div class="flex items-center gap-2 text-dark-grayish-blue text-sm">
                                    <span>${item.price}.00 × {item.quantity}</span>
                                    <span class="font-bold text-dark-blue">
                                        ${item.price * item.quantity}.00
                                    </span>
                                </div>
                            </div>
                            
                            <!-- Bouton supprimer -->
                            <button
                                class="text-dark-grayish-blue cursor-pointer hover:text-red-500 transition-colors p-1"
                                onclick={() => handleRemoveItem(item.id)}
                                aria-label="Remove {item.name} from cart"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    {/each}
                </div>
                
                <!-- Total et bouton checkout -->
                <div class="mt-4 pt-4 border-t border-light-grayish-blue">
                    <div class="flex justify-between items-center mb-3">
                        <span class="font-bold text-dark-blue">Total:</span>
                        <span class="font-bold text-dark-blue text-lg">
                            ${$cartTotal}.00
                        </span>
                    </div>
                    
                    <button 
                        class="w-full bg-orange hover:bg-orange-300 text-white font-bold 
                               py-3 px-4 rounded-lg transition-colors cursor-pointer"
                        onclick={clearCart}
                    >
                        Checkout
                    </button>
                </div>
            {/if}
        </article>
    </div>
</div>