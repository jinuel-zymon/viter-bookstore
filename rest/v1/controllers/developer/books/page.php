<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/Books.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$books = new Books($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $books->books_start = $_GET['start'];
        $books->books_total = 10;
        checkLimitId($books->books_start, $books->books_total);
        $query = checkReadLimit($books);
        $total_result = checkReadAll($books);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $books->books_total,
            $books->books_start
        );
    }
    checkEndpoint();
}

http_response_code(200);
checkAccess();