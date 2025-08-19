<script>
    import MenuButton from "./MenuButton.svelte";
    import Basket from "./Basket.svelte";
    import Logo from "./Logo.svelte";


    const navItems = [
        {name: "Collections", link: "/"},
        {name: "Men", link: "/"},
        {name: "Women", link: "/"},
        {name: "About", link: "/"},
        {name: "Contact", link: "/"},
    ];
</script>

<header class="py-6 md:py-3 sticky md:static top-0 bg-white z-10">
    <div class="container flex items-center justify-between md:border-b-2 md:border-b-grayish-blue md:pb-6">
        <div class="flex items-center md:gap-16 lg:gap-24">
            <div class="flex items-center gap-3">
                <!-- menu button : it's display on mobile only -->
                <MenuButton  />
                <div>
                    <Logo  />
                </div>
            </div>
            <nav class="hidden md:block">
                <ul class="flex items-center gap-6 h-full">
                    {#each navItems as item }
                        <li>
                            <a 
                                href={item.link}
                                class=" text-dark-grayish-blue hover:text-dark-blue relative after:absolute md:pb-12
                                after:w-0 after:h-[3px] after:bg-orange after:bottom-0 after:left-0 h-full hover:after:w-full after:transition-all after:duration-300 "
                            >
                                {item.name}
                            </a>
                        </li>
                    {/each}
                </ul>
            </nav>
        </div>

        <div class="flex items-center gap-6 md:gap-11">
            <!-- Basket component -->
            <Basket  />
            <figure 
                class=" w-8 h-8 md:w-16 md:h-16 rounded-full cursor-pointer overflow-hidden
                       hover:border-2 hover:border-orange "
            >
                <img src="/images/image-avatar.png" alt="Avatar">
            </figure>
        </div>
    </div>
</header>