package it.kmitl.soa.eleaving.subject;

import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.*;

public class SubjectServiceTest {

    // Init Data for Test
    private ArrayList<Subject> subjectList = new ArrayList<>(Arrays.asList(
            new Subject("59070040","60123", "SOA", "1", "Somkiat"),
            new Subject("59070040","60124", "SVAV", "1", "Somkiat Wa."),
            new Subject("59070040","60125", "LIB", "601", "Chutima"),
            new Subject("59070042","60126", "COMPUTER GRAPHICS AND ANIMATION", "1", "blabla"),
            new Subject("59070042","60127", "GAME DESIGN AND DEVELOPMENT", "1", "blabla2")
    ));

    private ArrayList<Subject> subjectListExpected = new ArrayList<>(Arrays.asList(
            new Subject("59070040","60123", "SOA", "1", "Somkiat"),
            new Subject("59070040","60124", "SVAV", "1", "Somkiat Wa."),
            new Subject("59070040","60125", "LIB", "601", "Chutima")
    ));


    // Start Testing
    @Test
    public void getSubjects() {
        // Student ID Test By "59070040"
        List<Subject> subjectsIdentityByStudentId = new ArrayList<>();
        for(int count = 0;count < subjectList.size();count++) {
            if(subjectList.get(count).getStudentId().equals("59070040")) {
                subjectsIdentityByStudentId.add(subjectList.get(count));
            }
        }

        // Assert Size
        assertEquals(subjectListExpected.size(), subjectsIdentityByStudentId.size());

        // Assert StudentID and SubjectID of Index "0"
        assertEquals(subjectListExpected.get(0).getStudentId(), subjectsIdentityByStudentId.get(0).getStudentId());
        assertEquals(subjectListExpected.get(0).getSubjectId(), subjectsIdentityByStudentId.get(0).getSubjectId());
    }
}