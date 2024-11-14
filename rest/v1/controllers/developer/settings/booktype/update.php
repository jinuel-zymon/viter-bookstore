<?php
$conn = null;
$conn = checkDbConnection();
$booktype = new Booktype($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("booktypeid", $_GET)) {
    checkPayload($data);

    $booktype->booktype_aid = $_GET['booktypeid'];
    $booktype->booktype_title = checkIndex($data, "booktype_title");

    $booktype->booktype_datetime = date("Y-m-d H:i:s");
    $booktype_title_old = strtolower($data["booktype_title_old"]);
    // checkId($booktype->booktype_aid);
    compareName($booktype, $booktype_title_old, $booktype->booktype_title);

    $query = checkUpdate($booktype);
    returnSuccess($booktype, "booktype", $query);
}

checkEndpoint();