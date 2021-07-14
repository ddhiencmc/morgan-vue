<template>
  <div class="w-75 mx-auto">
    <!-- main form -->
    <div class="card shadow-sm p-5 border-0 my-5">
      <Address class="mb-4" />

      <PolicyHolderDetails class="mb-4" />

      <PhysicianDetails class="mb-4" />

      <!--  Document Upload -->
      <div class="form-group">
        <h2>Upload Documents</h2>
        <p>If you have existing health insurance, please provide details</p>
        <div class="row">
          <div class="col mb-3">
            <label>Passport: </label>
            <input
              type="file"
              accept=".pdf,.docx,.doc,.rtf,.bmp,.gif,.jpg,.png"
              capture="capture"
            />
          </div>
        </div>
        <div class="row">
          <div class="col mb-3">
            <label>Address Proof: </label>
            <input
              type="file"
              accept=".pdf,.docx,.doc,.rtf,.bmp,.gif,.jpg,.png"
              capture="capture"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- control step -->
    <div class="d-flex justify-content-end">
      <div>
        <button class="btn btn-secondary mx-2" @click="previousStep()">
          Previous
        </button>

        <button type="submit" class="btn btn-primary mx-2" @click="nextStep()">
          Next
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Address from "./Address.vue";
import PolicyHolderDetails from "./PolicyHolderDetails.vue";
import PhysicianDetails from "./PhysicianDetails.vue";

export default {
  name: "AdditionalDetails",
  data() {
    return {};
  },
  methods: {
    previousStep() {
      this.$formData.currentStep--;
    },
    nextStep() {
      this.$formData.currentStep++;
    },
  },
  components: {
    Address,
    PolicyHolderDetails,
    PhysicianDetails,
  },
};
</script>
