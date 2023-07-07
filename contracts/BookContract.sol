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

    function updateBook(
        uint _id,
        string memory _title,
        string memory _description
    ) public {
        uint index = findBookIndex(_id);

        books[index].title = _title;
        books[index].description = _description;
    }

    function deleteBook(uint _id) public {
        uint index = findBookIndex(_id);

        delete books[index];
    }

    function findBookIndex(uint _id) public view returns (uint) {
        for (uint i = 0; i < nextBookId; i++) {
            if (books[i].id == _id) {
                return i;
            }
        }

        revert("Book not found");
    }
}
