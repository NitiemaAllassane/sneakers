<script>
    import Header from "$lib/components/Header.svelte";
    import CarouselPopup from "$lib/components/CarouselPopup.svelte";
    import { ShoppingCart } from "@lucide/svelte";
    import { addToCart } from "$lib/stock/cart";

    import minus from "$lib/assets/icon-minus.svg";
    import plus from "$lib/assets/icon-plus.svg";
    import nextIcon from "$lib/assets/icon-next.svg";
    import previousIcon from "$lib/assets/icon-previous.svg";

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
            id: 0
        },
        {
            bigImage: productImage2,
            smallImage: smallProductImage2,
            id: 1
        },
        {
            bigImage: productImage3,
            smallImage: smallProductImage3,
            id: 2
        },
        {
            bigImage: productImage4,
            smallImage: smallProductImage4,
            id: 3
        },
    ];



    let productIndex = $state(0);
    let currentProduct = $derived(productImages[productIndex]);


    let productPrice = 125;
    let productNumber = $state(0);

    function handleCart() {
        if (productNumber === 0) return;

        addToCart({
            id: currentProduct.id,
            name: "Fall Limited Edition Sneakers",
            price: productPrice,
            quantity: productNumber,
            image: currentProduct.smallImage

        })

        productNumber = 0;
    }

    const incrementProductNumber = () => productNumber++;
    const decrementProductNumber = () => {
        if(productNumber <= 0) return;
        productNumber--;
    };


    // Gestion du caroussel sur mobile

    function goToNextProduct() {
        if (productIndex >= productImages.length - 1) {
            productIndex = 0
        }

        productIndex += 1;
    }

    function goToPreviousProduct() {
        if (productIndex === 0) {
            productIndex = productImages.length - 1;
        }

        productIndex -= 1;
    }
    

    // Popup

    let isPopupOpened = $state(false);
    
</script>

<!-- * HEADER -->
<Header  />

<main class="mt-6 md:mt-16">
    <div class="container-md">
        <section class="flex flex-col md:flex-row items-center justify-center md:gap-16 lg:gap-44">

            <!-- caroussel part -->
            <div>
                <div class="relative">
                    <!-- image principale -->
                    <figure>
                        <button class=" md:rounded-2xl overflow-hidden mb-6 cursor-zoom-in" onclick={() => isPopupOpened = true}>
                            <img src={currentProduct.bigImage} alt="Product">
                        </button>
                    </figure>

                    <!--  Bouton du caroussel -->
                    <div class=" absolute top-1/2 left-1/2 -translate-x-1/2 flex items-center 
                                justify-between w-[90%] md:hidden"
                    >
                        <button 
                            type="button"
                            class=" bg-white w-10 h-10 rounded-full flex items-center justify-center"
                            onclick={goToPreviousProduct}
                        >
                            <img src={previousIcon} alt="" aria-hidden="true">
                        </button>
                        <button 
                            type="button"
                            class=" bg-white w-10 h-10 rounded-full flex items-center justify-center"
                            onclick={goToNextProduct}
                        >
                            <img src={nextIcon} alt="" aria-hidden="true">
                        </button>
                    </div>
                </div>
                <ul class="hidden md:grid grid-cols-4 gap-3">
                    {#each productImages as product (product.id)}
                        <li>
                            <button 
                                class=" overflow-hidden rounded-2xl  
                                { productIndex === product.id ? "border-[3px] border-orange opacity-85": " opacity-50"} 
                                cursor-pointer"
                                aria-label="See the product {product.id + 1} "
                                onclick={() => productIndex = product.id}
                            >
                                <img src={product.smallImage} alt="Product thumbnail {product.id + 1}">
                            </button>
                        </li>
                    {/each}
                </ul>
            </div>

            <!-- Sneakers information part -->
            <div class=" px-5 md:px-0">
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
                        ${productPrice}.00
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
                            onclick={decrementProductNumber}
                        >
                            <img src={minus} alt="">
                        </button>

                        <input 
                            type="text" 
                            bind:value={productNumber} 
                            class=" w-6 h-6 font-bold text-dark-blue text-center"
                            min="0"
                            max="99"
                            readonly
                        >

                        <button 
                            aria-label="Add article"
                            class="py-2.5 px-5 cursor-pointer"
                            onclick={incrementProductNumber}
                        >
                            <img src={plus} alt="">
                        </button>
                    </div>

                    <div class="w-full md:w-1/2 rounded-sm overflow-hidden">
                        <button 
                            class="flex items-center justify-center gap-2 bg-orange text-dark-blue 
                            py-2.5 px-5 w-full hover:bg-orange-300 transition-colors
                            { productNumber === 0 ? "cursor-not-allowed" : "cursor-pointer"} "
                            disabled={ productNumber === 0 }

                            onclick={handleCart}
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


<!-- POPUP -->
{#if isPopupOpened }
    <CarouselPopup 
        closePopup={() => isPopupOpened = false} 
        {productImages}
        {currentProduct}
        {goToNextProduct}
        {goToPreviousProduct}
        bind:productIndex={productIndex}
    />
{/if}




<style>
    .container-md {
        margin: 0 auto;
        
        @media screen and (min-width: 1280px) {
            max-width: 1180px;
        }

        @media screen and (min-width: 48rem) {
            max-width: 80%;
        }
    }
</style>