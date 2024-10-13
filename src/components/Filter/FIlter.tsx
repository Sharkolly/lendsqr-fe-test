import './Filter.css';

const FIlter = () => {
  return (
    <div>
        <div className='input-form'>
        <div className="organization-input input-flex">
             <p>Organization</p>
             <select value='Select'>
            <option value='Select'>Select</option>
            <option value='Qiao'>Qiao</option>
            <option value='Enersol'>Enersol</option>
            <option value='Squish'>Squish</option>
          </select>
          </div>
        
        <div className="username-input input-flex">
        <p>Username</p>
        <input type='text' placeholder='User'/>
        </div>
        <div className="email-input input-flex">
        <p>Email</p>
        <input type='email' placeholder='Email' className='email'/>
        </div>
          <div className="date-joined-input input-flex">
             <p>Date</p>
          <input type='date' placeholder='Date'/>
        {/* <input type='text' placeholder='Date'/> */}
          </div>
        <div className="phone-input input-flex">
           <p>Phone Number</p>
          <input type='number' placeholder='Phone Number'/>
        </div>
          <div className="status-input input-flex">
             <p>Status</p>
          <select value='Select'>
            <option value='Select'>Select</option>
            <option value='Active'>Active</option>
            <option value='Inactive'>Inactive</option>
            <option value='Blacklisted'>Blacklisted</option>
            <option value='Pending'>Pending</option>
          </select>
          </div>
          <div className="btn-input">
           <button>Reset</button>
           <button>Filter</button>
          </div>

      </div>
</div>
  )
}

export default FIlter
