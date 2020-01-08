const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function reducer(batteryBatches) {
  let totalBatteries = 0;

  batteryBatches.forEach(battery => {
    totalBatteries += battery;
  });
  return totalBatteries;
}
