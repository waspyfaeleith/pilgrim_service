## Setup

## Backend

#### Create Database

```sh
createdb pilgrimservice -U postgres
```

> If the `postgres` user doesn't exist, you can
* Create a user with `createuser postgres`
* Jump into psql with `psql`
* Type `ALTER USER postgres WITH SUPERUSER` to give it enough permission to create databases

## Frontend

```sh
cd frontend

npm install

npm start

```

