<template>
    <v-toolbar class="nav">
        <v-toolbar-title class="logo">
            <font-awesome-icon icon="fa-solid fa-list" />
        </v-toolbar-title>
        <div>
            <ul class="menu">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/task">To Do</router-link>
                </li>
            </ul>
        </div>
        <div class="">

        </div>
    </v-toolbar>
  </template>
  
  <script lang="ts" setup>
  </script>

<style>
.nav{
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 10px;
    font-size: 20px;
}

.logo{
    font-size: 50px;
}

.menu{
    display: flex;
    gap: 30px;
    list-style: none;
}

.menu li a{
    text-decoration: none;
    color: #0059d6;
}

</style>