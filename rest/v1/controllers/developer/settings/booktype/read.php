<?php
$conn = null;
$conn = checkDbConnection();
$booktype = new Booktype($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("booktypeid", $_GET)) {
    $booktype->booktype_aid = $_GET['booktypeid'];
    checkId($booktype->booktype_aid);
    $query = checkReadById($booktype);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($booktype);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();