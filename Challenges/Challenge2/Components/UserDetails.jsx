
const UserDetails = ({name, age, job}) => {
  return (
    <div>
        <ul>
            <li>Name: {name} | age: {age} | job: {job} | can drive: {age > 18 ? "can" : "cann't"}</li>
        </ul>
    </div>
  )
}

export default UserDetails