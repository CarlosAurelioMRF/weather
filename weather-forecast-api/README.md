# Weather Forecast APP

## Description

Weather forecast for any searchable city using https://www.weatherapi.com/

## Project setup

```bash
$ npm install
```

## Compile and run the project

- Create an account in https://www.weatherapi.com/
- Generate a new API KEY
- Copy the file `.env.example` then rename it to `.env`
- Add the API KEY generated to `.env` into variable `API_KEY`
- Add the DATABASE URL to `.env` into variable `DATABASE_URL`

```bash
# run migrations
$ prisma migrate dev

# generate prisma client
$ npx prisma generate

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
