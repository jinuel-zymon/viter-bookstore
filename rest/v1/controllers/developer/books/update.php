<?php
$conn = null;
$conn = checkDbConnection();
$books = new Books($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("booksid", $_GET)) {
    checkPayload($data);

    $books->books_aid = $_GET['booksid'];
    $books->books_title = checkIndex($data, "books_title");
    $books->books_author = checkIndex($data, "books_author");
    $books->books_type = checkIndex($data, "books_type");
    $books->books_genre = checkIndex($data, "books_genre");
    $books->books_year = checkIndex($data, "books_year");
    $books->books_category = checkIndex($data, "books_category");
    $books->books_summary = checkIndex($data, "books_summary");
    $books->books_price = checkIndex($data, "books_price");
    $books->books_photo = checkIndex($data, "books_photo");

    $books->books_datetime = date("Y-m-d H:i:s");
    $books_title_old = strtolower($data["books_title_old"]);
    // checkId($books->books_aid);
    compareName($books, $books_title_old, $books->books_title);

    $query = checkUpdate($books);
    returnSuccess($books, "books", $query);
}

checkEndpoint();