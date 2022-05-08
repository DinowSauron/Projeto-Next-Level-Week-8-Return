# Projeto-Next-Level-Week-8-Return

<a href="https://github.com/DinowSauron/Projeto-Next-Level-Week-8-Return" title="NLW-Return" >
    <p align="center">
        <img 
        src="images/nlw-return.png"
        width="80%"
        />
    </p>
</a>


<p align="center">
  <a href="#Aula-REACT-JS">React</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Aula-NODE-JS">Node JS</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Aula-REACT-NATIVE">React Native</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="/LICENSE">Licença</a>
</p>


O Projeto da **[Next Level Week](https://nextlevelweek.com/)** Desta semana é um widget de enviar feedback para os usuários enviarem suas opinioes e relatar problemas ao navegar em seu site! evento oferecido pela **[@Rocketseat](https://github.com/Rocketseat)** 


Acesse a plicação em funcionamento!
Link: [https://nlw8return.vercel.app/](https://nlw8return.vercel.app/)


<a href="https://github.com/DinowSauron/Projeto-Next-Level-Week-7-Heat" target="_blank">
    <img src="./pictures/main.png" width="100%" alt="">
    <p style="display: flex; margin-top: 20px" >
        <img src="./pictures/loged.png" width="49%" alt="">
        <img src="./pictures/login.png" width="49%" alt="">
    </p>
    <p style="display: flex; margin-top: 20px">
        <img src="./pictures/phone2.png" width="32%" alt="">
        <img src="./pictures/phone1.png" width="32%" alt="">
        <img src="./pictures/phone3.png" width="32%" alt="">
    </p>  
    <img src="./pictures/terminal.png" width="100%" alt="">
</a>
---


## Tecnologias Utilizadas:

* ReactJS
* Typescript
* NodeJS
* Vite
* Express
* Prisma
* TailwindCSS
* Headless UI > acessibilidade
* html2canvas
* phosphor-react
* nodemailer
* React Native
* ExpoGo


## Observações/Notas:

* Assim que o projeto foi dado fiquei chocado, é uma ideia incrível para um evento como esse e pretendo colcoar no meu portfólio!
* Ver sobre react strict mode
* Reakit/areakit/radix/headlessUI > acessibilidade



<br/><br/>


## Como Inicializar:


### Iniciar Servidor
  * ``cd server``
  * ``yarn dev`` > inicia o servidor
  * `yarn prisma studio`
  * SQLite:
    * mude o provider `./prisma/schema.prisma` para o SQL (descomente a linha...)
    * ``npx prisma migrate dev`` > Refaça as migrações no banco de dados, pois elas salvão o tipo de banco de dados (sqlite, postgress,mongo, etc).
  * Deploy (Railway): 
    * ``yarn build`` > Converte arquivos Typescript para Javascript
    * ``yarn start`` | `npm run start` > Inicia apartir dos arquivos Javascript 
    * ``npx prisma migrate dev`` > faz as migrações no banco de dados
    * Faça deploy da pasta ``./dist``, normalmente o site irá fazer a build automaticamnete, podendo ser possível realizar o deploy de toda a aplicação, nao somente a pasta dist!
    * Start Command: `npx prisma migrate deploy` > faz as migrations no banc de dados

<br/>

### Iniciar Front-end
  * ``cd web``
  * ``yarn dev``
  
<br/>

### Iniciar Mobile
  * ``cd mobile``
  * Mudar o baseURL no `src/lib/api` para seu ipv4
  * ``expo start``
  * Acesse pelo aplicativo [Expo Go](https://expo.dev/client)





---
## Aula REACT JS:

* Tailwind: https://tailwindcss.com/docs/installation > html/js nativo
  * usado: https://tailwindcss.com/docs/installation/using-postcss > react precisa do PostCSS
* Tailwind tem ResetCSS
* HeadlessUI parece ser muito bom...
* caso for utilizar muitos componentes parecidos repetidamente pode se criar um array/objeto e transforma-lo em html, assim no html em sí só terá a desestruturação deste.
* Object.entries()
* `type example = typeof {X: {...}}`
* Screenshot > html2canvas
* colcoar o ! no final de um valor diz para confir aque ele não será nunca nulo
  * EX: `document.querySelector('body')!` ou seja, você diz que sempre vai existir o body.



### Comandos Utilizados:

* ``npm create vite@latest`` > template vite, selecione: react e typescript
* ``cd web`` > Entra no diretorio
* ``npm install`` > instala as dependencias
* `npm install -D tailwindcss postcss autoprefixer` > instala o tailwind
  * `npx tailwindcss init -p` > cria as config, com o PostCSS `-p`
  * tailwind.config.js 
    ```js
    module.exports = {
      content: ["./src/**/*.tsx"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

* `npm install phosphor-react` > icones utilizados.
* `npm install @headlessui/react` > acessibilidade.
* `npm install -D @tailwindcss/forms` > tailwind para formulários (coloca nos plugins)
* `npm install -D tailwind-scrollbar` > muda a scrollbar (coloque nos plugins)
* `npm install html2canvas` > blibioteca para o screenshot.
* `npm install axios` > requisições http.




---
## Aula NODE JS:

* no ts-config precisa colocar o `rootDir` e o `outDir`, além de ser possível utilizar uma versão mais atualizada do javascript(2020) no `target`.
* Rotas:
  ```js
  // GET = Buscar informações
  // POST = Cadastrar informações
  // PUT = Atualizar informações de uma entidade
  // PATCH = Atualizar UMA informaçõo única de uma entidade
  ```
* crie um script no package: `"dev": "ts-node-dev src/server.ts"`
* Em desenvolvimento: SQLite, em produção: Postgress, utilizando o prisma (ORM)
* Envio de Emails: Gmail(+/-), Mailgun, sparkpost, mailchimp
  * [mailtrap](https://mailtrap.io/) > testar emails (em desenvolvimento)
  * 
* cors
  ```
  app.use(cors({
    origin: "http://localhost:3000"
  }))
  ```
  ou não passe o objeto e será aberto para todos, qualquer um podera utilizar da API


<br/><br/>

### Requests Utilizadas:

```js
// Create feedback
// Coloque no console em http://localhost:3333

fetch("http://localhost:3333/feedbacks", {
  method: "POST",
  body: JSON.stringify({    
    "type": "BUG",
    "comment": "Está tudo crazy!"
  }),
  headers: {
      'Content-type': 'application/json; charset=UTF-8'
  },
}).then((res) => res).then(console.log); 
//}).then((res) => res.json()).then(console.log); se o retorno tiver um json
```
---


### Comandos Utilizados:

* `cd server`
* `npm init`
* `npm i typescript @types/node ts-node-dev -D` > live-reload com typesscript
* `npx tsc --init` > cria as config do typescript
* `npx tsc` > gera o arquivo em javascript /dist
* `yarn dev` > roda a aplicação
* `npm i express` > express - rotas
* `npm i @types/express -D` > tipagem do express
* Add Prisma
  * `npm i prisma -D` > instala o prisma
  * `npm i @prisma/client` > prisma em produção
  * `npx prisma init` > inicia o prisma
  * Acesse [Prisma/Sqlite](https://www.prisma.io/docs/concepts/database-connectors/sqlite) e modifique seu `schema.prisma` e coloque a url no `.env` criado
  * `npx prisma migrate dev` > migrar banco de dados em dev (dev/deploy) 
  * `npx prisma studio` > visualizar os dados no seu banco
* Envio de emails:
  * `npm install nodemailer` > blibioteca de emails
  * `npm install @types/nodemailer` > blibioteca de emails
* Testes Automatizados (Jest)
  * `npm install jest -D` > instala o jest
  * `npx jest --init` > configura o jest (yes, yes, node, yes, v8, yes)
  * `npm install ts-node -D` > typescript no jest
  * `npm install @types/jest -D` > typescript no jest
  * [SWC](https://swc.rs/docs/usage/jest) > `npm i -D jest @swc/jest` > Jest não entende arquivos tsc, então é necessário um compilador (ts-jest, babel), porém o swc é muito mais rapido, e pdoeria até mesmo rodar toda a aplicação utilizando ele. Siga os passos na Doc.
  * `yarn test`
  * /coverage/lcov-report/index.html > ver o quanto o teste está cobrindo do codigo
* `npm install cors` > controle de segurança, definir quem pode consumir os dados 
* `npm install @types/cors -D` > typescript

---


## Aula REACT NATIVE:

* expo
* NUNCA UTILIZE DAS FUNÇÕES DO **REACT-NATIVE-GESTURE-HANDLER** pois estas funções geram um erro invisivel que atrapalha os emuladores, buga os codigos nas builds. simplesmente busque por outra opção ou veja se o modulo atualizou! 


### Comandos utilizados:

* `cd mobile` 
* Expo:
  * `expo init mobile` > iniciaum projeto expo (blank typescript)
  * `expo install expo-font @expo-google-fonts/NOME_DA_FONTE` > fonte no react (inter)
  * `expo install expo-app-loading` > carregamento asyncrono de fontes
  * `expo install react-native-svg` > utilizar svg nos projetos
  * `expo start -c` > Inicia o projeto. `-c` limpa o cache
  * `expo install expo-file-system` > lida com conversão de arquivo ex: (png > base64)
  
* `yarn add phosphor-react-native` > icones react native
* `yarn add react-native-iphone-x-helper` > lida com margins de baixo em telas
* `expo install @gorhom/bottom-sheet@^4` > slides/arrastar telas
  * `expo install react-native-reanimated react-native-gesture-handler` > dependencia do BottomSheet
  * `plugins: ['react-native-reanimated/plugin']` > adicionar no babel
  * importe o gesture handler no inicio do ``App.tsx``
* `yarn add react-native-view-shot` > blibioteca de screenshot
* `yarn add axios` > requisições http


## Desafios
* #NextLevel
* #NeverStopLearning
* #NewSkills
* #StepByStep

* Por algum motivo durate as aulas 2 relogios aqui de casa pararam no mesmo horario, então decidi anotar essa atividade paranormal '-'
    * 11:40:46
    * 11:34:40

## Licença:
Note que este projeto está sob a licensa MIT. Veja o arquivo para mais detalhes: <a href="/LICENSE">LICENSE</a>

