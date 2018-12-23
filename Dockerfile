FROM node:10.12.0

COPY . /pgaleaderboard/

WORKDIR /pgaleaderboard/

CMD [ "npm", "run", "deploy"]
