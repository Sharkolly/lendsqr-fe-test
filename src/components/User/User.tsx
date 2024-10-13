import './User.css';
import active_users from '../../assets/active_users.svg';
import users from '../../assets/users.svg';
import users_with_loans from '../../assets/users_with_loans.svg';
import users_with_savings from '../../assets/users_with_savings.svg';
import UsersData from '../All-Users/UsersData';

const User = () => {
  return (
    <div>
      <div className="user-container">
        <div className="user-text">
          <p>Users</p>
        </div>
        <div className="user-actions">
          <div className="total-users users-border">
          <img src={users} alt="" />
          <p>USERS</p>
          <h1>2,453</h1>
          </div>
          <div className="active-users users-border">
          <img src={active_users} alt="" />
          <p>ACTIVE USERS </p>
          <h1>2,453</h1>
          </div>
          <div className="users-with-loans users-border">
          <img src={users_with_loans} alt="" />
          <p>USERS WITH LOANS</p>
          <h1>12,453</h1>
          </div>
          <div className="users-with-savings users-border">
          <img src={users_with_savings} alt="" />
          <p>USERS WITH SAVINGS</p>
          <h1>102,453</h1>
          </div>
        </div>
      </div>

      <div>
        <UsersData/>
      </div>
    </div>
  )
}

export default User
