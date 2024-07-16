export const API_ENDPOINTS = {
  login: '/auth/login',
  register: {
    advertisers: '/auth/register/advertisers',
    seekers: '/auth/register/seekers',
  },
  jobs: {
    jobOffers: '/job-offers',
    location: '/job-offers/locations',
    contractTypes: '/contract-types',
    jobFunction: '/job-functions',
    agents: '/job-offers/agents',
  },
  companyAdvertiser: '/company-advertiser',
  profile: {
    me: '/profile/me',
    updateProfileSeeker: '/profile/update-job-seeker',
    updateAdvisor: '/profile/update-job-advertiser',
    changePassword: '/profile/change-password',
  },
  applications: '/applications',
  zipCity: '/zip-city',
};
