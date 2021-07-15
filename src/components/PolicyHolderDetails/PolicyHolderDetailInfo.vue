<template>
  <div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label">Title</label>
        <select v-model="form.salutationId" class="form-select form-control">
          <option value="">Please Select</option>
          <option v-for="title in titles" :key="title.value" :value="title.value">
            {{ title.text }}
          </option>
        </select>
      </div>

      <div class="col-md-6 mb-3">
        <ValidationProvider v-slot="v" rules="required">
          <label class="form-label required">Forename</label>
          <input v-model="form.forename" name="forename" class="form-control" placeholder="Forename" />
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 mb-3">
        <ValidationProvider v-slot="v" rules="required">
          <label class="form-label required">Surname/Family Name</label>
          <input v-model="form.surname" name="surname" class="form-control" placeholder="Surname/Family Name" />
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>

      <div class="col-md-6 mb-3">
        <ValidationProvider v-slot="v" rules="required">
          <label class="form-label required">Date Of Birth</label>
          <input
            v-model="form.dateOfBirth"
            name="dateOfBirth"
            class="form-control valid"
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
        <ValidationProvider v-slot="v" rules="required">
          <label class="form-label required">Genders</label>
          <select v-model="form.genderId" name="gender" class="form-select form-control" aria-label="">
            <option value="">Please select</option>
            <option v-for="gender in genders" :key="gender.value" :value="gender.value">
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
        <select v-model="form.countryId" class="form-select form-control" aria-label="">
          <option value="">Please select</option>
          <option v-for="country in countries" :key="country.value" :value="country.value">
            {{ country.text }}
          </option>
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label required">Country Of Residence</label>
        <select v-model="form.residenceCountryId" class="form-select form-control" aria-label="">
          <option value="">Please select</option>
          <option v-for="country in countries" :key="country.value" :value="country.value">
            {{ country.text }}
          </option>
        </select>
        <span asp-validation-for="ResidenceCountries" class="text-danger"></span>
      </div>

      <div class="col-md-6">
        <label class="form-label required">Occupation (Select multiple)</label>
        <select v-model="form.occupationIds" class="form-select form-control" aria-label="" multiple="multiple">
          <option v-for="occupation in occupations" :key="occupation.value" :value="occupation.value">
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
import { titles, genders, countries, occupations, relationships } from '../../data/optionData.js'

export default {
  name: 'PolicyHolderDetailInfo',
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
      relationships: relationships
    }
  }
}
</script>
