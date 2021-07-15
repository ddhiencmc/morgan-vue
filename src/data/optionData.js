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

export const insuarancesOption = [
  '0% co-insuarance on all out-patient claims',
  '10% co-insuarance on all out-patient claims',
  '20% co-insuarance on all out-patient claims',
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
