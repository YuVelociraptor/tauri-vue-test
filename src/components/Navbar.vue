<template>
  <header class="navbar">
    <div class="logo">
      MyApp
    </div>

    <button class="hamburger" @click="isOpen = !isOpen">
      ☰
    </button>

    <nav :class="['nav-menu', { open: isOpen }]">
      <router-link to="/">Home</router-link>
      <router-link to="/menu01">Menu01</router-link>
      <router-link to="/menu02">Menu02</router-link>
      <router-link to="/settings">Settings</router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue"

const isOpen = ref(false)
</script>

<style scoped>
.navbar {
  position: relative;
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 24px;
  background-color: #222;
  color: white;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  z-index: 2;
}

.nav-menu {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 32px;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.nav-menu a.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid white;
}

.hamburger {
  display: none;
  margin-left: auto;
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
}

/* 狭い画面 */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .nav-menu {
    display: none;
    position: absolute;
    top: 64px;
    right: 0;
    left: auto;
    transform: none;

    width: 200px;
    flex-direction: column;
    gap: 0;

    background-color: #222;
    border-top: 1px solid #444;
  }

  .nav-menu.open {
    display: flex;
  }

  .nav-menu a {
    padding: 16px;
    border-bottom: 1px solid #444;
  }
}
</style>