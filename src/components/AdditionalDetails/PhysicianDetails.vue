<template>
  <!--  Physician Details -->
  <div class="form-group">
    <h2>Physician Details</h2>
    <p>
      Please provide us with the name and address of your regular personal or
      family doctor/physician. If you do not have a regular doctor, please give
      the last doctor you visited and approximate date.
    </p>
    <div class="row">
      <!-- Salutations -->
      <div class="col-md-6 mb-3">
        <label class="form-label" for="Salutations">Salutations</label>
        <select
          class="form-select form-control"
          aria-label=""
          data-val="true"
          data-val-required="The Title field is required."
          id="Salutations_SelectedSalutationId"
          name="Salutations.SelectedSalutationId"
        >
          <option selected="">Please select</option>
        </select>
        <span
          class="text-danger field-validation-valid"
          data-valmsg-for="Salutations"
          data-valmsg-replace="true"
        ></span>
      </div>

      <!-- Forename -->
      <div class="col-md-6 mb-3">
        <label class="form-label" for="Forename">Forename(s)</label>
        <input
          class="form-control"
          type="text"
          data-val="true"
          data-val-required="The Forename(s) field is required."
          id="Forename"
          name="Forename"
          value=""
        />
      </div>
    </div>

    <div class="row">
      <!-- Family Name -->
      <div class="col-md-6 mb-3">
        <label class="form-label" for="Surname">Surname/Family Name</label>
        <input
          class="form-control"
          type="text"
          data-val="true"
          data-val-required="The Surname/Family Name field is required."
          id="Surname"
          name="Surname"
          value=""
        />
      </div>

      <!-- Practice Name -->
      <div class="col-md-6 mb-3">
        <label class="required" for="PracticeName">Practice Name</label>
        <input
          class="form-control"
          type="text"
          data-val="true"
          data-val-required="The Practice Name field is required."
          id="PracticeName"
          name="PracticeName"
          value=""
        />
        <span
          class="text-danger field-validation-valid"
          data-valmsg-for="PracticeName"
          data-valmsg-replace="true"
        ></span>
      </div>
    </div>

    <div class="row">
      <!-- Date Last Visited -->
      <div class="col-md-6 mb-3">
        <label class="form-label required" for="DateLastVisited"
          >Date Last Visited</label
        >
        <input
          class="form-control"
          type="date"
          data-val="true"
          data-val-required="The Date Last Visited field is required."
          id="DateLastVisited"
          name="DateLastVisited"
          value="2021-07-12"
        />
      </div>

      <!-- Email -->
      <div class="col-md-6 mb-3">
        <label class="required" for="Email">Email</label>
        <input
          class="form-control"
          type="email"
          data-val="true"
          data-val-required="The Email field is required."
          id="Email"
          name="Email"
          value=""
        />
        <span
          class="text-danger field-validation-valid"
          data-valmsg-for="Email"
          data-valmsg-replace="true"
        ></span>
      </div>
    </div>

    <!-- telephone -->
    <div class="row">
      <!-- country code -->
      <div class="col-md-6 mb-3">
        <label class="form-label" for="CountryCodes">Country Code</label>
        <select
          class="form-select form-control"
          aria-label=""
          id="CountryCodes"
          name="CountryCodes"
        >
          <option selected="">Please select</option>
        </select>
        <span
          class="text-danger field-validation-valid"
          data-valmsg-for="CountryCodes"
          data-valmsg-replace="true"
        ></span>
      </div>

      <!-- telephone -->
      <div class="col-md-6 mb-3">
        <label class="form-label" for="TelephoneNumber">Telephone Number</label>
        <input
          class="form-control"
          type="tel"
          data-val="true"
          data-val-phone="The Telephone Number field is not a valid phone number."
          id="TelephoneNumber"
          name="TelephoneNumber"
          value=""
        />
      </div>
    </div>

    <!-- Practice address -->
    <div class="form-group mt-4">
      <div class="row">
        <div class="col mb-3">
          <label class="form-label" for="Address_AddressLine1"
            >Address Line 1</label
          >
          <input
            class="form-control"
            type="text"
            id="Address_AddressLine1"
            name="Address.AddressLine1"
            value=""
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label" for="Address_AddressLine2"
            >Address Line 2</label
          >
          <input
            class="form-control"
            type="text"
            id="Address_AddressLine2"
            name="Address.AddressLine2"
            value=""
          />
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label" for="Address_AddressLine3"
            >Address Line 3</label
          >
          <input
            class="form-control"
            type="text"
            id="Address_AddressLine3"
            name="Address.AddressLine3"
            value=""
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label" for="Address_State">State/County</label>
          <input
            class="form-control"
            type="text"
            id="Address_State"
            name="Address.State"
            value=""
          />
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label" for="Address_City">City</label>
          <input
            class="form-control"
            type="text"
            id="Address_City"
            name="Address.City"
            value=""
          />
        </div>
      </div>

      <!-- Country -->
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label required" for="Address_Countries"
            >Country</label
          >
          <select
            class="form-select form-control"
            aria-label=""
            data-val="true"
            data-val-required="The SelectedCountryID field is required."
            id="Address_Countries_SelectedCountryID"
            name="Address.Countries.SelectedCountryID"
          >
            <option selected="">Please select</option>
            <option value="1">Afghanistan</option>
            <option value="2">Việt Nam</option>
          </select>
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label" for="Address_ZipOrPostalCode"
            >ZIP/ Postal Code</label
          >
          <input
            class="form-control"
            type="text"
            id="Address_ZipOrPostalCode"
            name="Address.ZipOrPostalCode"
            value=""
          />
        </div>
      </div>
    </div>

    <!-- Healthcare Providers -->
    <div class="row mt-3">
      <!-- Title -->
      <div class="col mb-3">
        <label
          class="form-label required"
          for="RefusedCoverOrAcceptedOnSpecialTerms"
          >Do you have Existing Health Insurance Policies?</label
        >
      </div>

      <!-- Radio -->
      <div>
        <!-- Yes -->
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="ExistingHealthInsurancePoliciesRadio"
            id="ExistingHealthInsurancePoliciesRadio-yes"
            value="Yes"
            v-model="isExistingHealthInsurancePolicies"
            @click="existingHealthInsurancePoliciesCheck(true)"
          />
          <label
            class="form-check-label"
            for="ExistingHealthInsurancePoliciesRadio-yes"
            >Yes</label
          >
        </div>
        <!-- No -->
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="ExistingHealthInsurancePoliciesRadio"
            id="ExistingHealthInsurancePoliciesRadio-no"
            value="No"
            v-model="isExistingHealthInsurancePolicies"
            @click="existingHealthInsurancePoliciesCheck(false)"
          />
          <label
            class="form-check-label"
            for="ExistingHealthInsurancePoliciesRadio-no"
            >No</label
          >
        </div>
      </div>

      <!-- Addtional form -->
      <div
        id="additional-information"
        v-if="isExistingHealthInsurancePolicies === 'Yes'"
      >
        <div
          class="
        additionalHealthCareInsuranceProviders
        p-3
        border-start
        my-3
        border-primary
      "
          id="additionalHealthCareInsuranceProviders"
        >
          <div class="form-group">
            <div class="row">
              <div class="col">
                <label class="form-label required" for="CoverEndDate"
                  >Date Cover Ends</label
                >
                <input
                  class="form-control"
                  type="date"
                  id="CoverEndDate"
                  name="CoverEndDate"
                  value="2021-07-12"
                  data-val="true"
                  data-val-required="The date cover ends field is required."
                />
              </div>
            </div>

            <div class="row mt-3">
              <div class="col">
                <label class="form-label required" for="ProviderCompanyName"
                  >Provider company name
                </label>
                <input
                  class="form-control"
                  type="text"
                  id="ProviderCompanyName"
                  name="ProviderCompanyName"
                  value=""
                  data-val="true"
                  data-val-required="The provider company name field is required."
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

export default {
  name: "PhysicianDetails",
  data() {
    return {
      isExistingHealthInsurancePolicies: "No",
    };
  },
  methods: {
    existingHealthInsurancePoliciesCheck(isExistingHealthInsurancePolicies) {
      this.isExistingHealthInsurancePolicies = isExistingHealthInsurancePolicies;
    },
  },
};
</script>
