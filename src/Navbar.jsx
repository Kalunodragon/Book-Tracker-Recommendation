import { Button } from "@mui/material"

function Navbar() {
 
  return (
    <div>
        <h1>Book-ai-ly</h1>
        <Button variant="contained" color="primary">
            Home
        </Button>
        <Button variant="contained" color="primary">
            About
        </Button>
        <Button variant="contained" color="primary">
            Search
        </Button>
    </div>
  )
}

export default Navbar