<template>
  <div>
    <div class="mt-4">
      <h2 v-if="forename !== '' && surname !== ''">Policy Holder - {{ forename }} {{ surname }}</h2>
      <h2 v-else>
        Policy Holder
      </h2>

      <div class="">
        <h4>Units</h4>
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
      <div class="row mt-3">
        <!-- Metric Units -->
        <div v-if="metricUnit" id="metric-units" class="col-md-7 mb-3">
          <label class="form-label required" for="Bmi_Height">Height</label>
          <div class="input-group mb-3">
            <select id="Bmi_Height" class="form-select form-control" aria-label="" name="Bmi.Height">
              <option value="">Please select</option>
              <option v-for="(val, index) in height" :key="index" :value="val">{{ val }}</option>
            </select>
            <div class="input-group-append">
              <label class="input-group-text">Centimeters</label>
            </div>
          </div>

          <label class="form-label required" for="Bmi_Weight">Weight</label>
          <div class="input-group">
            <select
              id="Bmi_Weight_SelectedWeightInKgId"
              class="form-select form-control"
              aria-label=""
              data-val="true"
              data-val-required="The SelectedWeightInKgId field is required."
              name="Bmi.Weight.SelectedWeightInKgId"
            >
              <option>Open this select menu</option>
              <option v-for="(val, index) in weight" :key="index" :value="val" :selected="val == 1 ? 'select' : ''">{{
                val
              }}</option>
            </select>
            <div class="input-group-append">
              <label class="input-group-text">Kilograms</label>
            </div>
          </div>
        </div>

        <!-- Imperial Units -->
        <div v-if="!metricUnit" id="imperial-units" class="col-md-7 mb-3">
          <label class="form-label  required" for="Bmi_Height">Height</label>
          <div class="input-group mb-3">
            <select id="Bmi_Height" class="form-select form-control" aria-label="" name="Bmi.Height">
              <option value="">Open this select menu</option>
              <option v-for="(val, index) in heightFeet" :key="index" :value="val">{{ val }}</option>
            </select>
            <div class="input-group-append">
              <label class="input-group-text">Feet</label>
            </div>
            <select id="Bmi_Height" class="form-select form-control" aria-label="" name="Bmi.Height">
              <option value="">Open this select menu</option>
              <option v-for="(val, index) in heightInches" :key="index" :value="val">{{ val }}</option>
            </select>
            <div class="input-group-append">
              <label class="input-group-text">Inches</label>
            </div>
          </div>
          <label class="form-label  required" for="Bmi_Weight">Weight</label>
          <div class="input-group">
            <select id="Bmi_Weight" class="form-select form-control" aria-label="" name="Bmi.Weight">
              <option value="">Open this select menu</option>
              <option v-for="(val, index) in weightStone" :key="index" :value="val">{{ val }}</option>
            </select>
            <div class="input-group-append">
              <label class="input-group-text">Stone</label>
            </div>
            <select id="Bmi_Weight" class="form-select form-control" aria-label="" name="Bmi.Weight">
              <option value="">Open this select menu</option>
              <option v-for="(val, index) in weightPounds" :key="index" :value="val">{{ val }}</option>
            </select>
            <div class="input-group-append">
              <label class="input-group-text">Pounds</label>
            </div>
          </div>
        </div>
      </div>

      <!--  Pastimes -->
      <div class="row mt-3">
        <div class="row">
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

export default {
  name: 'PolicyHolderDetails',
  components: {},
  data() {
    return {
      listInt0to400: [],
      height: [],
      weight: [],
      heightFeet: [],
      heightInches: [],
      weightStone: [],
      weightPounds: [],

      pastimes: pastimes,
      isRefusedCover: 'No',

      metricUnit: true, // false -> imperial
      forename: this.$formData.policyHolderDetails.details.forename,
      surname: this.$formData.policyHolderDetails.details.surname
    }
  },
  mounted() {
    this.listInt0to400 = getRangeListIntVal(0, 400)
    this.height = this.listInt0to400.filter(n => 100 <= n && n <= 350)
    this.weight = this.listInt0to400
    this.heightFeet = this.listInt0to400.filter(n => 1 <= n && n <= 8)
    this.heightInches = this.listInt0to400.filter(n => 0 <= n && n <= 12)
    this.weightStone = this.listInt0to400.filter(n => 1 <= n && n <= 45)
    this.weightPounds = this.listInt0to400.filter(n => 1 <= n && n <= 400)
  },
  methods: {
    changeUnit(isMetric) {
      this.metricUnit = isMetric
    },
    refusedCoverCheck(isRefusedCover) {
      this.isRefusedCover = isRefusedCover
    }
  }
}
</script>
