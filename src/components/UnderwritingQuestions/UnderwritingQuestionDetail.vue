<template>
  <div class="accordion-body">
    <div class="form-group border-start p-3 my-3 border-primary">
      <div class="row mb-4">
        <div class="col">
          <label class="form-label required">Name of illness/medical condition</label>
          <input
            v-model="answer.nameOfMedicalCondition"
            class="form-control"
            placeholder="Name of illness/medical condition"
          />
        </div>
      </div>

      <div class="row mb-4">
        <div class="col">
          <label class="form-label required">Date started</label>
          <input v-model="answer.dateStarted" class="form-control valid" type="date" />
        </div>
      </div>

      <div class="row mb-4">
        <div class="col">
          <label class="form-label">Date ended</label>
          <input v-model="answer.dateEnded" class="form-control valid" type="date" />
        </div>
      </div>

      <div class="row mb-4">
        <div class="col">
          <label class="form-label">Current medication name and daily dose free format text field</label>
          <input
            v-model="answer.currentMedicationName"
            class="form-control"
            placeholder="Name of illness/medical condition"
          />
        </div>
      </div>

      <div class="row mb-4">
        <div class="col">
          <label class="form-label required" for="RefusedCoverOrAcceptedOnSpecialTerms"
            >Have you ever had a hospital stay in relation to this condition?</label
          >
        </div>

        <div>
          <div class="form-check form-check-inline">
            <input
              id="ExistingHealthInsurancePoliciesRadio-yes"
              v-model="answer.hospitalRelationToCondition"
              class="form-check-input"
              type="radio"
              name="ExistingHealthInsurancePoliciesRadio"
              :value="true"
            />
            <label class="form-check-label" for="ExistingHealthInsurancePoliciesRadio-yes">Yes</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              id="ExistingHealthInsurancePoliciesRadio-no"
              v-model="answer.hospitalRelationToCondition"
              class="form-check-input"
              type="radio"
              name="ExistingHealthInsurancePoliciesRadio"
              :value="false"
            />
            <label class="form-check-label" for="ExistingHealthInsurancePoliciesRadio-no">No</label>
          </div>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col">
          <label class="form-label required">Current condition list box</label>
          <select
            id="Detail.CurrentCondition"
            v-model="answer.currentConditionId"
            class="form-select form-control"
            aria-label=""
            name="Detail.CurrentCondition"
          >
            <option selected="">Please select</option>
            <option v-for="(cond, index) in currentConditions" :key="index">
              {{ cond.value }}
            </option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <label class="form-label required" for="Detail.AlcoholDependency">
            <strong>Alcohol dependency or drug/substance abuse </strong>
          </label>
        </div>

        <div>
          <div class="form-check form-check-inline">
            <input
              id="Detail.AlcoholDependency-yes"
              v-model="answer.alcoholDependency"
              class="form-check-input"
              type="radio"
              name="Detail.AlcoholDependency"
              :value="true"
            />
            <label class="form-check-label" for="Detail.AlcoholDependency-yes">Yes</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              id="Detail.AlcoholDependency-no"
              v-model="answer.alcoholDependency"
              class="form-check-input"
              type="radio"
              name="Detail.AlcoholDependency"
              :value="false"
            />
            <label class="form-check-label" for="Detail.AlcoholDependency-no">No</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { currentConditions } from '../../data/optionData'

export default {
  name: 'UnderwritingQuestionDetail',
  props: ['answer'],
  data() {
    return {
      currentConditions: currentConditions,
    }
  },
  mounted() {},
  methods: {},
}
</script>
