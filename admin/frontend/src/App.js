import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Addproducts from "./Components/AddProduct/AddProducts";
import ViewProducts from "./Components/ViewProduct/ViewProducts";
import EditProduct from "./Components/EditProduct/EditProduct";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import ViewCustomer from "./Components/ViewCustomer/ViewCustomer";
import ViewDeliveryPartner from "./Components/ViewDeliveryPartner/ViewDeliveryPartner";
import ViewOrders from "./Components/ViewOrders/ViewOrders";
import './App.css';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="admin-app">
      {/* Floating toggle button for when sidebar is closed */}
      {isAdmin && !sidebarOpen && (
        <button 
          className="floating-toggle" 
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>
      )}

      {isAdmin && (
        <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-header">
            <h2>QuickBite Admin</h2>
            <button 
              className="sidebar-toggle" 
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </button>
          </div>
          <nav className="sidebar-nav">
            <ul>
              <li>
                <button 
                  className="nav-item" 
                  onClick={() => navigate("/")}
                  data-tooltip="View Products"
                >
                  <span className="nav-icon">📋</span>
                  <span className="nav-text">View Products</span>
                </button>
              </li>
              <li>
                <button 
                  className="nav-item" 
                  onClick={() => navigate("/addProducts")}
                  data-tooltip="Add Products"
                >
                  <span className="nav-icon">➕</span>
                  <span className="nav-text">Add Products</span>
                </button>
              </li>
              <li>
                <button 
                  className="nav-item" 
                  onClick={() => navigate("/viewCustomer")}
                  data-tooltip="View Customers"
                >
                  <span className="nav-icon">👥</span>
                  <span className="nav-text">View Customers</span>
                </button>
              </li>
              <li>
                <button 
                  className="nav-item" 
                  onClick={() => navigate("/viewDeliveryPartner")}
                  data-tooltip="Delivery Partners"
                >
                  <span className="nav-icon">🚚</span>
                  <span className="nav-text">Delivery Partners</span>
                </button>
              </li>
              <li>
                <button 
                  className="nav-item" 
                  onClick={() => navigate("/viewOrders")}
                  data-tooltip="View Orders"
                >
                  <span className="nav-icon">📦</span>
                  <span className="nav-text">View Orders</span>
                </button>
              </li>
              <li className="nav-separator"></li>
              <li>
                <button 
                  className="nav-item logout" 
                  onClick={() => { 
                    setIsAdmin(false); 
                    navigate("/admin/login"); 
                  }}
                  data-tooltip="Logout"
                >
                  <span className="nav-icon">🚪</span>
                  <span className="nav-text">Logout</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <div className={`main-content ${isAdmin ? (sidebarOpen ? 'with-sidebar' : 'with-sidebar-closed') : 'full-width'}`}>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin setIsAdmin={setIsAdmin}/>} />
          {isAdmin && <Route path="/addProducts" element={<Addproducts />} />}
          {isAdmin && <Route path="/" element={<ViewProducts />} />}
          {isAdmin && <Route path="/editProduct/:id" element={<EditProduct />} />}
          {isAdmin && <Route path="/viewCustomer" element={<ViewCustomer />} />}
          {isAdmin && <Route path="/viewDeliveryPartner" element={<ViewDeliveryPartner />} />}
          {isAdmin && <Route path="/viewOrders" element={<ViewOrders />} />}
        </Routes>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 9999 }}
      />
    </div>
  );
}

export default App;