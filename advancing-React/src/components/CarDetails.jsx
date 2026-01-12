
function CarDetails({brand, km, color}) {
  return (
    <div>
        <h2>Details car</h2>
        <ul>
            <li>Brand: {brand}</li>
            <li>KM: {km}</li>
            <li>Color: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails