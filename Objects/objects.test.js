const objects = require("./objects");

describe("objects", () => {
  it("should return the car make and price for each car", () => {
    //given
    const carsSold = [
      { make: "Kia", model: "Ceed", color: "black", price: 5000 },
      { make: "Audi", model: "A4", color: "grey", price: 10000 },
      { make: "Hyundai", model: "Santa Fe", color: "black", price: 8000 },
      { make: "Kia", model: "Ceed", color: "blue", price: 7000 },
      { make: "Acura", model: "TLX", color: "white", price: 9000 },
      { make: "Audi", model: "A4", color: "black", price: 15090 },
      { make: "Chevrolet", model: "Trailblazer", color: "red", price: 20000 },
    ];

    const totalPriceOfCars = {
      Kia: 12000,
      Audi: 25090,
      Hyundai: 8000,
      Acura: 9000,
      Chevrolet: 20000,
    };

    //when
    const result = objects.sales(carsSold);

    //then
    expect(result).toEqual(totalPriceOfCars);
  });
});
