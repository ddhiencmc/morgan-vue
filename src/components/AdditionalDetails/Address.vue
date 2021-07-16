<template>
  <div>
    <!--  Country of residence address -->
    <div>
      <h2>Country of residence address</h2>
      <br />
      <p>If you have an address in this Country, please add it here:</p>
      <div class="form-group mt-4">
        <div class="row">
          <div class="col mb-3">
            <label class="form-label" for="AdditionalDetails.ResidenceAddress.AddressLine1">Address Line 1</label>
            <input
              id="AdditionalDetails.ResidenceAddress.AddressLine1"
              v-model="additionalDetails.countryResidenceAddress.address1"
              class="form-control"
              type="text"
              name="AddressLine1"
              value=""
            />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label" for="AdditionalDetails.ResidenceAddress.AddressLine2">Address Line 2</label>
            <input
              id="AdditionalDetails.ResidenceAddress.AddressLine2"
              v-model="additionalDetails.countryResidenceAddress.address2"
              class="form-control"
              type="text"
              name="AddressLine2"
              value=""
            />
          </div>
          <div class="col-md-6 mb-3">
            <label class="form-label" for="AdditionalDetails.ResidenceAddress.AddressLine3">Address Line 3</label>
            <input
              id="AdditionalDetails.ResidenceAddress.AddressLine3"
              v-model="additionalDetails.countryResidenceAddress.address3"
              class="form-control"
              type="text"
              name="AddressLine3"
              value=""
            />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label" for="AdditionalDetails.ResidenceAddress.State">State/County</label>
            <input
              id="AdditionalDetails.ResidenceAddress.State"
              v-model="additionalDetails.countryResidenceAddress.state"
              class="form-control"
              type="text"
              name="State"
              value=""
            />
          </div>

          <div class="col-md-6 mb-3">
            <label class="form-label" for="AdditionalDetails.ResidenceAddress.City">City</label>
            <input
              id="AdditionalDetails.ResidenceAddress.City"
              v-model="additionalDetails.countryResidenceAddress.city"
              class="form-control"
              type="text"
              name="City"
              value=""
            />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label" for="AdditionalDetails.ResidenceAddress.ZipOrPostalCode">ZIP/ Postal Code</label>
            <input
              id="AdditionalDetails.ResidenceAddress.ZipOrPostalCode"
              v-model="additionalDetails.countryResidenceAddress.zipCode"
              class="form-control"
              type="text"
              name="ZipOrPostalCode"
              value=""
            />
          </div>

          <div class="col-md-6 mb-3">
            <ValidationProvider v-slot="v" rules="required">
              <label class="form-label required" for="AdditionalDetails.ResidenceAddress.CountryId">Country</label>
              <Multiselect
                id="AdditionalDetails.ResidenceAddress.CountryId"
                v-model="additionalDetails.countryResidenceAddress.countryId"
                :options="countries"
                track-by="value"
                placeholder="Please select"
                label="text"
                name="AdditionalDetails.ResidenceAddress.Country"
              >
              </Multiselect>
              <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
      </div>
    </div>

    <!--  Home Country Address -->
    <div>
      <h2>Home Country Address (Country Of Your Primary Passport)</h2>
      <br />
      <p>If you have an address in this Country, please add it here:</p>
      <div class="form-group mt-4">
        <div class="row">
          <div class="col mb-3">
            <label class="form-label" for="AdditionalDetails.CountryAddress.AddressLine1">Address Line 1</label>
            <input
              id="AdditionalDetails.CountryAddress.AddressLine1"
              v-model="additionalDetails.homeCountryAddress.address1"
              class="form-control"
              type="text"
              name="AddressLine1"
              value=""
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label" for="AdditionalDetails.CountryAddress.AddressLine2">Address Line 2</label>
            <input
              id="AdditionalDetails.CountryAddress.AddressLine2"
              v-model="additionalDetails.homeCountryAddress.address2"
              class="form-control"
              type="text"
              name="AddressLine2"
              value=""
            />
          </div>
          <div class="col-md-6 mb-3">
            <label class="form-label" for="AdditionalDetails.CountryAddress.AddressLine3">Address Line 3</label>
            <input
              id="AdditionalDetails.CountryAddress.AddressLine3"
              v-model="additionalDetails.homeCountryAddress.address3"
              class="form-control"
              type="text"
              name="AddressLine3"
              value=""
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label" for="AdditionalDetails.CountryAddress.State">State/County</label>
            <input
              id="AdditionalDetails.CountryAddress.State"
              v-model="additionalDetails.homeCountryAddress.state"
              class="form-control"
              type="text"
              name="State"
              value=""
            />
          </div>
          <div class="col-md-6 mb-3">
            <label class="form-label" for="AdditionalDetails.CountryAddress.City">City</label>
            <input
              id="AdditionalDetails.CountryAddress.City"
              v-model="additionalDetails.homeCountryAddress.city"
              class="form-control"
              type="text"
              name="City"
              value=""
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label" for="AdditionalDetails.CountryAddress.ZipOrPostalCode">ZIP/ Postal Code</label>
            <input
              id="AdditionalDetails.CountryAddress.ZipOrPostalCode"
              v-model="additionalDetails.homeCountryAddress.zipCode"
              class="form-control"
              type="text"
              name="ZipOrPostalCode"
              value=""
            />
          </div>

          <div class="col-md-6 mb-3">
            <ValidationProvider v-slot="v" rules="required">
              <label class="form-label required" for="AdditionalDetails.CountryAddress.CountryId">Country</label>
              <Multiselect
                id="AdditionalDetails.CountryAddress.CountryId"
                v-model="additionalDetails.homeCountryAddress.countryId"
                :options="countries"
                track-by="value"
                placeholder="Please select"
                label="text"
                name="AdditionalDetails.CountryAddress.Country"
              >
              </Multiselect>
              <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { countries } from '../../data/optionData'
import Multiselect from 'vue-multiselect'

export default {
  name: 'Address',
  components: {
    Multiselect,
  },
  data() {
    return {
      countries: countries,

      additionalDetails: this.$formData.additionalDetails,
    }
  },
}
</script>
