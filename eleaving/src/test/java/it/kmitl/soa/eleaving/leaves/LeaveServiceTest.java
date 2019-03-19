package it.kmitl.soa.eleaving.leaves;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class LeaveServiceTest {

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

    @Test
    public void getAllLeaveDocument() {
        List<LeaveDocument> listDocumentActual = new ArrayList<>(Arrays.asList(
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

        // Assert size of list
        assertEquals(listDocumentExpected.size(), listDocumentActual.size());

        // Assert LeaveDocumentID of index "0"
        assertEquals(listDocumentExpected.get(0).getLeaveDocumentId(), listDocumentActual.get(0).getLeaveDocumentId());
    }

    @Test
    public void getLeaveDocument() {
        LeaveDocument leaveDocumentExpected = listDocumentExpected.get(0);
        LeaveDocument leaveDocumentActual = new LeaveDocument("SL001", "ลาย้อนหลัง", "11/03/2562",
                "ชินธันย์", "ชาติทอง", "59070040",
                2, 2561, 3, 14, "เทคโนโลยีสารสนเทศ(ภาคปกติ)",
                "ปริญญาตรี", "ลำไส้อักเสบ", nameDocument,
                "11/03/2562", "11/03/2562", 1, subjectList);

        // Assert LeaveDocumentID
        assertEquals(leaveDocumentExpected.getLeaveDocumentId(), leaveDocumentActual.getLeaveDocumentId());

        // Assert Firstname and Lastname
        assertEquals(leaveDocumentExpected.getFirstname(), leaveDocumentActual.getFirstname());
        assertEquals(leaveDocumentExpected.getLastname(), leaveDocumentActual.getLastname());
    }

    @Test
    public void getStatus() {
        ArrayList<LeaveSubject> leaveStatusActual = new ArrayList<>(Arrays.asList(
                new LeaveSubject("60123", "SOA", "1", "Somkiat", "รออนุมัติ"),
                new LeaveSubject("60124", "SVAV", "1", "Somkiat Wa.", "รออนุมัติ"),
                new LeaveSubject("60125", "LIB", "601", "Chutima", "อนุมัติ")
        ));

        List<LeaveSubject> leaveStatusExpected = listDocumentExpected.get(0).getSubjectList();

        // Assert size
        assertEquals(leaveStatusExpected.size(), leaveStatusActual.size());

        // Assert subjectid and status of index "0"
        assertEquals(leaveStatusExpected.get(0).getSubjectId(), leaveStatusActual.get(0).getSubjectId());
        assertEquals(leaveStatusExpected.get(0).getStatus(), leaveStatusActual.get(0).getStatus());
    }
}