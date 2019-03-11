package it.kmitl.soa.eleaving.leaves;

import it.kmitl.soa.eleaving.subject.Subject;

import java.util.ArrayList;
import java.util.List;

public class LeaveDocument {

    private String leaveDocumentId;
    private String leaveDocumentCategory;
    private String leaveDocumentDate;
    private String firstname;
    private String lastname;
    private String studentId;
    private int term;
    private int schoolYear;
    private int studentYear;
    private int studentGeneration;
    private String studentBranch;
    private String studentDegree;
    private String desciption;
    private List<String> nameDocument;
    private String startLeaveDate;
    private String endLeaveDate;
    private int totalLeave;
    private ArrayList<Subject> subjectList;

    public LeaveDocument() {}

    public LeaveDocument(String leaveDocumentId, String leaveDocumentCategory, String leaveDocumentDate, String firstname, String lastname, String studentId, int term, int schoolYear, int studentYear, int studentGeneration, String studentBranch, String studentDegree, String desciption, List<String> nameDocument, String startLeaveDate, String endLeaveDate, int totalLeave, ArrayList<Subject> subjectList) {
        this.leaveDocumentId = leaveDocumentId;
        this.leaveDocumentCategory = leaveDocumentCategory;
        this.leaveDocumentDate = leaveDocumentDate;
        this.firstname = firstname;
        this.lastname = lastname;
        this.studentId = studentId;
        this.term = term;
        this.schoolYear = schoolYear;
        this.studentYear = studentYear;
        this.studentGeneration = studentGeneration;
        this.studentBranch = studentBranch;
        this.studentDegree = studentDegree;
        this.desciption = desciption;
        this.nameDocument = nameDocument;
        this.startLeaveDate = startLeaveDate;
        this.endLeaveDate = endLeaveDate;
        this.totalLeave = totalLeave;
        this.subjectList = subjectList;
    }

    public String getLeaveDocumentId() {
        return leaveDocumentId;
    }

    public void setLeaveDocumentId(String leaveDocumentId) {
        this.leaveDocumentId = leaveDocumentId;
    }

    public String getLeaveDocumentCategory() {
        return leaveDocumentCategory;
    }

    public void setLeaveDocumentCategory(String leaveDocumentCategory) {
        this.leaveDocumentCategory = leaveDocumentCategory;
    }

    public String getLeaveDocumentDate() {
        return leaveDocumentDate;
    }

    public void setLeaveDocumentDate(String leaveDocumentDate) {
        this.leaveDocumentDate = leaveDocumentDate;
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

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
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

    public String getDesciption() {
        return desciption;
    }

    public void setDesciption(String desciption) {
        this.desciption = desciption;
    }

    public List<String> getNameDocument() {
        return nameDocument;
    }

    public void setNameDocument(List<String> nameDocument) {
        this.nameDocument = nameDocument;
    }

    public String getStartLeaveDate() {
        return startLeaveDate;
    }

    public void setStartLeaveDate(String startLeaveDate) {
        this.startLeaveDate = startLeaveDate;
    }

    public String getEndLeaveDate() {
        return endLeaveDate;
    }

    public void setEndLeaveDate(String endLeaveDate) {
        this.endLeaveDate = endLeaveDate;
    }

    public int getTotalLeave() {
        return totalLeave;
    }

    public void setTotalLeave(int totalLeave) {
        this.totalLeave = totalLeave;
    }

    public ArrayList<Subject> getSubjectList() {
        return subjectList;
    }

    public void setSubjectList(ArrayList<Subject> subjectList) {
        this.subjectList = subjectList;
    }
}
