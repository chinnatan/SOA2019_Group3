package it.kmitl.soa.eleaving.subject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SubjectController {

    @Autowired
    SubjectService subjectService;

    @RequestMapping(value = "/subjects/{studentid}")
    public List<Subject> getAllSubject(@PathVariable String studentid) {
        return subjectService.getSubjects(studentid);
    }
}
