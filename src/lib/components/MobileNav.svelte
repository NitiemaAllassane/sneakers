<script>
    import { fade, fly } from "svelte/transition";
    import closeIcon from "$lib/assets/icon-close.svg";

    const mobileNavItems = [
        {name: "Collections", link: "/"},
        {name: "Men", link: "/"},
        {name: "Women", link: "/"},
        {name: "About", link: "/"},
        {name: "Contact", link: "/"},
    ];

    let { onCloseButtonClick } = $props();

</script>

<!-- overlay -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div 
    class="fixed top-0 left-0 w-full h-full bg-black/75 z-20 md:hidden"
    transition:fade={{ duration: 200 }}
    onclick={onCloseButtonClick}
>

    <!-- mobile navigation content -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <nav 
        class="z-50 bg-white fixed top-0 left-0 h-full w-[70%] p-6"
        transition:fly={{ x: "-100%" }}
        onclick={(e) => e.stopPropagation()}
    >
        <div>
            <div class=" mb-12">
                <!-- Close button -->
                <button 
                    type="button"
                    aria-label="Close menu"
                    onclick={onCloseButtonClick}
                >
                    <img src={closeIcon} alt="" aria-hidden="true">
                </button>
            </div>

            <ul class="flex flex-col gap-4">
                {#each mobileNavItems as mobileItem }
                    <li>
                        <a 
                            href={mobileItem.link}
                            class="font-bold text-dark-blue"
                        >
                            {mobileItem.name}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    </nav>
</div>