package it.kmitl.soa.eleaving.subject;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class SubjectService {

    private ArrayList<Subject> subjectList = new ArrayList<>(Arrays.asList(
            new Subject("59070040","60123", "SOA", "1", "Somkiat"),
            new Subject("59070040","60124", "SVAV", "1", "Somkiat Wa."),
            new Subject("59070040","60125", "LIB", "601", "Chutima"),
            new Subject("59070042","60126", "COMPUTER GRAPHICS AND ANIMATION", "1", "blabla"),
            new Subject("59070042","60127", "GAME DESIGN AND DEVELOPMENT", "1", "blabla2")
    ));

    public List<Subject> getSubjects(String studentid) {
        List<Subject> subjectsIdentityByStudentId = new ArrayList<>();
        for(int count = 0;count < subjectList.size();count++) {
            if(subjectList.get(count).getStudentId().equals(studentid)) {
                subjectsIdentityByStudentId.add(subjectList.get(count));
            }
        }
        return subjectsIdentityByStudentId;
    }
}
