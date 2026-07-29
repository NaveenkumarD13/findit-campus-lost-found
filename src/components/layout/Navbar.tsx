import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

import Logo from "@/assets/logo.jpeg";
import { useAuth } from "@/context/AuthContext";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout();

    toast.success("Logged out successfully 👋");

    navigate("/login", {
      replace: true,
    });
  };
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 py-4">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-8 py-4 transition-all duration-500 ${
          isScrolled
            ? "border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}

        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="FindIt Logo"
            className="h-11 w-11 object-contain"
          />

          <div>
            <h1 className="text-xl font-bold text-white">
              FindIt
            </h1>

            <p className="text-xs text-slate-400">
              Campus Lost &amp; Found
            </p>
          </div>
        </div>

        {/* Desktop Menu */}

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex">
          <li>
            <a
              href="#hero"
              className="transition hover:text-cyan-400"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#features"
              className="transition hover:text-cyan-400"
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#how-it-works"
              className="transition hover:text-cyan-400"
            >
              How It Works
            </a>
          </li>

          <li>
            <a
              href="#faq"
              className="transition hover:text-cyan-400"
            >
              FAQ
            </a>
          </li>

          <li>
            <a
              href="#footer"
              className="transition hover:text-cyan-400"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side */}

        <div className="hidden items-center gap-4 lg:flex">

          {!user ? (
            <>
              <Link
                to="/login"
                className="font-medium text-slate-300 transition hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/40 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3">

                <div className="text-right">

                  <p className="text-sm font-semibold text-white">
                    {user.fullName}
                  </p>

                 

                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    user.role === "admin"
                      ? "bg-red-500/20 text-red-300 border border-red-500/40"
                      : "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                  }`}
                >
                  {user.role === "admin"
                    ? "Admin"
                    : "Student"}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="rounded-xl border border-red-500/40 px-5 py-2 font-medium text-red-300 transition hover:bg-red-500/20"
              >
                Logout
              </button>
            </>
          )}

        </div>

        {/* Mobile */}

        <button className="text-white lg:hidden">
          <Menu size={28} />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;