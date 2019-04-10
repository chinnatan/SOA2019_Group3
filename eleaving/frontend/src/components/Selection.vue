<template>
  <div>
    <navbar></navbar>

    <div class="content-selection">
      <div class="container">
        <div class="card-deck">
          <div class="card">
            <div class="card-body text-center">
              <h4 class="card-title anakotmai-medium-text">{{ catalogy.sick }}</h4>
              <h5 class="text-left anakotmai-medium-text">หมายเหตุ</h5>
              <ul>
                <li
                  class="text-left anakotmai-medium-text"
                >การลาป่วยในระหว่างเรียน นักศึกษาต้องยื่นใบลาในวันแรกที่กลับเข้ามาเรียน ในกรณีลาป่วยตั้งแต่ 5 วันขึ้นไปต้องมีใบรับรองแพทย์โดยยื่นต่ออาจารย์ประจำวิชา</li>
              </ul>
            </div>
            <div class="card-footer">
              <a href="#" class="card-link footer">
                <button
                  type="button"
                  class="btn btn-success anakotmai-medium-text"
                >{{ catalogy.select }}</button>
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-body text-center">
              <h4 class="card-title anakotmai-medium-text">{{ catalogy.personal }}</h4>
              <h5 class="text-left anakotmai-medium-text">หมายเหตุ</h5>
              <ul>
                <li
                  class="text-left anakotmai-medium-text"
                >นักศึกษาที่จำเป็นต้องลาระหว่างชั่วโมงเรียนต้องขออนุญาตจากอาจารย์ประจำวิชานั้น</li>
                <li class="text-left anakotmai-medium-text">
                  นักศึกษาที่จะต้องลากิจตั้งแต่ 1 วันขึ้นไป ต้องยื่นใบลา
                  <u>ก่อน</u> วันลาพร้อมด้วยเหตุผลและคำรับรองของผู้ปกครองหรืออาจารย์ที่ปรึกษาอย่างใดอย่างหนึ่ง โดยยื่นต่ออาจารย์ประจำวิชา
                </li>
              </ul>
            </div>
            <div class="card-footer">
              <a href="#" class="selection-card-link footer">
                <button
                  type="button"
                  class="btn btn-success anakotmai-medium-text"
                >{{ catalogy.select }}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="selection">
      <img srcset="../assets/images/svg/footer-bottom.svg">
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "Selection",
  components: {
    Navbar: Navbar
  },
  beforeCreate() {
    document.body.className = "";
  },
  created() {
    document.title =
      ".:: เลือกประเภทการลา - ระบบลาเรียนออนไลน์ | คณะเทคโนโลยีสารสนเทศ ::.";
  },
  data() {
    return {
      catalogy: {
        sick: "ลาป่วย",
        personal: "ลากิจ",
        select: "เลือก"
      }
    };
  }
};
</script>

<style scoped>
.content-selection {
  margin-top: 15vh;
  margin-bottom: 12vh;
}

.card {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: rgb(240, 238, 238);
  background-clip: border-box;
  border: 0;
  border-radius: 0;
}

.card-footer {
  background-color: rgb(240, 238, 238);
  background-clip: border-box;
  border-top: 0;
}

footer.selection {
  position: fixed;
  left: 0;
  bottom: 0;
  min-width: 100%;
  width: auto;
  left: -10%;
  right: -10%;
}
</style>


