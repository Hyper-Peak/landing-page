// themeStore.js
import { writable, get } from 'svelte/store';
import { onMount } from 'svelte';

// create the store with an initial 'light' theme
export const theme = writable('light');

export function initializeTheme() {
  let systemTheme;
  onMount(() => {
    // Now we're in the browser context, access window and localStorage
    systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const storedTheme = localStorage.getItem('theme') || systemTheme;
    theme.set(storedTheme);
  });
}

export function switchTheme() {
  theme.update(value => {
    const newTheme = value === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    return newTheme;
  });
}
