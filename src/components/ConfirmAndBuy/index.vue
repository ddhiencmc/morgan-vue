<template>
  <div class="w-75 mx-auto">
    <div>
      <ValidationObserver>
        <h2>Summary</h2>
        <div class="row">
          <div class="col-sm-7 card p-3">
            <div class="form-group">
              <div class="row">
                <div class="summary-item">
                  <label class="summary-item__title">Product</label>
                  <div class="summary-item__description">{{ name }}</div>
                </div>

                <div class="summary-item">
                  <label class="summary-item__title">Area of Coverage</label>
                  <div class="summary-item__description">{{ area }}</div>
                </div>

                <div class="summary-item">
                  <label class="summary-item__title">Price</label>
                  <div class="summary-item__description">{{ price }}</div>
                </div>

                <div class="summary-item">
                  <label class="summary-item__title">Excess</label>
                  <div class="summary-item__description">{{ excess }}</div>
                </div>

                <div class="summary-item">
                  <label class="summary-item__title">Co-insurance</label>
                  <div class="summary-item__description">
                    {{ coInsurance }}
                  </div>
                </div>

                <div class="summary-item">
                  <label class="summary-item__title">Additional Benefits</label>
                  <div class="summary-item__description">{{ additionalBenifit }}</div>
                </div>

                <div class="summary-item__end">
                  <label class="summary-item__title">Underwriting Type</label>
                  <div class="fs-5 fw-bold">{{ underwrittingType }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-5">
            <div class="summary-checkbox">
              <label class="summary-checkbox__title">Premium imdication</label>
              <div class="summary-checkbox__checkbox">
                <input id="checkConfirm" class="summary-checkbox__checkbox-tick" type="checkbox" :value="false" />
                <label class="summary-checkbox__checkbox-label" for="checkConfirm">
                  Please confirm that you Have read the IPID
                </label>
              </div>
            </div>

            <div class="summary-checkbox">
              <label class="summary-checkbox__title">Declaration</label>
              <div class="summary-checkbox__checkbox">
                <input id="checkAcceped" class="summary-checkbox__checkbox-tick" type="checkbox" :value="false" />
                <label class="summary-checkbox__checkbox-label" for="checkAcceped">
                  I have and accepted the terms of this declaration
                </label>
              </div>
            </div>

            <button class="btn btn-outline-primary btn-lg w-75" @click="apply()">
              APPLY NOW
            </button>
          </div>
        </div>
      </ValidationObserver>
    </div>

    <div class="d-flex justify-content-end">
      <div>
        <button class="btn btn-secondary mx-2" @click="previousStep()">
          Previous
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  voluntaryExcess,
  insurancesOption,
  underwritingTypes,
  evolutionHealthServices,
  areas,
} from '../../data/optionData'

export default {
  name: 'Summary',
  components: {},
  props: {
    goToPreviousStep: Function,
  },
  data() {
    return {
      product: this.$formData.product,
      service: null,

      name: '',
      area: '',
      price: '',
      excess: '',
      coInsurance: '',
      additionalBenifit: '',
      underwrittingType: '',
    }
  },
  mounted() {
    this.service = evolutionHealthServices.find(evl => evl.productId === this.product.productId)

    this.name = this.service.name
    this.area = areas.find(a => a.id === this.product.areaId).value
    this.price = this.service.frequencyOptions[this.product.frequencyId].price
    this.excess = voluntaryExcess.find(e => e.id === this.service.selectedExcessId).value
    this.coInsurance = insurancesOption.find(e => e.id === this.service.coInsuranceSelectedId).value
    this.additionalBenifit = this.service.hasAdditionalBenefit === true ? 'Home country Evacuation' : ''
    this.underwrittingType = underwritingTypes.find(e => e.id === this.$formData.underwritingTypeId).value
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

    apply() {
      this.product.name
    },
  },
}
</script>

<style lang="scss" scoped>
.summary-item {
  margin-bottom: 20px;
  &__title {
    font-size: 16px;
    color: #828282;

    &__end {
      margin-bottom: 5px !important;
    }
  }

  &__description {
    font-size: 20px;
    color: #333333;
    font-weight: 500;
  }
}

.summary-checkbox {
  margin-left: 7px;
  margin-bottom: 25px;
  &__title {
    color: #1076bc;
    font-weight: 500;
    font-size: 20px;
  }

  &__checkbox {
    display: flex;
    &-tick {
      transform: scale(1.3);
      margin-right: 7px;
      height: 24px;
    }

    &-label {
      font-size: 16px;
      text-align: left;
    }
  }
}
</style>
