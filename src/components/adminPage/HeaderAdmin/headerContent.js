import { useState, useRef, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./headerContent.scss";

function HeaderContent(name) {
  const [title, setTitle] = useState(name);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef(null);

  const handleInputChange = async (value) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    const fetchOptions = async () => {
      const response = await fetch(
        `http://localhost:81/api/search?key=${searchTerm}`
      )
        .then((res) => res.json())
        .then((data) => {
          setResults(data.searchProduct);
          setIsDropdownOpen(true);
        });
    };

    if (searchTerm) {
      fetchOptions();
    } else {
      setIsDropdownOpen(false);
    }
  }, [searchTerm]);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  //   const handleKeyDown = (event) => {
  //     if (event.key === "Enter") {
  //       handleSearch();
  //     }
  //   };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  console.log(results);

  return (
    <div className="admin-container">
      <header className="admin-header">
        <span className="admin-title">{title.props}</span>
        <div className="admin-search" ref={ref}>
          <input
            className="admin-search__input"
            placeholder="Tìm kiếm..."
            type="text"
            value={searchTerm}
            onChange={(e) => handleInputChange(e.target.value)}
            // onKeyDown={handleKeyDown}
          />
          <label>
            <BiSearchAlt className="icon-search" />
          </label>
          {isDropdownOpen && results.length > 0 && (
            <ul className="admin-search__results">
              {results.map((result) => (
                <li className="admin-search__results--item" key={result.id}>
                  <div className="admin-search__results--item-img">
                    <img
                      className="img-product"
                      src={`data:image/png;base64,${result.image}`}
                    />
                  </div>
                  <div className="admin-search__results--item-info">
                    <span>{result.name}</span>
                    <div>
                      <span>Tồn kho: {result.stock}</span>
                      <span>{result.unit_price}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="admin-profile">
          <div className="admin-profile__user">Admin User</div>
          <IoMdNotificationsOutline />
        </div>
      </header>
    </div>
  );
}

export default HeaderContent;
