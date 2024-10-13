import { NavLink, Outlet } from "react-router-dom";
import "./dist/Navbar.css";
import Logo from "../../assets/logo.svg";
import Search from "../../assets/search.svg";
import Notification from "../../assets/notification_navbar.svg";
import Human from "../../assets/image 4.png";
import arrowDown from "../../assets/down.svg";
import SO from "../../assets/switch_organization.svg";
import dashboard from "../../assets/dashboard.svg";
import users from "../../assets/users_people.svg";
import guarantors from "../../assets/guarantors.svg";
import loans from "../../assets/loans.svg";
import decision_models from "../../assets/decision_models.svg";
import savings from "../../assets/savings.svg";
import loan_requests from "../../assets/loan_request.svg";
import whitelist from "../../assets/whitelist.svg";
import karma from "../../assets/karma.svg";
import organization from "../../assets/organization.svg";
import loan_product from "../../assets/loan_products.svg";
import savings_product from "../../assets/savings_product.svg";
import fees_and_charges from "../../assets/FandC.svg";
import transactions from "../../assets/transaction.svg";
import services from "../../assets/services.svg";
import service_account from "../../assets/service_account.svg";
import settlements from "../../assets/settlements.svg";
import reports from "../../assets/reports.svg";
import preferences from "../../assets/preferences.svg";
import fees_and_pricing from "../../assets/fees.svg";
import audit_logs from "../../assets/audits_logs.svg";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="topbar-container-cover">
          <div className="topbar-container">
            <div className="navbar-container">
              <div className="logo-image-text">
                <img src={Logo} alt="lendsqr logo" />
                <h1>lendsqr</h1>
              </div>
              <div className="search-profile">
                <div className="search-btn">
                  <input type="text" placeholder="Search for anything" />
                  <button>
                    <img src={Search} alt="Search Icon" />
                  </button>
                </div>
                <div className="docs-noti-img-name">
                  <NavLink to="/other-links">Docs</NavLink>
                  <img src={Notification} alt="notification icon" />
                  <div className="name-noti-icon">
                    <img src={Human} className="human" alt="Profile Picture" />
                    <p>Adedeji </p>
                    <img src={arrowDown} alt="Down Arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-container">
          <div className="container ">
            <div className="SO flex padding">
              <div>
                <img src={SO} alt="Down Arrow" />
              </div>
              <NavLink to="/other-links">Switch Organization</NavLink>
              <div>
                <img src={arrowDown} alt="Down Arrow" />
              </div>
            </div>

            <div className="dashboard-text padding sub-text">
              <img src={dashboard} alt="Down Arrow" />
              <NavLink to="/other-links">Dashboard</NavLink>
            </div>

            <div className="customers ">
              <div className="padding sub-text">
                <NavLink to="/other-links" className="customers-text">
                  CUSTOMERS
                </NavLink>
              </div>
              {/* <NavLink to="/users"> */}
              <NavLink to="/users">
                <div className="users flex padding">
                  <div>
                    <img src={users} alt="users icon" />
                  </div>
                  {/* <p>Users</p> */}
                  Users
                </div>
              </NavLink>
              <div className="guarantors flex padding">
                <div>
                  <img src={guarantors} alt="guarantor icon" />
                </div>
                <NavLink to="/food">Guarantors</NavLink>
              </div>
              <div className="loans flex padding">
                <div>
                  <img src={loans} alt="loan icon" />
                </div>
                <NavLink to="/other-links">Loans</NavLink>
              </div>
              <div className="decision-models flex padding">
                <div>
                  <img src={decision_models} alt="decision model icon" />
                </div>
                <NavLink to="/other-links">Decision Models</NavLink>
              </div>
              <div className="savings flex padding">
                <div>
                  <img src={savings} alt="savings icon" />
                </div>
                <NavLink to="/other-links">Savings</NavLink>
              </div>
              <div className="loan-requests flex padding">
                <div>
                  <img src={loan_requests} alt="loan request icon" />
                </div>
                <NavLink to="/other-links">Loan Requests</NavLink>
              </div>
              <div className="whitelist flex padding">
                <div>
                  <img src={whitelist} alt="whitelist icon" />
                </div>
                <NavLink to="/other-links">Whitelist</NavLink>
              </div>
              <div className="karma flex padding">
                <div>
                  <img src={karma} alt="karma icon" />
                </div>
                <NavLink to="/other-links">Karma</NavLink>
              </div>
            </div>
            <div className="businesses ">
              <div className="padding sub-text">
                <NavLink to="/other-links" className="businesses-text">
                  BUSINESSES
                </NavLink>
              </div>
              <div className="organization flex padding">
                <div>
                  <img src={organization} alt="organization icon" />
                </div>
                <NavLink to="/other-links">Organization</NavLink>
              </div>
              <div className="loan-product flex padding">
                <div>
                  <img src={loan_product} alt="loan product" />
                </div>
                <NavLink to="/other-links">Loan Products</NavLink>
              </div>
              <div className="savings-product flex padding">
                <div>
                  <img src={savings_product} alt="savings product icon" />
                </div>
                <NavLink to="/other-links">Savings Products</NavLink>
              </div>
              <div className="fees-and-charges flex padding">
                <div>
                  <img src={fees_and_charges} alt="fees and charges icon" />
                </div>
                <NavLink to="/other-links">Fees and Charges</NavLink>
              </div>
              <div className="transactions flex padding">
                <div>
                  <img src={transactions} alt="transaction icon" />
                </div>
                <NavLink to="/other-links">Transactions</NavLink>
              </div>
              <div className="services flex padding">
                <div>
                  <img src={services} alt="services icon" />
                </div>
                <NavLink to="/other-links">Services</NavLink>
              </div>
              <div className="service-account flex padding">
                <div>
                  <img src={service_account} alt="service account icon" />
                </div>
                <NavLink to="/other-links">Service Account</NavLink>
              </div>
              <div className="settlements flex padding">
                <div>
                  <img src={settlements} alt="settlements icon" />
                </div>
                <NavLink to="/other-links">Settlements</NavLink>
              </div>
              <div className="reports flex padding">
                <div>
                  <img src={reports} alt="reports icon" />
                </div>
                <NavLink to="/other-links">Reports</NavLink>
              </div>
            </div>

            <div className="settings ">
              <div className="padding sub-text">
                <NavLink to="/other-links" className="settings-text padding">
                  SETTINGS
                </NavLink>
              </div>
              <div className="preference flex padding">
                <div>
                  <img src={preferences} alt="preference icon" />
                </div>
                <NavLink to="/other-links">Preferences</NavLink>
              </div>
              <div className="Fees and pricing fex padding">
                <div>
                  <img src={fees_and_pricing} alt="FandP icon" />
                </div>
                <NavLink to="/other-links">Fees and Pricing</NavLink>
              </div>
              <div className="Audit-logs flex padding">
                <div>
                  <img src={audit_logs} alt="audit logs icon" />
                </div>
                <NavLink to="/other-links">Audit Logs</NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="users-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;