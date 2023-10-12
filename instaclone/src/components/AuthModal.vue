<script setup>
import {reactive, ref} from 'vue';
import {useUserStore} from "@/stores/users";

const userStore = useUserStore();
const {errorMessage, handleSignup} = userStore;
const props = defineProps(['isLogin']);
const open = ref(false);

const userCredentials = reactive({
  email:"",
  username: "",
  password: ""
})
const showModal = () => {
  open.value = true;
};

const handleOk = e => {
  handleSignup(userCredentials);
};

const title = props.isLogin ? 'Signin' : 'Signup';
</script>

<template>
    <div>
      <a-button class="btn" type="primary" @click="showModal">{{ title }}</a-button>
      <a-modal v-model:open="open" :title="title" @ok="handleOk">
      {{ userCredentials.username }}
        <a-input class="input" v-if="!isLogin" v-model:value="userCredentials.username" placeholder="Username"/>
        <a-input class="input" v-model:value="userCredentials.email" placeholder="Email"/>
        <a-input class="input" v-model:value="userCredentials.password" placeholder="Password"/>
      </a-modal>
    </div>
</template>

<style scoped>
.btn {
  margin: 0 5px;
}

.input {
  margin: 5px 0;
}
</style>