<script>
    import menuIcon from "$lib/assets/icon-menu.svg";
    let { onMenuClick } = $props();
</script>


<button 
    aria-label="Open Menu"
    class=" inline-block md:hidden"
    onclick={onMenuClick}
>
    <img src={menuIcon} alt="" aria-hidden="true">
</button>