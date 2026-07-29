import { useState } from "react";
import { motion } from "framer-motion";

import AdminWelcomeCard from "@/components/admin/AdminWelcomeCard";
import AdminStatsCards from "@/components/admin/AdminStatsCards";
import AdminNotifications from "@/components/admin/AdminNotifications";
import AdminSearchFilter from "@/components/admin/AdminSearchFilter";
import PendingReportsQueue from "@/components/admin/PendingReportsQueue";
import AdminActivityTimeline from "@/components/admin/AdminActivityTimeline";


function AdminDashboard() {


  const [searchTerm, setSearchTerm] = useState("");

  const [typeFilter, setTypeFilter] = useState("all");

  const [statusFilter, setStatusFilter] = useState("all");



  return (

    <motion.div

      initial={{
        opacity:0,
        y:20,
      }}

      animate={{
        opacity:1,
        y:0,
      }}

      className="space-y-8"

    >



      {/* Welcome Header */}

      <AdminWelcomeCard />



      {/* Notification Badge */}

      <AdminNotifications />



      {/* Statistics */}

      <AdminStatsCards />



      {/* Search + Filters */}

      <AdminSearchFilter

        searchTerm={searchTerm}

        setSearchTerm={setSearchTerm}

        typeFilter={typeFilter}

        setTypeFilter={setTypeFilter}

        statusFilter={statusFilter}

        setStatusFilter={setStatusFilter}

      />



      {/* Pending Verification Queue */}

      <PendingReportsQueue />



      {/* Admin Activity */}

      <AdminActivityTimeline />



    </motion.div>

  );

}


export default AdminDashboard;