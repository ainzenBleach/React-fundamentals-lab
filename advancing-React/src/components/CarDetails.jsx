
function CarDetails({brand, km, color, newCar}) {
  return (
    <div>
        <h2>Details car</h2>
        <ul>
            <li>Brand: {brand}</li>
            <li>KM: {km}</li>
            <li>Color: {color}</li>
            <li>New: {newCar == true ? "his car is new" : "This car is old"} </li>
        </ul>
    </div>
  )
}

export default CarDetails