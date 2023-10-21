<script setup>

import Container from "@/components/Container.vue";
import {ref} from "vue";
import AuthModal from "@/components/AuthModal.vue";
import {useRouter} from "vue-router";
import {useUserStore} from "@/stores/users";
import {storeToRefs} from "pinia";

const userStore = useUserStore();

const {user, loadingUser} = storeToRefs(userStore);
const router = useRouter();
const searchUsername = ref("");


const onSearch = () => {
  if (searchUsername) {
    router.push(`/profile/${searchUsername.value}`);
    searchUsername.value = "";
  }
};

const goToUsersProfile = () => {
  router.push(`/profile/${user.value.username}`)
}

const handleLogout = () => {
  userStore.handleLogout();
}

</script>

<template>
  <a-layout>
    <a-layout-header>
      <Container>
        <div class="nav-container">
          <div class="flex-center">
            <RouterLink to="/">instaclone</RouterLink>
            <a-input-search
                v-model:value="searchUsername"
                placeholder="input search text"
                style="width: 200px"
                @search="onSearch"
            />
          </div>
          <div v-if="user">
            Logged in as {{ user.username }}
          </div>
          <div v-else>
            Please sign in or create an account
          </div>
          <div class="flex-center" v-if="!loadingUser">
            <div class="flex-center" v-if="!user">
              <AuthModal :isLogin="false"/>
              <AuthModal :isLogin="true"/>
            </div>
            <div class="flex-center" v-else>
              <a-button class="btn" type="primary" @click="goToUsersProfile">Profile</a-button>
              <a-button class="btn" type="primary" @click="handleLogout">Logout</a-button>
            </div>
          </div>
        </div>
      </Container>
    </a-layout-header>
  </a-layout>
</template>

<style scoped>

.nav-container {
  display: flex;
  justify-content: space-between;

}

.flex-center {
  display: flex;
  align-items: center;
}

a {
  margin: 0 10px;
}

.btn {
  margin: 0 5px;

}
</style>