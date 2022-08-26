const Choices = ({ userChoice, computerChoice, result }) => {
  return (
    <div className="container">
        <div className="Items" >
            <div className="item">
                Computer Choice : {computerChoice}
            </div>
            <div className="item">
                User Choice : {userChoice}
            </div>
            <div className="item">
                Result : {result}
            </div>
        </div>
    </div>
  )
}

export default Choices;