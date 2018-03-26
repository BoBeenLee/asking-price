# Asking Price RealTime Application
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
## Getting Started
실시간으로 들어오는 매수, 매도에 대해서 호가창을 보여주는 어플리케이션.

## Naming
contract 체결
selling 매도
buying 매수

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

## Demo
[Client](https://asking-price-view.now.sh/)
[Server](https://asking-price.now.sh/)

1. Client화면 접속 시 예제에 대한 실시간 데이터 전송을 확인할 수 있다.
2. Server Playground에서 Data와 같이 mutation하여 다른 데이터를 입력할 수 있다.
    or 조회할 수 있다.


## Run the Application
### Local
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

## Data
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
+ 조회
```
query {
  prices {
    id
    type
    count
    amount
    createdAt
  }
}
```

## Deploying
### [Zeit](https://zeit.co/)
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

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/1489321?v=4" width="100px;"/><br /><sub><b>BoBeenLee</b></sub>](https://bbl.netlify.com/)<br />[💬](#question-BoBinLee "Answering Questions") [📝](#blog-BoBinLee "Blogposts") [🐛](https://github.com/BoBinLee/asking-price/issues?q=author%3ABoBinLee "Bug reports") [💻](https://github.com/BoBinLee/asking-price/commits?author=BoBinLee "Code") [🎨](#design-BoBinLee "Design") [📖](https://github.com/BoBinLee/asking-price/commits?author=BoBinLee "Documentation") [📋](#eventOrganizing-BoBinLee "Event Organizing") [💡](#example-BoBinLee "Examples") [💵](#financial-BoBinLee "Financial") [🔍](#fundingFinding-BoBinLee "Funding Finding") [🤔](#ideas-BoBinLee "Ideas, Planning, & Feedback") [🚇](#infra-BoBinLee "Infrastructure (Hosting, Build-Tools, etc)") [📦](#platform-BoBinLee "Packaging/porting to new platform") [🔌](#plugin-BoBinLee "Plugin/utility libraries") [👀](#review-BoBinLee "Reviewed Pull Requests") [📢](#talk-BoBinLee "Talks") [⚠️](https://github.com/BoBinLee/asking-price/commits?author=BoBinLee "Tests") [🔧](#tool-BoBinLee "Tools") [🌍](#translation-BoBinLee "Translation") [✅](#tutorial-BoBinLee "Tutorials") [📹](#video-BoBinLee "Videos") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->