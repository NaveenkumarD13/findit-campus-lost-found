import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LandingPage from "./features/landing/LandingPage";

import ReportLostItem from "./features/report-lost/ReportLostItem";
import ReportFoundItem from "./features/report-found/ReportFoundItem";

import AdminDashboard from "./features/dashboard/AdminDashboard";
import StudentDashboard from "./features/dashboard/StudentDashboard";

import LoginPage from "./features/auth/LoginPage";
import RegisterPage from "./features/auth/RegisterPage";

import SplashScreen from "./features/splash/SplashScreen";

import { useAuth } from "./context/AuthContext";


function App() {


  const {
    user,
    isLoading,
  } = useAuth();



  // Wait until authentication check completes

  if(isLoading){

    return <SplashScreen/>;

  }



  return (

    <Routes>


      {/* Landing */}

      <Route

        path="/"

        element={<LandingPage/>}

      />



      {/* Register */}

      <Route

        path="/register"

        element={

          user ? (

            <Navigate

              to={
                user.role==="admin"
                ? "/admin"
                : "/dashboard"
              }

              replace

            />

          )

          :

          (

            <RegisterPage/>

          )

        }

      />





      {/* Login */}

      <Route

        path="/login"

        element={

          user ? (

            <Navigate

              to={
                user.role==="admin"
                ? "/admin"
                : "/dashboard"
              }

              replace

            />

          )

          :

          (

            <LoginPage/>

          )

        }

      />






      {/* Student Dashboard */}

      <Route

        path="/dashboard"

        element={

          user?.role==="student"

          ?

          (

            <StudentDashboard/>

          )

          :

          (

            <Navigate

              to="/login"

              replace

            />

          )

        }

      />






      {/* Admin Dashboard */}

      <Route

        path="/admin"

        element={

          user?.role==="admin"

          ?

          (

            <AdminDashboard/>

          )

          :

          (

            <Navigate

              to="/login"

              replace

            />

          )

        }

      />







      {/* Report Lost */}

      <Route

        path="/report-lost"

        element={

          user?.role==="student"

          ?

          (

            <ReportLostItem/>

          )

          :

          (

            <Navigate

              to="/login"

              replace

            />

          )

        }

      />







      {/* Report Found */}

      <Route

        path="/report-found"

        element={

          user?.role==="student"

          ?

          (

            <ReportFoundItem/>

          )

          :

          (

            <Navigate

              to="/login"

              replace

            />

          )

        }

      />






      {/* Unknown */}

      <Route

        path="*"

        element={

          <Navigate

            to="/"

            replace

          />

        }

      />


    </Routes>

  );

}


export default App;