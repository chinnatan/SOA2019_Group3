<template>
  <div>
    <div class="container">
      <div class="row h-95">
        <div class="col-md-12 mx-auto my-auto">
          <h1 class="anakotmai-medium-text">{{ message }}</h1>
          <p class="lead anakotmai-medium-text">{{ going }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notpermission",
  created() {
    document.title =
      ".:: คุณไม่มีสิทธิ์เข้าถึงหน้านี้ - ระบบลาเรียนออนไลน์ | คณะเทคโนโลยีสารสนเทศ ::.";
    this.timeout = setTimeout(() => this.$router.push({ path: "/login" }), 3000);
  },
  data() {
    return {
      message: "401 Access Denied.",
      going: "เรากำลังพาคุณไป...",
    };
  }
};
</script>