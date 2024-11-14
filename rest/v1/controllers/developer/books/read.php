<?php
$conn = null;
$conn = checkDbConnection();
$books = new Books($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("booksid", $_GET)) {
    $books->books_aid = $_GET['booksid'];
    checkId($books->books_aid);
    $query = checkReadById($books);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($books);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();