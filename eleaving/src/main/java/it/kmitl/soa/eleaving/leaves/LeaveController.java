package it.kmitl.soa.eleaving.leaves;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LeaveController {

    @Autowired
    private LeaveService leaveService;

    @GetMapping(value = "/leave")
    public List<LeaveDocument> getAllLeaveDocument() {
        return leaveService.getAllLeaveDocument();
    }

    @GetMapping(value = "/leave/{leaveid}")
    public LeaveDocument getLeaveDocument(@PathVariable String leaveid) {
        return leaveService.getLeaveDocument(leaveid);
    }

    @GetMapping(value = "/leave/{leaveid}/status")
    public List<LeaveSubject> getLeaveDocumentStatus(@PathVariable String leaveid) {
        return leaveService.getStatus(leaveid);
    }

    @PostMapping(value = "/leave/sick/send")
    public LeaveDocument createSickLeaveDocument() {
        return leaveService.createSickLeaveDocument();
    }

    @PostMapping(value = "/leave/personal/send")
    public LeaveDocument createPersonalLeaveDocument() {
        return leaveService.createPersonalLeaveDocument();
    }
}
