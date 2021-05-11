<template>
  <div>
    <com-input
      id="userId"
      v-model="userId"
      type="text"
      :make-label="true"
      label-title="아이디: "
      @onEnter="onEnter"
    />
    <com-input
      id="userPwd"
      v-model="userPwd"
      type="text"
      :make-label="true"
      label-title="비밀번호: "
      @onEnter="onEnter"
    />
    <com-input
      id="rememberId"
      type="checkbox"
      :make-label="true"
      label-title="아이디 기억하기"
      :is-checked="rememberId"
      @onChange="onChange"
    />
    <button @click="onClick">로그인</button>
  </div>
</template>

<script>
import ComInput from '@/components/common/ComInput.vue';
export default {
  components: {
    ComInput,
  },
  data() {
    return { rememberId: false, userId: '', userPwd: '' };
  },
  computed: {},
  mounted() {
    if (localStorage.getItem('userId')) {
      this.userId = localStorage.getItem('userId');
      this.rememberId = true;
    }
  },
  methods: {
    onChange(e) {
      console.log('onChange', e);
      this.rememberId = !this.rememberId;
    },
    onEnter(e) {
      console.log('onEnter', e);
    },
    onClick() {
      // 아이디 기억하기 체크 시 localStorage에 저장, 아니면 제거
      this.rememberId
        ? localStorage.setItem('userId', this.userId)
        : localStorage.removeItem('userId');

      console.log(localStorage.getItem('userId'));
    },
  },
};
</script>

<style scoped>
div {
  margin-left: 10px;
}
</style>
