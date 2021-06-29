<h1 align="center">
  <img alt="" src=".github/preview.gif">
  Social Auth Service API
</h1>

<p align="center">
  <img alt="Node.js Logo" src="https://img.shields.io/badge/Node.js-LTS-339933?logo=node.js">&nbsp;&nbsp;
   <img alt="GitHub" src="https://img.shields.io/github/license/lemuelZara/concepts-nodejs.svg">
</p>

The <b>social-auth-service-api</b> is an service example for authentication with <b>social media accounts</b> using the OAuth 2.0 API and [Passport](http://passportjs.org/) strategy with package [passport-google-oauth20](https://www.npmjs.com/package/passport-google-oauth20).


#### Accounts include:
* Google 


---
## Running locally

Clone the repository:

```sh
https://github.com/evertonpavan/social-auth-service-api
```

Rename env-example file to .env, and change data.

Build docker image:
```sh
docker build -t social-auth-service-api .
```

Start your container using the docker run:
```sh 
docker container run -d --name social-auth-service-api -p 1120:1120 social-auth-service-api
```
---


### Author

[Everton Pavan](https://github.com/evertonpavan)


