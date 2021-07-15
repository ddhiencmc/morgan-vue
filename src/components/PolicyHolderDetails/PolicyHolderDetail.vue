<template>
  <div class="w-75 mx-auto">
    <div class="card shadow-sm p-5 border-0 my-5">
      <div class="form-group">
        <!-- <input asp-for="ApplicationId" class="form-control" /> -->
        <h2 class="text-header">Policy Holder Details</h2>
        <p class="fw-bold">Please tell us a bit about the policy holder:</p>
        <PolicyHolderDetailInfo />
        <h2>Contact Details</h2>
        <p class="fw-bold">
          We require your contact details. Please provide at least one of the below. Without this information we will
          not be able to administer your policy or support you in the event of a claim.
        </p>
        <ContactDetail />

        <div class="form-group mt-4">
          <h2>Additional Family Members</h2>
          <p class="fw-bold">
            Please tell us a if you would like to add additional family members to the policy.<br />
            Note: Everyone covered must live at the same address
          </p>
          <div class="d-grid">
            <button type="button" class="btn btn-primary" @click="addFamilyMember">
              Add Family Members
            </button>
          </div>
        </div>

        <div id="additional-family-members" class="accordion mt-3">
          <div v-for="(familyData, index) in form.familyMembers" :key="index" class="accordion-item mt-2 border">
            <AdditionalFamilyMember :member-index="index" />
          </div>
        </div>

        <div class="form-group row">
          <div class="col-sm-12 mt-4">
            <label class="form-label required">
              On Which Date Do You Require The Policy To Start?
            </label>
            <input v-model="form.policyStartDate" type="date" class="form-control" />
          </div>

          <div class="col-sm-12 mt-4">
            <label class="form-label required">What Currency Do You Wish To Pay In?</label>
            <select
              v-model="form.currenyId"
              data-val="true"
              data-val-required="The SelectedGenderId field is required."
              class="form-select form-control"
              aria-label=""
            >
              <option value="">Please select</option>
              <option v-for="currency in currencies" :key="currency.value" :value="currency.value">
                {{ currency.text }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-end">
      <button type="submit" class="btn btn-primary" @click="nextStep">
        Next
      </button>
    </div>

    <div
      id="isAnUnmarriedChildAndInFurtherEducationModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PolicyHolderDetailInfo from './PolicyHolderDetailInfo.vue'
import AdditionalFamilyMember from './AdditionalFamilyMember'
import ContactDetail from './ContactDetail'

import { currencies } from '../../data/optionData'

export default {
  name: 'PolicyHolderDetail',
  components: {
    PolicyHolderDetailInfo,
    AdditionalFamilyMember,
    ContactDetail
  },
  props: {
    msg: String
  },
  data() {
    return {
      form: this.$formData.policyHolderDetails,
      currencies: currencies
    }
  },
  methods: {
    addFamilyMember() {
      this.$formData.policyHolderDetails.familyMembers.push(this.getInitialFamilyMember())
    },
    getInitialFamilyMember() {
      return {
        salutationId: '',
        forename: '',
        surname: '',
        dateOfBirth: null,
        genderId: '',
        residenceCountryId: '',
        occupationIds: [],
        countryId: '',
        relationshipId: '',
        isAnUnmarriedChildAndInFurtherEducation: false
      }
    },
    nextStep() {
      this.$formData.currentStep++
    }
  }
}
</script>
