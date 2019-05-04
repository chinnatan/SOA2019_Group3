<template>
  <div>
    <navbar></navbar>

    <div class="content-selection">
      <div class="row">
        <div class="col-md-12">
          <h1 class="anakotmai-medium-text">{{ certificateLabel.heading }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="row" v-for="(line, index) in compareDocument" v-bind:key="index">
                  <div class="col-md-12">
                    <div class="card">
                      <div class="card-header anakotmai-medium-text text-left">
                        <div class="row">
                          <div
                            class="col-md"
                            v-if="line.documentCatalog == 'sick'"
                          >{{ line.firstname }} ได้ส่งคำร้องขอลาป่วย</div>
                          <div
                            class="col-md"
                            v-if="line.documentCatalog == 'personal'"
                          >{{ line.firstname }} ได้ส่งคำร้องขอลากิจ</div>
                        </div>
                        <div class="row">
                          <div class="col-md">
                            <small>{{ line.subjectName }}</small>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md">
                            <small>{{ line.documentId }} | {{ line.documentDate }}</small>
                          </div>
                        </div>
                      </div>
                      <div class="card-body anakotmai-light-text">
                        <div class="row">
                          <div
                            class="col-md-12 text-left"
                          >{{ certificateLabel.comment }}: {{ line.comment }}</div>
                        </div>
                        <div class="row">
                          <div
                            class="col-md-12 text-left"
                          >{{ certificateLabel.since }}: {{ line.since }} {{ certificateLabel.to }} {{ line.to }} {{ certificateLabel.total }} {{ line.total }} {{ certificateLabel.day }}</div>
                        </div>
                        <div class="row">
                          <div class="col-md-12 text-left">
                            {{ certificateLabel.supportdocument }}:
                            <a
                              v-bind:href="hostForViewPDF + line.filepath"
                              target="_blank"
                            >คลิก</a>
                          </div>
                        </div>
                      </div>
                      <div class="card-footer text-muted anakotmai-medium-text">
                        <button
                          type="button"
                          class="btn btn-danger"
                          @click="isDecline(line.documentId, line.docSubId)"
                        >ไม่อนุมัติ</button>
                        <button
                          type="button"
                          class="btn btn-success"
                          @click="isAccept(line.documentId, line.docSubId)"
                        >อนุมัติ</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row" v-if="compareDocument.length === 0">
                  <div class="col-md-12">
                    <div class="card">
                      <div class="card-body">
                        <p class="anakotmai-medium-text">{{ certificateLabel.documentNotfound }}</p>
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
        class="img-fluid footer-logo"
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

export default {
  name: "Certificate",
  components: {
    Navbar: Navbar
  },
  beforeCreate() {
    document.body.className = "";
    accountObj = JSON.parse(localStorage.getItem("account"));
  },
  created() {
    document.title =
      ".:: รับรองการลา - ระบบลาเรียนออนไลน์ | คณะเทคโนโลยีสารสนเทศ ::.";
    this.compareSubject(accountObj.account_id);
    localStorage.removeItem("catalog", "sick");
    localStorage.removeItem("catalog", "personal");
  },
  data() {
    return {
      hostForViewPDF: "http://localhost:3001/api/leave/uploads/",
      certificateLabel: {
        heading: "รับรองการลา",
        comment: "มีความประสงค์ขอลาเรียนเนื่องจาก",
        since: "จึงขอลาเรียนตั้งแต่",
        to: "ถึง",
        total: "รวมเป็นเวลา",
        day: "วัน",
        supportdocument: "เอกสารประกอบการลา",
        documentNotfound: "ไม่มีข้อมูลที่ต้องทำการรับรอง"
      },
      subjects: [
        {
          subjectCode: undefined,
          subjectName: undefined
        }
      ],
      compareDocument: [],
      messageAlert: undefined
    };
  },
  methods: {
    compareSubject(accountid) {
      var dateFormat = require("dateformat");

      const subjectPath =
        "http://localhost:3001/api/subject/user/" + accountid + "/professor";
      const documentPath = "http://localhost:3001/api/leave/";

      axios
        .get(subjectPath)
        .then(subjectRes => {
          axios
            .get(documentPath)
            .then(documentRes => {
              var subjectArray = subjectRes.data;
              var documentArray = documentRes.data;
              for (var subjectIndex in subjectArray) {
                for (var documentIndex in documentArray) {
                  if (
                    subjectArray[subjectIndex].subject_name ===
                      documentArray[documentIndex].subject_name &&
                    documentArray[documentIndex].status === "รออนุมัติ"
                  ) {
                    this.compareDocument.push({
                      documentId: documentArray[documentIndex].document_id,
                      documentDate: dateFormat(
                        documentArray[documentIndex].document_date,
                        "dd/mm/yyyy"
                      ),
                      documentCatalog:
                        documentArray[documentIndex].document_catalog,
                      firstname: documentArray[documentIndex].firstname,
                      comment: documentArray[documentIndex].comment,
                      filepath: documentArray[documentIndex].filepath,
                      since: dateFormat(
                        documentArray[documentIndex].since,
                        "dd/mm/yyyy"
                      ),
                      to: dateFormat(
                        documentArray[documentIndex].to,
                        "dd/mm/yyyy"
                      ),
                      total: documentArray[documentIndex].total,
                      subjectName: documentArray[documentIndex].subject_name,
                      status: documentArray[documentIndex].status,
                      docSubId: documentArray[documentIndex].doc_subject_id
                    });
                  }
                }
              }
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    },
    sendAccept(results) {
      const path = "http://localhost:3001/api/leave/status/update";

      const formData = new FormData();
      formData.append("document", JSON.stringify(results));

      try {
        axios
          .post(path, results)
          .then(res => {
            this.alertSuccessDisplay(res.data.messageAlert);
          })
          .catch(error => {
            console.log(error);
          });
      } catch (err) {
        console.log(err);
      }
    },
    sendDecline(results) {
      const path = "http://localhost:3001/api/leave/status/update";

      const formData = new FormData();
      formData.append("document", JSON.stringify(results));

      try {
        axios
          .post(path, results)
          .then(res => {
            this.alertSuccessDisplay(res.data.messageAlert);
          })
          .catch(error => {
            console.log(error);
          });
      } catch (err) {
        console.log(err);
      }
    },
    isAccept(documentId, documentSubjectId) {
      const results = {
        status: "accept",
        documentId: documentId,
        documentSubjectId: documentSubjectId
      };
      this.sendAccept(results);
    },
    isDecline(documentId, documentSubjectId) {
      const results = {
        status: "decline",
        documentId: documentId,
        documentSubjectId: documentSubjectId
      };
      this.sendAccept(results);
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
          this.compareDocument = [];
          this.compareSubject(accountObj.account_id);
        }
      });
    }
  }
};
</script>

<style scoped>
.content-selection {
  margin-top: 9vh;
  margin-bottom: 12vh;
  overflow-x: hidden;
}

.card {
  background-color: #ffffff;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  z-index: 2;
}
</style>


