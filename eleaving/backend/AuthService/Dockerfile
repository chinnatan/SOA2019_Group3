FROM keymetrics/pm2:latest-alpine

# Bundle APP files
COPY src src/
COPY package.json .
COPY process.yml .
COPY server.js server.js

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

# Expose the listening port of your app
EXPOSE 3005

# Show current folder structure in logs
RUN ls -al -R

CMD ["pm2-runtime", "process.yml"]