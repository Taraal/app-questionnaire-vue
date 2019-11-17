<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<template>
  <div class="hello">
    <h1>EEV SAS - Test de sécurité</h1>
    <h3> Veuillez renseigner vos informations </h3>

      <p>
        <label for="Nom">Nom</label>
        <input id="Nom" type="text" name="name">
      </p>

      <p>
        <label for="Prenom">Prénom</label>
        <input id="Prenom" type="text" name="name">
      </p>

      <p>
        <label for="Societe">Société</label>
        <input id="Societe" type="text" name="name">
      </p>

      <p>
        <router-link to="/questionnaire"><button>Commencer le questionnaire</button></router-link>

  </p>

  </div>
</template>

<script>
export default {
  name: 'SCHome'
}

</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
