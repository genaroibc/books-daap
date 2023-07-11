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
![ganache](https://github.com/genaroibc/books-dapp/assets/98661193/4314542a-c1a4-46ff-8528-2feabe10e34b)

2. Install `truffle` globally and deploy the contract:

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
