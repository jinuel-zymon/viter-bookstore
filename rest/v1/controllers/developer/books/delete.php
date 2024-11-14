<?php
$conn = null;
$conn = checkDbConnection();
$books = new Books($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("booksid", $_GET)) {
    $books->books_aid = $_GET['booksid'];
    checkId($books->books_aid);
    // isAssociated($books);
    $query = checkDelete($books);
    returnSuccess($books, "books", $query);
}

checkEndpoint();