<script setup>

import {ref} from 'vue';
import {supabase} from "@/supabase";
import {v4 as uuidv4} from "uuid";
import {useUserStore} from "@/stores/users";
import {storeToRefs} from "pinia";

const { addNewPost } = defineProps(["addNewPost"]);

const userStore = useUserStore();
const { user } = storeToRefs(userStore)

const file = ref(null);
const caption = ref("");
const errorMessage = ref("");

const loading = ref(false);
const open = ref(false);

const showModal = () => {
  open.value = true;
};

const handleOk = async () => {
  loading.value = true;
  let filePath;
  if (file.value) {
    const filename = uuidv4();
    const { data, error } = await supabase.storage.from("images").upload(`public/${filename}`, file.value);

    if (error) {
      loading.value = false;
      return errorMessage.value = "Unable to upload image!"
    }
    filePath = data.path;
    await supabase.from("posts").insert({
      url: filePath,
      caption: caption.value,
      owner_id: user.value.id
    })
  }
  addNewPost({
    url: filePath,
    caption: caption.value,
  })
  loading.value = false;
  open.value = false;
  caption.value = "";
};

const handleUploadChange = (e) => {
  if (e.target.files[0]) {
    file.value = e.target.files[0];
  }
}

</script>

<template>
  <div>
    <a-button @click="showModal">Upload Photo</a-button>
    <a-modal v-model:open="open" title="Upload Photo" @ok="handleOk">
      <div v-if="!loading">
      <input type="file" accept=".jpeg, .png, .gif, .jpg" @change="handleUploadChange">
      <a-input
          v-model:value="caption"
          :maxlength="50"
          placeholder="Caption..."/>
        <a-typography-text v-if="errorMessage" type="danger">
          {{ errorMessage }}
        </a-typography-text>
      </div>
      <div class="spinner" v-else>
        <a-spin />
      </div>
    </a-modal>
  </div>
</template>

<style scoped>

input {
  margin-top: 10px;
}

.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>