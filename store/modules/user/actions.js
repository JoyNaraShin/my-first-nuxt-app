// import axiosInstance from '@/api/index.js';
import { userInfo } from '@/dummy';
import { actions, mutations } from './types';
// import { errorEventHandler } from '@/errors'

export default {
  [actions.FETCH_USER_LIST]({ commit }, payload) {
    try {
      // const { data } = await axiosInstance.post(
      //   'api/user/getUserList.do',
      //   payload,
      // );
      // const data = await userInfo;
      commit(mutations.SET_USER_LIST, userInfo);
    } catch (error) {
      //   errorEventHandler(error)
    }
  },

  //* async, await example
  // [actions.SOME_ACTION]({ commit or dispatch }, payload) {
  //   try {
  //     const result = await axiosInstance.post(
  //       'api/user/endpoint.do',
  //       payload,
  //     );
  //     commit(mutations.SET_USER_LIST, data.data);
  //   } catch (error) {
  //       errorEventHandler(error)
  //   }
  // },
};
