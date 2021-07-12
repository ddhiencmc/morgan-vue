<template>
  <div class="">
    <h2 class="text-center text-primary">Evolution Health ROW</h2>

    <div class="border-top border-bottom">
      <div class="p-2 text-center">
        <button class="btn btn-light border-primary ml-1 m-1 fs-15px">
          Europe
        </button>

        <button class="btn btn-primary border-primary m-1 fs-15px">
          Worldwide (excluding USA, China, Singapore and Hong Kong)
        </button>

        <button class="btn btn-light border-primary m-1 fs-15px">
          Worldwide (excluidng USA)
        </button>

        <button class="btn btn-light border-primary mr-1 m-1 fs-15px">
          Worldwide
        </button>
      </div>
    </div>

    <div class="d-flex justify-content-between fs-15px">
      <div
        class="mx-1 w-20"
        v-for="(service, index) in services"
        :key="index"
      >
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
              class="form-select mb-3 fs-15px"
              aria-label="Default select example"
              v-model="service.selectedExcess"
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
                class="form-check mt-2"
                v-for="(insuranceOption, insuranceIndex) in insuarancesOption"
                :key="insuranceIndex"
              >
                <input
                  class="form-check-input"
                  type="radio"
                  :name="'insuranceRadio_' + index"
                  :id="'insurance_' + index + insuranceIndex"
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
                class="form-check-input"
                type="checkbox"
                value=""
                :id="'homeCountryEvacuation_' + index"
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
            class="form-select"
            aria-label="Default select example"
            v-model="service.frequency"
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
  props: {},
  components: {},
  data() {
    return {
      services: this.$formData.services,
      insuarancesOption: insuarancesOption,
    };
  },
  mounted() {
    let tooltipTriggerList = [].slice.call(
      this.$el.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  },
};
</script>
