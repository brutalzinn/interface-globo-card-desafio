# Interface Globocard

Esse projeto é uma interface gráfica desenvolvida com ReactJS e Material-UI para ser utilizada em conjunto com a Api GloboCard. Com objetivo de facilitar o processo de criação de Cards esportivos(Insights) para o desafio Globo. Sendo possível criar, deletar e atualizar e procurar Cards por Tags. Esse projeto está hospedado no Vercel e utilizando o método de deploy automático.

Você pode acessar esse projeto hospedado no Vercel em [clique aqui](https://interface-globo-card-desafio.vercel.app/). É necessário aguardar até que o Heroku(nuvem onde a api se encontra hospedada) responda.

Você pode acessar o repositório original da Interface GloboCard [clicando aqui](https://github.com/brutalzinn/interface-globo-card-desafio)


> É necessário instalar o NodeJS versão >= 10

## Requerimentos:

- NodeJS >= 10
- ReactJS > 14.x


## Bibliotecas utilizadas:

- react-redux
- Reach/router
- Material-UI
- ReduxThunk

## Telas responsivas para dispositivos móveis e computadores.

<img src="github/images/mobile_feed.png" alt="drawing" width="300"/>

- Tela para exibir cards em dispositivos móveis.

<img src="github/images/mobile_create.png" alt="drawing" width="300"/>

- Tela para criar cards em dispositivos móveis.

<img src="github/images/mobile_edit.png" alt="drawing" width="300"/>

- Tela para editar cards em dispositivos móveis.

<img src="github/images/pc_feed.png" alt="drawing" width="500" height="300"/>

- Tela para exibir cards em computadores.

<img src="github/images/pc_create.png" alt="drawing" width="500" height="300"/>

- Tela para criar cards em computadores.

<img src="github/images/pc_edit.png" alt="drawing" width="500" height="300"/>

- Tela para editar cards em computadores.


## Primeiros passos(padrão)
1. Clone esse repositório em um local de fácil localização
2. Acesse a pasta raíz do projeto clonado.
3. Abra um terminal na raíz do projeto.
4. Execute o comando npm install
5. Aguarde o procedimento de instação das dependências
6. Crie um arquivo .env na raíz do projeto e adicione as seguintes linhas:

        #A PORTA PADRÃO DESSE PROJETO É 3000. VOCÊ PODE ALTERAR NA LINHA ABAIXO:
        PORT=3000
        #ESSA É A URL PADRÃO DA API GLOBO CARD. VOCÊ PODE UTILIZAR A URL DA API EM AMBIENTE DE PRODUÇÃO PARA TESTES:
        #URL API GLOBO CARD EM PRODUÇÃO: https://api-globo-card.herokuapp.com/
        REACT_APP_API=http://127.0.0.1:5000

7. Ainda no terminal, execute o comando npm start
8. Aguarde o processo de inicialização e espere seu navegador ser aberto com o projeto.

## Primeiros passos(docker)
1. Clone esse repositório em um local de fácil localização
2. Acesse a pasta raíz do projeto clonado.
3. Crie um arquivo .env na raíz do projeto e adicione as seguintes linhas:

        #A PORTA PADRÃO DESSE PROJETO É 3000. VOCÊ PODE ALTERAR NA LINHA ABAIXO:
        PORT=3000
        #ESSA É A URL PADRÃO DA API GLOBO CARD. VOCÊ PODE UTILIZAR A URL DA API EM AMBIENTE DE PRODUÇÃO PARA TESTES:
        #URL API GLOBO CARD EM PRODUÇÃO: https://api-globo-card.herokuapp.com/
        REACT_APP_API=http://127.0.0.1:5000

4. Abra um terminal na raíz do projeto.
5. Execute o comando docker-compose up
6. Aguarde o procedimento de inicialização do Docker.
7. Acesse a url http://127.0.0.1:5000 no seu navegador.