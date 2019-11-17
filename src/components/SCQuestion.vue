<template>
  <div>
    <div>{{ SCquestion.name }}</div>

    <ul>
        <li v-for="(answer, index) in SCquestion.answers" v-bind:key="answer">
          <span>
            {{ answer }}<input type="checkbox" v-model="SCquestion.user[index]">
          </span>
        </li>

    </ul>
    <button v-on:click="$emit('answer', SCquestion.user)">Question suivante</button>
  </div>
</template>

<script>
// Chaque question comporte un tableau "answers" qui liste tous les élément de réponse pour la question
// Le tableau "correct" qui indique quel élément de réponse doit être true ou false
// Le tableau "user" indique les réponses données par l'utilisateur

// Ici, on lie l'input checkbox avec le tableau "user", et on modifie le booléen qui correspond à l'index de la question

export default {
  data: () => ({}),
  props: {
    SCquestion: Object
  }
}
</script>