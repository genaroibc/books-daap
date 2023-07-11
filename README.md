# Books dApp

A simple dApp to manage a book library.

## Getting Started

To get started, clone the repository and move to the root folder:

```bash
git clone https://github.com/genaroibc/books-dapp.git && cd books-dapp
```

### Backend

1. Install [Ganache](https://trufflesuite.com/ganache/) and create a quick start workspace:
   ![ganache](https://github.com/genaroibc/books-dapp/assets/98661193/4314542a-c1a4-46ff-8528-2feabe10e34b)

2. Open a new terminal, move to `/backend` folder, and install dependencies:

```bash
cd backend && npm install
```

3. Install `truffle` globally and deploy the contract:

```bash
npm install truffle -g && truffle deploy
```

### Frontend

1. Add a new network in Metamask with the following parameters:

| Network Name | RPC URL               | Chain ID | Symbol |
| ------------ | --------------------- | -------- | ------ |
| Ganache      | http://localhost:7545 | 1337     | ETH    |

![metamask-ganache](https://github.com/genaroibc/books-dapp/assets/98661193/c98cbdd4-88d9-4af3-8cca-dca3b98bf5e8)

2. Import the first account from Ganache to Metamask using its private key:

![ganachekeys](https://github.com/genaroibc/books-dapp/assets/98661193/6e9cb3da-5130-4eef-a8c1-7cd2c8bbc655)
![privakey](https://github.com/genaroibc/books-dapp/assets/98661193/0a7266b5-c6ec-4fd5-8629-fb10e39d0056)

3. Open a new terminal, install dependencies, and start the dev server:

```bash
cd frontend && npm install && npm run dev
```

Finally, open [http://localhost:5173](http://localhost:5173) in your browser to start playing. Make sure you use the account imported from Ganache to sign transactions.

### Testing

To run the tests, run the following command in the `/backend` folder:

```bash
truffle test
```

## Stack

- Solidity
- React
- TypeScript
- Mocha
