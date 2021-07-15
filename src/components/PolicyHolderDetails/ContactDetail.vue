<template>
  <div class="form-group mt-4">
    <div class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label">Country Code</label>
        <select v-model="form.countryCodeLineNumber" class="form-select form-control" aria-label="">
          <option value="">Please select</option>
          <option v-for="countryCodes in countryCodes" :key="countryCodes.value" :value="countryCodes.value">
            {{ countryCodes.text }}
          </option>
        </select>
      </div>

      <div class="col-md-6 mb-3">
        <ValidationProvider v-slot="v" rules="phoneNumber">
          <label class="form-label"> Landline Number </label>
          <input v-model="form.landlineNumber" class="form-control" />
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label">Country Code</label>
        <select v-model="form.countryCodeMobile" class="form-select form-control" aria-label="">
          <option value="">Please select</option>
          <option v-for="countryCodes in countryCodes" :key="countryCodes.value" :value="countryCodes.value">
            {{ countryCodes.text }}
          </option>
        </select>
      </div>

      <div class="col-md-6 mb-3">
        <ValidationProvider v-slot="v" rules="phoneNumber">
          <label class="form-label">Mobile Number</label>
          <input v-model="form.mobileNumber" class="form-control" />
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>

    <div class="row">
      <div class="col mb-3">
        <ValidationProvider v-slot="v" rules="required|email">
          <label class="form-label required">Email Address</label>
          <input v-model="form.emailAddress" name="contact-email" type="email" class="form-control" />
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>
  </div>
</template>

<script>
import { countryCodes } from '../../data/optionData'

export default {
  name: 'ContactDetail',
  components: {},
  props: {
    msg: String,
  },
  data() {
    return {
      form: this.$formData.policyHolderDetails.contact,
      countryCodes: countryCodes,
    }
  },
}
</script>
