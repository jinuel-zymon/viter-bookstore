<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/Mop.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$mop = new Mop($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $mop->mop_start = $_GET['start'];
        $mop->mop_total = 10;
        checkLimitId($mop->mop_start, $mop->mop_total);
        $query = checkReadLimit($mop);
        $total_result = checkReadAll($mop);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $mop->mop_total,
            $mop->mop_start
        );
    }
    checkEndpoint();
}

http_response_code(200);
checkAccess();