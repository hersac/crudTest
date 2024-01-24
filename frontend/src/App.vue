<template>
  <div>
    <div>
      <NavBarComponent />
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavBarComponent from './components/NavBarComponent.vue';

</script>
