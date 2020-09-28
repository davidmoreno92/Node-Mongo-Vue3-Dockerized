# Vue3-App-dockerized
> Vue 3 App Dockerized (VoiceMod Test)


### Dependencies

- Vue 3.0.0-beta.18
- Vue Router 4.0.0-beta.1
- Vuex 4.0.0-beta.4
- Typescript 3.9.6
- Babel 7.10.4
- Webpack 4.43.0

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

> Start in development mode
```shell
npm run serve
```

> Build project (In a production environment bld must launch tests)
```shell
npm run build
```
> Launch tests
```shell
npm run test
```

### Project is fully done with Vue3, which is a beta version and is not compatible with many addons / packages. 

Project needs to create an user in Mongo By API or manually.

```shell
Host: localhost:3000/users
Method: POST
Body: (example)
{
    "name": "test",
    "surname": "test",
    "email": "test@test.com",
    "password": "P@ssw0rd",
    "country": "Spain",
    "phone": "666666666",
    "postalCode": "28001"
}
```