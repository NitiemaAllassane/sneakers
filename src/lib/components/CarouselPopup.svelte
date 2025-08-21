<script>
    import { X } from "@lucide/svelte";

    import nextIcon from "$lib/assets/icon-next.svg";
    import previousIcon from "$lib/assets/icon-previous.svg";

    /**
	 * @param {{ key: string; preventDefault: () => void; }} event
	 */
    function handleOverlayKeydown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            closePopup();
        }
    }

    // Gestion du clavier pour le contenu (empêcher la fermeture)
    /**
	 * @param {{ stopPropagation: () => void; }} event
	 */
    function handleContentKeydown(event) {
        event.stopPropagation();
    }

    // props
    let { 
        closePopup, 
        productImages, 
        currentProduct ,
        goToNextProduct,
        goToPreviousProduct,
        productIndex = $bindable(),
    } = $props();
</script>


<!-- popup overlay -->
<div 
    class="hidden fixed top-0 left-0 w-full h-full bg-black/75 
    md:flex items-center justify-center "

    onclick={closePopup}
    role="button"
    tabindex="0"
    aria-label="Close Popup"
    onkeydown={handleOverlayKeydown}
>


    <section 
        class="z-50 "
        onclick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        onkeydown={handleContentKeydown}
    >
        <div>
            <div class="flex items-center justify-end mb-6">
                <button 
                    aria-label="Close pop up"
                    class=" text-white font-bold cursor-pointer hover:text-orange"
                    onclick={closePopup}
                >
                    <X  />
                </button>
            </div>
            <div class=" relative">
                <figure class="rounded-2xl overflow-hidden mb-6 max-w-[480px] ">
                    <img src={currentProduct.bigImage} alt="Product number {currentProduct.id} ">
                </figure>
                <div class=" absolute top-1/2 left-1/2 -translate-x-1/2 flex items-center 
                            justify-between w-lg"
                >
                    <button 
                        type="button"
                        class=" bg-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
                        onclick={goToPreviousProduct}
                    >
                        <img src={previousIcon} alt="" aria-hidden="true">
                    </button>
                    <button 
                        type="button"
                        class=" bg-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
                        onclick={goToNextProduct}
                    >
                        <img src={nextIcon} alt="" aria-hidden="true">
                    </button>
                </div>
            </div>
           <ul class="grid grid-cols-4 items-center justify-center gap-6">
                {#each productImages as productImg (productImg.id)}
                    <li>
                        <button 
                            class=" overflow-hidden rounded-2xl  
                            cursor-pointer w-24 h-24
                            { productIndex === productImg.id ? "border-[3px] border-orange opacity-90": ""} "
                            aria-label="See the product"
                            onclick={() => productIndex = productImg.id}
                            
                        >
                            <img src={productImg.smallImage} alt="Product thumbnail}">
                        </button>
                    </li>
                {/each}
           </ul>
        </div>
    </section>


</div>

