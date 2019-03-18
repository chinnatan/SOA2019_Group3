package it.kmitl.soa.eleaving.leaves;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LeaveController {

    @Autowired
    private LeaveService leaveService;

    @RequestMapping(value = "/leave/status/{studentid}")
    public List<LeaveDocument> getLeaveDocument(@PathVariable String studentid) {
        return leaveService.getAllLeaveDocument(studentid);
    }
}
