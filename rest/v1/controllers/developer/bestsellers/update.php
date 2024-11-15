<?php
$conn = null;
$conn = checkDbConnection();
$bestsellers = new Bestsellers($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("bestsellersid", $_GET)) {
    checkPayload($data);

    $bestsellers->bestsellers_aid = $_GET['bestsellersid'];
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

    $bestsellers->bestsellers_datetime = date("Y-m-d H:i:s");
    $bestsellers_title_old = strtolower($data["bestsellers_title_old"]);
    // checkId($bestsellers->bestsellers_aid);
    compareName($bestsellers, $bestsellers_title_old, $bestsellers->bestsellers_title);

    $query = checkUpdate($bestsellers);
    returnSuccess($bestsellers, "bestsellers", $query);
}

checkEndpoint();