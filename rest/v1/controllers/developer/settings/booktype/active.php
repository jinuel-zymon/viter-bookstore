<?php

require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/Booktype.php';

$conn = null;
$conn = checkDbConnection();
$booktype = new Booktype($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("booktypeid", $_GET)) {

        checkPayload($data);
        $booktype->booktype_aid = $_GET['booktypeid'];
        $booktype->booktype_is_active = trim($data["isActive"]);
        $booktype->booktype_datetime = date("Y-m-d H:i:s");

        checkId($booktype->booktype_aid);
        $query = checkActive($booktype);
        http_response_code(200);
        returnSuccess($booktype, "booktype", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();