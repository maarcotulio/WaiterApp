# WAITERAPP
WaiterApp is designed to facilitate the work of waiters by speeding up the process of taking and managing orders. The aim is to improve service efficiency in bars and restaurants.

## Getting Started

### Prerequisites
To run the project you will to install Node.js at your computer, the project was build in the v22 of node, install yarn and Docker. If you want to test in mobile remember to install a development environment.

### Installing
When you have already downloaded the project you will open the docker and create a Mongo Container.
```bash
docker run --name mongo -p 27017:27017 -d mongo
```
After that, you need to install the dependecies.

```bash
yarn install
```

The fe and api folders you can run it with this command.

```bash
yarn dev
```
Now, to run the app file you should use this.

```bash
yarn start
```

## Built With
- Node.js
- MongoDB
- WebSockets
- React
- React Native
- Expo
