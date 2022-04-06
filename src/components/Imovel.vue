<template>
  <div class="col-4">
    <div class="card shadow">
      <div class="card-body">
         
            <div class="col-6 inline">
              <label class="label-default">CEP:</label>           
               <h5 class="card-title">{{ imovel.nu_cep }}</h5>
            </div>
            <div class="col-6">
               <label class="label-default">Cidade:</label>
               <h5 class="card-title">{{ imovel.no_cidade }}</h5>
            </div>
             <div class="col-6">
                <label class="label-default">Endereço:</label>
               <h5 class="card-title">{{ imovel.de_endereco }}</h5>
            </div>
        
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imovel']
}
</script>