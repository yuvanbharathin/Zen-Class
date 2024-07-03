class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute, bookingFee) {
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
      this.bookingFee = bookingFee;
    }
  
    setRates(baseFare, costPerMile, costPerMinute, bookingFee) {
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
      this.bookingFee = bookingFee;
    }
  
    calculateFare(distance, time) {
      const distanceCost = this.costPerMile * distance;
      const timeCost = this.costPerMinute * time;
      const totalFare = this.baseFare + distanceCost + timeCost + this.bookingFee;
      return totalFare;
    }
  
    displayFareDetails(distance, time) {
      const distanceCost = this.costPerMile * distance;
      const timeCost = this.costPerMinute * time;
      const totalFare = this.calculateFare(distance, time);
  
      console.log("Fare Details:");
      console.log(`Base Fare: $${this.baseFare.toFixed(2)}`);
      console.log(`Distance Cost (${distance} miles): $${distanceCost.toFixed(2)}`);
      console.log(`Time Cost (${time} minutes): $${timeCost.toFixed(2)}`);
      console.log(`Booking Fee: $${this.bookingFee.toFixed(2)}`);
      console.log(`Total Fare: $${totalFare.toFixed(2)}`);
    }
  }
  
  // Example usage:
  const baseFare = 2.50;       // Base fare in dollars
  const costPerMile = 1.75;    // Cost per mile in dollars
  const costPerMinute = 0.25;  // Cost per minute in dollars
  const bookingFee = 1.00;     // Booking fee in dollars
  
  const uberCalculator = new UberPriceCalculator(baseFare, costPerMile, costPerMinute, bookingFee);
  
  const distance = 10; // Distance in miles
  const time = 15;     // Time in minutes
  
  const fare = uberCalculator.calculateFare(distance, time);
  uberCalculator.displayFareDetails(distance, time);
  