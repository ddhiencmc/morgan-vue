<template>
  <div id="app">
    <div class="container">
      <PolicyHolderDetail v-if="$formData.currentStep === 1"/>
      <EvolutionHealthPackage v-if="$formData.currentStep === 2" />
      <AdditionalDetails v-if="$formData.currentStep === 3" />
    </div>
  </div>
</template>

<script>
import PolicyHolderDetail from "./components/PolicyHolderDetails/PolicyHolderDetail";
import EvolutionHealthPackage from "./components/SelectQuote/EvolutionHealthPackage";
import AdditionalDetails from "./components/AdditionalDetails/AdditionalDetails";

export default {
  name: "App",
  components: {
    PolicyHolderDetail,
    EvolutionHealthPackage,
    AdditionalDetails,
  },
  data(){
    return{};
  }
};
</script>