# Sequelize Sandcastles

![](https://img.shields.io/badge/modularity-nodejs+express-green.svg)
![](https://img.shields.io/badge/data-json-lightgrey.svg)
![](https://img.shields.io/badge/db-postgresql+sequelize-blue.svg)
![](https://img.shields.io/badge/mvp-working-green.svg)
![](https://img.shields.io/badge/bonus-wip-red.svg)

## Run locally

```bash
git clone git@github.com:kenziebottoms/nss-back-02-sandcastle.git
cd nss-back-02-sandcastle
npm install
npm start
```

## Requirements

- [x] Create the following models:
    - [x] Beach
    - [x] Lifeguard
    - [x] Castle
        - [x] `id`
        - [x] `description`
        - [x] `tool_id`
        - [x] `beach_id`
- [x] Create JSON for and seed the following tables:
    - [x] beaches
    - [x] lifeguards
    - [x] castles

### Bonus
- [ ] Create a simple Express app with the following routes:
    - [x] `/beaches`
    - [ ] `/beaches/:id/lifeguards`
    - [ ] `/lifeguards`
    - [ ] `/castles`