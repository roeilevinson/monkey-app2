FROM node:16.3.0-alpine
WORKDIR /app
COPY . /app
EXPOSE 80
RUN ["npm" ,"install" ]
CMD ["npm", "start", " --y"]