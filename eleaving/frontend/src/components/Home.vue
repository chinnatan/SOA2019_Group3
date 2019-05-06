<template>
  <div>
    <div class>
      <div class="container">
        <div class="row h-95">
          <div class="col-md-12 mx-auto my-auto">
            <div class="row">
              <div class="col-md-12">
                <img
                  src="../assets/images/logo-eleaving-no-text.png"
                  class="img-fluid"
                  width="40%"
                  height="40%"
                >
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <button id="goto" type="button" class="btn btn-orange anakotmai-medium-text" @click="goto()">เข้าสู่เว็บไซต์</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import Navbar from "@/components/Navbar";

export default {
  name: "Home",
  beforeCreate() {
    document.body.className = "home";
    if (localStorage.getItem("unAuth") == "false") {
      localStorage.removeItem("messageAlert");
      localStorage.removeItem("unAuth");
    }
  },
  created() {
    document.title =
      ".:: หน้าแรก - ระบบลาเรียนออนไลน์ | คณะเทคโนโลยีสารสนเทศ ::.";
  },
  data() {
    return {};
  },
  methods: {
      goto() {
          router.push({ name: "Login" })
      }
  }
};
</script>

<style scoped>
.content-selection {
  margin-top: 8vh;
  margin-bottom: 8vh;
}

.btn {
    margin-top: 1rem;
}

.btn-orange {
  color: #fff;
  background-color: #f47932;
  border-color: #f47932;
}
.btn-orange:hover {
  color: #fff;
  background-color: #fe5c23;
  border-color: #f47932;
}
.btn-orange.focus,
.btn-orange:focus {
  box-shadow: 0 0 0 0.2rem rgba(180, 130, 72, 0.5);
}
.btn-orange.disabled,
.btn-orange:disabled {
  color: #fff;
  background-color: #f47932;
  border-color: #f47932;
}
.btn-orange:not(:disabled):not(.disabled).active,
.btn-orange:not(:disabled):not(.disabled):active,
.show > .btn-orange.dropdown-toggle {
  color: #fff;
  background-color: #f47932;
  border-color: #fe5c23;
}
.btn-orange:not(:disabled):not(.disabled).active:focus,
.btn-orange:not(:disabled):not(.disabled):active:focus,
.show > .btn-orange.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);
}
</style>


