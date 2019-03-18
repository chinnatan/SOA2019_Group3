package it.kmitl.soa.eleaving.leaves;

import it.kmitl.soa.eleaving.subject.Subject;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class LeaveService {

    private List<String> nameDocument = new ArrayList<String>(Arrays.asList("ใบรับรองแพทย์"));
    private ArrayList<LeaveSubject> subjectList = new ArrayList<>(Arrays.asList(
            new LeaveSubject("60123", "SOA", "1", "Somkiat", "รออนุมัติ"),
            new LeaveSubject("60124", "SVAV", "1", "Somkiat Wa.", "รออนุมัติ"),
            new LeaveSubject("60125", "LIB", "601", "Chutima", "อนุมัติ")
    ));

    public List<LeaveDocument> leaveDocumentList = new ArrayList<>(Arrays.asList(
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

    public List<LeaveDocument> getAllLeaveDocument(String studentId) {
        List<LeaveDocument> specifyLeaveDocument = new ArrayList<>();
        for(int count=0;count<leaveDocumentList.size();count++) {
            if(leaveDocumentList.get(count).getStudentId().equals(studentId)) {
                specifyLeaveDocument.add(leaveDocumentList.get(count));
            }
        }
        return specifyLeaveDocument;
    }
}
