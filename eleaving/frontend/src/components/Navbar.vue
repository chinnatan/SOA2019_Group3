<template>
  <div>
    <nav
      class="navbar navbar-dark bg-dark navbar-expand-lg fixed-top"
      v-bind:class="'active'"
      v-on:click.prevent
      role="navigation"
      id="mainNav"
    >
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/images/logo-eleaving-no-text.png" width="30" height="30" alt>
          {{navbar.brand}}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarEleavingToggle"
          aria-controls="navbarEleavingToggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarEleavingToggle">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <router-link
                :to="'selection'"
                class="nav-link"
              >{{navbar.catalogy}}</router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="'status'"
                class="nav-link"
              >{{navbar.status}}</router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="'history'"
                class="nav-link"
              >{{navbar.history}}</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item dropdown">
              
              <a
                class="profile-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ><i class="fa fa-user"></i></a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link :to="''" class="dropdown-item">ข้อมูลส่วนตัว</router-link>
                <div class="dropdown-divider"></div>
                <router-link :to="'#'" v-on:click.native="Logout" class="dropdown-item">ออกจากระบบ</router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "Navbar",
  data() {
    return {
      navbar: {
        brand: "e - leaving",
        catalogy: "ประเภทการลา",
        status: "สถานะการลา",
        history: "ประวัติการลา"
      },
      active_el: "selection"
    };
  },
  methods: {
    getUser() {
      this.account = localStorage.getItem("username");
    },
    Logout() {
      localStorage.removeItem("username");
      router.push({ name: "Login" });
    }
  },
  created() {
    this.getUser();
  }
};
</script>

<style scoped>
#mainNav {
  padding: 1vh;
}

#mainNav .navbar-toggler {
  border: 0;
  color: #f47932;
  background-color: #000;
  font-size: 12px;
  text-transform: uppercase;
  font-family: "Anakotmai-Medium";
  text-transform: uppercase;
  padding: 13px;
  right: 0;
}

#mainNav .container {
  padding: 0;
}

#mainNav .container .navbar-brand {
  color: #fff;
  font-family: "Anakotmai-Medium";
}

#mainNav .container .navbar-brand.active,
#mainNav .container .navbar-brand:active,
#mainNav .container .navbar-brand:focus,
#mainNav .container .navbar-brand:hover {
  color: #fff;
  font-family: "Anakotmai-Medium";
}

#mainNav .container .navbar-nav .nav-item .nav-link {
  font-size: 90%;
  font-family: "Anakotmai-Medium";
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1px;
  color: #fff;
  margin-right: 1em;
}

#mainNav .container .navbar-nav .nav-item .nav-link.active,
#mainNav .container .navbar-nav .nav-item .nav-link:hover {
  color: #f47932;
  margin-right: 1em;
  border-bottom: 0.15rem solid #f47932;
}

.profile-link {
  color: #ffffff;
}

.profile-link:hover {
  color: #f47932;
}
</style>
