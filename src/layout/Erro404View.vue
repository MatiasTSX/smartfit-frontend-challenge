<script setup lang="ts"></script>

<template>
  <section class="body">
    <main class="container">
      <section class="error-404">
        <section class="card-404">
          <section class="card-info">
            <h1>Ops, esta página não foi encontrada</h1>
            <p>
              Parece que você se perdeu... Tente voltar para a página anterior
              ou acessar a home.
            </p>

            <section class="find-units">
              <button><RouterLink to="/">Ir</RouterLink></button>
              
            </section>
          </section>
          <section class="card-img">
            <img src="../assets/images/404.png" />
          </section>
        </section>
      </section>
    </main>
  </section>
</template>

<style scoped lang="scss">
@import "../styles/colorVariables.module.scss";
.body {
  width: 100%;
  height: 100%;
  background-color: #000013;
}
.error-404 {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .card-404 {
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: center;
    align-items: center;

    .card-img img {
      width: 100%;
    }

    .card-info {
      h1 {
        font-size: 2rem;
       
      }
      h1,
      p {
        padding: 5px 0;
        color: white;
      }

      button {
        border-radius: 20px;
        color: white;
        margin: 10px 0;
        text-transform: uppercase;
        font-weight: bold;
        width: 50%;
        padding: 16px 0;
        cursor: pointer;
        border: none;
        background-color:$red;
      }
    }
  }
}
</style>
