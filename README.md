# BlockExplorer

## How to use

[Clone the repo](https://github.com/jrhite/blockexplorer):

```sh
git clone git@github.com:jrhite/blockexplorer.git
cd blockexplorer
```

Create a .env file
```sh
echo REACT_APP_MAINNET_BASE_URL=https://mainnet.infura.io/v3/ >> .env \
&& echo REACT_APP_RINKEBY_BASE_URL=https://rinkeby.infura.io/v3/ >> .env \
&& echo REACT_APP_ROPSTEN_BASE_URL=https://ropsten.infura.io/v3/ >> .env \
&& echo REACT_APP_KOVAN_BASE_URL=https://kovan.infura.io/v3/ >> .env \
&& echo >> .env \
&& echo REACT_APP_INFURA_PROJECT_ID=\<YOUR_INFURA_PROJECT_ID\> >> .env \
&& echo REACT_APP_INFURA_SECRET=\<YOUR_INFURA_PROJECT_SECRET\> >> .env
```

Modify `<YOUR_INFURA_PROJECT_ID>` and `<YOUR_INFURA_PROJECT_SECRET>` appropriately

Install it and run:

```sh
yarn
yarn start
```
