import Vuex from 'vuex';
import user from '@/store/modules/user';

const store = () => {
  return new Vuex.Store({
    modules: {
      user,
    },
  });
};

export default store;
