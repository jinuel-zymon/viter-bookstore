<?php
$conn = null;
$conn = checkDbConnection();
$booktype = new Booktype($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("booktypeid", $_GET)) {
    $booktype->booktype_aid = $_GET['booktypeid'];
    checkId($booktype->booktype_aid);
    // isAssociated($booktype);
    $query = checkDelete($booktype);
    returnSuccess($booktype, "booktype", $query);
}

checkEndpoint();