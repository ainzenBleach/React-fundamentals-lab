import "./CarDetails.css"
function CarDetails() {
  return (
    <div>
        <h1>Cars</h1>
        <ul>
            <li className="car-item">name: BMW | KM: 5255 | color: blue</li>
            <li className="car-item">name: Fiat | KM: 52521 | color: red</li>
            <li className="car-item">name: Corola | KM: 0 | color: green</li>
        </ul>
    </div>
  )
}

export default CarDetails