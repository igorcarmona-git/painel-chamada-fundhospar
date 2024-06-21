# Solução interna de um painel de chamadas criado para a empresa em que trabalho. 

Este painel de chamadas simples e objetivo com a facilidade de uso e abertura, ele é frequentemente utilizado por médicos clínicos gerais no hospital Fundhospar.
Foi construído utilizando Node.js, jQuery, servidor web (nginx), linux ubuntu 22.04, tailwind, YouTube (como forma de TV ao vivo).

## Funcionalidades

- Atende a necessidade de chamar pacientes de retorno de ortopedia sem precisar usar a voz, apenas com um clique no teclado. 
- Tem uma tela visual, onde você pode visualizar os últimos números chamados para atendimento e o número atual.
- Sempre quando é trocado a senha, é feito um sinal sonoro.
- Possui uma "TV adaptada" onde é utilizado um link do Youtube do SBT, sabendo que o SBT faz uso diários de transmissões ao vivo no youtube por 24h.
- Hospedado em uma maquina virtual linux na rede local da empresa.

### Problemas encontrados

**1- O link do youtube da transmissão ao vivo, as vezes ele cai, é necessário ter que entrar no caminho:**

```bash
cd home/user/painel-senha/src
nano index.html
```
Deve-se alterar o conteúdo da linha src="" do iframe abaixo.
```html
<div class="w-1/2">
    <iframe
    class="w-full h-screen"
    src="https://www.youtube.com/embed/RZgxuQ0e5zc?si=mBlp8JN1d6r2wLoa"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope>
    </iframe> 
</div>
```

Obs.: Pode-se fazer um script de automação que entra no link, copia o conteúdo, guarda numa variável e executa em determinado período como:

```javascript
setInterval(function, interval);
```

**2- Por falta de recursos financeiros, não consegui uma API para fazer uma TV interativa, a TV é estática a somente um canal.**

## Pré-requisitos

Certifique-se de ter o ambiente de desenvolvimento Node.js, nginx, tailwind configurado em sua máquina. Você pode seguir a documentação de instalação em seus respectivos sites de apoio.

## Instalação

Para instalar e configurar o projeto localmente, siga estas etapas:

**1. Clone o repositório:**

```bash
git clone https://github.com/igorcarmona-git/painel-chamada-fundhospar.git
cd painel-chamada-fundhospar
```

**2. Instale as dependências:**
   
```bash
npm install
```
ou 
```bash
yarn install
```

## Configuração nginx
**1. Abra o terminal e instale o nginx no ubuntu:**
```bash
sudo apt update
sudo apt install nginx
```
2. Inicie o serviço NGINX:
```bash
sudo systemctl start nginx
```
**3. Fazer com o que o NGINX inicie automaticamente no sistema operacional:**
```bash
sudo systemctl enable nginx
```
**4. Verificar a Instalação:**
Abra um navegador web e digite http://seu_endereco_ip ou http://localhost. Você deve ver a página padrão do NGINX, indicando que a instalação foi bem-sucedida.

**5. Configurar nginx para aparecer o painel:**
```bash
cd etc/nginx/sites-available
nano painel-senha
```

Copiar e colar o código abaixo dentro do arquivo painel-senha:
Certifique-se de que o firewall há regras permitindo o tráfego pela porta especificada.

Observações:
- **listen 80** (porta padrão http).
- **server_name** (IP do seu servidor/host).
- **root** (Caminho onde se encontra a pasta src do projeto no sistema).
- **index** index.html (arquivo principal de visualização do painel).

```code
server {
    listen 80;
    server_name 192.168.0.4;

    root /home/tic/painel-senha/src/;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000";
        try_files $uri $uri/ =404;
    }

    location /diretorio-restrito/ {
        deny all;
        return 403;
    }
}
```

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorar o projeto.

**Para mais informações, entrar em contato via redes sociais.**
