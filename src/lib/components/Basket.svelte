<script>
    import { ShoppingCart } from "@lucide/svelte";
    import { cartItems, cartCount } from "$lib/stock/cart";

    let { onBasketClick } = $props();
</script>

<button 
    aria-label="Open shop card"
    class="relative cursor-pointer text-dark-grayish-blue hover:text-dark-blue"
    onclick={onBasketClick}
>
    <ShoppingCart />

    {#if $cartCount > 0}
        <span 
            class="absolute -top-2 -right-2 bg-orange text-white 
            text-xs font-bold px-2 py-0.5 rounded-full min-w-[20px] 
            flex items-center justify-center"
        >
            {$cartCount}
        </span>
    {/if}
</button>