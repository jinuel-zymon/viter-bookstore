<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/Bestsellers.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$bestsellers = new Bestsellers($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $bestsellers->bestsellers_start = $_GET['start'];
        $bestsellers->bestsellers_total = 10;
        checkLimitId($bestsellers->bestsellers_start, $bestsellers->bestsellers_total);
        $query = checkReadLimit($bestsellers);
        $total_result = checkReadAll($bestsellers);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $bestsellers->bestsellers_total,
            $bestsellers->bestsellers_start
        );
    }
    checkEndpoint();
}

http_response_code(200);
checkAccess();