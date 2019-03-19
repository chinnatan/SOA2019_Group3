package it.kmitl.soa.eleaving.users;

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

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserControllerTest {

    @Autowired
    TestRestTemplate testRestTemplate;

    @Test
    public void getUser() {
        // Initial Data for Test
        User userTest = new User(1, "59070040", "it59070040", "Chinnatan",
                "Chatthong", 2, 2561, 3, 14,
                "Information Technology", "ปริญญาตรี");

        // Get Data from API
        ResponseEntity<User> response = testRestTemplate.exchange(
                "/user",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<User>() {
                });
        User userResponse = response.getBody();

        // Assert User ID
        assertEquals(userTest.getUserId(), userResponse.getUserId());

        // Assert Firstname and Lastname
        assertEquals(userTest.getFirstname(), userResponse.getFirstname());
        assertEquals(userTest.getLastname(), userResponse.getLastname());

        // Assert Username
        assertEquals(userTest.getUsername(), userResponse.getUsername());
    }


}