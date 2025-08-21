<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


{@render children?.()}

<!-- footer -->
<footer class=" mt-16 text-center text-dark-blue py-3">
    <small class="attribution">
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
    </small>
</footer>