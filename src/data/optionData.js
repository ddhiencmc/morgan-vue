export const titles = [
  { text: 'Mr', value: '1' },
  { text: 'Mrs', value: '2' },
  { text: 'Miss', value: '3' },
  { text: 'Other', value: '4' },
]

export const genders = [
  { text: 'Female', value: '1' },
  { text: 'Male', value: '2' },
]

export const countries = [
  { text: 'Afghanistan', value: '1' },
  { text: 'Việt Nam', value: '2' },
]

export const occupations = [
  { text: 'Adult desk job', value: '1' },
  { text: 'Adult non desk job', value: '2' },
  { text: 'Adult non in work', value: '3' },
  { text: 'Adult retired', value: '4' },
  { text: 'Child in education', value: '5' },
]

export const relationships = [
  { text: 'Principle', value: '1' },
  { text: 'Wife', value: '2' },
  { text: 'Husband', value: '3' },
  { text: 'Mother', value: '4' },
  { text: 'Father', value: '5' },
  { text: 'Daughter', value: '6' },
  { text: 'Son', value: '7' },
  { text: 'Dependent', value: '8' },
  { text: 'Grandmother', value: '9' },
  { text: 'Grandfather', value: '10' },
]

export const currencies = [
  { text: 'US Dollar', value: '1' },
  { text: 'British Pound', value: '2' },
  { text: 'Euro', value: '3' },
]

export const countryCodes = [
  { text: '+93', value: '1' },
  { text: '+84', value: '2' },
]

export const underwritingTypes = [
  { id: 1, value: 'Moratorium' },
  { id: 2, value: 'Full Medical Underwriting' },
]

export const pastimes = [
  {
    text: 'No dangerous pastimes',
    value: '1',
    selected: true,
  },
  {
    text: 'One or more dangerous pastimes',
    value: '2',
    selected: true,
  },
]

export const currentConditions = [
  { id: 1, value: 'Moratorium' },
  { id: 2, value: 'Full Medical Underwriting' },
  { id: 3, value: 'a' },
  { id: 4, value: 'b' },
  { id: 5, value: 'c' },
]

export const getRangeListIntVal = (fromInt, toInt) => {
  let results = []
  if (fromInt <= toInt) {
    for (let i = fromInt; i <= toInt; i++) {
      results.push(i)
    }
  }

  return results
}

