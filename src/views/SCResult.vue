<template>
  <div>
      <div>Résultat : {{ SCTotal }}</div>
      <div> Bravo ! </div>
  </div>
</template>

<script>
export default {
    name: 'result',
    data: () => ({
        SCTotal: Number,
        SCnbQuestion: Number
    }),
    mounted (){
        this.SCTotal = this.$route.query.SCTotal
        this.SCnbQuestion = this.$route.query.SCnbQuestion
    }

}
</script>