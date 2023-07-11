# Books dApp

A simple dApp to manage a book library.

## Getting Started

To get started, clone the repository and move to the root folder:

```bash
git clone https://github.com/genaroibc/books-daap.git && cd books-dapp
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

To deploy the contract, install [Ganache](https://trufflesuite.com/ganache/) and create a quick start workspace

### Frontend

To start the dev server, run the following command in the `/frontend` folder:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

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
