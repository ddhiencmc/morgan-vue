import Vue from "vue";

const queryParams = new URLSearchParams(window.location.search);

const formData = new Vue({
  data() {
    return {
      currentStep: parseInt(queryParams.get('step') || 1),
      policyHolderDetails: {
        applicationId: 0,
        details: {
          salutationId: "",
          surname: "",
          forename: "",
          dateOfBirth: null,
          genderId: "",
          residenceCountryId: "",
          occupationIds: [],
          countryId: ""
        },
        contact: {
          countryCodeLineNumber: "",
          landlineNumber: "",
          countryCodeMobile: "",
          mobileNumber: "",
          emailAddress: "",
          contactType: -1
        },
        familyMembers: [],
        policyStartDate: new Date(),
        currenyId: ""
      }
    };
  }
});

export default formData;
