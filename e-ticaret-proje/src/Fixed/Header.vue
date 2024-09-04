<template>
  <Disclosure as="nav" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#c90800] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <router-link to="/" class="header-logo">E-MARKET</router-link>
          </div>
          <!--Header Menu Side-->
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex items-center space-x-4">
              <!-- Electronics Start -->
              <div class="menu">
                <RouterLink
                  to="/Electronics"
                  class="text-slate-800 hover:bg-slate-800 hover:text-white rounded-md px-3 py-2 text-md font-medium"
                  >Electronics</RouterLink
                >
                <div class="dropdown-menu">
                  <ul>
                    <li>
                      <router-link to="/SmartPhones">Smart Phones</router-link>
                    </li>
                    <li>
                      <router-link to="/Laptops">Laptops</router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- Electronics End -->
              <!-- Cosmetics Start -->
              <div class="menu">
                <RouterLink
                  to="/Cosmetics"
                  class="text-slate-800 hover:bg-slate-800 hover:text-white rounded-md px-3 py-2 text-md font-medium"
                  >Cosmetics</RouterLink
                >
                <div class="dropdown-menu">
                  <ul>
                    <li>
                      <router-link to="/Fragrances">Fragrances</router-link>
                    </li>
                    <li>
                      <router-link to="/Beauty">Beauty</router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- Cosmetics End -->
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.to"
                :class="[
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-slate-800 hover:bg-slate-800 hover:text-white',
                  'rounded-md px-3 py-2 text-md font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</router-link
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <router-link to="/Card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              class="header-shopping-icon"
            >
              <path
                d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              />
            </svg>
          </router-link>
          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton
                class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <img
                  class="h-8 w-8 rounded-full"
                  src="../assets/logo.svg"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem class="p-2">
                  <div v-if="isLogged">
                    <router-link to="Login">Giriş Yap</router-link>
                  </div>
                  <div v-else>
                    <router-link to="Login">Çıkış Yap</router-link>
                  </div>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
    <!--Mobile Burger Menu-->
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          as=""
          :to="item.to"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-slate-800 hover:bg-slate-800 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</router-link
        >
        <router-link
          v-for="item in dropdown"
          :key="item.name"
          as="a"
          :to="item.to"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-slate-800 hover:bg-slate-800 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]"
          class="mobile-dropdown-cover"
          >{{ item.name }}

          <div class="hidden mobile-dropdown">
            <DisclosureButton
              v-for="child in item.children"
              :key="item.children.name"
              as="a"
              :to="item.to"
              :class="[
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-white  hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
              >{{ child.name }}</DisclosureButton
            >
          </div>
        </router-link>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const dropdown = [
  {
    name: "Electronics",
    to: "/electronics",
    children: [
      { name: "Phones", to: "/Electronics/Phones" },
      { name: "Laptops", to: "/Electronics/Laptops" },
    ],
  },
  {
    name: "Cosmetics",
    to: "/Cosmetics",
    current: false,
    children: [
      { name: "Fragrances", to: "/Cosmetics/Fragrances" },
      { name: "Beauty", to: "/Cosmetics/Beauty" },
    ],
  },
];

const navigation = [
  { name: "Fragrances", to: "/Fragrances" },
  { name: "Home Decoration", to: "/Home-Decoration" },
];

import { ref } from "vue";

const isLogged = ref(true);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bungee+Tint&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

.header-logo {
  font-family: "Bungee Tint", cursive;
  font-size: 30px;
}
.menu {
  position: relative;
}
.menu:hover .dropdown-menu {
  display: block;
  position: absolute;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
  width: max-content;
  padding: 10px;
}
.dropdown-menu {
  display: none;
}
.dropdown-menu ul li {
  border-radius: 10px;
  padding: 5px;
}
.dropdown-menu ul li:hover {
  background-color: grey;
  border-radius: 10px;
  padding: 5px;
}
.mobile-dropdown-cover:hover .mobile-dropdown {
  display: block;
}
.header-shopping-icon {
  width: 35px;
}
</style>
