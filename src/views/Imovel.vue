<template>
  <div class="container">
    <h1>Imovel</h1>
    <div class="row">
      <Imovel v-for="imovel in imoveis" :key="imovel.id" :imovel="imovel" />
    </div>
  </div>
</template>
<script>
import Imovel from '@/components/Imovel.vue'
export default {
    data(){
        return{
            titulo: "Listegaem de imoveis",
            imoveis: {}
        }
    },
    created(){
        
    },
    mounted(){
        this.$http.get('imovel').then(data => {
         this.imoveis =  data.data.imovel;
         console.log(data.data.imovel)
        }).catch(erro => console.log(erro));
    },
    components:{
        Imovel
    }

}

</script>
