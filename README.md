# Asking Price RealTime Application

## Getting Started

contract 체결
selling 매도
buying 매수

Start by not writing any code.

```

```

This is just an example application, but imagine it doing anything you want. Adding new features is easy too:

```

```

The possibilities are endless.
## Storybook
[Asking Price Storybook](https://bobinlee.github.io/asking-price/)

## Features
+ Frontend
    + [Ant Design](https://ant.design/)
    + React
    + React Apollo
    + React Emotion
    + Jest
    + Storybook
    + [Victory](https://formidable.com/open-source/victory/)
+ Backend
    + Prisma
    + GraphQL
+ Websocket

### Demo
[Server](https://asking-price.now.sh/)
[Client](https://asking-price-view.now.sh/)

### Run the Application
#### Local
+ Client
```
npm install
npm start
```
+ [Prisma](https://www.prismagraphql.com/docs/quickstart/)
```
npm install
npm start
```

### Data
+ Prsima Playground에서 해당 mutation을 실행하면 된다.
+ 초기 값 세팅
```
mutation {
  makePrices {
    isSuccess
  }
}
```
+ 데이터 추가
```
mutation {
  createPrice(data: {type: "S", count: 1000,  amount: 130}) {
    id
    type
    amount
    count
    createdAt
  }
}
```


### Deploying
#### [Zeit](https://zeit.co/)
+ Client
```
now && now alias
```

+ [Prisma](https://www.prismagraphql.com/docs/quickstart/)
```
npm install -g prisma
prisma deploy
now && now alias
```

## Contributing
BoBeenLee 2018.