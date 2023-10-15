<script setup>
import {reactive, ref} from 'vue';
import {useUserStore} from "@/stores/users";
import {storeToRefs} from "pinia";

const userStore = useUserStore();
const {errorMessage, loading, user} = storeToRefs(userStore);

const props = defineProps(['isLogin']);
const open = ref(false);

const userCredentials = reactive({
  email: "",
  username: "",
  password: ""
})

const showModal = () => {
  open.value = true;
};

const clearUserCredentialsInput = () => {
  userCredentials.username = "";
  userCredentials.email = "";
  userCredentials.password = "";
  userStore.clearErrorMessage();
}

const handleOk = async e => {
  if (!props.isLogin) {
    await userStore.handleSignup(userCredentials);
  } else {
    await userStore.handleLogin({
      email: userCredentials.email,
      password: userCredentials.password
    })
  }
  if (user.value) {
    open.value = false;
    props.isLogin = true;
    clearUserCredentialsInput();
  }
};

const handleCancel = () => {
  userStore.clearErrorMessage();
  open.value = false;
}
const title = props.isLogin ? 'Signin' : 'Signup';
</script>

<template>
  <div>
    <a-button class="btn" type="primary" @click="showModal">{{ title }}</a-button>
    <a-modal v-model:open="open"
             :title="title"
             @ok="handleOk">
      <template #footer>
        <a-button key="back"
                  @click="handleCancel">
          Cancel
        </a-button>
        <a-button key="submit"
                  type="primary"
                  :disabled="loading"
                  :loading="loading"
                  @click="handleOk">
          Submit
        </a-button>
      </template>
      <div class="input-container" v-if="!loading">
        <a-input class="input"
                 placeholder="Username"
                 v-if="!isLogin"
                 v-model:value="userCredentials.username"/>
        <a-input class="input"
                 placeholder="Email"
                 type="email"
                 v-model:value="userCredentials.email"/>
        <a-input class="input"
                 type="password"
                 placeholder="Password"
                 v-model:value="userCredentials.password"/>
      </div>
      <div class="spinner" v-else>
        <a-spin/>
      </div>
      <a-typography-text v-if="errorMessage" type="danger">
        {{ errorMessage }}
      </a-typography-text>
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

.input-container {
  height: 120px;
}

.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
}
</style>