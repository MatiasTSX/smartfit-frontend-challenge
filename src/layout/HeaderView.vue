<script setup lang="ts">
</script>

<template>
    <header>
        <nav>
            <section class="Menu-Desktop">
              <img src="../assets/images/logo.svg">
            </section>
        </nav>
    </header>
</template>

<style scoped lang="scss">
@import '../styles/colorVariables.module.scss';

.Menu-Desktop{
    width: 100vw;
    padding: 20px 3%;

    background-color: $black;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 150px;
    }
}

</style>