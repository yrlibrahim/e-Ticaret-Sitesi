<template>
  <header>
    <div class="header-left-side flex items-center gap-8">
      <div class="header-logo">
        <router-link to="/">e-Market</router-link>
      </div>
      <div class="header-categorys flex gap-5">
        <RouterLink to="/Electronics">Electronics</RouterLink>
        <RouterLink to="/Groceries">Groceries</RouterLink>
        <RouterLink to="/Cosmetics">Cosmetics</RouterLink>
        <RouterLink to="/Home-Decoration">Home Decoration</RouterLink>
      </div>
    </div>
    <div class="header-right-side"></div>
  </header>
</template>
<script setup></script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bungee+Tint&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
header {
  margin-bottom: 10px;
  padding: 20px 30px;
  border-bottom: 1px solid #c90800;
}
.header-logo {
  font-family: "Bungee Tint", sans-serif !important;
  font-weight: 500;
  font-style: normal;
  font-size: 30px;
  border-right: 1px solid #c90800;
  padding-right: 20px;
}
.header-categorys {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
}
</style>
