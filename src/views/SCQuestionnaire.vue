<template>
  <div class="SCquestionnaire">
        <SCQuestion :SCquestion="SCQuestions[index]" @answer="SCsaveAnswer"/>
  </div>
</template>

<script>
// Notre vue SCQuestionnaire est composé d'une suite de composants SCQuestion

import SCQuestion from '../components/SCQuestion.vue'
import SCjson from '../json/questions.json'
export default {
  name: 'SCquestionnaire',
  data: () => ({
    SCPoints: 0,
    index: 0,
    SCQuestions: SCjson,

  }),
  methods: {
    SCnextQuestion: function () {
      var length = Object.keys(this.SCQuestions).length
      if (this.index < length - 1) {
        this.index++
      } else {
        this.$router.push({ name: 'result', query: { SCTotal: this.SCPoints, SCnbQuestions: length } })
      }
    },
    SCsaveAnswer: function (answer) {
      // Pour chaque question, on vérifie que le tableau des réponses de l'utilisateur correspond au tableau des bonnes réponses
      if (answer != null) {
        if (JSON.stringify(answer) === JSON.stringify(this.SCQuestions[this.index].correct)) {
          this.SCPoints++
        } 
        this.SCnextQuestion()
      }
    }
  },
  components: {
    SCQuestion
  },
}
</script>