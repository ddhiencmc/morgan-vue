<template>
  <div>
    <div class="accordion-header collapsed" @click="toggleForm">
      <button
        class="accordion-button"
        :class="{ collapsed: !isOpen }"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#family-member-' + memberIndex"
        aria-expanded="true"
        aria-controls="panelsStayOpen-collapseOne"
      >
        Family member #{{ memberIndex + 1 }}
      </button>
    </div>
    <div class="accordion-collapse collapse" :class="{ show: isOpen }" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <div :id="'additional-members-' + memberIndex">
          <div class="form-group border-start p-3 my-3 border-primary">
            <div class="mb-4">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label">Title</label>
                  <select
                    v-model="form.salutationId"
                    class="form-select form-control"
                    aria-label=""
                    name="FamilyMember.Title"
                  >
                    <option value="">Please select</option>
                    <option v-for="title in titles" :key="title.value" :value="title.value">
                      {{ title.text }}
                    </option>
                  </select>
                </div>

                <div class="col-md-6 mb-3">
                  <ValidationProvider v-slot="v" rules="required">
                    <label class="form-label required">Forename</label>
                    <input
                      v-model="form.forename"
                      class="form-control"
                      :class="v.classes"
                      placeholder="Forename"
                      name="FamilyMember.Forename"
                    />
                    <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <ValidationProvider v-slot="v" rules="required">
                    <label class="form-label required">Surname/Family Name</label>
                    <input
                      v-model="form.surname"
                      class="form-control"
                      :class="v.classes"
                      name="FamilyMember.SurName"
                      placeholder="Surname/Family Name"
                    />
                    <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
                  </ValidationProvider>
                </div>

                <div class="col-md-6 mb-3">
                  <ValidationProvider v-slot="v" rules="required">
                    <label class="form-label required">Date Of Birth</label>
                    <input
                      v-model="form.dateOfBirth"
                      class="form-control"
                      :class="v.classes"
                      name="FamilyMember.DateOfBirth"
                      type="date"
                    />
                    <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <div class="row">
                <div class="col mb-3">
                  <ValidationProvider v-slot="v" rules="required">
                    <label class="form-label required">Genders</label>
                    <select
                      v-model="form.genderId"
                      class="form-select form-control"
                      :class="v.classes"
                      aria-label=""
                      name="FamilyMember.Gender"
                    >
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
                  <ValidationProvider v-slot="v" rules="required">
                    <label class="form-label required">Country of Nationality</label>
                    <select
                      v-model="form.countryId"
                      class="form-select form-control"
                      :class="v.classes"
                      aria-label=""
                      name="FamilyMember.CountryOfNationality"
                    >
                      <option value="">Please select</option>
                      <option v-for="country in countries" :key="country.value" :value="country.value">
                        {{ country.text }}
                      </option>
                    </select>
                    <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <ValidationProvider v-slot="v" rules="required">
                    <label class="form-label required">Occupation (Select multiple)</label>
                    <select
                      v-model="form.occupationIds"
                      class="form-select form-control"
                      :class="v.classes"
                      aria-label=""
                      multiple="multiple"
                      name="FamilyMember.Occupation"
                    >
                      <option v-for="occupation in occupations" :key="occupation.value" :value="occupation.value">
                        {{ occupation.text }}
                      </option>
                    </select>
                    <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col mb-3">
                <ValidationProvider v-slot="v" rules="required">
                  <label class="form-label required">
                    Relationship To The Policy Holder
                  </label>
                  <select
                    v-model="form.relationshipId"
                    class="form-select form-control"
                    :class="v.classes"
                    aria-label=""
                    name="FamilyMember.Relationship"
                  >
                    <option value="">Please select</option>
                    <option v-for="relationship in relationships" :key="relationship.value" :value="relationship.value">
                      {{ relationship.text }}
                    </option>
                  </select>
                  <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>

            <div class="form-check form-check-inline">
              <ValidationProvider v-slot="v" rules="checked">
                <input
                  :id="'isAnUnmarriedChildAndInFurtherEducation-' + memberIndex"
                  v-model="form.isAnUnmarriedChildAndInFurtherEducation"
                  class="form-check-input"
                  type="checkbox"
                  name="FamilyMember.ConfirmChecked"
                />
                <label
                  :for="'isAnUnmarriedChildAndInFurtherEducation-' + memberIndex"
                  class="form-check-label required"
                  data-val="true"
                  data-val-required="The Please confirm that the child is unmarried and in full-time
           further education at the policy start date. field is required."
                >
                  Please confirm that the child is unmarried and in full-time further education at the policy start
                  date.
                </label>
                <span v-if="v.invalid" class="input-error">{{ v.errors[0] }}</span>
              </ValidationProvider>
            </div>

            <div class="mt-3">
              <i class="fas fa-exclamation-circle me-2 text-primary"></i>
              <a href="#" role="button" class="" data-bs-toggle="modal" @click="openHelperModal">WHY DO WE ASK THIS?</a>
            </div>

            <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-danger" @click="removeFamilyMember">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { titles, genders, countries, occupations, relationships } from '../../data/optionData.js'

export default {
  name: 'PolicyHolderDetailInfo',
  components: {},
  props: ['memberIndex'],
  data() {
    const helperModal = new window.bootstrap.Modal(
      document.getElementById('isAnUnmarriedChildAndInFurtherEducationModal'),
      {},
    )

    const confirmDeleteFamilyModal = new window.bootstrap.Modal(
      document.getElementById('confirmDeleteMemberFamilyModal'),
      {},
    )

    return {
      form: this.$formData.policyHolderDetails.familyMembers[this.memberIndex],
      isOpen: false,

      helperModal,
      confirmDeleteFamilyModal,

      //select items
      titles: titles,
      genders: genders,
      countries: countries,
      occupations: occupations,
      relationships: relationships,
    }
  },
  mounted() {},
  methods: {
    toggleForm() {
      this.isOpen = !this.isOpen
    },
    openHelperModal(event) {
      event.preventDefault()
      this.helperModal.toggle()
    },
    removeFamilyMember() {
      this.confirmDeleteFamilyModal.toggle()
      this.$formData.policyHolderDetails.currentSelectedFamilyIndex = this.memberIndex
    },
  },
}
</script>
