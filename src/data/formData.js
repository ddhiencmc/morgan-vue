import Vue from "vue";

const formData = new Vue({
  data() {
    return {
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
