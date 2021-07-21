<template>
  <div class="row">
    <div class="col-sm-6 mb-3">
      <label class="form-label">Title</label>
      <select v-model="form.salutationId" class="form-control">
        <option value="">Please select</option>
        <option v-for="item in titles" :key="item.value" :value="item.value">
          {{ item.text }}
        </option>
      </select>
    </div>

    <div class="col-sm-6 mb-3">
      <ValidationProvider v-slot="v" rules="required">
        <label class="form-label required">Forename</label>
        <input v-model="form.forename" name="forename" class="form-control" :class="v.classes" placeholder="Forename" />
        <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
      </ValidationProvider>
    </div>

    <div class="col-sm-6 mb-3">
      <ValidationProvider v-slot="v" rules="required">
        <label class="form-label required">Surname/Family Name</label>
        <input
          v-model="form.surname"
          name="surname"
          class="form-control"
          :class="v.classes"
          placeholder="Surname/Family Name"
        />
        <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
      </ValidationProvider>
    </div>

    <div class="col-sm-6 mb-3">
      <ValidationProvider v-slot="v" rules="required">
        <label class="form-label required">Date Of Birth</label>
        <DatePicker class="w-100" v-model="form.dateOfBirth" value-type="format" />
        <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
      </ValidationProvider>
    </div>

    <div class="col-sm-6 mb-3">
      <ValidationProvider v-slot="v" rules="required">
        <label class="form-label required">Gender</label>
        <select v-model="form.genderId" class="form-control" :class="v.classes">
          <option value="">Please select</option>
          <option v-for="item in genders" :key="item.value" :value="item.value">
            {{ item.text }}
          </option>
        </select>
        <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
      </ValidationProvider>
    </div>
    <div class="col-md-6 mb-3">
      <ValidationProvider v-slot="v" rules="required">
        <label class="form-label required">Occupation</label>
        <Multiselect
          v-model="form.occupationIds"
          :options="occupations"
          track-by="value"
          placeholder="Please select"
          label="text"
        >
        </Multiselect>
        <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
      </ValidationProvider>
    </div>
    <div class="col-sm-6 mb-3">
      <ValidationProvider v-slot="v" rules="required">
        <label class="form-label required">Country of Nationality (Country of Primary Passport)</label>
        <Multiselect
          v-model="form.nationalityCountryId"
          :options="countries"
          track-by="value"
          placeholder="Please select"
          label="text"
        >
        </Multiselect>
        <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
      </ValidationProvider>
    </div>

    <div class="col-sm-6 mb-3">
      <ValidationProvider v-slot="v" rules="required">
        <label class="form-label required">Country Of Residence (Country of Primary Residence)</label>
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
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import Multiselect from 'vue-multiselect'
import { titles, genders, countries, occupations, relationships } from '../../data/optionData.js'

export default {
  name: 'PolicyHolderDetail',
  components: {
    Multiselect,
    DatePicker,
  },
  data() {
    return {
      form: this.$formData.policyHolder.details,
      titles: titles,
      genders: genders,
      countries: countries,
      occupations: occupations,
      relationships: relationships,
    }
  },
}
</script>
