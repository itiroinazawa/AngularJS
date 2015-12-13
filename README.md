# Angular Project

Essa é a primeira aplicação em angular desenvolvido por itiroinazawa.

## Getting Started

Para começar, basta você clonar o projeto e instalar as dependências.

### Prerequisites

Você precisará clonar o repositório AngularJS. Você pode obter o git no seguinte link: [http://git-scm.com/](http://git-scm.com/).
E também utilizar o node.js e o npm. Para obtê-los, acesse [http://nodejs.org/](http://nodejs.org/).

### Clone AngularJS - Project

Clone o repositório do projeto da seguinte maneira [git][git]:

```
git clone https://github.com/itiroinazawa/AngularJS.git
cd AngularJS
```

Se você quer começar um novo projeto sem o histórico de commits do projeto, então você pode fazer o seguinte:

```bash
git clone --depth=1 https://github.com/itiroinazawa/AngularJS.git <your-project-name>
```

O atributo `depth=1` diz ao git para baixar as informações do ultimo commit historico.


### Install Dependencies

Após baixar o projeto, você precisará instalar as dependências.
Acesse a pasta raiz do projeto a partir do npm e execute o comando abaixo.

```
npm install
```

Por trás, ele executará também o comando `bower install`. Ele instalará as dependências contidas no Bower.


### Run the Application

Para iniciar a aplicação, você deve executar o seguinte comando no node.js:

```
npm start
```

Agora basta você digitar no browser: `http://localhost:8000/app/index.html`. E assim você acessará a aplicação.

### Testing the Application


Para executar os testes, basta executar o comando:

```
npm test
```
