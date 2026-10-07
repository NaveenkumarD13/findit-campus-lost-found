import { motion } from "framer-motion";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import StatsCards from "@/components/dashboard/StatsCards";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentReports from "@/components/dashboard/RecentReports";
import CategoryOverview from "@/components/dashboard/CategoryOverview";
import ActivitySummary from "@/components/dashboard/ActivitySummary";
import ReportSearchFilter from "@/components/dashboard/ReportSearchFilter";
import NotificationCard from "@/components/dashboard/NotificationCard";

function StudentDashboard() {


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


      {/* Welcome */}

      <WelcomeCard />



      {/* Statistics */}

      <StatsCards />



      {/* Quick Actions */}

      <QuickActions />



      {/* Notifications */}

      <NotificationCard />

{/*Activity Summary */}
<ActivitySummary />


      {/* Search + Filters */}

      <ReportSearchFilter />



      {/* Category Overview */}

      <CategoryOverview />



      {/* Recent Reports */}

      <RecentReports />


    </motion.div>

  );

}


export default StudentDashboard;