<template>
  <div>
    <div class="row">
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

      <div class="col-md-6 mb-3">
        <ValidationProvider rules="required" v-slot="v">
          <label class="form-label required">Forename</label>
          <input
            name="forename"
            class="form-control"
            v-model="form.forename"
            placeholder="Forename"
          />
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 mb-3">
        <ValidationProvider rules="required" v-slot="v">
          <label class="form-label required">Surname/Family Name</label>
          <input
            name="surname"
            class="form-control"
            v-model="form.surname"
            placeholder="Surname/Family Name"
          />
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>

      <div class="col-md-6 mb-3">
        <ValidationProvider rules="required" v-slot="v">
          <label class="form-label required">Date Of Birth</label>
          <input
            name="dateOfBirth"
            class="form-control valid"
            v-model="form.dateOfBirth"
            valueType="format"
            type="date"
            date-val="true"
          />
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>

    <div class="row">
      <div class="col mb-3">
        <ValidationProvider rules="required" v-slot="v">
          <label class="form-label required">Genders</label>
          <select
            name="gender"
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
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>

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

    <div class="row">
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