//style
import "./Myform.css"

const Myform = () => {
  return (
    <div>
        {/* 1 - create form */}

        <form>
            <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" placeholder="Type your name" />
            </div>
            <input type="submit" value="enviar" />
        </form>

    </div>
  )
}

export default Myform