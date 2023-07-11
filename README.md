# Books dApp

A simple dApp to manage a book library.

## Getting Started

To get started, clone the repository and move to the root folder:

```bash
git clone https://github.com/genaroibc/books-dapp.git && cd books-dapp
```

Then, open two terminals, one for the frontend and one for the backend, and install dependencies:

```bash
# terminal 1
cd frontend && npm install
```

```bash
# terminal 2
cd backend && npm install
```

### Backend

1. Install [Ganache](https://trufflesuite.com/ganache/) and create a quick start workspace:

2. Install `truffle` globally and deploy the contract:

```bash
npm install truffle -g && truffle deploy
```

### Frontend

1. Add a new network in Metamask with the following parameters:

| Network Name | RPC URL               | Chain ID | Symbol |
| ------------ | --------------------- | -------- | ------ |
| Ganache      | http://localhost:7545 | 1337     | ETH    |

2. Import the first account from Ganache to Metamask using its private key:

3. Start the dev server:

```bash
npm run dev
```

Finally, open [http://localhost:5173](http://localhost:5173) in your browser to start playing

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
