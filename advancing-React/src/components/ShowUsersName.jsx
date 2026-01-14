
const ShorUsersName = (props) => {
  return (
    <div>
        <h2>The name of user is: {props.name}</h2>
        <h2>The name of user is: {props.nameConst}</h2>
        <h2>The name of user is: {props.nameState}</h2>
    </div>
  )
}

export default ShorUsersName