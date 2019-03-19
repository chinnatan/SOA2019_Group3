package it.kmitl.soa.eleaving.users;

public class User {

    private int userId;
    private String studentId;
    private String username;
    private String firstname;
    private String lastname;
    private int term;
    private int schoolYear;
    private int studentYear;
    private int studentGeneration;
    private String studentBranch;
    private String studentDegree;

    public User() {
    }

    public User(int userId, String studentId, String username, String firstname, String lastname, int term, int schoolYear, int studentYear, int studentGeneration, String studentBranch, String studentDegree) {
        this.userId = userId;
        this.studentId = studentId;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.term = term;
        this.schoolYear = schoolYear;
        this.studentYear = studentYear;
        this.studentGeneration = studentGeneration;
        this.studentBranch = studentBranch;
        this.studentDegree = studentDegree;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public int getTerm() {
        return term;
    }

    public void setTerm(int term) {
        this.term = term;
    }

    public int getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(int schoolYear) {
        this.schoolYear = schoolYear;
    }

    public int getStudentYear() {
        return studentYear;
    }

    public void setStudentYear(int studentYear) {
        this.studentYear = studentYear;
    }

    public int getStudentGeneration() {
        return studentGeneration;
    }

    public void setStudentGeneration(int studentGeneration) {
        this.studentGeneration = studentGeneration;
    }

    public String getStudentBranch() {
        return studentBranch;
    }

    public void setStudentBranch(String studentBranch) {
        this.studentBranch = studentBranch;
    }

    public String getStudentDegree() {
        return studentDegree;
    }

    public void setStudentDegree(String studentDegree) {
        this.studentDegree = studentDegree;
    }
}
