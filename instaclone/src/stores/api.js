import { defineStore } from "pinia";
import { supabase } from "@/supabase";
import { ref } from "vue";


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
      const { data: postsByOwnerId } = await supabase
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
      const { data: allPosts } = await supabase
          .from("posts")
          .select("*")
      return allPosts;
    } catch (error) {
      return apiErrorMessage.value = `Ein Fehler: ${error}`;
    }
  }

  const setFollowing = async (userId, followId) => {
    try {
      await supabase
          .from("followers_following")
          .insert({
            follower_id: userId,
            following_id: followId
          })
    } catch (error) {
      return apiErrorMessage.value = `Ein Fehler: ${error}`;
    }
  }

 const quitFollowing = async (userId, followId) => {
    console.log(userId, followId);
    try {
      await supabase
          .from("followers_following")
          .delete()
          .match({
            follower_id: userId,
            following_id: followId
          })
    } catch (error) {
      return apiErrorMessage.value = `Ein Fehler: ${error}`;
    }
  }

  const getAllFollowersForUser = async (userId) => {
    try {
      const { data: userIsFollowing } = await supabase
          .from("followers_following")
          .select("follower_id")
          .eq("following_id", userId)
      return userIsFollowing;
    } catch (error) {
      return apiErrorMessage.value = `Ein Fehler: ${error}`;
    }
  }

  const getAllFollowedByUser = async (userId) => {
    try {
      const { data: followersForUser } = await supabase
          .from("followers_following")
          .select("following_id")
          .eq("follower_id", userId)
      return followersForUser;
    } catch (error) {
      return apiErrorMessage.value = `Ein Fehler: ${error}`;
    }
  }

  const getIsAlreadyFollowedBy = async (userId, followedId) => {
    try {
    const { data } = await supabase
        .from("followers_following")
        .select("following_id")
        .match({
          "follower_id": userId,
          "following_id": followedId
        })
    if (data.length > 0) return true;
    } catch (error) {
      return apiErrorMessage.value = `Ein Fehler: ${error}`;
    }
    return false;
  }

  return {
    apiErrorMessage,
    getUserById,
    getUserByUsername,
    getAllUsers,
    getPostsByOwnerId,
    getAllPosts,
    setFollowing,
    quitFollowing,
    getAllFollowedByUser,
    getAllFollowersForUser,
    getIsAlreadyFollowedBy
  }
})