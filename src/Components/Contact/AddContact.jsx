const AddContact = () => {
  return (
    
    <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <input 
          type="text" 
          placeholder="Add Contact"
          />
        </form>
    </div>

  )
}

export default AddContact;