<template>
  <div>
    <div class="row">
      <!-- title -->
      <div class="col-md-6 mb-3">
        <label class="form-label">Title</label>
        <select class="form-select form-control" v-model="form.salutationId">
          <option value="">Please Select</option>
          <option
            v-for="title in titles"
            :key="title.value"
            v-bind:value="title.value"
          >
            {{ title.text }}
          </option>
        </select>
      </div>

      <!-- forename -->
      <div class="col-md-6 mb-3">
        <label class="form-label required">Forename</label>
        <input
          class="form-control"
          v-model="form.forename"
          placeholder="Forename"
        />
      </div>
    </div>

    <!-- Surname/Family Name , birth day -->
    <div class="row">
      <!-- surname -->
      <div class="col-md-6 mb-3">
        <label class="form-label required">Surname/Family Name</label>
        <input
          class="form-control"
          v-model="form.surname"
          placeholder="Surname/Family Name"
        />
      </div>

      <!-- birth day -->
      <div class="col-md-6 mb-3">
        <label class="form-label required">Date Of Birth</label>
        <input
          class="form-control valid"
          v-model="form.dateOfBirth"
          valueType="format"
          type="date"
          date-val="true"
        />
      </div>
    </div>

    <!-- gender -->
    <div class="row">
      <div class="col mb-3">
        <label class="form-label required">Genders</label>
        <select
          class="form-select form-control"
          v-model="form.genderId"
          aria-label=""
        >
          <option value="">Please select</option>
          <option
            v-for="gender in genders"
            :key="gender.value"
            :value="gender.value"
          >
            {{ gender.text }}
          </option>
        </select>
      </div>
    </div>

    <!-- country of nationality -->
    <div class="row">
      <div class="col mb-3">
        <label class="form-label required">Country of Nationality</label>
        <select
          class="form-select form-control"
          v-model="form.countryId"
          aria-label=""
        >
          <option value="">Please select</option>
          <option
            v-for="country in countries"
            :key="country.value"
            v-bind:value="country.value"
          >
            {{ country.text }}
          </option>
        </select>
      </div>
    </div>

    <!-- Country Of Residence + Occupation (Select multiple) -->
    <div class="row">
      <!-- Country Of Residence -->
      <div class="col-md-6 mb-3">
        <label class="form-label required">Country Of Residence</label>
        <select
          class="form-select form-control"
          v-model="form.residenceCountryId"
          aria-label=""
        >
          <option value="">Please select</option>
          <option
            v-for="country in countries"
            :key="country.value"
            v-bind:value="country.value"
          >
            {{ country.text }}
          </option>
        </select>
        <span
          asp-validation-for="ResidenceCountries"
          class="text-danger"
        ></span>
      </div>

      <!-- Occupation (Select multiple)  -->
      <div class="col-md-6">
        <label class="form-label required">Occupation (Select multiple)</label>
        <select
          class="form-select form-control"
          v-model="form.occupationIds"
          aria-label=""
          multiple="multiple"
        >
          <option
            v-for="occupation in occupations"
            :key="occupation.value"
            v-bind:value="occupation.value"
          >
            {{ occupation.text }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>


<script>
// import DatePicker from "vue2-datepicker";
// import "vue2-datepicker/index.css";
// import Multiselect from "vue-multiselect";
import {
  titles,
  genders,
  countries,
  occupations,
  relationships,
} from "../../data/optionData.js";

export default {
  name: "PolicyHolderDetailInfo",
  components: {
    // DatePicker,
    // Multiselect,
  },
  data() {
    return {
      form: this.$formData.policyHolderDetails.details,
      //select items
      titles: titles,
      genders: genders,
      countries: countries,
      occupations: occupations,
      relationships: relationships,
    };
  },
};
</script>