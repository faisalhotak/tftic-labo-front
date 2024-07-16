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
  },
  companyAdvertiser: '/company-advertiser',
  profile: {
    profile: '/profile/me`',
    updateProfileSeeker: '/update-job-seeker',
    updateAdvisor: '/update-job-advertiser',
    changePassword: '/change-password',
  },
};
