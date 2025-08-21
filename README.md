# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![Desktop Screenshot](/static/images/sneakers_screenshot.png)
![Mobile Screenshot](/static/images/sneakers_mobile_screenshot.png)

### Links

- Solution URL: [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/e-commerce-product-page-ckMPocmvWw)
- Live Site URL: [Live Demo](https://sneakers-alpha-nine.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Tailwind CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Svelte](https://svelte.dev/) - JavaScript framework
- [SvelteKit](https://kit.svelte.dev/) - Full-stack Svelte framework
- Component-based architecture

### What I learned

This project was an excellent opportunity to dive deeper into **Svelte** and learn about component communication patterns. Here are my key learnings:

**1. Svelte State Management with Runes**
```js
// Using Svelte 5 runes for reactive state
let productIndex = $state(0);
let currentProduct = $derived(productImages[productIndex]);
```

**2. Component Communication with bind:**
```svelte
<!-- Two-way data binding between parent and child -->
<CarouselPopup 
    bind:productIndex={productIndex}
    {productImages}
/>
```

**3. Accessibility Best Practices**
```svelte
<!-- Proper ARIA attributes for interactive elements -->
<div 
    role="dialog"
    aria-modal="true"
    aria-label="Product image gallery"
    tabindex="0"
    onkeydown={handleKeydown}
>
```

**4. Custom Store for Cart Management**
```js
// Reusable store for cart state management
import { writable } from 'svelte/store';

export const cartItems = writable([]);
export function addToCart(product) { /* ... */ }
```

The most challenging part was implementing the lightbox popup with proper accessibility support and ensuring smooth communication between parent and child components.

### Continued development

Areas I want to continue focusing on in future projects:

- **Advanced Svelte animations** - Exploring more complex transition effects
- **Performance optimization** - Image lazy loading and component optimization
- **Testing strategies** - Unit and integration testing for Svelte components
- **Progressive Web App features** - Adding offline support and installability
- **Advanced accessibility** - Screen reader testing and keyboard navigation patterns

### Useful resources

- [Svelte Documentation](https://svelte.dev/docs) - Essential reference for Svelte-specific features and best practices
- [Svelte Accessibility Guide](https://svelte.dev/docs/accessibility-warnings) - Helped me understand and fix accessibility warnings
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Great for rapid styling and responsive design patterns
- [MDN Web Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility) - Comprehensive guide for implementing proper ARIA attributes and keyboard navigation

## Author


- Frontend Mentor - [@NitiemaAllassane](https://www.frontendmentor.io/profile/NitiemaAllassane)
- GitHub - [@NitiemaAllassane](https://github.com/NitiemaAllassane)