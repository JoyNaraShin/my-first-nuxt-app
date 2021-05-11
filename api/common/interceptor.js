export const setInterceptors = instance => {
  // * Error 처리
  const error = error => {
    Promise.reject(error);
  };
  // Add a request interceptor
  instance.interceptors.request.use(config => {
    // Do something before request is sent
    //* SPINNER ON
    // if commonStore.state.views.spinner = true;
    //* 접근 URL 헤더 설정
    if (localStorage.getItem('accessInfo')) {
      const accessInfo = JSON.parse(localStorage.getItem('accessInfo'));
      config.headers['Accept-Url'] = accessInfo.path;
    } else {
      config.headers['Accept-Url'] = '/login';
    }
    // 언어셋 전달
    // config.headers['Accept-I18n'] = commonStore.state.i18nLocale.toUpperCase();
    return config;
  }, error);

  // Add a response interceptor
  instance.interceptors.response.use(response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    //* TODO: 로그인 정보와 요청 정보가 일치하지 않을 때 처리 등
    // if (
    //   localStorage.getItem('accessInfo') &&
    //   commonStore.state.userData.hasOwnProperty('userId')
    // ) {
    //   // ..
    //   if (commonStore.state.userData.userId !== response.data.sessionUserId)
    //     common.alert('error', 'NLS0001419', () => location.replace('/'));
    // }
    return response;
  }, error);
  return instance;
};
