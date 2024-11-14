<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/Booktype.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$booktype = new Booktype($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $booktype->booktype_start = $_GET['start'];
        $booktype->booktype_total = 10;
        checkLimitId($booktype->booktype_start, $booktype->booktype_total);
        $query = checkReadLimit($booktype);
        $total_result = checkReadAll($booktype);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $booktype->booktype_total,
            $booktype->booktype_start
        );
    }
    checkEndpoint();
}

http_response_code(200);
checkAccess();