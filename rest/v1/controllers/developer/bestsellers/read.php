<?php
$conn = null;
$conn = checkDbConnection();
$bestsellers = new Bestsellers($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("bestsellersid", $_GET)) {
    $bestsellers->bestsellers_aid = $_GET['bestsellersid'];
    checkId($bestsellers->bestsellers_aid);
    $query = checkReadById($bestsellers);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($bestsellers);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();