<template>
  <div class="form-group mt-4">
    <div class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label">Country Code</label>
        <Multiselect
          v-model="form.countryCodeLineNumber"
          :options="countryCodes"
          track-by="value"
          placeholder="Please select"
          label="text"
        />
      </div>

      <div class="col-md-6 mb-3">
        <ValidationProvider v-slot="v" rules="phoneNumber">
          <label class="form-label"> Landline Number </label>
          <input v-model="form.landlineNumber" class="form-control" :class="v.classes" />
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label">Country Code</label>
        <Multiselect
          v-model="form.countryCodeMobile"
          :options="countryCodes"
          track-by="value"
          placeholder="Please select"
          label="text"
        />
      </div>

      <div class="col-md-6 mb-3">
        <ValidationProvider v-slot="v" rules="phoneNumber">
          <label class="form-label">Mobile Number</label>
          <input v-model="form.mobileNumber" class="form-control" :class="v.classes" />
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>

    <div class="row">
      <div class="col mb-3">
        <ValidationProvider v-slot="v" rules="required|email">
          <label class="form-label required">Email Address</label>
          <input
            v-model="form.emailAddress"
            name="contact-email"
            type="email"
            class="form-control"
            :class="v.classes"
          />
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>
  </div>
</template>

<script>
import { countryCodes } from '../../data/optionData'
import Multiselect from 'vue-multiselect'
export default {
  name: 'ContactDetail',
  components: {
    Multiselect,
  },
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
