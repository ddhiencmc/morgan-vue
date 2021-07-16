<template>
  <div class="w-75 mx-auto">
    <div class="card shadow-sm p-5 border-0 my-5">
      <h2>Underwriting Questions</h2>

      <div v-for="(groupByGroupName, groupIndex) in questions" :key="groupIndex" class="form-group mb-4">
        <h3>{{ groupByGroupName.key }}</h3>
        <div class="ms-5">
          <div v-for="question in groupByGroupName.values" :key="question.questionNumber" class="row mb-3">
            <div class="row">
              {{ question.title }}
            </div>

            <div v-if="!question.isTitle" class="mt-1">
              <div class="form-check form-check-inline">
                <input
                  :id="'UnderwritingQuestion.Radio-yes_' + question.questionNumber"
                  v-model="question.isAnswer"
                  class="form-check-input"
                  type="radio"
                  :name="'UnderwritingQuestion.Radio_' + question.questionNumber"
                  :value="true"
                  @click="underwritingAnswerCheck(question, true)"
                />

                <label class="form-check-label" :for="'UnderwritingQuestion.Radio-yes_' + question.questionNumber"
                  >Yes</label
                >
              </div>

              <div class="form-check form-check-inline">
                <input
                  :id="'UnderwritingQuestion.Radio-no_' + question.questionNumber"
                  v-model="question.isAnswer"
                  class="form-check-input"
                  type="radio"
                  :name="'UnderwritingQuestion.Radio_' + question.questionNumber"
                  :value="false"
                  @click="underwritingAnswerCheck(question, false)"
                />

                <label class="form-check-label" :for="'UnderwritingQuestion.Radio-no_' + question.questionNumber"
                  >No</label
                >
              </div>
            </div>

            <UnderwritingQuestionDetail
              v-if="question.isAnswer && !question.callsUnderwritingQuestionGroupID"
              :answer="question.answer"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-end">
      <div>
        <button class="btn btn-secondary mx-2" @click="previousStep()">
          Previous
        </button>

        <button type="submit" class="btn btn-primary mx-2" @click="nextStep()">
          Next
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import UnderwritingQuestionDetail from './UnderwritingQuestionDetail'

export default {
  name: 'UnderwritingQuestions',
  components: {
    UnderwritingQuestionDetail,
  },
  data() {
    return {
      questions: [],
    }
  },
  mounted() {
    this.groupByQuestionGroupName()
  },
  methods: {
    previousStep() {
      this.$formData.currentStep--
    },
    nextStep() {
      //   this.$formData.currentStep++;
    },
    groupByQuestionGroupName() {
      this.$formData.underwritingQuestions.questions.forEach(q => {
        var groupName = this.questions.find(g => g.key == q.groupName)

        if (!groupName) {
          this.questions.push({ key: q.groupName, values: [q] })
        } else {
          groupName.values.push(q)
        }
      })
    },

    underwritingAnswerCheck(question, isAnswer) {
      if (isAnswer) {
        this.initAnswer(question)
      } else {
        question.answer = null
      }
    },

    initAnswer(question) {
      question.answer = {
        nameOfMedicalCondition: '',
        dateStarted: null,
        dateEnded: null,
        currentMedicationName: '',
        hospitalRelationToCondition: null, // true,false
        currentConditionId: '', // List selection,
        alcoholDependency: null,
      }
    },
  },
}
</script>
