const Search = ({onSubmit, onChange, value}) => {

  return (
    <form>
      <input
  type="text"
  name="search"
  value={value}
  placeholder="Search Games"
  onChange={onChange}
>
</input>
<button type='submit' onSubmit={onSubmit}></button>
    </form>
  )
}

export default Search
