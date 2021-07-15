<template>
  <div class="">
    <h2 class="text-center text-primary">Evolution Health ROW</h2>

    <div class="border-top border-bottom">
      <div class="p-2 text-center">
        <button
          v-for="(btn, index) in headerButtons"
          :key="index"
          class="btn border-primary m-1 fs-15px"
          :class="{
            'btn-primary text-light fw-bold': btn.active,
            'btn-light': !btn.active
          }"
          @click="headerBtnActive(index)"
        >
          {{ btn.text }}
        </button>
      </div>
    </div>

    <div class="d-flex justify-content-between fs-15px">
      <div v-for="(service, index) in services" :key="index" class="mx-1 w-20">
        <div class="container bg-light py-3 mt-3 mb-2 text-center fs-20px">
          <strong>{{ service.name }}</strong>
        </div>

        <div
          class="
            container
            bg-light
            m-1
            px-2
            h-100
            d-flex
            flex-column
            justify-content-between
            pb-3
            px-4
          "
        >
          <div>
            <div class="my-3 text-center">
              Choose an Excess
              <i
                class="fa fa-question-circle"
                aria-hidden="true"
                data-bs-toggle="tooltip"
                title="Description"
              ></i>
            </div>

            <select
              v-model="service.selectedExcess"
              class="form-select mb-3 fs-15px"
              aria-label="Default select example"
            >
              <option value="0">0 per person per</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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

              <div
                v-for="(insuranceOption, insuranceIndex) in insuarancesOption"
                :key="insuranceIndex"
                class="form-check mt-2"
              >
                <input
                  :id="'insurance_' + index + insuranceIndex"
                  class="form-check-input"
                  type="radio"
                  :name="'insuranceRadio_' + index"
                />
                <label
                  class="form-check-label"
                  :for="'insurance_' + index + insuranceIndex"
                >
                  {{ insuranceOption }}
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
                value=""
              />
              <label
                class="form-check-label"
                :for="'homeCountryEvacuation_' + index"
              >
                Home country Evacuation
              </label>
            </div>
          </div>

          <select
            v-model="service.frequency"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="">Select package</option>

            <option
              v-for="option in service.frequencyOptions"
              :key="option.type"
              :value="option.type"
            >
              {{ `${option.type}: $${option.price}` }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { insuarancesOption } from "../../data/optionData";

export default {
  name: "EvolutionHealthPackage",
  components: {},
  props: {},
  data() {
    return {
      headerButtons: [
        {
          id: 1,
          text: "Europe",
          active: false
        },
        {
          id: 2,
          text: "Worldwide (excluding USA, China, Singapore and Hong Kong)",
          active: true
        },
        {
          id: 3,
          text: "Worldwide (excluidng USA)",
          active: false
        },
        {
          id: 4,
          text: "Worldwide",
          active: false
        }
      ],

      services: this.$formData.services,
      insuarancesOption: insuarancesOption
    };
  },
  mounted() {
    let tooltipTriggerList = [].slice.call(
      this.$el.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function(tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  },
  methods: {
    headerBtnActive(index) {
      this.headerButtons.forEach(el => {
        el.active = false;
      });

      this.headerButtons[index].active = true;
    }
  }
};
</script>
