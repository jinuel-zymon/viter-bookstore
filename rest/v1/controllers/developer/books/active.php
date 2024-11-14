<?php

require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/Books.php';

$conn = null;
$conn = checkDbConnection();
$books = new Books($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("booksid", $_GET)) {

        checkPayload($data);
        $books->books_aid = $_GET['booksid'];
        $books->books_is_active = trim($data["isActive"]);
        $books->books_datetime = date("Y-m-d H:i:s");

        checkId($books->books_aid);
        $query = checkActive($books);
        http_response_code(200);
        returnSuccess($books, "books", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();