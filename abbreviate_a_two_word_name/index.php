<?php
//
// 8 kyu
// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot seperating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// Patrick Feeney => P.F

function abbrevName($name)
{
//    console.log($name)


//     function console_log($output, $with_script_tags = true) {
//         $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) .
//     ');';
//         if ($with_script_tags) {
//             $js_code = '<script>' . $js_code . '</script>';
//         }
//         echo $js_code;
//     }

//     console_log($name);
    var_dump($name);

    $initial = $name[0];

    $dot= ".";

    $second="";

//     array();

  for($i = 0; $i < strlen($name); $i++)
  {

   var_dump($name[$i], $i);

   if($name[$i] == " "){

     $second = $name[$i + 1];

     var_dump($second);

   }

//        print_r($name[$i]);


//     if($i == 0){

//       $name[$i]

//     }



  }
   var_dump(strtoupper ($initial.$dot.$second ));
    print_r($initial);
  return strtoupper ($initial.$dot.$second );
}

// Sample Tests:

// class MyTestCases extends TestCase
// {
//     public function testSampleTests() {
//       $this->assertEquals("S.H", abbrevName("Sam Harris"));
//       $this->assertEquals("P.F", abbrevName("Patrick Feenan"));
//       $this->assertEquals("E.C", abbrevName("Evan Cole"));
//       $this->assertEquals("P.F", abbrevName("P Favuzzi"));
//       $this->assertEquals("D.M", abbrevName("David Mendieta"));
//     }
// }

 ?>
