# Gallery view

<img src="https://i.ibb.co/8d8fyBt/gallery.png" alt="Image of the repo">

An NFT viewer for collections or what wallet owns.
<br>

This is the code part of the tutorial "Gallery-View" for the web3 Hackathon

>

This web app lets you

-   View the nfts that other persons posses
-   View nfts owned by someone

<br>

## Requeriments and installation

Frist of all you will need NodeJs and Yarn installed in a LTS version.

1. Clone the repo and install the dependencies:

```sh
git clone <thisrepo>
cd ./gallery-view
yarn install
```

2. Go to alchemy.com and [create an app](https://dashboard.alchemyapi.io/) to have key access.
   <br>

    Then create a .env.local file at the root folder and put inside:

```sh
ALCHEMY_API_KEY="youralchemykey"
ALCHEMY_API_URL="the url till the/v2/"
```

3. Run the app by just run

```sh
yarn dev # only for development mode
yarn build && yarn start # for production mode
```

<br>

## Tecnologies used

These are the tecnologies used in this repo:

-   NextJS <small>(TypeScript)</small>
-   React Dom
-   Alchemy NFTs APIs
-   Aprhodite <small> (For styling like react native)</small>

<strong>!! Important !! The key part on this proyect is under the file src/pages/api/nfts.ts.
<strong/>
