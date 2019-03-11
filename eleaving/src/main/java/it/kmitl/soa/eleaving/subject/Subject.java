package it.kmitl.soa.eleaving.subject;

public class Subject {

    private String subjectId;
    private String subjectName;
    private String professor;

    public Subject() {

    }

    public Subject(String subjectId, String subjectName, String professor) {
        this.subjectId = subjectId;
        this.subjectName = subjectName;
        this.professor = professor;
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
}
