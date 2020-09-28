# Node.API-Mongo-dockerized
> Node Api with Mongo Dockerized (VoiceMod Test)

### Dependencies
-  "@types/chai": "^4.2.12"
-  "@types/express": "^4.17.8"
-  "@types/mocha": "^8.0.3"
-  "@types/mongoose": "^5.7.36"
-  "@types/node": "^14.11.1"
-  "chai": "^4.2.0"
-  "mocha": "^8.1.3"
-  "nodemon": "^2.0.4"
-  "rimraf": "^3.0.2"
-  "ts-node": "^9.0.0"
-  "typescript": "^4.0.2"
-  "dotenv": "^8.2.0"
-  "email-validator": "^2.0.4"
-  "express": "^4.17.1"
-  "mongoose": "^5.10.5"

### Setup
> Install dependencies
```shell
npm install
```

> Build images and run docker containers
```shell
docker-compose build
docker-compose up
```

> Start in development mode (TS)
```shell
npm run start:dev
```

> Build and start project (JS)
```shell
npm run start
```

> Build project (In a production environment bld must launch tests)
```shell
npm run build
```

> Launch tests
```shell
npm run test
```

### MongoDB data is not persisting
It is a known "bug" (Design limitations of Windows containers).
https://github.com/docker-library/mongo/issues/291

Project is partial ready to data persist in linux environment. (Testing is needed)

Uncomment environment config in docker-compose.yml and change db config in app.ts.
mongo-init.js in root directory is the file that should create admin user.