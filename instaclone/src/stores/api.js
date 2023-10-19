import {defineStore} from "pinia";
import {supabase} from "@/supabase";
import {ref} from "vue";


export const useApiStore = defineStore('api', () => {
  const apiErrorMessage = ref("")

  const getUserById = async (id) => {
    try {
      const { data: userById } = await supabase
          .from("users")
          .select()
          .eq("id", id)
      return userById
    } catch (error) {
      return apiErrorMessage.value = (`Ein Fehler: ${error}`);
    }
  }

   const getUserByUsername = async (username) => {
    try {
      const { data: userByUsername } = await supabase
          .from("users")
          .select()
          .eq("username", username)
          .single()
      return userByUsername
    } catch (error) {
      return apiErrorMessage.value = (`Ein Fehler: ${error}`);
    }
  }

  const getAllUsers = async () => {
    try {
    const { data: allUsers } = await supabase
        .from("users")
        .select("*")
      return allUsers;
    } catch (error) {
      return apiErrorMessage.value = `Ein Fehler: ${error}`;
    }
  }

  const getPostsByOwnerId = async (ownerId) => {
    try {
    const { data: postsByOwnerId }  = await supabase
        .from("posts")
        .select()
        .eq("owner_id", ownerId)
      return postsByOwnerId;
    } catch (error) {
      return apiErrorMessage.value = `Ein Fehler: ${error}`;
    }
  }

  const getAllPosts = async () => {
    try {
      const { data: allPosts }  = await supabase
          .from("posts")
          .select("*")
      return allPosts;
    } catch (error) {
      return apiErrorMessage.value = `Ein Fehler: ${error}`;
    }
  }

  return {
    apiErrorMessage,
    getUserById,
    getUserByUsername,
    getAllUsers,
    getPostsByOwnerId,
    getAllPosts,
  }
})