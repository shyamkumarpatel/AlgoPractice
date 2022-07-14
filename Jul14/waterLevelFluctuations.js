/**
 * From a Chipotle interview.
 */

const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

// temp = 20 
const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected3 = 11; // 12 - 1 = 11

const riverLevels4 = [1, 5];
const expected4 = 4;

const riverLevels5 = [5, 1];
const expected5 = -1;

const riverLevels6 = [9, 7, 7, 7];
const expected6 = -1;

const riverLevels7 = [42];
const expected7 = -1;

/**
  * It ain't much, but it's honest work. A worker who measures water level
  * fluctuations in a river is asked to find the largest fluctuation in water
  * levels during a day, but only for rises in water levels.
  * - Time: O(?).
  * - Space: O(?).
  * @param {Array<number>} waterLevels Non-empty .
  * @returns {number} The max water-level rise amount or -1 if none.
  */
function measureWaterLevels(waterLevels) {
    function measureWaterLevels(waterLevels) {
        //let fluctuations = [];
        let maxRaise = 0;
        if(waterLevels.length <= 1) return -1;
        
        for(let i=0; i < waterLevels.length; i++){
            for(let j=0; j < i; j++){
                if((waterLevels[i]-waterLevels[j]) > maxRaise){
                    maxRaise = waterLevels[i]-waterLevels[j];
                }
            }
        }
        return maxRaise > 0 ? maxRaise : -1 ;
    }
}

console.log("Result:   ",measureWaterLevels(riverLevels1));
console.log("Expected: ", expected1);
console.log("Result:   ",measureWaterLevels(riverLevels2));
console.log("Expected: ", expected2);
console.log("Result:   ",measureWaterLevels(riverLevels3));
console.log("Expected: ", expected3);
console.log("Result:   ",measureWaterLevels(riverLevels4));
console.log("Expected: ", expected4);
console.log("Result:   ",measureWaterLevels(riverLevels5));
console.log("Expected: ", expected5);
console.log("Result:   ",measureWaterLevels(riverLevels6));
console.log("Expected: ", expected6);
console.log("Result:   ",measureWaterLevels(riverLevels7));
console.log("Expected: ", expected7);