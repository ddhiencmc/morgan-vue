import Vue from 'vue'

const state = new Vue({
  data() {
    return {
      evolutionHealth: {
        excessSelected: {
          regionId: null,
          excessId: null,
        },
      },
      additionalBenefits: {
        regionId: null,
        value: null,
      },
    }
  },
})

export default state
