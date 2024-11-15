<?php
// set http header
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/Category.php';
$conn = null;
$conn = checkDbConnection();
$category = new Category($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);
    // get data
    $category->category_search = $data["searchValue"];
    checkKeyword($category->category_search);
    $query = checkSearch($category);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');