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
        currentSelectedFamilyIndex: null,
        familyMembers: [],
        policyStartDate: null,
        currencyId: '',
      },

      // Evolution Health
      product: {
        productId: 1,
        frequencyId: 0,
        areaId: 1,
        selectedExcessId: 1,
        coInsuranceSelectedId: null,
        hasAdditionalBenefit: false,
      },

      underwritingTypeId: null,

      additionalDetails: {
        genderId: '',
        occupationIds: [],
        otherOccupation: '',
        isSportOrPastime: null,
        otherPastime: '',
        refusedCoverOrAcceptedOnSpecialTerms: null,
        refusedCoverOrAcceptedOnSpecialTermsDetails: '',
        bmi: {
          unit: '',
          height: null,
          heightBonus: null, // feet, cm, inch
          weight: null,
          weightBonus: null, // kg, stone, pounds
        },
        countryResidenceAddress: {
          address1: '',
          address2: '',
          address3: '',
          state: '',
          city: '',
          zipCode: '',
          countryId: '',
        },
        homeCountryAddress: {
          address1: '',
          address2: '',
          address3: '',
          state: '',
          city: '',
          zipCode: '',
          countryId: '',
        },
        physicianDetails: {
          salutationId: null,
          forename: '',
          surname: '',
          practicename: '',
          dateLastVisited: null,
          email: '',
          countryCodeId: '',
          telephoneNumber: '',
          address: {
            address1: '',
            address2: '',
            address3: '',
            state: '',
            city: '',
            countryId: '',
            zipCode: '',
          },
          haveExistingHealthInsurance: null,
          dateCoverEnd: null,
          providerCompanyName: '',
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
