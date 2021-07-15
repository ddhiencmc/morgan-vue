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
                  <select v-model="form.salutationId" class="form-select form-control" aria-label="">
                    <option value="">Please select</option>
                    <option v-for="title in titles" :key="title.value" :value="title.value">
                      {{ title.text }}
                    </option>
                  </select>
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label required">Forename</label>
                  <input v-model="forename" class="form-control" placeholder="Forename" />
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label required">Surname/Family Name</label>
                  <input v-model="form.surname" class="form-control" placeholder="Surname/Family Name" />
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label required">Date Of Birth</label>
                  <input
                    v-model="form.dateOfBirth"
                    class="form-control valid"
                    valueType="format"
                    type="date"
                    date-val="true"
                  />
                </div>
              </div>

              <div class="row">
                <div class="col mb-3">
                  <label class="form-label required">Genders</label>
                  <select v-model="form.genderId" class="form-select form-control" aria-label="">
                    <option value="">Please select</option>
                    <option v-for="gender in genders" :key="gender.value" :value="gender.value">
                      {{ gender.text }}
                    </option>
                  </select>
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
                <div class="col-md-6">
                  <label class="form-label required">Occupation (Select multiple)</label>
                  <option value="">Please select</option>
                  <select
                    v-model="form.occupationIds"
                    class="form-select form-control"
                    aria-label=""
                    multiple="multiple"
                  >
                    <option v-for="occupation in occupations" :key="occupation.value" :value="occupation.value">
                      {{ occupation.text }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col mb-3">
                <label class="form-label required">
                  Relationship To The Policy Holder
                </label>
                <select v-model="form.relationshipId" class="form-select form-control" aria-label="">
                  <option value="">Please select</option>
                  <option v-for="relationship in relationships" :key="relationship.value" :value="relationship.value">
                    {{ relationship.text }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-check form-check-inline">
              <input
                :id="'isAnUnmarriedChildAndInFurtherEducation-' + memberIndex"
                v-model="form.isAnUnmarriedChildAndInFurtherEducation"
                class="form-check-input"
                type="checkbox"
              />
              <label
                :for="'isAnUnmarriedChildAndInFurtherEducation-' + memberIndex"
                class="form-check-label required"
                data-val="true"
                data-val-required="The Please confirm that the child is unmarried and in full-time
           further education at the policy start date. field is required."
              >
                Please confirm that the child is unmarried and in full-time further education at the policy start date.
              </label>
            </div>

            <div class="mt-3">
              <i class="fas fa-exclamation-circle me-2 text-primary"></i>
              <a href="#" role="button" class="" data-bs-toggle="modal" @click="openHelperModal">WHY DO WE ASK THIS?</a>
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
      {}
    )

    return {
      form: this.$formData.policyHolderDetails.familyMembers[this.memberIndex],
      isOpen: false,
      helperModal,
      //select items
      titles: titles,
      genders: genders,
      countries: countries,
      occupations: occupations,
      relationships: relationships
    }
  },
  methods: {
    toggleForm() {
      this.isOpen = !this.isOpen
    },
    openHelperModal(event) {
      event.preventDefault()
      this.helperModal.toggle()
    }
  }
}
</script>
