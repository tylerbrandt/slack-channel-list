# slack-channel-list

List slack channels in the organization, with topic and purpose.

DEMO: http://slack-channels.dz.optimizely.com

## Authentication

You'll need a slack API token for this app. Go to https://api.slack.com/web and click 
"Generate token" under "Authentication" to get your slack token and set it as SLACK_TOKEN in the environment:
```
export SLACK_TOKEN=$YOUR_TOKEN_HERE
```

## Local development

Prerequisites: `npm`

Usage:
```
npm install
```

Start the app:
```
npm start
```
Then visit http://localhost:3000 in a browser of your choice.

## Docker

Build the image:
```
docker build -t slack-channel-list .
```
Run it:
```
docker run -it --rm -p 3000:80 --env SLACK_TOKEN=$SLACK_TOKEN slack-channel-list
```
The service will be available at $DOCKER_HOST:3000 (you can of course use whatever port you want
for the host).
