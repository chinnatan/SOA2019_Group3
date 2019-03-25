package it.kmitl.soa.eleaving.users;

import org.junit.Test;

import static org.junit.Assert.*;

public class UserServiceTest {

    // Init Virtual Data
    private User userExpected = new User(1, "59070040", "it59070040", "Chinnatan",
            "Chatthong", 2, 2561, 3, 14,
            "Information Technology", "ปริญญาตรี");

    // Start Testing
    @Test
    public void getUser() {
        // Init Virtual Data
        User userActual = new User(1, "59070040", "it59070040", "Chinnatan",
                "Chatthong", 2, 2561, 3, 14,
                "Information Technology", "ปริญญาตรี");

        // Assert UserID and Username
        assertEquals(userExpected.getUserId(), userActual.getUserId());
        assertEquals(userExpected.getUsername(), userActual.getUsername());
    }
}