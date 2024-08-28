import { ref, computed } from "vue";
import router from "@/router";
import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { DB, AUTH } from "@/Utils/firebase";
import { getDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { setUserId } from "firebase/analytics";

const DEFAULT_USER = {
  uid: null,
  email: null,
  name: null,
  lastname: null,
};

export const useUserStore = defineStore("user", {
  state: () => ({
    loading: false,
    user: DEFAULT_USER,
    auth: false,
  }),
  getters: {},
  actions: {
    setUser(user) {
      this.user = { ...this.user, ...user };
      this.auth = true;
    },
    async register(formData) {
      try {
        this.loading = true;
        const response = await createUserWithEmailAndPassword(
          AUTH,
          formData.email,
          formData.password
        );

        const newUser = {
          uid: response.user.uid,
          email: response.user.email,
        };
        await setDoc(doc(DB, "users", response.user.uid), newUser);

        this.setUser(newUser);
        router.push("/");
      } catch (error) {
      } finally {
        this.loading = false;
      }
    },
  },
});
