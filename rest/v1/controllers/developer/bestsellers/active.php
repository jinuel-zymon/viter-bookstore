<?php

require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/Bestsellers.php';

$conn = null;
$conn = checkDbConnection();
$bestsellers = new Bestsellers($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("bestsellersid", $_GET)) {

        checkPayload($data);
        $bestsellers->bestsellers_aid = $_GET['bestsellersid'];
        $bestsellers->bestsellers_is_active = trim($data["isActive"]);
        $bestsellers->bestsellers_datetime = date("Y-m-d H:i:s");

        checkId($bestsellers->bestsellers_aid);
        $query = checkActive($bestsellers);
        http_response_code(200);
        returnSuccess($bestsellers, "bestsellers", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();