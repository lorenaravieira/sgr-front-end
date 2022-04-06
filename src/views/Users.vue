<template>
  <div class="container">
    <h1>Usuários</h1>
     <router-link :to="{ name: 'novo.usuario' }">Cadastrar usuários!</router-link>
    <div class="row">
      <Users v-for="user in users" :key="user.id" :user="user" />
      
    </div>
  </div>
</template>

<script>
import Users from "@/components/Users.vue";

export default {
  components: {
    Users
  },
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.$http
      .post("user/list")
      .then(response => ( this.users = response.data.user))
      .catch(erro => console.log(erro));
  }
};
</script>

<style>
</style>