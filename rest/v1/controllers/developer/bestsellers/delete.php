<?php
$conn = null;
$conn = checkDbConnection();
$bestsellers = new Bestsellers($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("bestsellersid", $_GET)) {
    $bestsellers->bestsellers_aid = $_GET['bestsellersid'];
    checkId($bestsellers->bestsellers_aid);
    // isAssociated($bestsellers);
    $query = checkDelete($bestsellers);
    returnSuccess($bestsellers, "bestsellers", $query);
}

checkEndpoint();