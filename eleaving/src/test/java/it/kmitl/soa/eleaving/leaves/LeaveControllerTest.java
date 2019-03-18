package it.kmitl.soa.eleaving.leaves;

import it.kmitl.soa.eleaving.subject.Subject;
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

    @Test
    public void getLeaveDocument() {
        // Initial Data
        List<String> nameDocument = new ArrayList<String>(Arrays.asList("ใบรับรองแพทย์"));
        ArrayList<LeaveSubject> subjectList = new ArrayList<>(Arrays.asList(
                new LeaveSubject("60123", "SOA", "1", "Somkiat", "รออนุมัติ"),
                new LeaveSubject("60124", "SVAV", "1", "Somkiat Wa.", "รออนุมัติ"),
                new LeaveSubject("60125", "LIB", "601", "Chutima", "อนุมัติ")
        ));
        List<LeaveDocument> listDocumentTest = new ArrayList<>(Arrays.asList(
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

        // Get Data from API
        ResponseEntity<List<LeaveDocument>> response = testRestTemplate.exchange(
                "/leave/status/59070040",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<LeaveDocument>>(){});
        List<LeaveDocument> leaveDocumentResponse = response.getBody();

        // Assert Size
        assertEquals(listDocumentTest.size(), leaveDocumentResponse.size());

        // Assert LeaveDocumentID of index "0"
        assertEquals(listDocumentTest.get(0).getLeaveDocumentId(), leaveDocumentResponse.get(0).getLeaveDocumentId());
    }
}