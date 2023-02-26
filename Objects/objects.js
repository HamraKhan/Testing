function sales(carsSold) {
let totalSales = {};

  carsSold.forEach((car) => {
    if (totalSales.hasOwnProperty(car.make)) {
      totalSales[car.make] += car.price;
    } else {
      totalSales[car.make] = car.price;
    }
  });
  
  return totalSales;
}

module.exports = {
  sales,
};
