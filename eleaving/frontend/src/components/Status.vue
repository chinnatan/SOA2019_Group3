<template>
    <div>
        <navbar></navbar>

        <div class="container">
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "Status",
  components: {
      Navbar: Navbar
  },
  beforeCreate() {
    document.body.className = "";
  },
  created() {
    document.title =
      ".:: สถานะการลา - ระบบลาเรียนออนไลน์ | คณะเทคโนโลยีสารสนเทศ ::.";
  },
  data() {
    return {
      login: {
        inputUsername: "",
        inputPassword: "",
        messageAlert: ""
      }
    };
  },
  methods: {
    isClear() {
      console.log('Clear Input')
      this.login.inputUsername = ''
      this.login.inputPassword = ''
    }
  }
};
</script>
