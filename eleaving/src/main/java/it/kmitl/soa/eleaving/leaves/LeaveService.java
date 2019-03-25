package it.kmitl.soa.eleaving.leaves;

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

    public List<LeaveDocument> getAllLeaveDocument() {
        return leaveDocumentList;
    }

    public LeaveDocument getLeaveDocument(String leaveDocumentId) {
        return leaveDocumentList.stream().filter(leaveDocument -> leaveDocument.getLeaveDocumentId().equals(leaveDocumentId)).findFirst().get();
    }

    public List<LeaveSubject> getStatus(String leaveDocumentId) {
        LeaveDocument singleLeaveDocument = getLeaveDocument(leaveDocumentId);
        List<LeaveSubject> subjectStatus = singleLeaveDocument.getSubjectList();
        return subjectStatus;
    }

    public String sendSickLeaveDocument() {
        LeaveDocument sick = new LeaveDocument("SL001", "ลาป่วย", "11/03/2562",
                "ชินธันย์", "ชาติทอง", "59070040",
                2, 2561, 3, 14, "เทคโนโลยีสารสนเทศ(ภาคปกติ)",
                "ปริญญาตรี", "ลำไส้อักเสบ", nameDocument,
                "11/03/2562", "11/03/2562", 1, subjectList);
        return "Send Success";
    }

    public String sendPersonalLeaveDocument() {
        LeaveDocument personal = new LeaveDocument("SL002", "ลากิจ", "12/03/2562",
                "ชินธันย์", "ชาติทอง", "59070040",
                2, 2561, 3, 14, "เทคโนโลยีสารสนเทศ(ภาคปกติ)",
                "ปริญญาตรี", "ไปทำธุระต่างจังหวัด", nameDocument,
                "12/03/2562", "12/03/2562", 1, subjectList);
        return "Send Success";
    }
}
