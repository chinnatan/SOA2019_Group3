FROM java:8
VOLUME /tmp

# Bundle APP files
COPY /target/eureka_server.jar eureka_server.jar

# Expose the listening port of your app
EXPOSE 8761

# Show current folder structure in logs
RUN ls -al -R

CMD ["java", "-jar", "eureka_server.jar"]