<template>
  <div>
    <navbar></navbar>

    <div class="container">
      <div class="row screen-top">
        <div class="col-md-9 mx-auto my-auto">
          <div class="card-group mx-auto">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <h2 class="anakotmai-medium-text orange">แบบฟอร์มการ{{ catalog }}</h2>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="row">
                          <div class="col-md-12 text-left">
                            <form
                              method="POST"
                              @submit.prevent="onSendDocument"
                              enctype="multipart/form-data"
                            >
                              <div v-if="step === 1">
                                <h3 class="anakotmai-medium-text">ข้อมูลส่วนตัว</h3>
                                <hr>
                                <div class="row">
                                  <div class="col-md">
                                    <p
                                      class="anakotmai-medium-text p-form"
                                    >{{ labelPrivateTopic.firstname }}</p>
                                    <div class="form-group">
                                      <input
                                        id="firstname"
                                        type="text"
                                        class="form-control-input"
                                        v-model="inputPrivateTopic.firstname"
                                      >
                                    </div>
                                  </div>
                                  <div class="col-md">
                                    <p
                                      class="anakotmai-medium-text p-form"
                                    >{{ labelPrivateTopic.lastname }}</p>
                                    <div class="form-group">
                                      <input
                                        id="lastname"
                                        type="text"
                                        class="form-control-input"
                                        v-model="inputPrivateTopic.lastname"
                                      >
                                    </div>
                                  </div>
                                  <div class="col-md">
                                    <p
                                      class="anakotmai-medium-text p-form"
                                    >{{ labelPrivateTopic.studentid }}</p>
                                    <div class="form-group">
                                      <input
                                        id="studentid"
                                        type="text"
                                        class="form-control-input"
                                        v-model="inputPrivateTopic.studentid"
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md">
                                    <p
                                      class="anakotmai-medium-text p-form"
                                    >{{ labelPrivateTopic.term }}</p>
                                    <div class="form-group">
                                      <input
                                        id="term"
                                        type="text"
                                        class="form-control-input"
                                        v-model="inputPrivateTopic.term"
                                      >
                                    </div>
                                  </div>
                                  <div class="col-md">
                                    <p
                                      class="anakotmai-medium-text p-form"
                                    >{{ labelPrivateTopic.schoolyear }}</p>
                                    <div class="form-group">
                                      <input
                                        id="schoolyear"
                                        type="text"
                                        class="form-control-input"
                                        v-model="inputPrivateTopic.schoolyear"
                                      >
                                    </div>
                                  </div>
                                  <div class="col-md">
                                    <p
                                      class="anakotmai-medium-text p-form"
                                    >{{ labelPrivateTopic.studentyear }}</p>
                                    <div class="form-group">
                                      <input
                                        id="studentyear"
                                        type="text"
                                        class="form-control-input"
                                        v-model="inputPrivateTopic.studentyear"
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md">
                                    <p
                                      class="anakotmai-medium-text p-form"
                                    >{{ labelPrivateTopic.studentgeneration }}</p>
                                    <div class="form-group">
                                      <input
                                        id="studentgeneration"
                                        type="text"
                                        class="form-control-input"
                                        v-model="inputPrivateTopic.studentgeneration"
                                      >
                                    </div>
                                  </div>
                                  <div class="col-md">
                                    <p
                                      class="anakotmai-medium-text p-form"
                                    >{{ labelPrivateTopic.studentbranch }}</p>
                                    <div class="form-group">
                                      <input
                                        id="studentbranch"
                                        type="text"
                                        class="form-control-input"
                                        v-model="inputPrivateTopic.studentbranch"
                                      >
                                    </div>
                                  </div>
                                  <div class="col-md">
                                    <p
                                      class="anakotmai-medium-text p-form"
                                    >{{ labelPrivateTopic.studentdegree }}</p>
                                    <div class="form-group">
                                      <input
                                        id="studentdegree"
                                        type="text"
                                        class="form-control-input"
                                        v-model="inputPrivateTopic.studentdegree"
                                      >
                                    </div>
                                  </div>
                                </div>
                                <hr>
                                <div class="row">
                                  <div class="col-md-12 text-center">
                                    <button
                                      type="button"
                                      class="btn btn-success anakotmai-medium-text"
                                      @click="next()"
                                    >ต่อไป</button>
                                  </div>
                                </div>
                              </div>

                              <div v-if="step === 2">
                                <h3 class="anakotmai-medium-text">ข้อมูลการลา</h3>
                                <hr>
                                <div class="row">
                                  <div class="col-md">
                                    <p
                                      class="anakotmai-medium-text p-form"
                                    >{{ labelLeaveTopic.comment }}</p>
                                    <div class="form-group">
                                      <textarea
                                        class="form-control-input"
                                        rows="5"
                                        id="comment"
                                        v-model="inputLeaveTopic.comment"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md">
                                    <p
                                      class="anakotmai-medium-text p-form"
                                    >{{ labelLeaveTopic.supportdocument }}</p>
                                    <div class="custom-file">
                                      <input
                                        type="file"
                                        ref="file"
                                        class="custom-file-input"
                                        id="supportdocument"
                                        @change="handleFileUpload()"
                                        accept="application/pdf"
                                      >
                                      <label
                                        class="custom-file-label"
                                        id="supportdocument"
                                      >{{ file.name }}</label>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div v-if="catalog === 'ลากิจ'">
                                    <div class="col-md">
                                      <p
                                        class="anakotmai-medium-text p-form"
                                      >{{ labelLeaveTopic.since }}</p>
                                      <div class="form-group">
                                        <input
                                          id="since"
                                          type="date"
                                          class="form-control-input"
                                          v-model="inputLeaveTopic.since"
                                          @change="calculateTotalDate()"
                                          disabled
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div v-else>
                                    <div class="col-md">
                                      <p
                                        class="anakotmai-medium-text p-form"
                                      >{{ labelLeaveTopic.since }}</p>
                                      <div class="form-group">
                                        <input
                                          id="since"
                                          type="date"
                                          class="form-control-input"
                                          v-model="inputLeaveTopic.since"
                                          @change="calculateTotalDate()"
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md">
                                    <p class="anakotmai-medium-text p-form">{{ labelLeaveTopic.to }}</p>
                                    <div class="form-group">
                                      <input
                                        id="to"
                                        type="date"
                                        class="form-control-input"
                                        v-model="inputLeaveTopic.to"
                                        @change="calculateTotalDate()"
                                      >
                                    </div>
                                  </div>
                                  <div class="col-md">
                                    <p
                                      class="anakotmai-medium-text p-form"
                                    >{{ labelLeaveTopic.total }}</p>
                                    <div class="form-group">
                                      <input
                                        id="total"
                                        type="text"
                                        class="form-control-input"
                                        v-model="inputLeaveTopic.total"
                                        disabled
                                      >
                                    </div>
                                  </div>
                                </div>
                                <hr>
                                <div class="row">
                                  <div class="col-md-12 text-center">
                                    <button
                                      type="button"
                                      class="btn btn-secondary anakotmai-medium-text"
                                      @click="prev()"
                                    >ย้อนกลับ</button>
                                    <button
                                      type="button"
                                      class="btn btn-success anakotmai-medium-text"
                                      @click="next()"
                                    >ต่อไป</button>
                                  </div>
                                </div>
                              </div>

                              <div v-if="step === 3">
                                <h3 class="anakotmai-medium-text">ข้อมูลรายวิชา</h3>
                                <hr>
                                <div class="row">
                                  <div class="col-md">
                                    <button
                                      type="button"
                                      class="btn btn-sm btn-info anakotmai-medium-text"
                                      @click="addLine"
                                    >เพิ่มรายวิชา</button>
                                  </div>
                                </div>
                                <br>
                                <div class="row">
                                  <div class="col-md">
                                    <div class="row">
                                      <div class="col-md">
                                        <div class="table-responsive">
                                          <table class="table">
                                            <thead>
                                              <tr>
                                                <th scope="col">ลำดับ</th>
                                                <th scope="col">ชื่อวิชา</th>
                                                <th scope="col"></th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr v-for="(line, index) in lines" v-bind:key="index">
                                                <th scope="row">
                                                  <p class="anakotmai-medium-text">{{ index + 1 }}</p>
                                                </th>
                                                <td>
                                                  <select
                                                    name="subjectname"
                                                    class="custom-select"
                                                    v-model="line.subjectList"
                                                  >
                                                    <option
                                                      v-for="option in subjects"
                                                      v-bind:key="option.value"
                                                    >{{ option.label }}</option>
                                                  </select>
                                                </td>
                                                <td>
                                                  <button
                                                    type="button"
                                                    class="btn btn-sm btn-danger anakotmai-medium-text"
                                                    @click="removeLine(index)"
                                                    v-if="index + 1 != 1"
                                                  >ลบรายวิชา</button>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <hr>
                                <div class="row">
                                  <div class="col-md-12 text-center">
                                    <button
                                      type="button"
                                      class="btn btn-secondary anakotmai-medium-text"
                                      @click="prev()"
                                    >ย้อนกลับ</button>
                                    <button
                                      type="button"
                                      class="btn btn-success anakotmai-medium-text"
                                      @click="onSendDocument()"
                                    >ยืนยัน</button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="selection">
      <img
        src="../assets/images/logo-eleaving-with-text.png"
        class="footer-logo"
        width="10%"
        height="10%"
      >
    </footer>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
