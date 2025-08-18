<script>
    import { ShoppingCart } from "@lucide/svelte";
</script>


<button 
    aria-label="Open shop card"
    class="relative cursor-pointer text-dark-grayish-blue hover:text-dark-blue"
>
    <ShoppingCart  />
    <span class="absolute -top-2 -right-2 bg-orange text-white text-xs font-bold px-2 rounded-full">
        0
    </span>
</button>