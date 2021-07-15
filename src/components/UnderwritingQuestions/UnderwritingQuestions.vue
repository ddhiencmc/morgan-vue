<template>
  <div class="w-75 mx-auto">
    <div class="card shadow-sm p-5 border-0 my-5">
      <h2>UnderwritingQuestion</h2>

      <div
        class="form-group mb-4"
        v-for="(groupByGroupName, groupIndex) in questions"
        :key="groupIndex"
      >
        <h3>{{ groupByGroupName.key }}</h3>
        <div class="ms-5">
          <div
            class="row mb-3"
            v-for="question in groupByGroupName.values"
            :key="question.questionNumber"
          >
            <div class="row">
              {{ question.title }}
            </div>

            <div class="mt-1" v-if="!question.isTitle">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  :name="
                    'UnderwritingQuestion.Radio_' + question.questionNumber
                  "
                  :id="
                    'UnderwritingQuestion.Radio-yes_' + question.questionNumber
                  "
                  :value="true"
                  v-model="question.isAnswer"
                  @click="underwritingAnswerCheck(question, true)"
                />
                <label
                  class="form-check-label"
                  :for="
                    'UnderwritingQuestion.Radio-yes_' + question.questionNumber
                  "
                  >Yes</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  :name="
                    'UnderwritingQuestion.Radio_' + question.questionNumber
                  "
                  :id="
                    'UnderwritingQuestion.Radio-no_' + question.questionNumber
                  "
                  :value="false"
                  v-model="question.isAnswer"
                  @click="underwritingAnswerCheck(question, false)"
                />
                <label
                  class="form-check-label"
                  :for="
                    'UnderwritingQuestion.Radio-no_' + question.questionNumber
                  "
                  >No</label
                >
              </div>
            </div>

            <UnderwritingQuestionDetail
              :answer="question.answer"
              v-if="
                question.isAnswer && !question.callsUnderwritingQuestionGroupID"
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
import UnderwritingQuestionDetail from "./UnderwritingQuestionDetail";

export default {
  name: "UnderwritingQuestions",
  data() {
    return {
      questions: [],
    };
  },
  components: {
    UnderwritingQuestionDetail,
  },
  methods: {
    previousStep() {
      this.$formData.currentStep--;
    },
    nextStep() {
      //   this.$formData.currentStep++;
    },
    groupByQuestionGroupName() {
      //   debugger; // eslint-disable-line no-debugger
      this.$formData.underwritingQuestions.questions.forEach((q) => {
        var groupName = this.questions.find((g) => g.key == q.groupName);

        if (!groupName) {
          this.questions.push({ key: q.groupName, values: [q] });
        } else {
          groupName.values.push(q);
        }
      });
    },

    underwritingAnswerCheck(question, isAnswer) {
      if (isAnswer) {
        this.initAnswer(question);
      } else {
        question.answer = null;
      }
    },

    initAnswer(question) {
      question.answer = {
        nameOfMedicalCondition: "",
        dateStarted: null,
        dateEnded: null,
        currentMedicationName: "",
        hospitalRelationToCondition: null, // true,false
        currentConditionId: "", // List selection,
        alcoholDependency: null,
      };
    },
  },
  mounted() {
    this.groupByQuestionGroupName();
  },
};
</script>
