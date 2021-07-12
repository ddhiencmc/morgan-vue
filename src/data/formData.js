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
      },

      // Evolution Health
      services: [
        {
          name: 'Standard',
          selectedExcess: null,
          noCoInsurance: true,
          excessDescription: '',
          hasAdditionalBenefit: false,
          frequency: null,
          frequencyOptions: [
            {
              type: 'Monthly',
              price: '174.68'
            },
            {
              type: 'Quarterly',
              price: '509.48'
            },
            {
              type: 'Semi-Annual',
              price: '1009.26'
            },
            {
              type: 'Annual',
              price: '1940.88'
            },
          ],
        },
        {
          name: 'Standard Plus',
          selectedExcess: null,
          hasAdditionalBenefit: false,
          insuranceSelectedValue: '',
          frequency: null,
          frequencyOptions: [
            {
              type: 'Monthly',
              price: '213.55'
            },
            {
              type: 'Quarterly',
              price: '622.85'
            },
            {
              type: 'Semi-Annual',
              price: '1233.85'
            },
            {
              type: 'Annual',
              price: '2372.75'
            },
          ]
        },
        {
          name: 'Comprehensive',
          selectedExcess: null,
          hasAdditionalBenefit: false,
          insuranceSelectedValue: '',
          frequency: null,
          frequencyOptions: [
            {
              type: 'Monthly',
              price: '351.36'
            },
            {
              type: 'Quarterly',
              price: '1024.79'
            },
            {
              type: 'Semi-Annual',
              price: '2030.06'
            },
            {
              type: 'Annual',
              price: '3903.97'
            },
          ],
        },
        {
          name: 'Premium',
          selectedExcess: null,
          hasAdditionalBenefit: false,
          insuranceSelectedValue: '',
          frequency: null,
          frequencyOptions: [
            {
              type: 'Monthly',
              price: '466.10'
            },
            {
              type: 'Quarterly',
              price: '1359.46'
            },
            {
              type: 'Semi-Annual',
              price: '2693.03'
            },
            {
              type: 'Annual',
              price: '5178.90'
            },
          ],
        },
        {
          name: 'Elite',
          selectedExcess: null,
          hasAdditionalBenefit: false,
          insuranceSelectedValue: '',
          frequency: null,
          frequencyOptions: [
            {
              type: 'Monthly',
              price: '638.22'
            },
            {
              type: 'Quarterly',
              price: '1861.47'
            },
            {
              type: 'Semi-Annual',
              price: '3687.49'
            },
            {
              type: 'Annual',
              price: '7091.32'
            },
          ],
        }
      ],
      additionalDetails: {
        genderId: '',
        occupationIds: [],
        otherOccupation: '',
        pastimeIds: [],
        otherPastime: '',
        refusedCoverOrAcceptedOnSpecialTerms: false,
        refusedCoverOrAcceptedOnSpecialTermsDetails: '',
        bmi: {
          height: null,
          heightUnit: 'feet', // feet, cm, inch
          weight: null,
          weightUnit: 'kg', // kg, stone, pounds
        },
        homeCountryAddress: {

        },
        physicianDetails: {
          practicename: '',
          dateLastVisited: null,
          salutationId: '',
          surname: "",
          forename: "",
          countryId: "",
          telephoneNumber: "",
          address: {
            addressLine1: "",
            addressLine2: "",
            addressLine3: "",
            state: "",
            city: "",
            countryId: "",
            zipCode: "",
          },
          insuranceProviders: [
            {
              healthCareInsuranceProviderId: '',
              otherHealthCareInsuranceProvider: "",
              coverEndDate: null,
            }
          ],
          documents: {
            files: [
              {
                label: 'Passport',
                file: ''
              },
              {
                label: 'Address Proof',
                file: ''
              }
            ]
          }
        }
      }
    };
  }
});

export default formData;
