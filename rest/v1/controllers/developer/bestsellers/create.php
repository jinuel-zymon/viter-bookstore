<?php
$conn = null;
$conn = checkDbConnection();
$bestsellers = new Bestsellers($conn);

if (array_key_exists("bestsellersid", $_GET)) {
    checkEndpoint();
} 

checkPayload($data);

$bestsellers->bestsellers_title = checkIndex($data, "bestsellers_title");
$bestsellers->bestsellers_author = checkIndex($data, "bestsellers_author");
$bestsellers->bestsellers_type = checkIndex($data, "bestsellers_type");
$bestsellers->bestsellers_rank = checkIndex($data, "bestsellers_rank");
$bestsellers->bestsellers_genre = checkIndex($data, "bestsellers_genre");
$bestsellers->bestsellers_year = checkIndex($data, "bestsellers_year");
$bestsellers->bestsellers_category = checkIndex($data, "bestsellers_category");
$bestsellers->bestsellers_summary = checkIndex($data, "bestsellers_summary");
$bestsellers->bestsellers_price = checkIndex($data, "bestsellers_price");
$bestsellers->bestsellers_photo = checkIndex($data, "bestsellers_photo");

$bestsellers->bestsellers_is_active = 1;
$bestsellers->bestsellers_created = date("Y-m-d H:i:s");
$bestsellers->bestsellers_datetime = date("Y-m-d H:i:s");


isNameExist($bestsellers, $bestsellers->bestsellers_title);

$query = checkCreate($bestsellers);
returnSuccess($bestsellers, "bestsellers", $query);