import { motion } from "framer-motion";

import {
  Globe,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import Logo from "@/assets/logo.jpeg";


const footerAnimation = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};


function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/10 bg-slate-950"
    >

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[170px]" />


      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">


          {/* Brand Section */}

          <motion.div
            variants={footerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <img
              src={Logo}
              alt="FindIt Logo"
              className="w-44"
            />


            <p className="mt-6 leading-8 text-slate-400">
              Helping students and faculty reconnect with their lost
              belongings through a secure, transparent and modern campus
              lost & found platform.
            </p>


            {/* Social Icons */}

            <div className="mt-8 flex gap-4">


              <a
                href="#"
                aria-label="Website"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Globe size={20} />
              </a>


              <a
                href="#"
                aria-label="Github"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaGithub size={20} />
              </a>


              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaLinkedin size={20} />
              </a>


            </div>


          </motion.div>





          {/* Quick Links */}


          <motion.div
            variants={footerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <h3 className="text-xl font-semibold text-white">
              Quick Links
            </h3>


            <ul className="mt-6 space-y-4">

              {[
                {
                  name:"Home",
                  path:"/"
                },
                {
                  name:"Features",
                  path:"#features"
                },
                {
                  name:"Categories",
                  path:"#categories"
                },
                {
                  name:"How It Works",
                  path:"#how-it-works"
                },
                {
                  name:"FAQ",
                  path:"#faq"
                }

              ].map((item)=>(

                <li key={item.name}>

                  <Link
                    to={item.path}
                    className="group flex items-center gap-2 text-slate-400 transition hover:text-cyan-400"
                  >

                    {item.name}


                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition group-hover:opacity-100"
                    />

                  </Link>


                </li>

              ))}


            </ul>


          </motion.div>






          {/* Platform */}


          <motion.div
            variants={footerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <h3 className="text-xl font-semibold text-white">
              Platform
            </h3>


            <ul className="mt-6 space-y-4">


              {[
                {
                  name:"Login",
                  path:"/login"
                },
                {
                  name:"Register",
                  path:"/register"
                },
                {
                  name:"Report Lost",
                  path:"/report-lost"
                },
                {
                  name:"Report Found",
                  path:"/report-found"
                },
                {
                  name:"Admin Dashboard",
                  path:"/admin"
                }

              ].map((item)=>(

                <li key={item.name}>

                  <Link
                    to={item.path}
                    className="group flex items-center gap-2 text-slate-400 transition hover:text-cyan-400"
                  >

                    {item.name}


                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition group-hover:opacity-100"
                    />


                  </Link>

                </li>


              ))}


            </ul>


          </motion.div>







          {/* Contact */}


          <motion.div
            variants={footerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <h3 className="text-xl font-semibold text-white">
              Contact
            </h3>



            <div className="mt-6 space-y-5">


              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="mt-1 text-cyan-400"
                />


                <p className="text-slate-400">
                  VIT Vellore
                  <br />
                  India
                </p>


              </div>




              <div className="flex items-center gap-3">

                <Mail
                  size={18}
                  className="text-cyan-400"
                />


                <p className="text-slate-400">
                  support@findit.app
                </p>


              </div>





              <div className="flex items-center gap-3">

                <Phone
                  size={18}
                  className="text-cyan-400"
                />


                <p className="text-slate-400">
                  +91 98765 43210
                </p>


              </div>


            </div>


          </motion.div>


        </div>





        {/* Bottom Section */}


        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-slate-500 md:flex-row">


          <p>
            © {new Date().getFullYear()} FindIt. All Rights Reserved.
          </p>



          <div className="flex gap-6">


            <Link
              to="/privacy"
              className="transition hover:text-cyan-400"
            >
              Privacy Policy
            </Link>



            <Link
              to="/terms"
              className="transition hover:text-cyan-400"
            >
              Terms & Conditions
            </Link>


          </div>


        </div>


      </div>


    </footer>
  );
}


export default Footer;