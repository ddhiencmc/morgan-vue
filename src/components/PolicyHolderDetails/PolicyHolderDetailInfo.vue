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
          <input v-model="form.dateOfBirth" name="Policy.DateOfBirth" class="form-control" type="date" />
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>

    <div class="row">
      <div class="col mb-3">
        <ValidationProvider v-slot="v" rules="required">
          <label class="form-label required">Genders</label>
          <Multiselect
            v-model="form.genderId"
            :options="genders"
            track-by="value"
            placeholder="Please select"
            label="text"
          >
          </Multiselect>
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>

    <div class="row">
      <div class="col mb-3">
        <ValidationProvider v-slot="v" rules="required">
          <label class="form-label required">Country of Nationality</label>
          <Multiselect
            v-model="form.countryId"
            :options="countries"
            track-by="value"
            placeholder="Please select"
            label="text"
          >
          </Multiselect>
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 mb-3">
        <ValidationProvider v-slot="v" rules="required">
          <label class="form-label required">Country Of Residence</label>
          <Multiselect
            v-model="form.residenceCountryId"
            :options="countries"
            track-by="value"
            placeholder="Please select"
            label="text"
          >
          </Multiselect>
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>

      <div class="col-md-6">
        <ValidationProvider v-slot="v" rules="required">
          <label class="form-label required">Occupation (Select multiple)</label>
          <Multiselect
            v-model="form.occupationIds"
            :options="occupations"
            track-by="value"
            placeholder="Please select"
            label="text"
            :multiple="true"
          >
          </Multiselect>
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>
  </div>
</template>

<script>
// import DatePicker from "vue2-datepicker";
import Multiselect from 'vue-multiselect'
import { titles, genders, countries, occupations, relationships } from '../../data/optionData.js'

export default {
  name: 'PolicyHolderDetailInfo',
  components: {
    // DatePicker,
    Multiselect,
  },
  data() {
    return {
      form: this.$formData.policyHolderDetails.details,
      titles: titles,
      genders: genders,
      countries: countries,
      occupations: occupations,
      relationships: relationships,
    }
  },
}
</script>
