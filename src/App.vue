<template>
  <div id="app">
    <div class="container">
      <PolicyHolderDetail v-if="$formData.currentStep === 1" />
      <EvolutionHealth v-if="$formData.currentStep === 2" />
      <AdditionalDetails v-if="$formData.currentStep === 3" />
      <UnderwritingQuestions v-if="$formData.currentStep === 4" />
    </div>
  </div>
</template>

<script>
import PolicyHolderDetail from './components/PolicyHolderDetails/PolicyHolderDetail'
import EvolutionHealth from './components/SelectQuote/EvolutionHealth'
import AdditionalDetails from './components/AdditionalDetails/AdditionalDetails'
import UnderwritingQuestions from './components/UnderwritingQuestions/UnderwritingQuestions'

export default {
  name: 'App',
  components: {
    PolicyHolderDetail,
    EvolutionHealth,
    AdditionalDetails,
    UnderwritingQuestions
  },
  data() {
    return {}
  }
}
</script>
