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
  name: "Notfound",
  created() {
    document.title =
      ".:: ไม่พบหน้าที่คุณต้องการ - ระบบลาเรียนออนไลน์ | คณะเทคโนโลยีสารสนเทศ ::.";
    this.timeout = setTimeout(() => this.$router.push({ path: "/login" }), 3000);
  },
  data() {
    return {
      message: "404 Page Not Found.",
      going: "เรากำลังพาคุณไป...",
    };
  }
};
</script>