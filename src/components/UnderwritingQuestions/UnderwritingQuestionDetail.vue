<template>
  <div class="accordion-body">
    <!-- <div :id="'additional-members-' + memberIndex"> -->
    <div class="form-group border-start p-3 my-3 border-primary">
      <!-- Name of illness/medical condition -->
      <div class="row mb-4">
        <div class="col">
          <label class="form-label required"
            >Name of illness/medical condition</label
          >
          <input
            class="form-control"
            v-model="answer.nameOfMedicalCondition"
            placeholder="Name of illness/medical condition"
          />
        </div>
      </div>

      <!-- Date Started -->
      <div class="row mb-4">
        <div class="col">
          <label class="form-label required">Date started</label>
          <input class="form-control valid" type="date" v-model="answer.dateStarted" />
        </div>
      </div>

      <!-- Date Ended -->
      <div class="row mb-4">
        <div class="col">
          <label class="form-label">Date ended</label>
          <input class="form-control valid" type="date" v-model="answer.dateEnded" />
        </div>
      </div>

      <!-- Current medication name and daily dose free format text field -->
      <div class="row mb-4">
        <div class="col">
          <label class="form-label"
            >Current medication name and daily dose free format text
            field</label
          >
          <input
            class="form-control"
            v-model="answer.currentMedicationName"
            placeholder="Name of illness/medical condition"
          />
        </div>
      </div>

      <!-- Have you ever had a hospital stay in relation to this condition? -->
      <div class="row mb-4">
        <!-- Title -->
        <div class="col">
          <label
            class="form-label required"
            for="RefusedCoverOrAcceptedOnSpecialTerms"
            >Have you ever had a hospital stay in relation to this
            condition?</label
          >
        </div>

        <!-- Radio -->
        <div>
          <!-- Yes -->
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="ExistingHealthInsurancePoliciesRadio"
              id="ExistingHealthInsurancePoliciesRadio-yes"
              :value="true"
              v-model="answer.hospitalRelationToCondition"
            />
            <label
              class="form-check-label"
              for="ExistingHealthInsurancePoliciesRadio-yes"
              >Yes</label
            >
          </div>
          <!-- No -->
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="ExistingHealthInsurancePoliciesRadio"
              id="ExistingHealthInsurancePoliciesRadio-no"
              :value="false"
              v-model="answer.hospitalRelationToCondition"
            />
            <label
              class="form-check-label"
              for="ExistingHealthInsurancePoliciesRadio-no"
              >No</label
            >
          </div>
        </div>
      </div>

      <!-- Current condition list box -->
      <div class="row mb-4">
        <div class="col">
          <label class="form-label required">Current condition list box</label>
          <select
            class="form-select form-control"
            aria-label=""
            id="Detail.CurrentCondition"
            name="Detail.CurrentCondition"
            v-model="answer.currentConditionId"
          >
            <option selected="">Please select</option>
            <option v-for="(cond, index) in currentConditions" :key="index">
              {{ cond.value }}
            </option>
          </select>
        </div>
      </div>

      <!-- alcoholDependency -->
      <div class="row">
        <!-- Title -->
        <div class="col">
          <label class="form-label required" for="Detail.AlcoholDependency">
            <strong>Alcohol dependency or drug/substance abuse </strong>
          </label>
        </div>

        <!-- Radio -->
        <div>
          <!-- Yes -->
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="Detail.AlcoholDependency"
              id="Detail.AlcoholDependency-yes"
              :value="true"
              v-model="answer.alcoholDependency"
            />
            <label class="form-check-label" for="Detail.AlcoholDependency-yes"
              >Yes</label
            >
          </div>
          <!-- No -->
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="Detail.AlcoholDependency"
              id="Detail.AlcoholDependency-no"
              :value="false"
              v-model="answer.alcoholDependency"
            />
            <label class="form-check-label" for="Detail.AlcoholDependency-no"
              >No</label
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { currentConditions } from "../../data/optionData";

export default {
  name: "UnderwritingQuestionDetail",
  props: ['answer'],
  data() {
    return {
      currentConditions: currentConditions,
    };
  },
  methods: {},
  mounted() {},
};
</script>