//package step evoluton health row
export const evolutionHealthServices = [
  {
    productId: 1,
    areaId: 1,
    isActive: true,
    name: 'Standard',
    noCoInsurance: true,
    frequencyOptions: [
      {
        type: 'Monthly',
        price: '174.68',
      },
      {
        type: 'Quarterly',
        price: '509.48',
      },
      {
        type: 'Semi-Annual',
        price: '1009.26',
      },
      {
        type: 'Annual',
        price: '1940.88',
      },
    ],
    selectedExcessId: '1',
    coInsuranceSelectedId: null,
    hasAdditionalBenefit: null,
    frequency: '',
  },
  {
    productId: 2,
    areaId: 1,
    name: 'Standard Plus',
    frequencyOptions: [
      {
        type: 'Monthly',
        price: '213.55',
      },
      {
        type: 'Quarterly',
        price: '622.85',
      },
      {
        type: 'Semi-Annual',
        price: '1233.85',
      },
      {
        type: 'Annual',
        price: '2372.75',
      },
    ],
    selectedExcessId: '1',
    coInsuranceSelectedId: null,
    hasAdditionalBenefit: null,
    frequency: '',
  },
  {
    productId: 3,
    areaId: 1,
    name: 'Comprehensive',
    frequencyOptions: [
      {
        type: 'Monthly',
        price: '351.36',
      },
      {
        type: 'Quarterly',
        price: '1024.79',
      },
      {
        type: 'Semi-Annual',
        price: '2030.06',
      },
      {
        type: 'Annual',
        price: '3903.97',
      },
    ],
    selectedExcessId: '1',
    coInsuranceSelectedId: null,
    hasAdditionalBenefit: null,
    frequency: '',
  },
  {
    productId: 4,
    areaId: 1,
    name: 'Premium',
    frequencyOptions: [
      {
        type: 'Monthly',
        price: '466.10',
      },
      {
        type: 'Quarterly',
        price: '1359.46',
      },
      {
        type: 'Semi-Annual',
        price: '2693.03',
      },
      {
        type: 'Annual',
        price: '5178.90',
      },
    ],
    selectedExcessId: '1',
    coInsuranceSelectedId: null,
    hasAdditionalBenefit: null,
    frequency: '',
  },
  {
    productId: 5,
    areaId: 1,
    name: 'Elite',
    frequencyOptions: [
      {
        type: 'Monthly',
        price: '638.22',
      },
      {
        type: 'Quarterly',
        price: '1861.47',
      },
      {
        type: 'Semi-Annual',
        price: '3687.49',
      },
      {
        type: 'Annual',
        price: '7091.32',
      },
    ],
    selectedExcessId: '1',
    coInsuranceSelectedId: null,
    hasAdditionalBenefit: null,
    frequency: '',
  },

  // area2
  {
    productId: 6,
    areaId: 2,
    isActive: true,
    name: 'Standard',
    noCoInsurance: true,
    frequencyOptions: [
      {
        type: 'Monthly',
        price: '174.68',
      },
      {
        type: 'Quarterly',
        price: '509.48',
      },
      {
        type: 'Semi-Annual',
        price: '1009.26',
      },
      {
        type: 'Annual',
        price: '1940.88',
      },
    ],
    selectedExcessId: '1',
    coInsuranceSelectedId: null,
    hasAdditionalBenefit: null,
    frequency: '',
  },
  {
    productId: 7,
    areaId: 2,
    name: 'Standard Plus',
    frequencyOptions: [
      {
        type: 'Monthly',
        price: '213.55',
      },
      {
        type: 'Quarterly',
        price: '622.85',
      },
      {
        type: 'Semi-Annual',
        price: '1233.85',
      },
      {
        type: 'Annual',
        price: '2372.75',
      },
    ],
    selectedExcessId: '1',
    coInsuranceSelectedId: null,
    hasAdditionalBenefit: null,
    frequency: '',
  },
  {
    productId: 8,
    areaId: 2,
    name: 'Comprehensive2',
    frequencyOptions: [
      {
        type: 'Monthly',
        price: '351.36',
      },
      {
        type: 'Quarterly',
        price: '1024.79',
      },
      {
        type: 'Semi-Annual',
        price: '2030.06',
      },
      {
        type: 'Annual',
        price: '3903.97',
      },
    ],
    selectedExcessId: '1',
    coInsuranceSelectedId: null,
    hasAdditionalBenefit: null,
    frequency: '',
  },
  {
    productId: 9,
    areaId: 2,
    name: 'Premium2',
    frequencyOptions: [
      {
        type: 'Monthly',
        price: '466.10',
      },
      {
        type: 'Quarterly',
        price: '1359.46',
      },
      {
        type: 'Semi-Annual',
        price: '2693.03',
      },
      {
        type: 'Annual',
        price: '5178.90',
      },
    ],
    selectedExcessId: '1',
    coInsuranceSelectedId: null,
    hasAdditionalBenefit: null,
    frequency: '',
  },
  {
    productId: 10,
    areaId: 2,
    name: 'Elite',
    frequencyOptions: [
      {
        type: 'Monthly',
        price: '638.22',
      },
      {
        type: 'Quarterly',
        price: '1861.47',
      },
      {
        type: 'Semi-Annual',
        price: '3687.49',
      },
      {
        type: 'Annual',
        price: '7091.32',
      },
    ],
    selectedExcessId: '1',
    coInsuranceSelectedId: null,
    hasAdditionalBenefit: null,
    frequency: '',
  },
]

export const insurancesOption = [
  { id: 1, value: '0% co-insuarance on all out-patient claims' },
  { id: 2, value: '10% co-insuarance on all out-patient claims' },
  { id: 3, value: '20% co-insuarance on all out-patient claims' },
]

//evoluton health row
export const voluntaryExcess = [
  { id: 1, value: '0 a person a year' },
  { id: 2, value: '100 a person a year' },
  { id: 3, value: '250 a person a year' },
  { id: 4, value: '500 a person a year' },
  { id: 5, value: '1000 a person a year' },
  { id: 6, value: '2500 a person a year' },
  { id: 7, value: '5000 a person a year' },
  { id: 8, value: '7500 a person a year' },
  { id: 9, value: '10000 a person a year' },
]

export const areas = [
  {
    id: 1,
    value: 'Europe',
  },
  {
    id: 2,
    value: 'Worldwide (excluding USA, China, Singapore and Hong Kong)',
  },
  {
    id: 3,
    value: 'Worldwide (excluidng USA)',
  },
  {
    id: 4,
    value: 'Worldwide',
  },
]
