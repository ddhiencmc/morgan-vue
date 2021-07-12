<template>
  <div class="form-group mt-4">
    <div class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label">Country Code</label>
        <select
          class="form-select form-control"
          aria-label=""
          v-model="form.countryCodeLineNumber"
        >
          <option value="">Please select</option>
          <option
            v-for="countryCodes in countryCodes"
            :key="countryCodes.value"
            v-bind:value="countryCodes.value"
          >
            {{ countryCodes.text }}
          </option>
        </select>
      </div>

      <div class="col-md-6 mb-3">
        <ValidationProvider rules="phoneNumber" v-slot="v">
          <label class="form-label"> Landline Number </label>
          <input class="form-control" v-model="form.landlineNumber" />
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label">Country Code</label>
        <select
          class="form-select form-control"
          aria-label=""
          v-model="form.countryCodeMobile"
        >
          <option value="">Please select</option>
          <option
            v-for="countryCodes in countryCodes"
            :key="countryCodes.value"
            v-bind:value="countryCodes.value"
          >
            {{ countryCodes.text }}
          </option>
        </select>
      </div>

      <div class="col-md-6 mb-3">
        <ValidationProvider rules="phoneNumber" v-slot="v">
          <label class="form-label">Mobile Number</label>
          <input class="form-control" v-model="form.mobileNumber" />
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>

    <div class="row">
      <div class="col mb-3">
        <ValidationProvider rules="required|email" v-slot="v">
          <label class="form-label required">Email Address</label>
          <input name="contact-email" type="email" class="form-control" v-model="form.emailAddress" />
          <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>
  </div>
</template>

<script>
import { countryCodes } from "../../data/optionData";

export default {
  name: "ContactDetail",
  props: {
    msg: String,
  },
  components: {},
  data() {
    return {
      form: this.$formData.policyHolderDetails.contact,
      countryCodes: countryCodes,
    };
  },
};
</script>