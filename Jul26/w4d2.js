              /* 
This was extracted from a react interview challenge. The items were to be displayed in category groups.
Given an array of objects that contain a category key,
return a hash table to group the objects by their category.
Make the grouping case-insensitive.
Bonus: allow the key that is grouped by to be provided.
*/


const objects = [
    {
      name: "Baby Yoda",
      category: "cute",
    },
    {
      name: "Cricket Protein",
      category: "food",
    },
    {
      name: "Groot",
      category: "Cute",
    },
    {
      name: "Ancient India",
      category: "Cradle of Civilization",
    },
    {
      name: "Wasp Crackers",
      category: "Food",
    },
    {
      name: "The Fertile Crescent",
      category: "Cradle of Civilization",
    },
  ];
  
  const expected = {
    cute: [
      {
        name: "Baby Yoda",
        category: "cute",
      },
      {
        name: "Groot",
        category: "Cute",
      },
    ],
    food: [
      {
        name: "Cricket Protein",
        category: "food",
      },
      {
        name: "Wasp Crackers",
        category: "Food",
      },
    ],
    "cradle of civilization": [
      {
        name: "Ancient India",
        category: "Cradle of Civilization",
      },
      {
        name: "The Fertile Crescent",
        category: "Cradle of Civilization",
      },
    ],
  };
  
  /* 
  Given an array of objects that contain a category key,
  return a hash table to group the objects by their category.
  Make the grouping case-insensitive.
  Bonus: allow the key that is grouped by to be provided.
  */
  function groupObjects(items) {
    let rt_dict = {};
    let arrOfKys = [];

    for (let i = 0; i < items.length; i++){
        if (!arrOfKys.includes(items[i].category)){
            arrOfKys.push(items[i].category.toLowerCase());
        }
    }

    for (let i = 0; i < arrOfKys.length; i++){
        let arrOfobj = [];
        for (let j = 0; j < items.length; j++){
            if(items[j].category.toLowerCase() == arrOfKys[i]) arrOfobj.push(items[j]);
        }
        rt_dict[arrOfKys[i]] = arrOfobj;
    }

    return rt_dict;
}
  
  console.log(groupObjects(objects));
  //console.log(expected);
  //console.log();
  
  
  /* 
    Given two strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    # character means a backspace character.
    i.e., after processing the backspaces, are the two strings equal?
    Bonus: solve in O(n) time
  */
  
  const S1 = "ab#c"; // ac
  const T1 = "ad#c"; // ac
  const expected1 = true;
  // Explanation: Both S and T become "ac"
  
  const S2 = "ab##"; // 
  const T2 = "c#d#"; //
  const expected2 = true;
  // Explanation: Both S and T become ""
  
  const S3 = "a##c"; // c
  const T3 = "#a#c"; // c
  const expected3 = true;
  // Explanation: Both S and T become "c"
  
  const S4 = "a#c"; // c
  const T4 = "ac#"; // a
  const expected4 = false;
  // Explanation: S becomes "c" while T becomes "a".
  
  /**
   * Determines if the given strings are equal after the backspace characters
   * "#" are processed.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} S
   * @param {string} T
   * @returns {boolean} Whether the given strings are equal after backspaces
   *    have been processed.
   */
  function backspaceStringCompare(S, T) {}
  
  
  
  
  