<?php
$conn = null;
$conn = checkDbConnection();
$booktype = new Booktype($conn);

if (array_key_exists("booktypeid", $_GET)) {
    checkEndpoint();
} 

checkPayload($data);

$booktype->booktype_title = checkIndex($data, "booktype_title");

$booktype->booktype_is_active = 1;
$booktype->booktype_created = date("Y-m-d H:i:s");
$booktype->booktype_datetime = date("Y-m-d H:i:s");


isNameExist($booktype, $booktype->booktype_title);

$query = checkCreate($booktype);
returnSuccess($booktype, "booktype", $query);