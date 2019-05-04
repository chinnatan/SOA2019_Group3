<template>
  <div>
    <navbar></navbar>

    <div class="container">
      <div class="row h-95 screen-top">
        <div class="col-md-12 mx-auto my-auto">
          <div class="card-group mx-auto">
            <div class="col-md-5 card bg-orange">
              <div class="card-body text-center">
                <div class="row">
                  <div class="col-md-12">
                    <img src="../assets/images/profile-logo.png" width="250px" height="250px">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <h4 class="anakotmai-medium-text white">{{ profile.fullname }}</h4>
                    <p class="anakotmai-medium-text" v-if="account.account_type == 'student'">
                      <small>{{ profile.studentid }}</small>
                    </p>
                    <p class="anakotmai-medium-text" v-if="account.account_type == 'student'">
                      คณะ {{ profile.faculty }}
                      <br>
                      ชั้นปีที่ {{ profile.studentyear }}
                      <br>
                      สาขา {{ profile.branch }}
                      <br>
                      แขนง {{ profile.sect }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body text-center">
                <div class="row">
                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-md-12 text-left">
                        <h4
                          class="anakotmai-medium-text orange"
                          v-if="account.account_type == 'student'"
                        >จำนวนครั้งที่ลาไปแล้ว</h4>
                        <h4 class="anakotmai-medium-text orange" v-else>วิชาที่ทำการสอน</h4>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="row" v-for="(line, index) in subjects" v-bind:key="index">
                          <div class="col-md-8 text-left" v-if="account.account == 'student'">
                            <p class="anakotmai-medium-text">{{ line.subjectName }}</p>
                          </div>
                          <div class="col-md-12 text-left" v-else>
                            <p class="anakotmai-medium-text">{{ line.subjectName }}</p>
                          </div>
                          <div class="col-md-4 text-right" v-if="account.accountType == 'student'">
                            <p class="anakotmai-medium-text">{{ line.count }} ครั้ง</p>
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

var accountObj = JSON.parse(localStorage.getItem("account"));
var profileObj = JSON.parse(localStorage.getItem("profile"));
var subjectTest = [];

export default {
  name: "Profile",
  components: {
    Navbar: Navbar
  },
  beforeCreate() {
    document.body.className = "";
  },
  created() {
    document.title =
      ".:: ข้อมูลส่วนตัว - ระบบลาเรียนออนไลน์ | คณะเทคโนโลยีสารสนเทศ ::.";
      this.checkAccountType()
  },
  data() {
    return {
      account: {
        accountId: accountObj.account_id,
        accountType: accountObj.account_type
      },
      profile: {
        fullname: profileObj.firstname + " " + profileObj.lastname,
        studentid: profileObj.student_id,
        faculty: profileObj.student_faculty,
        studentyear: profileObj.student_year,
        branch: profileObj.student_branch,
        sect: profileObj.student_sect
      },
      subjects: []
    };
  },
  methods: {
    getNumberSubjectLeaveByUserId(accountid) {
      const path = "http://localhost:3001/api/leave/" + accountid + "/count";
      axios
        .get(path)
        .then(res => {
          var subjectArrary = res.data;
          for (var subjectIndex in subjectArrary) {
            this.subjects.push({
              subjectName: subjectArrary[subjectIndex].subject_name,
              count: subjectArrary[subjectIndex].count
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getSubjectProfessorByUserId(accountid) {
      const path =
        "http://localhost:3001/api/subject/user/" + accountid + "/professor";

      axios
        .get(path)
        .then(res => {
          var subjectArrary = res.data;
          for (var subjectIndex in subjectArrary) {
            this.subjects.push({
              subjectName: subjectArrary[subjectIndex].subject_name
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    checkAccountType() {
      if (this.account.accountType == "student") {
        this.getNumberSubjectLeaveByUserId(this.account.accountId);
      } else {
        this.getSubjectProfessorByUserId(this.account.accountId);
      }
    }
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
}

.bg-orange {
  width: 100%;
  background-image: linear-gradient(to bottom left, #f47932, #fe5c23);
}

.card {
  border: 0;
  border-radius: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 2;
}

.profile-form {
  padding: 5% 0% 30% 15%;
}

.footer-logo {
  padding: 5% 5% 5% 5%;
}

.profile-panel {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  z-index: 2;
}

.profile-panel > hr {
  margin-right: 0;
  margin-left: 0;
}

.profile-panel > .list-group:first-child .list-group-item:first-child {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.profile-panel > .list-group:last-child .list-group-item:last-child {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.profile-panel-body {
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.profile-panel-title {
  margin-bottom: 0.75rem;
}

.profile-panel-subtitle {
  margin-top: -0.375rem;
  margin-bottom: 0;
}

.profile-panel-text:last-child {
  margin-bottom: 0;
}

.profile-panel-link:hover {
  text-decoration: none;
}

.profile-panel-link + .profile-panel-link {
  margin-left: 1.25rem;
}

.profile-panel-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.profile-panel-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.profile-panel-header + .list-group .list-group-item:first-child {
  border-top: 0;
}

.profile-panel-footer {
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}

.profile-panel-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.profile-panel-header-tabs {
  margin-right: -0.625rem;
  margin-bottom: -0.75rem;
  margin-left: -0.625rem;
  border-bottom: 0;
}

.profile-panel-header-pills {
  margin-right: -0.625rem;
  margin-left: -0.625rem;
}

.profile-panel-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
}

.profile-panel-img {
  width: 100%;
  border-radius: calc(0.25rem - 1px);
}

.profile-panel-img-top {
  width: 100%;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.profile-panel-img-bottom {
  width: 100%;
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}

.profile-panel-deck {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
}

.profile-panel-deck .profile-panel {
  margin-bottom: 15px;
}

@media only screen and (max-width: 600px) {
  .screen-top {
    margin-top: 5rem;
  }
}
</style>
