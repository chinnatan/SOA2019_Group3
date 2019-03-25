package it.kmitl.soa.eleaving.leaves;

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
public class LeaveControllerTest {

    @Autowired
    private TestRestTemplate testRestTemplate;

    // Initial Data for test
    private List<String> nameDocument = new ArrayList<String>(Arrays.asList("ใบรับรองแพทย์"));
    private ArrayList<LeaveSubject> subjectList = new ArrayList<>(Arrays.asList(
            new LeaveSubject("60123", "SOA", "1", "Somkiat", "รออนุมัติ"),
            new LeaveSubject("60124", "SVAV", "1", "Somkiat Wa.", "รออนุมัติ"),
            new LeaveSubject("60125", "LIB", "601", "Chutima", "อนุมัติ")
    ));
    private List<LeaveDocument> listDocumentExpected = new ArrayList<>(Arrays.asList(
            new LeaveDocument("SL001", "ลาย้อนหลัง", "11/03/2562",
                    "ชินธันย์", "ชาติทอง", "59070040",
                    2, 2561, 3, 14, "เทคโนโลยีสารสนเทศ(ภาคปกติ)",
                    "ปริญญาตรี", "ลำไส้อักเสบ", nameDocument,
                    "11/03/2562", "11/03/2562", 1, subjectList),
            new LeaveDocument("SL002", "ลาล่วงหน้า", "12/03/2562",
                    "ชินธันย์", "ชาติทอง", "59070040",
                    2, 2561, 3, 14, "เทคโนโลยีสารสนเทศ(ภาคปกติ)",
                    "ปริญญาตรี", "ไปทำธุระต่างจังหวัด", nameDocument,
                    "12/03/2562", "12/03/2562", 1, subjectList)
    ));

    // Start Testing
    @Test
    public void getAllLeaveDocument() {
        // Get Data from API
        ResponseEntity<List<LeaveDocument>> response = testRestTemplate.exchange(
                "/leave",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<LeaveDocument>>(){});
        List<LeaveDocument> leaveDocumentActual = response.getBody();

        // Assert size
        assertEquals(listDocumentExpected.size(), leaveDocumentActual.size());

        // Assert LeaveDocumentID of index "0"
        assertEquals(listDocumentExpected.get(0).getLeaveDocumentId(), leaveDocumentActual.get(0).getLeaveDocumentId());
    }

    @Test
    public void getLeaveDocument() {
        // Data test "SL001"
        LeaveDocument leaveDocumentExpected = listDocumentExpected.stream().filter(leaveDocument ->
                leaveDocument.getLeaveDocumentId().equals("SL001")).findFirst().get();

        // Get Data from API
        ResponseEntity<LeaveDocument> response = testRestTemplate.exchange(
                "/leave/SL001",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<LeaveDocument>(){});
        LeaveDocument leaveDocumentActual = response.getBody();

        // Assert LeaveDocumentID
        assertEquals(leaveDocumentExpected.getLeaveDocumentId(), leaveDocumentActual.getLeaveDocumentId());
    }

    @Test
    public void getLeaveDocumentStatus() {
        // Data test "SL001"
        LeaveDocument leaveDocuments = listDocumentExpected.stream().filter(leaveDocument ->
                leaveDocument.getLeaveDocumentId().equals("SL001")).findFirst().get();
        List<LeaveSubject> leaveSubjectListExpected = leaveDocuments.getSubjectList();

        // Get Data from API
        ResponseEntity<List<LeaveSubject>> response = testRestTemplate.exchange(
                "/leave/SL001/status",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<LeaveSubject>>(){});
        List<LeaveSubject> leaveSubjectListActual = response.getBody();

        // Assert size
        assertEquals(leaveSubjectListExpected.size(), leaveSubjectListActual.size());

        // Assert SubjectID and Status of index "0"
        assertEquals(leaveSubjectListExpected.get(0).getSubjectId(), leaveSubjectListActual.get(0).getSubjectId());
        assertEquals(leaveSubjectListExpected.get(0).getStatus(), leaveSubjectListActual.get(0).getStatus());
    }

    @Test
    public void sendSickLeaveDocument() {
        // Get Data from API
        ResponseEntity<String> response = testRestTemplate.exchange(
                "/leave/sick/send",
                HttpMethod.POST,
                null,
                new ParameterizedTypeReference<String>(){});
        String sickActual = response.getBody();

        // Assert Send Success
        assertEquals("Send Success", sickActual);
    }

    @Test
    public void sendPersonalLeaveDocument() {
        // Get Data from API
        ResponseEntity<String> response = testRestTemplate.exchange(
                "/leave/personal/send",
                HttpMethod.POST,
                null,
                new ParameterizedTypeReference<String>(){});
        String personalActual = response.getBody();

        // Assert Send Success
        assertEquals("Send Success", personalActual);
    }
}