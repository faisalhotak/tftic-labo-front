export const ESSENTIAL_ROUTES = {
  home: {
    url: '/',
    label: 'Job Portal',
  },
  auth: {
    login: {
      url: 'auth/login',
      label: 'navbar.login',
    },
    register: {
      url: 'auth/register',
      label: 'navbar.register',
    },
  },
  profile: {
    url: 'profile',
    label: 'navbar.profile',
  },
};

export const FEATURE_ROUTES = [
  {
    url: 'jobs',
    label: 'navbar.jobs',
  },
];
