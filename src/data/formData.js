import Vue from 'vue'

const queryParams = new URLSearchParams(window.location.search)

const formData = new Vue({
  data() {
    return {
      currentStep: parseInt(queryParams.get('step') || 1),
      policyHolderDetails: {
        applicationId: 0,
        details: {
          salutationId: '',
          surname: '',
          forename: '',
          dateOfBirth: null,
          genderId: '',
          residenceCountryId: '',
          occupationIds: [],
          countryId: '',
        },
        contact: {
          countryCodeLineNumber: '',
          landlineNumber: '',
          countryCodeMobile: '',
          mobileNumber: '',
          emailAddress: '',
          contactType: -1,
        },
        familyMembers: [],
        policyStartDate: null,
        currenyId: '',
      },

      // Evolution Health
      product: {
        productId: 1,
        name: '',
        selectedExcessId: null,
        coInsuranceSelectedId: null,
        hasAdditionalBenefit: false,
        frequency: '',
      },

      // services: [
      //   {
      //     productId: 1,
      //     name: 'Standard',
      //     selectedExcess: '0',
      //     noCoInsurance: true,
      //     excessDescription: '',
      //     hasAdditionalBenefit: false,
      //     frequency: '',
      //     frequencyOptions: [
      //       {
      //         type: 'Monthly',
      //         price: '174.68',
      //       },
      //       {
      //         type: 'Quarterly',
      //         price: '509.48',
      //       },
      //       {
      //         type: 'Semi-Annual',
      //         price: '1009.26',
      //       },
      //       {
      //         type: 'Annual',
      //         price: '1940.88',
      //       },
      //     ],
      //   },
      //   {
      //     productId: 2,
      //     name: 'Standard Plus',
      //     selectedExcess: '0',
      //     hasAdditionalBenefit: false,
      //     insuranceSelectedValue: '',
      //     frequency: '',
      //     frequencyOptions: [
      //       {
      //         type: 'Monthly',
      //         price: '213.55',
      //       },
      //       {
      //         type: 'Quarterly',
      //         price: '622.85',
      //       },
      //       {
      //         type: 'Semi-Annual',
      //         price: '1233.85',
      //       },
      //       {
      //         type: 'Annual',
      //         price: '2372.75',
      //       },
      //     ],
      //   },
      //   {
      //     productId: 3,
      //     name: 'Comprehensive',
      //     selectedExcess: '0',
      //     hasAdditionalBenefit: false,
      //     insuranceSelectedValue: '',
      //     frequency: '',
      //     frequencyOptions: [
      //       {
      //         type: 'Monthly',
      //         price: '351.36',
      //       },
      //       {
      //         type: 'Quarterly',
      //         price: '1024.79',
      //       },
      //       {
      //         type: 'Semi-Annual',
      //         price: '2030.06',
      //       },
      //       {
      //         type: 'Annual',
      //         price: '3903.97',
      //       },
      //     ],
      //   },
      //   {
      //     productId: 4,
      //     name: 'Premium',
      //     selectedExcess: '0',
      //     hasAdditionalBenefit: false,
      //     insuranceSelectedValue: '',
      //     frequency: '',
      //     frequencyOptions: [
      //       {
      //         type: 'Monthly',
      //         price: '466.10',
      //       },
      //       {
      //         type: 'Quarterly',
      //         price: '1359.46',
      //       },
      //       {
      //         type: 'Semi-Annual',
      //         price: '2693.03',
      //       },
      //       {
      //         type: 'Annual',
      //         price: '5178.90',
      //       },
      //     ],
      //   },
      //   {
      //     productId: 5,
      //     name: 'Elite',
      //     selectedExcess: '0',
      //     hasAdditionalBenefit: false,
      //     insuranceSelectedValue: '',
      //     frequency: '',
      //     frequencyOptions: [
      //       {
      //         type: 'Monthly',
      //         price: '638.22',
      //       },
      //       {
      //         type: 'Quarterly',
      //         price: '1861.47',
      //       },
      //       {
      //         type: 'Semi-Annual',
      //         price: '3687.49',
      //       },
      //       {
      //         type: 'Annual',
      //         price: '7091.32',
      //       },
      //     ],
      //   },
      // ],
      underwritingTypeId: null,

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
        homeCountryAddress: {},
        physicianDetails: {
          practicename: '',
          dateLastVisited: null,
          salutationId: '',
          surname: '',
          forename: '',
          countryId: '',
          telephoneNumber: '',
          address: {
            addressLine1: '',
            addressLine2: '',
            addressLine3: '',
            state: '',
            city: '',
            countryId: '',
            zipCode: '',
          },
          insuranceProviders: [
            {
              healthCareInsuranceProviderId: '',
              otherHealthCareInsuranceProvider: '',
              coverEndDate: null,
            },
          ],
          documents: {
            files: [
              {
                label: 'Passport',
                file: '',
              },
              {
                label: 'Address Proof',
                file: '',
              },
            ],
          },
        },
      },
      underwritingQuestions: {
        questions: [
          // Medical Declaration
          {
            questionNumber: 1,
            title:
              '1.  Are any medical/surgical/dental consultations and/ or procedures (including x-ray, lab or other testing) recommended, scheduled or contemplated?',
            groupName: 'Medical Declaration',
            callsUnderwritingQuestionGroupID: null,
            isAnswer: null,
            answer: null,
          },
          {
            questionNumber: 2,
            title:
              '2.	Has any applicant ever been refused medical or dental insurance, or ever had a policy postponed, rated or accepted on special terms?',
            groupName: 'Medical Declaration',
            callsUnderwritingQuestionGroupID: null,
            isAnswer: null,
          },
          {
            questionNumber: 3,
            title:
              '3.	Has any applicant been examined by, consulted with, or received medical treatment from a medical professional in the last 12 months?',
            groupName: 'Medical Declaration',
            callsUnderwritingQuestionGroupID: null,
            isAnswer: null,
          },
          {
            questionNumber: 4,
            title:
              '4.	Has any applicant been examined by, consulted with, or received medical treatment from a medical specialist or consultant in the last 5 years?',
            groupName: 'Medical Declaration',
            callsUnderwritingQuestionGroupID: null,
            isAnswer: null,
          },
          {
            questionNumber: 5,
            title:
              '5.	Has any applicant been confined (stayed overnight) in a hospital, clinic, sanatorium, or other treatment facility in the last 5 years?',
            groupName: 'Medical Declaration',
            callsUnderwritingQuestionGroupID: null,
            isAnswer: null,
          },

          // Detail
          {
            questionNumber: 6,
            title:
              '6.  Has any applicant had any disease or impairment of or suffered any symptoms or required any medication, treatment or hospital consultation(s) for the following? - Please answer all questions.',
            groupName: 'Detail',
            isTitle: true,
          },
          {
            questionNumber: 6.1,
            title: '6.1.  AIDS/ARC/HIV',
            groupName: 'Detail',
            isTitle: false,
            callsUnderwritingQuestionGroupID: null,
            isAnswer: null,
          },
          {
            questionNumber: 6.2,
            title: '6.2.  Alcohol dependency or drug/substance abuse',
            groupName: 'Detail',
            callsUnderwritingQuestionGroupID: null,
            isAnswer: null,
          },
          {
            questionNumber: 6.3,
            title: '6.3.  Anaemia or any blood disorder',
            groupName: 'Detail',
            callsUnderwritingQuestionGroupID: null,
            isAnswer: null,
          },
          {
            questionNumber: 6.4,
            title: '6.4.  Arthritis, or any disorder of any muscles or joints',
            groupName: 'Detail',
            callsUnderwritingQuestionGroupID: null,
            isAnswer: null,
          },
          {
            questionNumber: 6.5,
            title: '6.5.  Asthma, bronchitis or any other respiratory disorder',
            groupName: 'Detail',
            callsUnderwritingQuestionGroupID: null,
            isAnswer: null,
          },
          {
            questionNumber: 6.6,
            title: '6.6.  Back/spine/neck',
            groupName: 'Detail',
            callsUnderwritingQuestionGroupID: 'Hypertension',
            isAnswer: null,
          },
          {
            questionNumber: 6.7,
            title: '6.7.  Blood pressure/hypertension',
            groupName: 'Detail',
            callsUnderwritingQuestionGroupID: null,
            isAnswer: null,
          },
        ],
      },
    }
  },
})

export default formData
