package it.kmitl.soa.eleaving.subject;

public class Subject {

    private String leaveDocumentId;
    private String subjectId;
    private String subjectName;
    private String professor;
    private String status;

    public Subject() {

    }

    public Subject(String leaveDocumentId, String subjectId, String subjectName, String professor, String status) {
        this.leaveDocumentId = leaveDocumentId;
        this.subjectId = subjectId;
        this.subjectName = subjectName;
        this.professor = professor;
        this.status = status;
    }

    public String getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(String subjectId) {
        this.subjectId = subjectId;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public String getProfessor() {
        return professor;
    }

    public void setProfessor(String professor) {
        this.professor = professor;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getLeaveDocumentId() {
        return leaveDocumentId;
    }

    public void setLeaveDocumentId(String leaveDocumentId) {
        this.leaveDocumentId = leaveDocumentId;
    }
}
