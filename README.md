# E-commerce de placas de video GPU Store

## Conceito

Para este terceiro projeto, a ideia era criar um e-commerce com um carrinho de compras, porem qual seria o produto? primeiramente pesquisei por os principais itens escolhidos em um projeto de e-commerce, foi então que pensei em escolher algo que ja tinha conhecimento e familiaridade, placas de video, dessa forma surgiu a Gpu Store.

<div align="center">

<img src="https://user-images.githubusercontent.com/121033909/228625883-201f228b-7e09-47c8-bb1c-1903a5aa324f.png" height="500"/>

</div>

## Design

<img src="https://user-images.githubusercontent.com/121033909/228636014-671c2620-5e75-4e4d-b8f9-ea78ccd0650a.png" height="150" align="right" />

Como inspiração para o design da pagina, utilizei sites de hardware bem conhecidos como KaBuM e Pichau. Por padrão venho utilizando o Figma para construir o layout e estilo das paginas, sendo no total 3 paginas, a pagina inicial, a pagina de busca e filtro e a pagina do produto. Na seção de descrição do produto é possível alterar a disposição dos elementos, conforme a escolha para cada anuncio. O design final da pagina sofreu varias mudanças de estilo conforme alguns feedbacks que recebi, as principais sendo no card do produto.

## Tecnologias utilizadas

<ul list-style="none">
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="17" /> React</li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="17" /> TypeScript</li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height="17"/> Firebase</li>
  <li><img src="https://user-images.githubusercontent.com/121033909/218092081-8feb03b4-7444-4018-a550-e704a77bc53f.svg" height="17" /> Next</li>
  <li><img src="https://user-images.githubusercontent.com/121033909/218092677-03759c36-3450-4cdb-be27-24e892913862.png" height="17"/> Styled Components</li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height="17"/> Figma</li>
  <li><img src="https://user-images.githubusercontent.com/121033909/221358245-ca4d0013-8f56-45b4-afd8-c8d6545645e7.svg" height="17"/> Ant Design</li>
</ul>

Por padrão utilizo o **TypeScript** como linguagem principal. Como neste projeto existe diversos dados trafegando entre componentes além de muitos desses vindo do banco de dados, a utilização do typescript se torna muito util, garantindo que a estrutura dos dados seja facilmente compreendida e implementada em qualquer componente.

A utilização do **Firebase** como banco de dados foi uma escolha simples, pelo fato de que ele ja disponibiliza uma API para acessar o database. Com isso facilitando muito a implementação na pagina, bastando informar a url para as requisições fetch. 

<div align="center">

<img src="https://user-images.githubusercontent.com/121033909/228680306-eb228692-0be9-4ff6-b1e2-6acd4bea8118.png" height="200"/>

</div>

Na organização do database foi criado uma seção para os *Cards* e outra para os *Produtos*, onde a primeira possui as informações básicas do todos os produto, e a segunda com todas as informações de cada produto individualmente.

O **React** dispensa apresentações, uma das bibliotecas mais utilizadas para desenvolvimento web, sendo alguns dos motivos, o virtual DOM, evitando a renderização de toda a pagina a cada pequena atualização, o componentes reutilizáveis e encapsulados, a performance da aplicação, entre outros.

<img src="https://user-images.githubusercontent.com/121033909/218168778-d2d3398e-c95e-40af-b8ed-af150cb9bc16.png" height="100" align="right" />
  
Com o **Next** é possível criar paginas estáticas, garantindo maior velocidade no carregamento, paginas geradas no lado do servidor(SSR), dessa forma ajudando os mecanismos de busca(SEO) a encontrar e ranquear o site, entre outros benefícios. Com uma pagina única, onde os dados são atualizados nesta mesma pagina, é um bom projeto para utilizar o Next, se beneficiando bastante de uma renderização estática.

O principal fator para utilizar o **Styled Components**, é poder estilizar um elemento no próprio escopo, ou seja, o css utilizado nesse elemento, sera aplicado somente a ele e seus elementos filhos. Isso evita colisão de CSS, conflito de classes, CSS vazando para outros elementos, etc.

## Pagina de pesquisa

<div align="center">
<img src="https://user-images.githubusercontent.com/121033909/228820890-2030dc14-ffe7-4100-bf0c-c1b34e595ed6.png" height="500" />
</div>

## Pagina do produto

<div align="center">
<img src="https://user-images.githubusercontent.com/121033909/228821243-03494c2c-1d9d-42c6-b60c-a419932dfde6.png" height="500" />
</div>

### Comandos utilizados para criar o projeto

Na documentação do Next na parte do TypeScript, podemos encontrar o comando para criar uma projeto com React, Next e TypeScript disponibilizado pela Vercel.

```bash
npx create-next-app@latest --ts
```

#### Comandos para inciar o projeto

```bash
npm run dev
```
