import { getters } from './types';

export default {
  [getters.GET_USER_LIST](state) {
    return state.userList;
  },
};
