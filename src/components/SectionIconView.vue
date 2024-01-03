<script setup lang="ts">
import findUnits from '@/services/FindUnits';
import { ref } from 'vue';


const radioGroup = ref<string>('');

const onSubmit = (event: Event) => {
    event.preventDefault()
    findUnits(radioGroup.value);
};


</script>



<template>
    <main class="container">
        <section class="banner-info">
            <div>
          <h4>Mascara</h4>
          <img src="../assets/images/required-mask.png">
          <img src="../assets/images/recommended-mask.png">
            </div>

            <div>
          <h4>Toalha</h4>
          <img src="../assets/images/required-towel.png">
         <img src="../assets/images/recommended-towel.png">
      
            </div>

            <div>
          <h4>Bebedouro</h4>
          <img src="../assets/images/partial-fountain.png">
          <img src="../assets/images/forbidden-fountain.png">
            </div>


            <div>
          <h4>Vestiarios</h4>
          <img src="../assets/images/required-lockerroom.png">
          <img src="../assets/images/partial-lockerroom.png">
          <img src="../assets/images/forbidden-lockerroom.png">
          
      
            </div>
          

        </section>


    </main>
</template>
  
<style scoped lang="scss">
@import '../styles/colorVariables.module.scss';

.banner-info{
    
    text-align: center;
    width: 100%;
    display: grid;
    grid-template-columns: 25% 25%  25%  25%  ;
    margin: 80px 0;

 
  

img{
    padding-top: 20px;
    padding-right:10px ;
    width: 80px;
}
}

</style>
  