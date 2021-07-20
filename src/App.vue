<template>
  <div id="app">
    <div class="container">
      <PolicyHolderDetail v-if="$formData.currentStep === 1" :go-to-next-step="goToNextStep" />

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
    </div>
  </div>
</template>

<script>
import PolicyHolderDetail from './components/PolicyHolderDetails'
import EvolutionHealth from './components/SelectQuote'
import AdditionalDetails from './components/AdditionalDetails'
import UnderwritingQuestions from './components/UnderwritingQuestions'
import Summary from './components/ConfirmAndBuy'

export default {
  name: 'App',
  components: {
    PolicyHolderDetail,
    EvolutionHealth,
    AdditionalDetails,
    UnderwritingQuestions,
    Summary,
  },
  data() {
    return {}
  },
  methods: {
    goToNextStep() {
      this.$formData.currentStep++
      this.scrollToTop()
      this.updateQueryParams({ step: this.$formData.currentStep })
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
