FROM node

WORKDIR /app
ADD . /app/

RUN ["npm", "install"]
RUN ["./node_modules/.bin/bower", "--allow-root", "install"]
RUN ["./node_modules/.bin/grunt", "bower"]

ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
