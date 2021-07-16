<template>
  <div>
    <div class="row mt-4">
      <h2 v-if="forename !== '' && surname !== ''">Policy Holder - {{ forename }} {{ surname }}</h2>
      <h2 v-else>
        Policy Holder
      </h2>

      <div class="">
        <h3>BMI</h3>
        <label class="control-label col-sm-12">Units</label>
        <div class="btn-group" role="group" aria-label="">
          <input
            id="metric"
            type="radio"
            class="btn-check"
            name="unit"
            autocomplete="off"
            checked=""
            @click="changeUnit(true)"
          />
          <label class="btn btn-outline-primary" for="metric">Metric</label>

          <input
            id="imperial"
            type="radio"
            class="btn-check"
            name="unit"
            autocomplete="off"
            @click="changeUnit(false)"
          />
          <label class="btn btn-outline-primary" for="imperial">Imperial</label>
        </div>
      </div>

      <!--  BMI -->
      <div class="mt-3">
        <!-- Metric Units -->
        <div v-if="metricUnit" id="metric-units" class="col-md-7 mb-3">
          <div class="mb-3">
            <ValidationProvider v-slot="v" rules="required">
              <label class="form-label required" for="AdditionalDetails.Bmi.MetricHeight">Height</label>
              <div class="input-group">
                <Multiselect
                  id="AdditionalDetails.Bmi.MetricHeight"
                  v-model="additionalDetails.bmi.height"
                  :options="heights"
                  placeholder="Please select"
                  name="AdditionalDetails.Bmi.MetricHeight"
                  style="flex:1"
                >
                </Multiselect>
                <div class="input-group-append">
                  <label class="input-group-text">Centimeters</label>
                </div>
              </div>
              <div v-if="v.invalid" class="input-error">{{ v.errors[0] }}</div>
            </ValidationProvider>
          </div>

          <div class="mb-3">
            <ValidationProvider v-slot="v" rules="required">
              <label class="form-label required" for="AdditionalDetails.Bmi.MetricWeight">Weight</label>
              <div class="input-group">
                <Multiselect
                  id="AdditionalDetails.Bmi.MetricWeight"
                  v-model="additionalDetails.bmi.weight"
                  :options="weights"
                  placeholder="Please select"
                  name="AdditionalDetails.Bmi.MetricWeight"
                  style="flex:1"
                >
                </Multiselect>
                <div class="input-group-append">
                  <label class="input-group-text">Kilograms</label>
                </div>
              </div>
              <div v-if="v.invalid" class="input-error">{{ v.errors[0] }}</div>
            </ValidationProvider>
          </div>
        </div>

        <!-- Imperial Units -->
        <div v-if="!metricUnit" id="imperial-units" class="mb-3">
          <!-- Height label -->
          <label class="form-label  required" for="Bmi_Height">Height</label>
          <div class="col-sm-7 mb-3">
            <ValidationProvider v-slot="v" rules="required">
              <div class="input-group">
                <!-- feet -->
                <Multiselect
                  id="AdditionalDetails.Bmi.ImperialHeightFeet"
                  v-model="additionalDetails.bmi.height"
                  :options="heightFeets"
                  placeholder="Please select"
                  name="AdditionalDetails.Bmi.ImperialHeightFeet"
                  style="flex:1"
                >
                </Multiselect>
                <div class="input-group-append">
                  <label class="input-group-text">Feet</label>
                </div>

                <!-- inches -->
                <Multiselect
                  id="AdditionalDetails.Bmi.ImperialHeightInches"
                  v-model="additionalDetails.bmi.heightBonus"
                  :options="heightInches"
                  placeholder="Please select"
                  name="AdditionalDetails.Bmi.ImperialHeightInches"
                  style="flex:1"
                >
                </Multiselect>
                <div class="input-group-append">
                  <label class="input-group-text">Inches</label>
                </div>
              </div>
              <div v-if="v.invalid" class="input-error">{{ v.errors[0] }}</div>
            </ValidationProvider>
          </div>

          <!-- Weight -->
          <label class="form-label  required" for="Bmi_Weight">Weight</label>
          <div class="col-sm-7 mb-3">
            <ValidationProvider v-slot="v" rules="required">
              <div class="input-group">
                <!-- Stones -->
                <Multiselect
                  id="AdditionalDetails.Bmi.ImperialWeightStone"
                  v-model="additionalDetails.bmi.weight"
                  :options="weightStones"
                  placeholder="Please select"
                  name="AdditionalDetails.Bmi.ImperialWeightStone"
                  style="flex:1"
                >
                </Multiselect>
                <div class="input-group-append">
                  <label class="input-group-text" for="AdditionalDetails.Bmi.ImperialWeightStone">Stone</label>
                </div>

                <!-- Pounds -->
                <Multiselect
                  id="AdditionalDetails.Bmi.ImperialHeightInches"
                  v-model="additionalDetails.bmi.weightBonus"
                  :options="weightPounds"
                  placeholder="Please select"
                  name="AdditionalDetails.Bmi.ImperialWeightPounds"
                  style="flex:1"
                >
                </Multiselect>
                <div class="input-group-append">
                  <label class="input-group-text" for="AdditionalDetails.Bmi.ImperialWeightPounds">Pounds</label>
                </div>
              </div>
              <div v-if="v.invalid" class="input-error">{{ v.errors[0] }}</div>
            </ValidationProvider>
          </div>
        </div>
      </div>

      <!--  Pastimes -->
      <div class="mt-3">
        <h3>Sport or Pastime</h3>
        <div class="">
          <div class="col mb-3">
            <label class="form-label required" for="Pastimes">Sport or Physical Pastime(Select multiple)</label>
            <select
              id="Pastimes_SelectedPastimeIds"
              class="form-select form-control"
              aria-label=""
              multiple="multiple"
              name="Pastimes.SelectedPastimeIds"
            >
              <option value="1">No dangerous pastimes</option>
              <option value="2">One or more dangerous pastimes</option>
            </select>
          </div>
        </div>
        <div class="form-group border-start p-3 my-3 border-primary">
          <div class="row">
            <div class="col mb-3">
              <label class="form-label" for="OtherPastimes">Other Sport or Physical Pastime</label>
              <input id="OtherPastimes" class="form-control" type="text" name="OtherPastimes" value="" />
            </div>
          </div>
        </div>
      </div>

      <!--  Refused Cover -->
      <div class="row mt-3">
        <!-- Title -->
        <div class="col mb-3">
          <label class="form-label required" for="RefusedCoverOrAcceptedOnSpecialTerms"
            >Has This Person Ever Been Refused Cover By An Insurance Company Or Been Accepted On Special Terms?</label
          >
        </div>

        <!-- Radio -->
        <div>
          <!-- Yes -->
          <div class="form-check form-check-inline">
            <input
              id="RefusedCoverOrAcceptedOnSpecialTerms-yes"
              v-model="isRefusedCover"
              class="form-check-input"
              type="radio"
              name="RefusedCoverOrAcceptedOnSpecialTerms"
              value="Yes"
              @click="refusedCoverCheck(true)"
            />
            <label class="form-check-label" for="RefusedCoverOrAcceptedOnSpecialTerms-yes">Yes</label>
          </div>
          <!-- No -->
          <div class="form-check form-check-inline">
            <input
              id="RefusedCoverOrAcceptedOnSpecialTerms-no"
              v-model="isRefusedCover"
              class="form-check-input"
              type="radio"
              name="RefusedCoverOrAcceptedOnSpecialTerms"
              value="No"
              @click="refusedCoverCheck(false)"
            />
            <label class="form-check-label" for="RefusedCoverOrAcceptedOnSpecialTerms-no">No</label>
          </div>
        </div>

        <!-- Addtional form -->
        <div v-if="isRefusedCover === 'Yes'" id="additional-information">
          <div class="form-group border-start p-3 my-3 border-primary">
            <!-- Date -->
            <div class="row">
              <div class="col">
                <label class="required" for="refusedCoverAdditionalDetailDate">Date</label>
                <input id="refusedCoverAdditionalDetailDate" class="form-control" type="date" />
              </div>
            </div>

            <!-- Enter Details -->
            <div class="row mt-3">
              <div class="col">
                <label class="required" for="RefusedCoverOrAcceptedOnSpecialTermsDetails">Enter Details</label>
                <input
                  id="RefusedCoverOrAcceptedOnSpecialTermsDetails"
                  class="form-control"
                  type="text"
                  name="RefusedCoverOrAcceptedOnSpecialTermsDetails"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getRangeListIntVal, pastimes } from '../../data/optionData'
