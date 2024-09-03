<header>
    <div class="header-left-side flex items-center gap-8">
      <div class="header-logo">
        <router-link to="/">e-Market</router-link>
      </div>
      <div class="header-categorys flex gap-5">
        <!-- Electronics Start -->
        <div class="menu">
          <RouterLink to="/Electronics">Electronics</RouterLink>
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
          <RouterLink to="/Cosmetics">Cosmetics</RouterLink>
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
        <RouterLink to="/Groceries">Groceries</RouterLink>
        <RouterLink to="/Home-Decoration">Home Decoration</RouterLink>
      </div>
    </div>
    <div class="header-right-side">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        class="header-shopping-icon"
      >
        <path
          d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
        />
      </svg>
      <div class="header-log-in">
        <div v-if="isLogged">
          <router-link to="Login">Giriş Yap</router-link>
        </div>
        <div v-else>
          <div>Çıkış Yap</div>
        </div>
      </div>
    </div>
  </header>
