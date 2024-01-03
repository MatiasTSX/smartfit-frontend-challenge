<template>
    <main class="container">
        <section class="Header-Title">
            <h1>REABERTURA SMART FIT</h1>
            <span></span>
            <p>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso,
                confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</p>
        </section>
    </main>
</template>

<style scoped lang="scss">
@import '../styles/colorVariables.module.scss';
.Header-Title {
    margin: 80px 0;

    h1 {
        width: 20%; 
        margin: 20px 0;
        color: $darkGrey;
        font-size: 2.4rem;
        white-space: pre-line; 
    }

    span {
        height: 10px;
        width: 95px;
        background-color: $darkGrey;
        display: block;
    }

    p {
        margin: 40px 0 0 0;
        white-space: pre-line; 
        width: 75%; 
    }
}
</style>