<template>
  <div class="form-group">
    <h2>Physician Details</h2>
    <p>
      Please provide us with the name and address of your regular personal or family doctor/physician. If you do not
      have a regular doctor, please give the last doctor you visited and approximate date.
    </p>
    <div class="row">
      <div class="col-sm-6 mb-3">
        <ValidationProvider v-slot="v" rules="required">
          <label class="form-label required" for="PhysicianDetails.Title">Salutations</label>
          <Multiselect
            id="PhysicianDetails.Title"
            v-model="form.salutationId"
            :options="titles"
            track-by="value"
            placeholder="Please select"
            label="text"
            name="PhysicianDetails.Title"
            :class="v.classes"
          >
          </Multiselect>
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>

      <div class="col-sm-6 mb-3">
        <label class="form-label" for="Forename">Forename(s)</label>
        <input
          id="PhysicianDetails.Forename"
          v-model="form.forename"
          class="form-control"
          type="text"
          name="PhysicianDetails.Forename"
          value=""
        />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6 mb-3">
        <label class="form-label" for="Surname">Surname/Family Name</label>
        <input
          id="PhysicianDetails.Surname"
          v-model="form.surname"
          class="form-control"
          type="text"
          name="PhysicianDetails.Surname"
          value=""
        />
      </div>

      <!-- Practice Name -->
      <div class="col-sm-6 mb-3">
        <ValidationProvider v-slot="v" rules="required">
          <label class="form-label required" for="PhysicianDetails.PracticeName">Practice Name</label>
          <input
            id="PhysicianDetails.PracticeName"
            v-model="form.practicename"
            class="form-control"
            type="text"
            name="PhysicianDetails.PracticeName"
            :class="v.classes"
            value=""
          />
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>

    <div class="row">
      <!-- Date Last Visited -->
      <div class="col-sm-6 mb-3">
        <ValidationProvider v-slot="v" rules="required">
          <label class="form-label required" for="PhysicianDetails.DateLastVisited">Date Last Visited</label>
          <DatePicker
            id="PhysicianDetails.DateLastVisited"
            v-model="form.dateLastVisited"
            class="w-100"
            name="PhysicianDetails.DateLastVisited"
          />
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>

      <!-- Email -->
      <div class="col-sm-6 mb-3">
        <ValidationProvider v-slot="v" rules="required|email">
          <label class="form-label required" for="PhysicianDetails.Email">Email</label>
          <input
            id="PhysicianDetails.Email"
            v-model="form.email"
            class="form-control"
            type="email"
            name="PhysicianDetails.Email"
            :class="v.classes"
          />
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>

    <!-- telephone -->
    <div class="row">
      <div class="col-sm-6 mb-3">
        <label class="form-label" for="PhysicianDetails.CountryCodes">Country Code</label>
        <Multiselect
          id="PhysicianDetails.CountryCodes"
          v-model="form.countryCodeId"
          :options="countryCodes"
          track-by="value"
          placeholder="Please select"
          label="text"
          name="PhysicianDetails.CountryCodes"
        >
        </Multiselect>
      </div>

      <!-- telephone -->
      <div class="col-sm-6 mb-3">
        <label class="form-label" for="PhysicianDetails.TelephoneNumber">Telephone Number</label>
        <input
          id="PhysicianDetails.TelephoneNumber"
          v-model="form.telephoneNumber"
          class="form-control"
          type="tel"
          name="PhysicianDetails.TelephoneNumber"
          value=""
        />
      </div>
    </div>

    <!-- Practice address -->
    <div class="form-group mt-4">
      <div class="row">
        <div class="col mb-3">
          <label class="form-label" for="PhysicianDetails.Address.AddressLine1">Address Line 1</label>
          <input
            id="PhysicianDetails.Address.AddressLine1"
            v-model="form.address.address1"
            class="form-control"
            type="text"
            name="PhysicianDetails.Address.AddressLine1"
            value=""
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 mb-3">
          <label class="form-label" for="PhysicianDetails.Address.AddressLine2">Address Line 2</label>
          <input
            id="PhysicianDetails.Address.AddressLine2"
            v-model="form.address.address2"
            class="form-control"
            type="text"
            name="Address.AddressLine2"
            value=""
          />
        </div>
        <div class="col-sm-6 mb-3">
          <label class="form-label" for="PhysicianDetails.Address.AddressLine3">Address Line 3</label>
          <input
            id="PhysicianDetails.Address.AddressLine3"
            v-model="form.address.address3"
            class="form-control"
            type="text"
            name="Address.AddressLine3"
            value=""
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 mb-3">
          <label class="form-label" for="PhysicianDetails.Address.State">State/County</label>
          <input
            id="PhysicianDetails.Address.State"
            v-model="form.address.state"
            class="form-control"
            type="text"
            name="Address.State"
            value=""
          />
        </div>
        <div class="col-sm-6 mb-3">
          <label class="form-label" for="PhysicianDetails.Address.City">City</label>
          <input
            id="PhysicianDetails.Address.City"
            v-model="form.address.city"
            class="form-control"
            type="text"
            name="PhysicianDetails.Address.City"
            value=""
          />
        </div>
      </div>

      <!-- Country -->
      <div class="row">
        <div class="col-sm-6 mb-3">
          <ValidationProvider v-slot="v" rules="required">
            <label class="form-label required" for="PhysicianDetails.Address.Country">Country</label>
            <Multiselect
              id="PhysicianDetails.Address.Country"
              v-model="form.address.countryId"
              :options="countries"
              track-by="value"
              value="value"
              placeholder="Please select"
              label="text"
              name="PhysicianDetails.Address.Country"
              :class="v.classes"
            >
            </Multiselect>

            <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label" for="PhysicianDetails.Address.ZipCode">ZIP/ Postal Code</label>
          <input
            id="PhysicianDetails.Address.ZipCode"
            v-model="form.address.zipCode"
            class="form-control"
            type="text"
            name="PhysicianDetails.Address.ZipCode"
            value=""
          />
        </div>
      </div>
    </div>

    <!-- Healthcare Providers -->
    <div class="row mt-3">
      <!-- Title -->
      <div class="col mb-3">
        <label class="form-label" for="RefusedCoverOrAcceptedOnSpecialTerms"
          >Do you have Existing Health Insurance Policies?</label
        >
      </div>

      <!-- Radio -->
      <div>
        <!-- Yes -->
        <div class="form-check form-check-inline">
          <input
            id="ExistingHealthInsurancePoliciesRadio-yes"
            v-model="form.insuranceProvider.haveExistingHealthInsurance"
            class="form-check-input"
            type="radio"
            name="ExistingHealthInsurancePoliciesRadio"
            value="Yes"
            @click="existingHealthInsurancePoliciesCheck(true)"
          />
          <label class="form-check-label" for="ExistingHealthInsurancePoliciesRadio-yes">Yes</label>
        </div>
        <!-- No -->
        <div class="form-check form-check-inline">
          <input
            id="ExistingHealthInsurancePoliciesRadio-no"
            v-model="form.insuranceProvider.haveExistingHealthInsurance"
            class="form-check-input"
            type="radio"
            name="ExistingHealthInsurancePoliciesRadio"
            value="No"
            @click="existingHealthInsurancePoliciesCheck(false)"
          />
          <label class="form-check-label" for="ExistingHealthInsurancePoliciesRadio-no">No</label>
        </div>
      </div>

      <!-- Addtional form -->
      <div v-if="form.insuranceProvider.haveExistingHealthInsurance === 'Yes'">
        <div class="p-3 border-start my-3 border-primary">
          <div class="form-group">
            <div class="row">
              <div class="col">
                <label class="form-label required" for="CoverEndDate">Date Cover Ends</label>
                <DatePicker
                  id="CoverEndDate"
                  v-model="form.insuranceProvider.coverEndDate"
                  class="w-100"
                  name="CoverEndDate"
                />
              </div>
            </div>

            <div class="row mt-3">
              <div class="col">
                <label class="form-label required" for="ProviderCompanyName">Provider company name </label>
                <input
                  id="ProviderCompanyName"
                  v-model="form.insuranceProvider.providerCompanyName"
                  class="form-control"
                  type="text"
                  name="ProviderCompanyName"
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
import { titles, countryCodes, countries } from '../../data/optionData'
import Multiselect from 'vue-multiselect'
import DatePicker from 'vue2-datepicker'

export default {
  name: 'PhysicianDetails',
  components: {
    Multiselect,
    DatePicker,
  },
  data() {
    return {
      isExistingHealthInsurancePolicies: 'No',
      titles: titles,
      countryCodes: countryCodes,
      countries: countries,
      form: this.$formData.additionalDetails.physicianDetails,
    }
  },
  methods: {
    existingHealthInsurancePoliciesCheck(isExistingHealthInsurancePolicies) {
      this.isExistingHealthInsurancePolicies = isExistingHealthInsurancePolicies
    },
  },
}
</script>
