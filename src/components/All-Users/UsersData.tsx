import  { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './UsersData.css';
import users from '../../JSON/generated (1).json';
import option from "../../assets/option.svg";
import filter from '../../assets/filter-results-button.svg';
import FIlter from '../Filter/FIlter';

const UsersData = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const [clickedBtn, setClickedBtn] = useState(false);

  const clickBtn = () => {
    setClickedBtn(!clickedBtn);
    console.log(clickedBtn);
}

  const offset = currentPage * itemsPerPage;
  const Users = users.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  // Handle page click event
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handlePageChange = (e) => {
    setCurrentPage(Number(e.target.value));
  }

  const options = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }
  return (
    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            <th onClick={clickBtn}>
              <div onClick={clickBtn}>
              <span>ORGANIZATION </span>
              <img src={filter} alt="Filter Icon" />
              </div>
            </th>
            <th onClick={clickBtn}>
            <div>
              <span>USERNAME </span>
              <img src={filter} alt="Filter Icon" />
              </div>
            </th>
            <th onClick={clickBtn}>
            <div>
              <span>EMAIL </span>
              <img src={filter} alt="Filter Icon" />
              </div>
            </th >
            <th onClick={clickBtn}>
            <div>
              <span>PHONE-NO </span>
              <img src={filter} alt="Filter Icon" />
              </div>
            </th>
            <th onClick={clickBtn}>
            <div>
              <span>DATE JOINED </span>
              <img src={filter} alt="Filter Icon" />
              </div>
            </th>
            <th onClick={clickBtn}>
              <div>
              <span>STATUS </span>
              <img src={filter} alt="Filter Icon" />
              </div></th>
          </tr>
        </thead>
        <tbody>
          {Users.map((row, index) => ( 
            <tr key={index} className='tr'>
              <td>{row.personal?.organization.toLowerCase()}</td>
              <td>{row.username}</td>
              <td>{row.personal?.email}</td>
              <td>0{row.personal?.phone}</td>
              <td>{`${new Date(row.personal?.dateJoined.slice(0, row.personal?.dateJoined.indexOf(' '))).toLocaleDateString('en-US',options)}`}</td>
              <td >
                <span className={`status ${row.personal?.status}`}>
                {row.personal?.status}

                </span>
                </td>
              <td>
                <img src={option} alt="Option Icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-flex">
        <div className="showing-page-filter">        
        <span>Showing</span>
        <select id="page-select" value={currentPage} onChange={handlePageChange}>
          {Array.from({ length: pageCount }, (_, index) => (
            <option key={index} value={index}>
              {index + 1}
            </option>
          ))}
        </select>
        <span> out of {pageCount}</span>
      {/* </div> */}
        </div>
        <ReactPaginate
          previousLabel={<span>&lt;</span>}
          nextLabel={<span>&gt;</span>}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"previous-item"}
          previousLinkClassName={"previous-link"}
          nextClassName={"next-item"}
          nextLinkClassName={"next-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>

    {clickedBtn && <FIlter/>}
    </div>
  );
};

export default UsersData;