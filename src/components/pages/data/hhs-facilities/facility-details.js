import React from 'react'
import FieldValue from './field-value'
import facilityDetailsStyle from './facility-details.module.scss'
import SocialSharing from '~components/common/social-sharing'

const fields = [
  {
    title: 'Adult COVID-19 patients currently in hospital',
    field:
      'total_adult_patients_hospitalized_confirmed_and_suspected_covid_7_day_avg',
  },
  {
    title: 'Adult COVID-19 patients currently in ICU',
    field: 'staffed_icu_adult_patients_confirmed_and_suspected_covid_7_day_avg',
  },
  {
    title: 'Percent of adult inpatient beds occupied by all patients',
    percent: true,
    field: 'adult_inpatient_beds_occupancy_all',
    value: value => (value === null ? 'N/A' : `${Math.round(value * 100)}%`),
  },
  {
    title: 'Percent of adult ICU beds occupied by all patients',
    percent: true,
    field: 'adult_icu_beds_occupancy_all',
    value: value => `${Math.round(value * 100)}%`,
  },
  {
    title: 'Percent of adult inpatient beds occupied by COVID-19 patients',
    percent: true,
    field: 'adult_inpatient_beds_occupancy_covid',
    value: value => `${Math.round(value * 100)}%`,
  },
  {
    title: 'Percent of adult ICU beds occupied by COVID-19 patients',
    percent: true,
    field: 'adult_icu_beds_occupancy_covid',
    value: value => `${Math.round(value * 100)}%`,
  },
  {
    title: 'Reporting completeness',
    field: 'mean_coverage',
    value: value => `${Math.round(value * 100)}%`,
  },
  {
    title: 'Reporting week (spans Friday to Thursday)',
    field: 'collection_week',
  },
]

const FacilityDetails = ({ facility, hideSharing = false }) => (
  <>
    <h2>
      {facility.hospital_name}
      {!hideSharing && (
        <span className={facilityDetailsStyle.sharing}>
          <SocialSharing
            shares={['link']}
            url={`https://covidtracking.com/data/hospital-facilities${typeof window !==
              'undefined' && window.location.hash},id:${facility.hospital_pk}`}
          />
        </span>
      )}
    </h2>

    <dl className={facilityDetailsStyle.details}>
      {Object.keys(fields).map(key => (
        <div key={key}>
          <dt>{fields[key].title}</dt>
          <dd>
            <FieldValue
              field={facility[fields[key].field]}
              percent={fields[key].percent}
            />
          </dd>
        </div>
      ))}
    </dl>
  </>
)

export default FacilityDetails

export { fields }
