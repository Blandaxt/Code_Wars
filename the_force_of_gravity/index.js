// 8 kyu
// Find the force of gravity between two objects

// Your job is to find the gravitational force between two spherical objects (obj1 , obj2).
//
// input
// Two arrays are give :
//
// arr_val (value array), consists of 3 elements
// 1st element : mass of obj 1
// 2nd element : mass of obj 2
// 3rd element : distance between their centers
// arr_unit (unit array), consists of 3 elements
// 1st element : unit for mass of obj 1
// 2nd element : unit for mass of obj 2
// 3rd element : unit for distance between their centers
// mass units are :
//
// kilogram (kg)
// gram (g)
// milligram (mg)
// microgram (μg)
// pound (lb)
// distance units are :
//
// meter (m)
// centimeter (cm)
// millimeter (mm)
// micrometer (μm)
// feet (ft)
// Note
// value of G = 6.67 x 10-11N.kg–2.m2
//
// 1ft = 0.3048m
//
// 1lb = 0.453592kg
//
// return value must be Newton for force (obviously)
//
// μ copy this from here to use it in your solution

solution = (arr_val, arr_unit) => {
  // you code goes here
  console.log(arr_val, arr_unit)

//   the constant value for gravity
  const G = 6.67e-11 ;

    // The conversion values for the metric/imperial system
     let convert = conversion(arr_unit);

     console.log("convert: ", convert);

     // The gravitational force between two spherical objects
   console.log( (G * arr_val[0] * convert[0] * arr_val[1] * convert[1]) / (arr_val[2] * convert[2]) ** 2);

   let result = (G * arr_val[0] * convert[0] * arr_val[1] * convert[1]) / (arr_val[2] * convert[2]) ** 2;

    return result;

};

function conversion(arr_unit){


  for(let unit = 0; unit < arr_unit.length; unit++){

    console.log(arr_unit[unit])

    if(arr_unit[unit] === "kg"){

      arr_unit[unit] = 1;


    }else
      if(arr_unit[unit] === "g"){

        arr_unit[unit] = 1e-3;

      }else
      if(arr_unit[unit] === "mg"){

        arr_unit[unit] = 1e-6;

      }else
      if(arr_unit[unit] === "μg"){

        arr_unit[unit] = 1e-9;

      }else
      if(arr_unit[unit] === "lb"){

        arr_unit[unit] = .453592;

      }else
      if(arr_unit[unit] === "m"){

        arr_unit[unit] = 1;

      }else
      if(arr_unit[unit] === "cm"){

        arr_unit[unit] = 1e-2;

      }else
      if(arr_unit[unit] === "mm"){

        arr_unit[unit] = 1e-3;

      }else
      if(arr_unit[unit] === "μm"){

        arr_unit[unit] = 1e-6;

      }else
      if(arr_unit[unit] === "ft"){

        arr_unit[unit] = .3048;

      }



  }

  console.log(arr_unit)

  return arr_unit;

}


  // you code goes here

//   function solution([m1,m2,d],[um1,um2,ud]) {
//   console.log([m1,m2,d], [um1,um2,ud])
//   const G = 6.67e-11 ;
//   const conversion = { kg:1, g:1e-3, mg:1e-6, μg:1e-9, lb:.453592
//                      , m:1, cm:1e-2, mm:1e-3, μm:1e-6, ft:.3048
//                      } ;
//    console.log(G * m1 * conversion[um1] * m2 * conversion[um2] / ( d * conversion[ud] ) ** 2 );
//   return G * m1 * conversion[um1] * m2 * conversion[um2] / ( d * conversion[ud] ) ** 2 ;

// }

// Sample Tests:

// Test.describe("Tests", _ => {
// Test.it("Sample tests", _ => {
//     Test.assertApproxEquals(solution([1000, 1000, 100], ["g", "kg", "m"]), 6.67e-12)
//     Test.assertApproxEquals(solution([1000, 1000, 100], ["kg", "kg", "m"]), 6.667e-9)
//     Test.assertApproxEquals(solution([1000, 1000, 100], ["kg", "kg", "cm"]), 0.0000667)
//   })
// })
