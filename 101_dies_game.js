function canEarnBonus(a, b) {
    // Calculate the distance between the two positions
    const distance = Math.abs(b - a);
    
    // Check if the distance is between 1 and 6 inclusive
    return distance >= 1 && distance <= 6;
  }
  
  // Example usage:
  console.log(canEarnBonus(3, 8)); // true, because 8 - 3 = 5, which is within the range 1-6
  console.log(canEarnBonus(1, 2)); // true, because 2 - 1 = 1, which is within the range 1-6
  console.log(canEarnBonus(4, 10)); // false, because 10 - 4 = 6, which is not within the range 1-6
  console.log(canEarnBonus(6, 12)); // true, because 12 - 6 = 6, which is within the range 1-6
  