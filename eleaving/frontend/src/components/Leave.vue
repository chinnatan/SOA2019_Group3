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
                            <form>
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
                                      <textarea class="form-control-input" rows="5" id="comment"></textarea>
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
                                        accept="application/pdf, image/*"
                                      >
                                      <label
                                        class="custom-file-label"
                                        id="supportdocument"
                                      >{{ file.name }}</label>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md">
                                    <p
                                      class="anakotmai-medium-text p-form"
                                    >{{ labelLeaveTopic.since }}</p>
                                    <div class="form-group">
                                      <input id="since" type="date" class="form-control-input">
                                    </div>
                                  </div>
                                  <div class="col-md">
                                    <p class="anakotmai-medium-text p-form">{{ labelLeaveTopic.to }}</p>
                                    <div class="form-group">
                                      <input id="to" type="date" class="form-control-input">
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
                                                    v-model="selected"
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
                                                    @click="removeLine"
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
      <img srcset="../assets/images/svg/footer-bottom.svg">
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar";

var profileObj = JSON.parse(localStorage.getItem("profile"));

export default {
  name: "Leave",
  components: {
    Navbar: Navbar
  },
  beforeCreate() {
    document.body.className = "";
  },
  created() {
    document.title =
      ".:: แบบฟอร์มการ" +
      localStorage.getItem("catalog") +
      " - ระบบลาเรียนออนไลน์ | คณะเทคโนโลยีสารสนเทศ ::.";
  },
  data() {
    return {
      lines: [],
      blockRemoval: true,
      selected: "เลือกรายวิชา...",
      subjects: [
        {
          label: "SOA",
          value: "SOA"
        },
        {
          label: "LIB",
          value: "LIB"
        }
      ],
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
        studentid: profileObj.studentid,
        term: profileObj.term,
        schoolyear: profileObj.schoolyear,
        studentyear: profileObj.studentyear,
        studentgeneration: profileObj.studentgeneration,
        studentbranch: profileObj.studentbranch,
        studentdegree: profileObj.studentdegree
      },
      labelLeaveTopic: {
        comment: "ความประสงค์จะขอลาเรียนเนื่องจาก",
        supportdocument: "เอกสารประกอบการลา",
        since: "จึงขอลาเรียนตั้งแต่",
        to: "ถึง",
        total: "รวมเป็นเวลา (วัน)"
      }
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
      this.step++;
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log((this.file = this.$refs.file.files[0]));
    },
    addLine() {
      let checkEmptyLines = this.lines.filter(line => line.number === null);
      if (checkEmptyLines.length >= 1 && this.lines.length > 0) return;
      this.lines.push({
        subjects: null
      });
    },
    removeLine(lineId) {
      if (!this.blockRemoval) this.lines.splice(lineId, 1);
    }
  },
  mounted() {
    this.addLine();
  }
};
</script>


<style scoped>
footer.selection {
  position: fixed;
  left: 0;
  bottom: 0;
  min-width: 100%;
  width: auto;
  left: -10%;
  right: -10%;
  z-index: 1;
}

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
