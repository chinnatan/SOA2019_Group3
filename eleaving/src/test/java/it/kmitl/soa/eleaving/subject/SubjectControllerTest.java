package it.kmitl.soa.eleaving.subject;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SubjectControllerTest {

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Test
    public void getAllSubject() {
        // Initial Data
        ArrayList<Subject> subjectList = new ArrayList<>(Arrays.asList(
                new Subject("59070040","60123", "SOA", "1", "Somkiat"),
                new Subject("59070040","60124", "SVAV", "1", "Somkiat Wa."),
                new Subject("59070040","60125", "LIB", "601", "Chutima")
        ));

        // Get Data from API
        ResponseEntity<List<Subject>> response = testRestTemplate.exchange(
                "/subjects/59070040",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<Subject>>(){});
        List<Subject> subjectsResponse = response.getBody();

        // Assert List Size
        assertEquals(subjectList.size(), subjectsResponse.size());

        // Assert StudentID and SubjectID of index "0"
        assertEquals(subjectList.get(0).getStudentId(), subjectsResponse.get(0).getStudentId());
        assertEquals(subjectList.get(0).getSubjectId(), subjectsResponse.get(0).getSubjectId());
    }
}