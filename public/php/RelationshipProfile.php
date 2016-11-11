// Writes from the inputted Relationship Profile data to a specified JSON file.

<?php
	$fp = fopen("../json/RelationshipProfile.json", "w");
	fwrite($fp, json_encode($_POST["ProfileInfo"]));
	fclose($fp);
?>