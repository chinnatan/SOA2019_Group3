package it.kmitl.soa.eleaving.leaves;

public class LeaveSubject {

    private String subjectId;
    private String subjectName;
    private String section;
    private String professor;
    private String status;

    public LeaveSubject() {
    }

    public LeaveSubject(String subjectId, String subjectName, String section, String professor, String status) {
        this.subjectId = subjectId;
        this.subjectName = subjectName;
        this.section = section;
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

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
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
}
