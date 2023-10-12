<script setup>

import Container from "@/components/Container.vue";
import {ref} from "vue";
import AuthModal from "@/components/AuthModal.vue";
import {useRouter} from "vue-router";

const searchUsername = ref("");
const isAuthenticated = ref(false);
const router = useRouter();

const onSearch = () => {
  if(searchUsername) {
    router.push(`/profile/${searchUsername.value}`);
    searchUsername.value = "";
  }
};
</script>

<template>
  <a-layout>

    <a-layout-header>
      <Container>
        <div class="nav-container">
          <div class="right-content">
            <RouterLink to="/">instaclone</RouterLink>
            <a-input-search
                v-model:value="searchUsername"
                placeholder="input search text"
                style="width: 200px"
                @search="onSearch"
            />
          </div>
          <div class="left-content" v-if="!isAuthenticated">
           <AuthModal :isLogin="false" />
           <AuthModal :isLogin="true" />
          </div>
          <div class="left-content" v-else>
            <a-button class="btn" type="primary">Profile</a-button>
            <a-button class="btn" type="primary">Logout</a-button>
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

.right-content {
  display: flex;
  align-items: center;
}

.right-content a {
  margin: 0 10px;
}

.left-content {
  display: flex;
  align-items: center;
}

.btn {
  margin: 0 5px;
}
</style>