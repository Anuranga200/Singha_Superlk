#create node js base image
FROM node:20.18.0

#set working directory 
WORKDIR /app

#copy package.json file
COPY package.json /app
RUN npm install

#copy the source code
COPY . .

#expose port 5000
EXPOSE 5000

#start the application
CMD ["npm", "start"]
