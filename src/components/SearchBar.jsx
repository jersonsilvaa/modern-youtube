import React from 'react'

const SearchBar = () => (
    <div className="navigation__search">
      <input type="search" placeholder="Buscar" onChange={() => {}} />
      <button className="navigation__button navigation__search__icon">
          <svg style={{ fill: '#fff' }} viewBox="0 0 24 24" className="navigation__icon">
              <g>
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" ></path>
              </g>
          </svg>
      </button>
      <button className="navigation__button">
          <svg style={{ fill: '#fff' }} viewBox="0 0 24 24" className="navigation__icon"><g ><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" ></path></g></svg>
      </button>
  </div>
)

export default SearchBar