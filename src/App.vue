<template>
  <div id="app">
    <div class="container">
      <PolicyHolderDetail v-if="$formData.currentStep === 1" :goToNextStep="goToNextStep" />
      <EvolutionHealth
        v-if="$formData.currentStep === 2"
        :goToNextStep="goToNextStep"
        :goToPreviousStep="goToPreviousStep"
      />
      <AdditionalDetails
        v-if="$formData.currentStep === 3"
        :goToNextStep="goToNextStep"
        :goToPreviousStep="goToPreviousStep"
      />
      <UnderwritingQuestions
        v-if="$formData.currentStep === 4"
        :goToNextStep="goToNextStep"
        :goToPreviousStep="goToPreviousStep"
      />

      <Summary v-if="$formData.currentStep === 5" :goToNextStep="goToNextStep" :goToPreviousStep="goToPreviousStep" />
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
      this.updateQueryParams({ step: this.$formData.currentStep })
      this.$root.$el.scrollIntoView({ behavior: 'smooth' })
    },
    goToPreviousStep() {
      this.$formData.currentStep--
      this.updateQueryParams({ step: this.$formData.currentStep })
    },
    updateQueryParams(params) {
      const url = new URL(window.location)
      Object.keys(params).forEach(key => {
        url.searchParams.set(key, params[key])
      })
      window.history.pushState({}, '', url)
    },
  },
}
</script>
