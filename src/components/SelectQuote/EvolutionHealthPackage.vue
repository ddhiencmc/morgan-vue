<template>
  <div class="">
    <h2 class="text-center text-primary">Evolution Health ROW</h2>

    <div class="border-top">
      <div class="p-2 text-center">
        <button
          v-for="(btn, index) in headerButtons"
          :key="index"
          class="btn border-primary m-1 fs-15px"
          :class="{
            'btn-primary text-light fw-bold': btn.active,
            'btn-light': !btn.active,
          }"
          @click="headerBtnActive(index)"
        >
          {{ btn.text }}
        </button>
      </div>
    </div>

    <!-- package -->
    <div class="p-2 text-center mb-5">
      <div class="btn-group" role="group">
        <button
          type="button"
          class="btn"
          :class="[index == paymentTypeId ? 'btn-primary' : 'btn-default border']"
          v-for="(item, index) in paymentTypes"
          :key="index"
          @click="paymentTypeId = index"
        >
          {{ item.text }}
        </button>
      </div>
    </div>

    <div class="d-flex justify-content-between fs-15px">
      <div
        v-for="(service, index) in evolutionHealthServices"
        :key="index"
        class="mx-1 w-20 service-item"
        :class="{ active: currentProductId == service.productId }"
        @click="selectService(service.productId)"
      >
        <div class="bg-light h-100 pb-3 px-3">
          <div class="py-3 text-center w-100 fs-20px" href="#">
            <strong>{{ service.name }}</strong>
          </div>
          <div class="text-center service-price text-primary">
            $500
          </div>
          <div class="d-flex flex-column justify-content-between">
            <div>
              <div class="my-3 text-center">
                Choose an Excess
                <i class="fa fa-question-circle" aria-hidden="true" data-bs-toggle="tooltip" title="Description"></i>
              </div>

              <select v-model="service.selectedExcessId" class="form-select mb-3" :id="'Product.Excess_' + index">
                <option v-for="excess in voluntaryExcess" :key="excess.id" :value="excess.id">
                  {{ excess.value }}
                </option>
              </select>

              <div v-if="!service.noCoInsurance">
                <div class="mb-2 text-center">
                  Co-insurance
                  <i
                    class="fa fa-question-circle border-0"
                    aria-hidden="true"
                    data-bs-toggle="tooltip"
                    title="Description"
                  ></i>
                </div>

                <div v-for="insurance in insurancesOption" :key="insurance.id" class="form-check mt-2">
                  <input
                    :id="'insurance_' + index + insurance.id"
                    class="form-check-input"
                    type="radio"
                    :name="'insuranceRadio_' + index"
                    :value="insurance.id"
                    :v-model="service.coInsuranceSelectedId"
                  />
                  <label class="form-check-label" :for="'insurance_' + index + insurance.id">
                    {{ insurance.value }}
                  </label>
                </div>
              </div>

              <div class="text-center mt-4">
                Additional Benefits
                <i
                  class="fa fa-question-circle border-0"
                  aria-hidden="true"
                  data-bs-toggle="tooltip"
                  title="Description"
                ></i>
              </div>

              <div class="form-check mt-2">
                <input
                  :id="'homeCountryEvacuation_' + index"
                  class="form-check-input"
                  type="checkbox"
                  v-model="service.hasAdditionalBenefit"
                  value=""
                />
                <label class="form-check-label" :for="'homeCountryEvacuation_' + index">
                  Home country Evacuation
                </label>
              </div>
            </div>

            <!-- <select v-model="service.frequency" class="form-select" aria-label="Default select example">
              <option value="">Select package</option>

              <option v-for="option in service.frequencyOptions" :key="option.type" :value="option.type">
                {{ `${option.type}: $${option.price}` }}
              </option>
            </select> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { insurancesOption, evolutionHealthServices, voluntaryExcess } from '../../data/optionData'

export default {
  name: 'EvolutionHealthPackage',
  components: {},
  props: {},
  data() {
    return {
      headerButtons: [
        {
          id: 1,
          text: 'Europe',
          active: false,
        },
        {
          id: 2,
          text: 'Worldwide (excluding USA, China, Singapore and Hong Kong)',
          active: true,
        },
        {
          id: 3,
          text: 'Worldwide (excluidng USA)',
          active: false,
        },
        {
          id: 4,
          text: 'Worldwide',
          active: false,
        },
      ],
      paymentTypeId: 0,
      paymentTypes: [
        {
          id: 0,
          text: 'Monthly',
        },
        {
          id: 1,
          text: 'Quarterly',
        },
        {
          id: 2,
          text: 'Semi-Annual',
        },
        {
          id: 3,
          text: 'Annual',
        },
      ],

      evolutionHealthServices: evolutionHealthServices,
      insurancesOption: insurancesOption,
      voluntaryExcess: voluntaryExcess,

      product: this.$formData.product,
      currentProductId: null,
      currentProduct: {},
    }
  },
  methods: {
    headerBtnActive(index) {
      this.headerButtons.forEach(el => {
        el.active = false
      })

      this.headerButtons[index].active = true
    },

    setProduct(product) {
      this.$formData.product = product
    },
    selectService(productId) {
      this.currentProductId = productId
      this.currentProduct = evolutionHealthServices.find(s => s.productId === productId)
    },
  },
  mounted() {
    let tooltipTriggerList = [].slice.call(this.$el.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function(tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl)
    })
  },
}
</script>

<style lang="scss" scoped>
.service-price {
  font-size: 1.5rem;
  font-weight: bold;
}
.service-item {
  cursor: pointer;
  &:hover:not(.active) {
    box-shadow: 1px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }
  &.active {
    border: 1px solid green;
    transform: scale(1.1);
  }
}
</style>
