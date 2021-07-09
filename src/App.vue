<template>
  <div id="app">
    <PolicyHolderDetail msg="Hello Vue in CodeSandbox!" />
    <EvolutionHealthPackage />
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
};
</script>

<style>
</style>
