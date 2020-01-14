FROM node:carbon

# Create app directory
WORKDIR /usr/src/rightcare-web-xp

# Install app dependencies

# Copy dependencies files
COPY package.json yarn.lock ./
RUN yarn install

# Bundle app source
COPY . .

RUN yarn build && yarn global add serve

#Your app binds to port 305 so you’ll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 9000

CMD ["-s", "build", "-l", "9000","node", "index.js"]


