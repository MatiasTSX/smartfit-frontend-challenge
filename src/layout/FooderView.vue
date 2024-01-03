<script setup lang="ts">
</script>

<template>
    <footer>
        <nav>
            <section class="Menu-Desktop">
              <img src="../assets/images/logo.svg">
              <p>Todos os direitos reservados - 2020</p>
            </section>
        </nav>
    </footer>
</template>

<style scoped lang="scss">
@import '../styles/colorVariables.module.scss';

.Menu-Desktop{
    width: 100vw;
    padding: 60px 3%;

    background-color: $darkGrey;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        padding: 10px 0;
        color: white;
    }

    img{
        width: 100px;
    }
}

</style>