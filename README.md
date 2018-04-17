# Sequelize Sandcastles

![](https://img.shields.io/badge/modularity-nodejs+express-green.svg)
![](https://img.shields.io/badge/data-json-lightgrey.svg)
![](https://img.shields.io/badge/db-postgresql+sequelize-blue.svg)

## Run locally

```bash
git clone git@github.com:kenziebottoms/nss-back-02-sandcastle.git
cd nss-back-02-sandcastle
npm install
npm start
```

## Requirements

- [ ] Create the following models:
    - [x] Beach
    - [x] Lifeguard
    - [ ] Castle
        - [ ] `id`
        - [ ] `description`
        - [ ] `tool_id`
        - [ ] `beach_id`
- [ ] Create JSON for and seed the following tables:
    - [x] beaches
    - [x] lifeguards
    - [ ] castles

### Bonus
- [ ] Create a simple Express app with the following routes:
    - [ ] `/beaches`
    - [ ] `/beaches/:id/lifeguards`
    - [ ] `/lifeguards`
    - [ ] `/castles`