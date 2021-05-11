<template>
  <div>
    <h1>One Page</h1>
    <br />
    <button @click="fetchUserList">사용자 목록 불러오기</button>
    <p>사용자 목록: {{ userList }}</p>
  </div>
</template>

<script>
import * as userTypes from '@/store/modules/user/types';
import * as userStore from '@/store/modules/user';

export default {
  name: 'One',
  computed: {
    ...userStore.mapGetters({ userList: userTypes.getters.GET_USER_LIST }),
  },
  methods: {
    ...userStore.mapActions({
      fetchUserList: userTypes.actions.FETCH_USER_LIST,
    }),
  },
};
</script>

<style scoped>
div {
  margin-left: 50px;
}
</style>
