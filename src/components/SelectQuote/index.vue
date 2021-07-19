<template>
  <div class="container">
    <ValidationObserver v-slot="{ validate }">
      <div class="card shadow-sm p-5 border-0 my-5">
        <div>
          <!-- <input asp-for="ApplicationId" class="form-control" /> -->
          <EvolutionHealthPackage class="mb-5" />
        </div>

        <div class="mt-5">
          <h2>Select Underwriting Type</h2>
          <div class="alert alert-warning" role="alert">
            <span class="text-danger">Please note:</span> it is very important you understand the difference between the
            types of underwriting and that you chose the option that is right for you.
          </div>
          <div class="text-center">
            <div class=" d-flex justify-content-center">
              <div
                v-for="underwriting in underwritingTypes"
                :key="underwriting.id"
                class="p-2 gap-4 bd-highlight w-100"
              >
                <input
                  :id="underwriting.id"
                  v-model="form.underwritingTypeId"
                  type="radio"
                  class="btn-check"
                  name="underwritingType"
                  autocomplete="off"
                  :value="underwriting.id"
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

      {{ form.product }}
      {{ form.underwrittingType }}

      <div class="d-flex justify-content-end">
        <div>
          <button class="btn btn-secondary mx-2" @click="previousStep()">
            Previous
          </button>

          <button type="submit" class="btn btn-primary mx-2" @click="nextStep(validate)">
            Next
          </button>
        </div>
      </div>
    </ValidationObserver>
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
  props: {
    goToNextStep: Function,
    goToPreviousStep: Function,
  },
  data() {
    return {
      form: this.$formData,
      underwritingTypes: underwritingTypes,
    }
  },
  mounted() {
    console.log('formData', this.form.underwritingTypeId)
  },
  methods: {
    previousStep() {
      this.goToPreviousStep()
    },
    nextStep(validate) {
      validate().then(isvalid => {
        if (isvalid) {
          this.goToNextStep()
        } else {
          this.$el.querySelector('input.invalid').focus()
        }
      })
    },
  },
}
</script>