import Navbar from "@/components/Navbar";

var accountObj;
var profileObj;
var HOST;
var PORT;

export default {
  name: "Leave",
  components: {
    Navbar: Navbar
  },
  beforeCreate() {
    document.body.className = "";
    accountObj = JSON.parse(localStorage.getItem("account"))
    profileObj = JSON.parse(localStorage.getItem("profile"))
    if(accountObj.account_type == 'professor') {
      alert("คุณไม่มีสิทธิ์เข้าถึงหน้านี้.")
      router.push({ name: "Login" })
    }
    HOST = "35.240.188.199";
    PORT = "3001";
  },
  created() {
    document.title =
      ".:: แบบฟอร์มการ" +
      localStorage.getItem("catalog") +
      " - ระบบลาเรียนออนไลน์ | คณะเทคโนโลยีสารสนเทศ ::.";
    this.getTomorrowDate();
    this.getSubjectByUserID(accountObj.account_id);
  },
  data() {
    return {
      error: false,
      lines: [],
      blockRemoval: true,
      subjects: [],
      step: 1,
      file: {
        name: "เลือกไฟล์..."
      },
      catalog: localStorage.getItem("catalog"),
      labelPrivateTopic: {
        firstname: "ชื่อ",
        lastname: "นามสกุล",
        studentid: "รหัสประจำตัว",
        term: "ภาคเรียนที่",
        schoolyear: "ปีการศึกษา",
        studentyear: "นักศึกษาชั้นปีที่",
        studentgeneration: "รุ่น",
        studentbranch: "สาขาวิชา",
        studentdegree: "ระดับปริญญา"
      },
      inputPrivateTopic: {
        firstname: profileObj.firstname,
        lastname: profileObj.lastname,
        studentid: profileObj.student_id,
        term: profileObj.student_term,
        schoolyear: profileObj.school_year,
        studentyear: profileObj.student_year,
        studentgeneration: profileObj.student_generation,
        studentbranch: profileObj.student_branch,
        studentdegree: profileObj.student_degree
      },
      labelLeaveTopic: {
        comment: "ความประสงค์จะขอลาเรียนเนื่องจาก",
        supportdocument: "เอกสารประกอบการลา",
        since: "จึงขอลาเรียนตั้งแต่",
        to: "ถึง",
        total: "รวมเป็นเวลา (วัน)"
      },
      inputLeaveTopic: {
        comment: null,
        supportdocument: null,
        since: null,
        to: null,
        total: null
      },
      errorMessage: "",
      countEmpty: 0
    };
  },
  watch: {
    lines() {
      this.blockRemoval = this.lines.length <= 1;
    }
  },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      // ข้อมูลการลา
      if (
        this.step == 2 &&
        (this.inputLeaveTopic.comment == "" || this.inputLeaveTopic.comment == null ||
          this.file.name == "เลือกไฟล์..." || this.file.name == "" || this.file.name == null)
      ) {
        this.alertEmptyFieldsDisplay();
      } else if (this.step == 2 && this.inputLeaveTopic.total <= 0) {
        this.alertDayDisplay();
      } else {
        this.step++;
      }
    },
    handleFileUpload() {
      const allowedTypes = ["application/pdf"];
      const file = this.$refs.file.files[0];
      const MAX_SIZE = 600000;
      const tooLarge = file.size > MAX_SIZE;

      if (allowedTypes.includes(file.type) && !tooLarge) {
        this.file = this.$refs.file.files[0];
        this.error = false;
      } else {
        this.errorMessage = tooLarge
          ? `ไฟล์มีขนาดใหญ่เกินไป. รองรับขนาดที่ ${MAX_SIZE / 1000}Kb`
          : "รองรับไฟล์ PDF เท่านั้น";
        this.alertErrorDisplay();
        this.error = true;
      }
    },
    addLine() {
      let checkEmptyLines = this.lines.filter(line => line.number === null);
      if (checkEmptyLines.length >= 1 && this.lines.length > 0) return;
      this.lines.push({
        subjectList: null
      });
    },
    removeLine(lineId) {
      if (!this.blockRemoval) this.lines.splice(lineId, 1);
    },
    getSubjectByUserID(account_id) {
      const path = "http://" + HOST + ":" + PORT + "/api/subject/user/" + account_id;
      axios
        .get(path)
        .then(res => {
          var subjectArrary = res.data;
          for (var subjectIndex in subjectArrary) {
            this.subjects.push({
              label: subjectArrary[subjectIndex].subject_name,
              value: subjectArrary[subjectIndex].subject_name
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    calculateTotalDate() {
      var since = new Date(this.inputLeaveTopic.since);
      var to = new Date(this.inputLeaveTopic.to);
      this.inputLeaveTopic.total = parseInt(
        (to - since) / (24 * 3600 * 1000) + 1
      );
    },
    getTomorrowDate() {
      if (this.catalog == "ลากิจ") {
        var dateFormat = require("dateformat");
        var currentDate = new Date();
        var tomorrowDate = new Date();
        tomorrowDate.setDate(currentDate.getDate() + 1);
        this.inputLeaveTopic.since = dateFormat(tomorrowDate, "yyyy-mm-dd");
      }
    },
    SendDocument(results) {
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("document", JSON.stringify(results));
      formData.append("document_subject", JSON.stringify(this.lines));

      if (this.catalog == "ลาป่วย") {
        const path = "http://" + HOST + ":" + PORT + "/api/leave/sick/send";

        try {
          axios
            .post(path, formData)
            .then(res => {
              this.alertSuccessDisplay(res.data.success);
              this.file = "";
              this.error = false;
            })
            .catch(error => {
              console.log(error);
              this.errorMessage = error.response.data.error;
              this.alertErrorDisplay();
              thie.error = true;
            });
        } catch (err) {
          console.log(err);
        }
      } else {
        const path = "http://" + HOST + ":" + PORT + "/api/leave/personal/send";

        try {
          axios
            .post(path, formData)
            .then(res => {
              this.alertSuccessDisplay(res.data.success);
              this.file = "";
              this.error = false;
            })
            .catch(error => {
              console.log(error);
              this.errorMessage = error.response.data.error;
              this.alertErrorDisplay();
              thie.error = true;
            });
        } catch (err) {
          console.log(err);
        }
      }
    },
    onSendDocument() {
      var dateFormat = require("dateformat");
      let currentDate = new Date();
      var documentId;

      // ข้อมูลรายวิชา
      // ตรวจสอบช่องว่างในของรายวิชา
      for (var count in this.lines) {
        if (this.lines[count].subjectList == null) {
          this.alertEmptyFieldsDisplay();
          this.countEmpty++;
        } else {
          this.countEmpty = 0;
        }
      }

      if (this.countEmpty == 0) {
        if (this.catalog == "ลาป่วย") {
          documentId =
            "SD" +
            dateFormat(currentDate, "yyyymmddssMM") +
            accountObj.account_id;
          const results = {
            document_id: documentId,
            document_date: dateFormat(currentDate, "yyyy-mm-dd"),
            document_catalog: "sick",
            firstname: this.inputPrivateTopic.firstname,
            lastname: this.inputPrivateTopic.lastname,
            student_id: this.inputPrivateTopic.studentid,
            student_term: this.inputPrivateTopic.term,
            school_year: this.inputPrivateTopic.schoolyear,
            student_year: this.inputPrivateTopic.studentyear,
            student_generation: this.inputPrivateTopic.studentgeneration,
            student_branch: this.inputPrivateTopic.studentbranch,
            student_degree: this.inputPrivateTopic.studentdegree,
            comment: this.inputLeaveTopic.comment,
            since: this.inputLeaveTopic.since,
            to: this.inputLeaveTopic.to,
            total: this.inputLeaveTopic.total,
            account_id: accountObj.account_id
          };
          this.SendDocument(results);
        } else {
          documentId =
            "PD" +
            dateFormat(currentDate, "yyyymmddssMM") +
            accountObj.account_id;
          const results = {
            document_id: documentId,
            document_date: dateFormat(currentDate, "yyyy-mm-dd"),
            document_catalog: "personal",
            firstname: this.inputPrivateTopic.firstname,
            lastname: this.inputPrivateTopic.lastname,
            student_id: this.inputPrivateTopic.studentid,
            student_term: this.inputPrivateTopic.term,
            school_year: this.inputPrivateTopic.schoolyear,
            student_year: this.inputPrivateTopic.studentyear,
            student_generation: this.inputPrivateTopic.studentgeneration,
            student_branch: this.inputPrivateTopic.studentbranch,
            student_degree: this.inputPrivateTopic.studentdegree,
            comment: this.inputLeaveTopic.comment,
            since: this.inputLeaveTopic.since,
            to: this.inputLeaveTopic.to,
            total: this.inputLeaveTopic.total,
            account_id: accountObj.account_id
          };
          this.SendDocument(results);
        }
      }
    },
    alertDayDisplay() {
      // $swal function calls SweetAlert into the application with the specified configuration.
      this.$swal({
        title: "เกิดข้อผิดพลาด",
        type: "warning",
        text: "กรุณาเลือกช่วงเวลาของการลาให้ถูกต้อง",
        showCloseButton: true
      });
    },
    alertEmptyFieldsDisplay() {
      this.$swal({
        title: "เกิดข้อผิดพลาด",
        type: "warning",
        text: "กรอกข้อมูลให้ครบถ้วน",
        showCloseButton: true
      });
    },
    alertSuccessDisplay(message) {
      this.$swal({
        title: "แจ้งเตือน",
        type: "success",
        text: message,
        showCancelButton: false,
        confirmButtonText: "OK",
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.value) {
          router.push({ name: "Status" });
        }
      });
    },
    alertErrorDisplay(error) {
      this.$swal({
        title: "เกิดข้อผิดพลาด",
        type: "error",
        text: this.errorMessage,
        showCloseButton: true
      });
      this.step = 2;
    }
  },
  mounted() {
    this.addLine();
  }
};
</script>

<style scoped>
.p-form {
  font-size: 20px;
  margin-bottom: -0.1em;
}

.custom-file {
  margin-bottom: 0.5em;
}

.card {
  border: 0;
  border-radius: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 2;
}

.screen-top {
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.form-control-input {
  font-family: "Anakotmai-Medium";
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #f3f5f3;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media screen and (prefers-reduced-motion: reduce) {
  .form-control-input {
    transition: none;
  }
}

.form-control-input::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control-input:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-control-input::-webkit-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control-input::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control-input:-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control-input::-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control-input::placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control-input:disabled,
.form-control-input[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}

select.form-control-input:not([size]):not([multiple]) {
  height: calc(2.25rem + 2px);
}

select.form-control-input:focus::-ms-value {
  color: #495057;
  background-color: #fff;
}

.form-control-input-file,
.form-control-range {
  display: block;
  width: 100%;
}
</style>
