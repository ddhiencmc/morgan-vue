<template>
  <div class="w-75 mx-auto">
    <div class="card shadow-sm p-5 border-0 my-5">
      <div class="form-group">
        <!-- <input asp-for="ApplicationId" class="form-control" /> -->
        <h2 class="text-header">Policy Holder Details</h2>
        <p class="fw-bold">Please tell us a bit about the policy holder:</p>
        <PolicyHolderDetail />
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
          <div
            v-for="(familyData, index) in form.additionalFamilyMembers"
            :key="index"
            class="accordion-item mt-2 border"
          >
            <AdditionalFamilyMember :member-index="index" />
          </div>
        </div>

        <div class="form-group row">
          <div class="col-sm-12 mt-4">
            <ValidationProvider v-slot="v" rules="required">
              <label class="form-label required">
                On Which Date Do You Require The Policy To Start?
              </label>
              <DatePicker class="w-100" v-model="form.policyStartDate" value-type="format" name="Policy.StartTime" />
              <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div class="col-sm-12 mt-4">
            <ValidationProvider v-slot="v" rules="required">
              <label class="form-label required">What Currency Do You Wish To Pay In?</label>
              <select
                v-model="form.currencyId"
                data-val="true"
                data-val-required="The SelectedGenderId field is required."
                class="form-select form-control"
                aria-label=""
                name="Policy.PayIn"
              >
                <option value="">Please select</option>
                <option v-for="currency in currencies" :key="currency.value" :value="currency.value">
                  {{ currency.text }}
                </option>
              </select>
              <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
      </div>
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

    <!-- Modal -->
    <div
      id="confirmDeleteMemberFamilyModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="confirmDeleteMemberFamilyModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">Are you sure for delete your family member?</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="deleteFamilyMember()">
              OK
            </button>
            <button type="button" class="btn btn-default border-secondary" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PolicyHolderDetail from './PolicyHolderDetail.vue'
import AdditionalFamilyMember from './AdditionalFamilyMember'
import ContactDetail from './ContactDetail'

import { currencies } from '../../data/optionData'

import DatePicker from 'vue2-datepicker'

export default {
  name: 'PolicyHolder',
  components: {
    PolicyHolderDetail,
    AdditionalFamilyMember,
    ContactDetail,
    DatePicker,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      form: this.$formData.policyHolder,
      currencies: currencies,
    }
  },
  methods: {
    addFamilyMember() {
      this.form.additionalFamilyMembers.push(this.getInitialFamilyMember())
    },
    deleteFamilyMember() {
      this.form.additionalFamilyMembers.splice(this.form.currentSelectedFamilyIndex, 1)
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
        nationalityCountryId: '',
        relationshipId: '',
        isAnUnmarriedChildAndInFurtherEducation: false,
      }
    },
  },
}
</script>
