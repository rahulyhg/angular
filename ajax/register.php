<?php
  require_once '../includes/db.php'; // The mysql database connection script
  $data = file_get_contents("php://input");

  $objData = json_decode($data);


  $firstname = $objData->first_name;
  $middlename = $objData->middle_name;
  $lastname = $objData->last_name;
  $gender = $objData->gender;
  $nri_status = $objData->nri_status;
  $profile_creator = $objData->profile_creator;
  $username = $objData->username;
  $password = $objData->password;

  $address_line1 = $objData->address_line1;

  $state = $objData->state;
  $city = $objData->city;
  $area = $objData->area;
  $pincode = $objData->pincode;
  $email_id = $objData->email_id;

  $contact_no_r = $objData->contact_no_r;
  $contact_no_m = $objData->contact_no_m;
  $yourself = $objData->yourself;
  $native = $objData->native;
  $moshal = $objData->moshal;
  $birth_place = $objData->birth_place;
  $dob = $objData->dob;
  $height = $objData->height;
  $weight = $objData->weight;
  $education_level = $objData->education_level;
  $education = $objData->education;

  $occupation = $objData->occupation;


  $hobbies = $objData->hobbies;
  $partner = $objData->partner;
  $name_of_father = $objData->name_of_father;
  $qualification_of_father = $objData->qualification_of_father;
  $occupation_of_father = $objData->occupation_of_father;
  $name_of_mother = $objData->name_of_mother;
  $qualification_of_mother = $objData->qualification_of_mother;
  $occupation_of_mother = $objData->occupation_of_mother;
  $unmarried_brothers = $objData->unmarried_brothers;
  $married_brothers = $objData->married_brothers;
  $unmarried_sisters = $objData->unmarried_sisters;
  $married_sisters = $objData->married_sisters;
  $relative1 = $objData->relative1;
  $relative1_name = $objData->relative1_name;
  $relative1_city = $objData->relative1_city;
  $relative1_contact_no = $objData->relative1_contact_no;
  $relative2 = $objData->relative2;
  $relative2_name = $objData->relative2_name;
  $relative2_city = $objData->relative2_city;
  $relative2_contact_no = $objData->relative2_contact_no;
  $admin_password = "hello there";
  $created_date = date("Y/m/d");
  $photo_name = $objData->photo_name;
  $opposite_gender = $objData->opposite_gender;

  $query="INSERT INTO user VALUES ('$firstname',
  '$middlename',
  '$lastname',
   '$gender',
   '$nri_status',
   '$profile_creator',
   '$username',
   '$password',
   '$address_line1',
   '$state',
   '$city',
   '$area',
   '$pincode',
   '$email_id',
   '$contact_no_r',
   '$contact_no_m',
   '$yourself',
   '$native',
   '$moshal',
   '$birth_place',
   '$dob',
   '$height',
   '$weight',
   '$education_level',
   '$education',
   '$occupation',
   '$hobbies',
   '$partner',
   '$name_of_father',
   '$qualification_of_father',
   '$occupation_of_father',
   '$name_of_mother',
   '$qualification_of_mother',
   '$occupation_of_mother',
   '$unmarried_brothers',
   '$married_brothers',
   '$unmarried_sisters',
   '$married_sisters',
   '$relative1',
   '$relative1_name',
   '$relative1_city',
   '$relative1_contact_no',
   '$relative2',
   '$relative2_name',
   '$relative2_city',
   '$relative2_contact_no',
   '$admin_password',
   '$created_date',
   '$photo_name',
   '$opposite_gender'
  )";



    $result = $mysqli->query($query);

    /*$result = $mysqli->affected_rows;

    echo $json_response = json_encode($result);*/

    print 'successful';

  ?>