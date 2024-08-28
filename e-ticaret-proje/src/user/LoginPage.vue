<template>
  <div class="loader" v-if="userStore.loading"></div>
  <div class="form-container" v-if="!userStore.loading">
    <div v-if="hasAccount" class="log-in-container">
      <div class="log-in-card">
        <div class="log-in-card-title">
          <h1>Tekrar Hoşgeldin</h1>
          <p>Alışverişe başlamak için Giriş Yap!</p>
        </div>
        <div>
          <Form :validation-schema="formSchema">
            <label>Email</label>
            <div class="form-email">
              <div class="form-email-field">
                <Field name="email" v-slot="{ field, errors, errorMessage }">
                  <input
                    type="email"
                    placeholder="Lütfen mailinizi girin"
                    class="email-input focus:outline-none focus:ring-0"
                    v-bind="field"
                  />
                  <div
                    v-if="errors.length > 0"
                    :class="{ 'is-invalid': errors.length !== 0 }"
                  >
                    {{ errorMessage }}
                  </div>
                </Field>
              </div>
            </div>
            <label>Şifre</label>
            <div class="form-password">
              <Field name="password" v-slot="{ field, errors, errorMessage }">
                <input
                  type="password"
                  placeholder="Lütfen şifrenizi girin"
                  class="password-input focus:outline-none focus:ring-0"
                  v-bind="field"
                />
                <div v-if="errors.length > 0">{{ errorMessage }}</div>
              </Field>
            </div>
            <button
              class="bg-transparent hover:bg-[#c90800] text-[#c90800] font-semibold hover:text-white py-2 px-4 border border-[#c90800] hover:border-transparent rounded"
            >
              Giriş Yap
            </button>
          </Form>
        </div>
      </div>
      <div class="toggle">
        <p>Bir hesabın yok mu ?</p>
        <button @click="toggleAccount">Kayıt Ol</button>
      </div>
    </div>
    <!--------------------------------------------------KAYIT OLMA SAYFASI-->
    <div v-else>
      <div class="log-in-card">
        <div class="log-in-card-title">
          <h1>Merhaba !</h1>
          <p>Alışverişe başlamak için Kayıt Ol!</p>
        </div>
        <div>
          <Form :validation-schema="formSchema" @submit="onSubmit">
            <label>Email</label>
            <div class="form-email">
              <Field name="email" v-slot="{ field, errors, errorMessage }">
                <input
                  type="email"
                  placeholder="Lütfen mailinizi girin"
                  class="email-input focus:outline-none focus:ring-0"
                  v-bind="field"
                />
                <div v-if="errors.length > 0">{{ errorMessage }}</div>
              </Field>
            </div>
            <label>Şifre</label>
            <div class="form-password">
              <Field name="password" v-slot="{ field, errors, errorMessage }">
                <input
                  type="password"
                  placeholder="Lütfen şifrenizi girin"
                  class="password-input focus:outline-none focus:ring-0"
                  v-bind="field"
                />
                <div v-if="errors.length > 0">{{ errorMessage }}</div>
              </Field>
            </div>
            <button
              class="bg-transparent hover:bg-[#c90800] text-[#c90800] font-semibold hover:text-white py-2 px-4 border border-[#c90800] hover:border-transparent rounded"
            >
              Kayıt Ol
            </button>
          </Form>
        </div>
      </div>
      <div class="toggle">
        <p>Zaten bir hesabın var</p>
        <button @click="toggleAccount">Giriş Yap</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import { useUserStore } from "@/stores/user.js";

const userStore = useUserStore();

const hasAccount = ref(true);
const toggleAccount = () => {
  hasAccount.value = !hasAccount.value;
};

const formSchema = yup.object({
  email: yup
    .string()
    .required("Zorunlu alan")
    .email("Lütfen istenilen formatta giriniz"),
  password: yup.string().required("Zorunlu alan"),
});

function onSubmit(values, { resetForm }) {
  userStore.register(values);
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bungee+Tint&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

.form-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.log-in-container {
  max-width: 500px;
  width: 95%;
}
.log-in-card {
  padding: 20px;
}
.log-in-card-title h1 {
  display: flex;
  justify-content: center;
  font-family: "Bungee Tint", sans-serif !important;
  font-weight: 500;
  font-style: normal;
  font-size: 40px;
  margin-bottom: 10px;
}
.log-in-card-title p {
  display: flex;
  justify-content: center;
  font-size: 25px;
  margin-bottom: 40px;
  width: 100%;
  font-family: "Inter" sans-serif;
  font-weight: 500;
}
.form-email {
  margin-bottom: 20px;
}
.form-email input {
  padding: 10px;
  border: 1px solid #c90800;
  border-radius: 5px;
  width: 100%;
  font-family: "Inter" sans-serif;
}
.form-password {
  margin-bottom: 30px;
}
.form-password input {
  width: 100%;
  padding: 10px;
  border: 1px solid #c90800;
  border-radius: 5px;
}
.toggle {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
.toggle button {
  color: #c90800;
  text-decoration: underline;
  cursor: pointer;
}
label {
  font-size: 18px;
  font-family: "Inter" sans-serif;
  font-weight: 500;
}
/* HTML: <div class="loader"></div> */
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  color: #0000;
  background: linear-gradient(90deg, #c02942 calc(50% + 0.5ch), #000 0)
    right/calc(200% + 1ch) 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: l7 2s infinite steps(11);
}
.loader:before {
  content: "Yükleniyor...";
}
@keyframes l7 {
  to {
    background-position: left;
  }
}
</style>
