// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

contract BookContract {
    struct Book {
        uint id;
        string title;
        string author;
        string description;
        uint createdAt;
    }

    mapping(uint => Book) public books;

    uint internal nextBookId = 0;

    function createBook(
        string memory _title,
        string memory _description,
        string memory _author
    ) public {
        books[nextBookId] = (
            Book({
                id: nextBookId++,
                title: _title,
                author: _author,
                description: _description,
                createdAt: block.timestamp
            })
        );
    }

    // function getBook() {}

    // function updateBook() {}

    // function deleteBook() {}
}
