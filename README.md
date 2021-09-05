# VueJS + WordPress Headless



## quickstart
- Install Node, NPM, Yarn, Git, etc
- Install [Docker](https://docs.docker.com/get-docker/)
- Clone repository
- install frontend dependencies
```
cd frontend 
yarn install
```
- spin up
```
cd ..
docker-compose up
```

- Clean WordPress installation at [localhost:8000](http://localhost:8000)
  - before hitting the frontend
    - set up WordPress and then change permalinks to post name
    - change theme to Disable Frontend
- VueJS Frontend POC at [localhost:8080](http://localhost:8080)

## todo
- plugin to disable normal wordpress frontend.
- everything else