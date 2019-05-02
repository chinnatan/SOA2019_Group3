<template>
  <div>
    <navbar></navbar>

    <div class="container">
      <div class="row screen-top">
        <div class="col-md-12 mx-auto my-auto">
          <div class="card">
            <div class="card-header">
              <h2 class="anakotmai-medium-text text-left">{{ statusLabel.header }}</h2>
            </div>
            <div class="card-body">
              <div class="accordion" id="accordionStatus">
                <div class="card">
                  <div class="card-header" id="acceptHeading">
                    <button
                      class="btn btn-success anakotmai-medium-text"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      @click="columToShow = 4"
                    >{{ statusLabel.accept }}</button>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="acceptHeading"
                    data-parent="#accordionStatus"
                  >
                    <div class="card-body">
                      <div class="row">
                        <div
                          class="col-md-3"
                          v-if="columIndex < documentAcceptData.length"
                          v-for="columIndex in columToShow"
                          v-bind:key="columIndex"
                        >
                          <div class="card-deck">
                            <div class="card">
                              <div
                                class="card-header"
                              >{{ documentAcceptData[columIndex].documentid }}</div>
                              <div class="card-body text-left">
                                <small
                                  class="card-text"
                                >{{ documentAcceptData[columIndex].subjectname }}</small>
                                <h5 class="card-text">{{ documentAcceptData[columIndex].comment }}</h5>
                              </div>
                              <div
                                class="card-footer"
                              >{{ documentAcceptData[columIndex].documentdate }}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <button
                            class="btn btn-dark anakotmai-medium-text"
                            @click="columToShow += 4"
                            v-if="columToShow < documentAcceptData.length"
                          >{{ statusLabel.loadmore}}</button>
                        </div>
                      </div>
                      <div class="row" v-if="documentAcceptData.length == 1">
                        <div class="col-md-12">
                          <p class="anakotmai-medium-text">{{ statusLabel.loadAcceptDataAlert }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="waitingHeading">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-warning collapsed anakotmai-medium-text"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                        @click="columToShow = 4"
                      >{{ statusLabel.waiting }}</button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionStatus"
                  >
                    <div class="card-body">
                      <div class="row">
                        <div
                          class="col-md-3"
                          v-if="columIndex < documentWaitingData.length"
                          v-for="columIndex in columToShow"
                          v-bind:key="columIndex"
                        >
                          <div class="card-deck">
                            <div class="card">
                              <div
                                class="card-header"
                              >{{ documentWaitingData[columIndex].documentid }}</div>
                              <div class="card-body text-left">
                                <small
                                  class="card-text"
                                >{{ documentWaitingData[columIndex].subjectname }}</small>
                                <h5 class="card-text">{{ documentWaitingData[columIndex].comment }}</h5>
                              </div>
                              <div
                                class="card-footer"
                              >{{ documentWaitingData[columIndex].documentdate }}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <button
                            class="btn btn-dark anakotmai-medium-text"
                            @click="columToShow += 4"
                            v-if="columToShow < documentWaitingData.length"
                          >{{ statusLabel.loadmore}}</button>
                        </div>
                      </div>
                      <div class="row" v-if="documentWaitingData.length == 1">
                        <div class="col-md-12">
                          <p class="anakotmai-medium-text">{{ statusLabel.loadWaitingDataAlert }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header red" id="declineHeading">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-danger collapsed anakotmai-medium-text"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                        @click="columToShow = 4"
                      >{{ statusLabel.decline }}</button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionStatus"
                  >
                    <div class="card-body">
                      <div class="row">
                        <div
                          class="col-md-3"
                          v-if="columIndex < documentDeclineData.length"
                          v-for="columIndex in columToShow"
                          v-bind:key="columIndex"
                        >
                          <div class="card-deck">
                            <div class="card">
                              <div
                                class="card-header"
                              >{{ documentDeclineData[columIndex].documentid }}</div>
                              <div class="card-body text-left">
                                <small
                                  class="card-text"
                                >{{ documentDeclineData[columIndex].subjectname }}</small>
                                <h5 class="card-text">{{ documentDeclineData[columIndex].comment }}</h5>
                              </div>
                              <div
                                class="card-footer"
                              >{{ documentDeclineData[columIndex].documentdate }}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <button
                            class="btn btn-dark anakotmai-medium-text"
                            @click="columToShow += 4"
                            v-if="columToShow < documentDeclineData.length"
                          >{{ statusLabel.loadmore}}</button>
                        </div>
                      </div>
                      <div class="row" v-if="documentDeclineData.length == 1">
                        <div class="col-md-12">
                          <p class="anakotmai-medium-text">{{ statusLabel.loadDeclineDataAlert }}</p>
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
    this.getStatus(accountObj.account_id);
  },
  data() {
    return {
      statusLabel: {
        header: "สถานะการลา",
        accept: "อนุมัติแล้ว",
        decline: "ไม่อนุมัติ",
        waiting: "รออนุมัติ",
        loadmore: "โหลดข้อมูลเพิ่มเติม",
        loadAcceptDataAlert: "คุณยังไม่มีการลาที่ได้รับการอนุมัติ",
        loadWaitingDataAlert: "คุณยังไม่มีการลาที่รอรอนุมัติ",
        loadDeclineDataAlert: "คุณยังไม่มีการลาที่ไม่ได้รับการอนุมัติ"
      },
      documentAcceptData: [
        {
          documentid: undefined,
          documentdate: undefined,
          comment: undefined,
          subjectname: undefined,
          status: undefined
        }
      ],
      documentDeclineData: [
        {
          documentid: undefined,
          documentdate: undefined,
          comment: undefined,
          subjectname: undefined,
          status: undefined
        }
      ],
      documentWaitingData: [
        {
          documentid: undefined,
          documentdate: undefined,
          comment: undefined,
          subjectname: undefined,
          status: undefined
        }
      ],
      columToShow: 4
    };
  },
  methods: {
    getStatus(accountid) {
      var dateFormat = require("dateformat");
      const path =
        "http://localhost:3001/api/leave/user/" + accountid + "/status";

      try {
        axios
          .get(path)
          .then(res => {
            var documentArray = res.data;
            for (var documentIndex in documentArray) {
              if (documentArray[documentIndex].status == "อนุมัติ") {
                this.documentAcceptData.push({
                  documentid: documentArray[documentIndex].document_id,
                  documentdate: dateFormat(
                    documentArray[documentIndex].document_date,
                    "dd/mm/yyyy"
                  ),
                  comment: documentArray[documentIndex].comment,
                  subjectname: documentArray[documentIndex].subject_name,
                  status: documentArray[documentIndex].status
                });
              } else if (documentArray[documentIndex].status == "รออนุมัติ") {
                this.documentWaitingData.push({
                  documentid: documentArray[documentIndex].document_id,
                  documentdate: dateFormat(
                    documentArray[documentIndex].document_date,
                    "dd/mm/yyyy"
                  ),
                  comment: documentArray[documentIndex].comment,
                  subjectname: documentArray[documentIndex].subject_name,
                  status: documentArray[documentIndex].status
                });
              } else if (documentArray[documentIndex].status == "ไม่อนุมัติ") {
                this.documentDeclineData.push({
                  documentid: documentArray[documentIndex].document_id,
                  documentdate: dateFormat(
                    documentArray[documentIndex].document_date,
                    "dd/mm/yyyy"
                  ),
                  comment: documentArray[documentIndex].comment,
                  subjectname: documentArray[documentIndex].subject_name,
                  status: documentArray[documentIndex].status
                });
              }
            }
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

.card {
  border: 0;
  border-radius: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 2;
}

.card .card-header {
  background-color: darkslategray;
  color: white;
}

.accordion > .card {
  border: 0;
  border-radius: 0;
  box-shadow: none;
}

.accordion > .card .card-header {
  background-color: transparent;
  text-align: left;
}

.btn-warning {
  color: #fff;
}

.card-deck .card {
  font-family: "Anakotmai-Medium";
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 2rem;
}

.card-deck .card .card-header {
  background-color: #f47932;
}

.screen-top {
  margin-top: 5rem;
  margin-bottom: 5rem;
}
</style>

