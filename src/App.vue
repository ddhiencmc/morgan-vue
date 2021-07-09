<template>
  <div id="app">
    <PolicyHolderDetail v-if="$formData.currentStep === 1"/>
    <EvolutionHealthPackage v-if="$formData.currentStep === 2" />
  </div>
</template>

<script>
import PolicyHolderDetail from "./components/PolicyHolderDetails/PolicyHolderDetail";
import EvolutionHealthPackage from "./components/SelectQuote/EvolutionHealthPackage";

export default {
  name: "App",
  components: {
    PolicyHolderDetail,
    EvolutionHealthPackage,
  },
  data(){
    return{};
  }
};
</script>

<style>
</style>
