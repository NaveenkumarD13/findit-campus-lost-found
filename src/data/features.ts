export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Secure Reporting",
    description:
      "Report lost and found items securely with detailed information and optional images.",
    icon: "ShieldCheck",
  },
  {
    id: 2,
    title: "Smart Search",
    description:
      "Quickly search lost and found items using categories, locations and keywords.",
    icon: "Search",
  },
  {
    id: 3,
    title: "Verified Claims",
    description:
      "Administrators verify ownership before approving any item handover.",
    icon: "BadgeCheck",
  },
  {
    id: 4,
    title: "Real-Time Status",
    description:
      "Track every report from submission to successful recovery.",
    icon: "Activity",
  },
  {
    id: 5,
    title: "Campus Notifications",
    description:
      "Stay updated with important announcements and report status changes.",
    icon: "Bell",
  },
  {
    id: 6,
    title: "Responsive Experience",
    description:
      "Optimized for desktop, tablet and mobile devices.",
    icon: "MonitorSmartphone",
  },
];