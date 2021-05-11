import { mutations } from './types';

export default {
  [mutations.SET_USER_LIST](state, payload) {
    state.userList = payload;
  },
};
