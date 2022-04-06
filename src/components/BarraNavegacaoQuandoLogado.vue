<template>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <router-link class="nav-link" to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/users" class="nav-link">Usuários</router-link>
    </li>
     <li class="nav-item">
      <router-link to="/imovel" class="nav-link">Imoveis</router-link>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link" @click.prevent="efetuarLogout">Logout</a>
    </li>
  </ul>
</template>

<script>
import { logoutMixin } from '@/mixins'

export default {
   mixins:[ logoutMixin]   
};
</script>
