<script>
    import Header from "$lib/components/Header.svelte";
    import { ShoppingCart } from "@lucide/svelte";

    import minus from "$lib/assets/icon-minus.svg";
    import plus from "$lib/assets/icon-plus.svg";

    // product big images
    import productImage1 from "$lib/assets/images/image-product-1.jpg"
    import productImage2 from "$lib/assets/images/image-product-2.jpg"
    import productImage3 from "$lib/assets/images/image-product-3.jpg"
    import productImage4 from "$lib/assets/images/image-product-4.jpg"

    // product small images
    import smallProductImage1 from "$lib/assets/images/image-product-1-thumbnail.jpg";
    import smallProductImage2 from "$lib/assets/images/image-product-2-thumbnail.jpg";
    import smallProductImage3 from "$lib/assets/images/image-product-3-thumbnail.jpg";
    import smallProductImage4 from "$lib/assets/images/image-product-4-thumbnail.jpg";
  

    const productImages = [
        {
            bigImage: productImage1,
            smallImage: smallProductImage1,
            id: 1
        },
        {
            bigImage: productImage2,
            smallImage: smallProductImage2,
            id: 2
        },
        {
            bigImage: productImage3,
            smallImage: smallProductImage3,
            id: 3
        },
        {
            bigImage: productImage4,
            smallImage: smallProductImage4,
            id: 4
        },
    ];
</script>


<Header  />

<main class="mt-6 md:mt-16">
    <div class="container-md">
        <section class="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-44">

            <!-- caroussel part -->
            <div>
                <figure class=" rounded-2xl overflow-hidden mb-6">
                    <img src={productImage1} alt="Product 1">
                </figure>
                <ul class="grid grid-cols-4 gap-3">
                    {#each productImages as product}
                        <li>
                            <button class=" overflow-hidden rounded-2xl border-[3px] border-orange opacity-75 cursor-pointer">
                                <img src={product.smallImage} alt="">
                            </button>
                        </li>
                    {/each}
                </ul>
            </div>

            <!-- Sneakers information part -->
            <div>
                <h4 class=" font-bold text-dark-grayish-blue tracking-[2px] mb-4 ">
                    SNEAKER COMPANY
                </h4>
                <h1 class=" text-3xl md:text-6xl font-bold text-dark-blue mb-3 md:mb-11">
                    Fall Limited Edition Sneakers
                </h1>
                <p class=" text-dark-grayish-blue font-normal mb-4">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>

                <h3 class="flex items-center gap-6 mb-4">
                    <span class=" text-4xl font-bold text-dark-blue">
                        $125.00
                    </span>
                    <span class=" text-white bg-black px-2 py-0.5 rounded-lg">
                        50%
                    </span>
                </h3>

                <p class="font-bold text-dark-grayish-blue mb-6">
                    <del>
                        $250.00
                    </del>
                </p>

                <!-- Buttons to add to cart an others -->
                <div class="flex flex-col md:flex-row items-center gap-6 md:gap-3">
                    <div class="flex items-center gap-6 bg-light-grayish-blue rounded-sm">
                        <button 
                            aria-label="Take off article" 
                            class="py-2.5 px-5 cursor-pointer"
                        >
                            <img src={minus} alt="">
                        </button>
                        <span class=" font-bold text-dark-blue">
                            0
                        </span>
                        <button 
                            aria-label="Add article"
                            class="py-2.5 px-5 cursor-pointer"
                        >
                            <img src={plus} alt="">
                        </button>
                    </div>

                    <div class=" bg-red-500 w-full md:w-1/2 rounded-sm overflow-hidden">
                        <button 
                            class="flex items-center justify-center gap-2 bg-orange text-dark-blue 
                            py-2.5 px-5 w-full cursor-pointer hover:bg-orange-300 transition-colors"
                        >
                            <ShoppingCart  />
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>

<footer class=" mt-16 text-center text-dark-blue py-3">
    <div class="attribution">
        Challenge by 
        <a 
            href="https://www.frontendmentor.io?ref=challenge" target="_blank"
            class=" text-orange"
        >
            Frontend Mentor
        </a>. 
        Coded by 
        <a 
            href="https://www.frontendmentor.io/profile/NitiemaAllassane"
            class=" text-orange"
        >
            Nitiema Allassane
        </a>.
    </div>
</footer>