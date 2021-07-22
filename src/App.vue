<template>
  <div id="app">
    <ValidationObserver v-slot="{ validate }">
      <div class="container">
        <PolicyHolder v-if="$formData.currentStep === 1" :go-to-next-step="goToNextStep" />

        <EvolutionHealth
          v-if="$formData.currentStep === 2"
          :go-to-next-step="goToNextStep"
          :go-to-previous-step="goToPreviousStep"
        />
        <AdditionalDetails
          v-if="$formData.currentStep === 3"
          :go-to-next-step="goToNextStep"
          :go-to-previous-step="goToPreviousStep"
        />
        <UnderwritingQuestions
          v-if="$formData.currentStep === 4"
          :go-to-next-step="goToNextStep"
          :go-to-previous-step="goToPreviousStep"
        />

        <Summary
          v-if="$formData.currentStep === 5"
          :go-to-next-step="goToNextStep"
          :go-to-previous-step="goToPreviousStep"
        />

        <div class="fixed-bottom bg-footer">
          <div class="d-flex justify-content-center">
            <button v-show="$formData.currentStep > 1" class="btn btn-secondary mx-2" @click="goToPreviousStep()">
              Previous
            </button>
            <button
              v-show="$formData.currentStep < 5"
              type="submit"
              class="btn btn-primary mx-2"
              @click="goToNextStep(validate)"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import PolicyHolder from './components/PolicyHolder'
import EvolutionHealth from './components/SelectQuote'
import AdditionalDetails from './components/AdditionalDetails'
import UnderwritingQuestions from './components/UnderwritingQuestions'
import Summary from './components/ConfirmAndBuy'

export default {
  name: 'App',
  components: {
    PolicyHolder,
    EvolutionHealth,
    AdditionalDetails,
    UnderwritingQuestions,
    Summary,
  },
  data() {
    return {
      ignoreValidation: true,
    }
  },
  methods: {
    validateForm(validate) {
      if (this.ignoreValidation) {
        return Promise.resolve(true)
      }

      return validate()
    },
    goToNextStep(validate) {
      this.validateForm(validate).then(isvalid => {
        if (isvalid) {
          this.$formData.currentStep++
          this.scrollToTop()
          this.updateQueryParams({ step: this.$formData.currentStep })
        } else {
          let firstErrorElement = this.$el.querySelector('.invalid.validated')
          if (firstErrorElement) {
            firstErrorElement.focus()
          }
        }
      })
    },
    goToPreviousStep() {
      this.$formData.currentStep--
      this.updateQueryParams({ step: this.$formData.currentStep })
      this.scrollToTop()
    },
    updateQueryParams(params) {
      const url = new URL(window.location)
      Object.keys(params).forEach(key => {
        url.searchParams.set(key, params[key])
      })
      window.history.pushState({}, '', url)
    },
    scrollToTop() {
      setTimeout(() => {
        this.$root.$el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    },
  },
}
</script>

<style lang="scss" scoped>
.bg-footer {
  background: rgba($color: #fff, $alpha: 1);
  padding-top: 0.8em;
  padding-bottom: 0.8em;
}
</style>
