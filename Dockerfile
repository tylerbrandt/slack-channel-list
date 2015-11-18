FROM node

WORKDIR /app
ADD . /app/

RUN ["npm", "install"]
RUN ["./node_modules/.bin/bower", "--allow-root", "install"]
RUN ["./node_modules/.bin/grunt", "bower"]

ENV NODE_ENV=production
ENV PORT=80
EXPOSE 80

CMD []
ENTRYPOINT ["npm", "start"]