import Multiselect from 'vue-multiselect'

export default {
  name: 'PolicyHolderDetails',
  components: {
    Multiselect,
  },
  data() {
    return {
      additionalDetails: this.$formData.additionalDetails,

      listInt0to400: [],
      heights: [],
      weights: [],
      heightFeet: [],
      heightInches: [],
      weightStone: [],
      weightPounds: [],

      pastimes: pastimes,
      isRefusedCover: 'No',

      metricUnit: true, // false -> imperial
      forename: this.$formData.policyHolderDetails.details.forename,
      surname: this.$formData.policyHolderDetails.details.surname,
    }
  },
  mounted() {
    this.listInt0to400 = getRangeListIntVal(0, 400)
    this.heights = this.listInt0to400.filter(n => 100 <= n && n <= 350)
    this.weights = this.listInt0to400
    this.heightFeets = this.listInt0to400.filter(n => 1 <= n && n <= 8)
    this.heightInches = this.listInt0to400.filter(n => 0 <= n && n <= 12)
    this.weightStones = this.listInt0to400.filter(n => 1 <= n && n <= 45)
    this.weightPounds = this.listInt0to400.filter(n => 1 <= n && n <= 400)
  },
  methods: {
    changeUnit(isMetric) {
      this.metricUnit = isMetric
    },
    refusedCoverCheck(isRefusedCover) {
      this.isRefusedCover = isRefusedCover
    },
  },
}
</script>
