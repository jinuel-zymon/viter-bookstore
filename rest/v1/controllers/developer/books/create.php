<?php
$conn = null;
$conn = checkDbConnection();
$books = new Books($conn);

if (array_key_exists("booksid", $_GET)) {
    checkEndpoint();
} 

checkPayload($data);

$books->books_title = checkIndex($data, "books_title");
$books->books_author = checkIndex($data, "books_author");
$books->books_type = checkIndex($data, "books_type");
$books->books_genre = checkIndex($data, "books_genre");
$books->books_year = checkIndex($data, "books_year");
$books->books_category = checkIndex($data, "books_category");
$books->books_summary = checkIndex($data, "books_summary");
$books->books_price = checkIndex($data, "books_price");
$books->books_photo = checkIndex($data, "books_photo");

$books->books_is_active = 1;
$books->books_created = date("Y-m-d H:i:s");
$books->books_datetime = date("Y-m-d H:i:s");


isNameExist($books, $books->books_title);

$query = checkCreate($books);
returnSuccess($books, "books", $query);