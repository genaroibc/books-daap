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

1. Install [Ganache](https://trufflesuite.com/ganache/) and create a quick start workspace

2. Deploy the contract using `truffle`

```bash
npm install truffle -g && truffle deploy
```

### Frontend

Start the dev server by running the following command in the `/frontend` folder:

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Testing

To run the tests, run the following command:

```bash
truffle test
```

## Stack

- Solidity
- React
- TypeScript
- Mocha
