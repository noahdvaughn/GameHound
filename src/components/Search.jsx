const Search = ({getSearchResults, onChange, value}) => {

  return (
    <form onSubmit={getSearchResults}>
      <input
  type="text"
  name="search"
  value={value}
  placeholder="Search Games"
  onChange={onChange}
>
</input>
<button type='submit'></button>
    </form >
  )
}

export default Search
