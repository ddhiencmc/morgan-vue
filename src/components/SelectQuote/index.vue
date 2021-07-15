<template>
  <div class="container">
    <div class="card shadow-sm p-5 border-0 my-5">
      <div>
        <!-- <input asp-for="ApplicationId" class="form-control" /> -->
        <EvolutionHealthPackage class="mb-5" />
      </div>

      <div class="mt-5">
        <h2>Underwriting Type</h2>
        <div class="alert alert-warning" role="alert">
          <span class="text-danger">Please note:</span> it is very important you understand the difference between the
          types of underwriting and that you chose the option that is right for you.
        </div>
        <div class="text-center">
          <div class=" d-flex justify-content-center">
            <div v-for="underwriting in underwritingTypes" :key="underwriting.id" class="p-2 gap-4 bd-highlight w-100">
              <input
                :id="underwriting.id"
                type="radio"
                class="btn-check"
                :name="`underwritingType`"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary btn-lg w-100" :for="underwriting.id">{{
                underwriting.value
              }}</label>
            </div>
          </div>
          <div class="mt-3 mb-5">
            <i class="fas fa-exclamation-circle me-2 text-primary"></i
            ><a href="#" role="button" class="" data-bs-toggle="modal" data-bs-target="#underwritingTypeModal"
              >HELP ME CHOOSE</a
            >
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
import { underwritingTypes } from '../../data/optionData'
import EvolutionHealthPackage from './EvolutionHealthPackage.vue'

export default {
  name: 'EvolutionHealth',
  components: {
    EvolutionHealthPackage,
  },
  props: {},
  data() {
    return {
      services: this.$formData.services,
      underwritingTypes: underwritingTypes,
    }
  },
  mounted() {},
  methods: {
    previousStep() {
      this.$formData.currentStep--
    },
    nextStep() {
      this.$formData.currentStep++
    },
  },
}
</script>
