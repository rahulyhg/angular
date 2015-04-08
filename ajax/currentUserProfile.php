<?php
require_once '../includes/db.php'; // The mysql database connection script
$data = file_get_contents("php://input");
$username = json_decode($data);
$query="SELECT first_name,
   middle_name,
   last_name,
   gender,
   nri_status,
   username,
   address_line1,
   state,
   city,
   area,
   pincode,
   email_id,
   contact_resident_no,
   contact_mobile_no,
   about_yourself,
   native,
   moshal,
   birth_place,
   date_of_birth,
   height,
   weight,
   highest_education,
   education_qualification,
   current_occupation,
   hobbies,
   about_life_partner,
   father_name,
   father_qualification,
   father_occupation,
   mother_name,
   mother_qualification,
   mother_occupation,
   unmarried_brothers,
   married_brothers,
   unmarried_sisters,
   married_sisters,
   relative1_relationship,
   relative1_name,
   relative1_city,
   relative1_contact_no,
   relative2_relationship,
   relative2_name,
   relative2_city,
   relative2_contact_no,
   photo_name, opposite_gender FROM user WHERE admin_password = 'done' AND username = 'aaa'";

$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$arr = array();
if($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		array_push($arr,$row);
	}
}

# JSON-encode the response
echo $json_response = json_encode($arr);
?>