package it.kmitl.soa.eleaving.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping(value = "/user")
    public User getUser() {
        return userService.getUser();
    }
}
