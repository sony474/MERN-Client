FROM node:20
WORKDIR /client
COPY package.json ./
RUN npm install
# copy my code
COPY ..
#RUN the app
RUN npm run build
#Nginx image to server our app
FROM nginx :alpine

COPY --from=0 /client/build/usr/share/nginx

EXPOSE 80

#cmd to run our engine
CMD ["nginx","-g", "daemon off;"]