<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/Genre.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$genre = new Genre($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $genre->genre_start = $_GET['start'];
        $genre->genre_total = 10;
        checkLimitId($genre->genre_start, $genre->genre_total);
        $query = checkReadLimit($genre);
        $total_result = checkReadAll($genre);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $genre->genre_total,
            $genre->genre_start
        );
    }
    checkEndpoint();
}

http_response_code(200);
checkAccess();