import { useState } from 'react'
//use  useNavigate hook to: Go to the previous or next pages or Redirect user to a specific Url
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(searchTerm){
      navigate(`search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  return (
    //padding left = 2
    // margin right = 5 on small device
    <Paper
      component="form"
      onSubmit= {handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid black',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
      }}
    >
      <input
        className='search-bar'
        placeholder='Search'
        value={searchTerm}
        onChange={(e) =>  
          setSearchTerm(e.target.value)
        } />
      {/* padding 10px color red */}
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>

    </Paper>
  )
}

export default Searchbar