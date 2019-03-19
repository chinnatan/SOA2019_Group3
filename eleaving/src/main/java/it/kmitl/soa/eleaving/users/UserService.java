package it.kmitl.soa.eleaving.users;

import org.springframework.stereotype.Service;

@Service
public class UserService {

    private User user = new User(1, "59070040", "it59070040", "Chinnatan",
            "Chatthong", 2, 2561, 3, 14,
            "Information Technology", "ปริญญาตรี");

    public User getUser(int userid) {
        if(user.getUserId() == userid) {
            return user;
        }
        return null;
    }
}
