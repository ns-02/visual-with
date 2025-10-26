import { Search } from "lucide-react";
import "./InputSearch.css"

function InputSearch() {
  return (
    <div className="search-container">
      <Search className="search-icon" />
      <input className="input-element" placeholder="검색" />
    </div>
    
  )
}

export default InputSearch;