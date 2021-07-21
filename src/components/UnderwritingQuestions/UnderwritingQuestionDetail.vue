<template>
  <div class="accordion-body">
    <div class="form-group border-start p-3 my-3 border-primary">
      <div class="row mb-4">
        <div class="col">
          <label class="form-label required" :for="`answer.nameOfMedicalCondition_${index}`"
            >Name of illness/medical condition</label
          >
          <input
            :id="`answer.nameOfMedicalCondition_${index}`"
            v-model="answer.nameOfMedicalCondition"
            class="form-control"
            placeholder="Name of illness/medical condition"
          />
        </div>
      </div>

      <div class="row mb-4">
        <div class="col">
          <label class="form-label required" :for="`answer.dateStarted_${index}`">Date started</label>
          <DatePicker :id="`answer.dateStarted_${index}`" v-model="answer.dateStarted" class="w-100" type="date" />
        </div>
      </div>

      <div class="row mb-4">
        <div class="col">
          <label class="form-label" :for="`answer.dateEnded_${index}`">Date ended</label>
          <DatePicker :id="`answer.dateEnded_${index}`" v-model="answer.dateEnded" class="w-100" type="date" />
        </div>
      </div>

      <div class="row mb-4">
        <div class="col">
          <label class="form-label" :for="`CurrentMedicationName_${index}`"
            >Current medication name and daily dose free format text field</label
          >
          <input
            :id="`CurrentMedicationName_${index}`"
            v-model="answer.currentMedicationName"
            class="form-control"
            placeholder="Name of illness/medical condition"
          />
        </div>
      </div>

      <div class="row mb-4">
        <div class="col">
          <label class="form-label required" :for="`ExistingHealthInsurancePoliciesRadio_${index}`"
            >Have you ever had a hospital stay in relation to this condition?</label
          >
        </div>

        <div>
          <div class="form-check form-check-inline">
            <input
              :id="`ExistingHealthInsurancePoliciesRadio_${index}-yes`"
              v-model="answer.hasHospitalRelationToCondition"
              class="form-check-input"
              type="radio"
              :name="`ExistingHealthInsurancePoliciesRadio_${index}`"
              :value="true"
            />
            <label class="form-check-label" :for="`ExistingHealthInsurancePoliciesRadio_${index}-yes`">Yes</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              :id="`ExistingHealthInsurancePoliciesRadio_${index}-no`"
              v-model="answer.hasHospitalRelationToCondition"
              class="form-check-input"
              type="radio"
              :name="`ExistingHealthInsurancePoliciesRadio_${index}`"
              :value="false"
            />
            <label class="form-check-label" for="`ExistingHealthInsurancePoliciesRadio_${index}-no`">No</label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <label class="form-label required">Current condition list box</label>
          <select
            :id="`Detail.CurrentCondition_${index}`"
            v-model="answer.currentConditionId"
            class="form-select form-control"
            aria-label=""
            :name="`Detail.CurrentCondition_${index}`"
          >
            <option selected="">Please select</option>
            <option v-for="(cond, condIndex) in currentConditions" :key="condIndex">
              {{ cond.value }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { currentConditions } from '../../data/optionData'
import DatePicker from 'vue2-datepicker'

export default {
  name: 'UnderwritingQuestionDetail',
  components: {
    DatePicker,
  },
  props: {
    answer: Object,
    index: String,
  },
  data() {
    return {
      ans: this.answer,
      currentConditions: currentConditions,
    }
  },
  mounted() {},
  methods: {},
}
</script>
