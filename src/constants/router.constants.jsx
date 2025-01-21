import { CiSettings, CiUser } from "react-icons/ci";
import { GrMoney } from "react-icons/gr";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import DashboardHome from "../pages/Main/DashboardHome/DashboardHome";
import Guests from "../pages/Main/Users/Users";
import MyProfile from "../pages/Profile/MyProfile";
import EditMyProfile from "../pages/Profile/EditMyProfile";
import TermsConditions from "../pages/Settings/TermsConditions";
import EditTermsConditions from "../pages/Settings/EditTermsConditions";
import PrivacyPolicy from "../pages/Settings/PrivacyPolicy";
import EditPrivacyPolicy from "../pages/Settings/EditPrivacyPolicy";

import { FaUser } from "react-icons/fa";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineSecurityUpdateWarning,
} from "react-icons/md";
import HostDetails from "../pages/Main/Host/HostDetails";
import { LuWallet } from "react-icons/lu";
import { FaServicestack } from "react-icons/fa6";
import { BiMessageSquareDetail } from "react-icons/bi";
import { PiHandWithdrawBold } from "react-icons/pi";
import StudioPost from "../pages/Main/ApproveRequest/StudioPost";
import TrainerPost from "../pages/Main/ApproveRequest/TrainerPost";
import Review from "../pages/Main/Users/Review";
import StudioList from "../pages/Main/StudioList/StudioList";
import TrainerList from "../pages/Main/TrainerList/TrainerList";
import Earnings from "../pages/Main/Earnings/Earnings";
import DriverRequest from "../pages/Main/DriverRequest/DriverRequest";
import Setting from "../pages/Main/Setting/Setting";
import Support from "../pages/Main/Support/Notifications";
import earningImg from "../assets/images/earnings.png";
import ChangePassword from "../pages/Main/Setting/Change-password/ChangePassword";
import ForgotPassword from "../pages/Main/Setting/Change-password/ForgotPassword";
import VerifyEmail from "../pages/Main/Setting/Change-password/VerifyEmail";
import Trust from "../pages/Settings/Trust";
import EditTrust from "../pages/Settings/EditTrust";
import { TbCash } from "react-icons/tb";
import { PiLaptopThin } from "react-icons/pi";
import { GrUserManager } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import Subscription from "../pages/Main/Subscription/Subscription";
import EditSubscription from "../pages/Main/EditSubscription/EditSubscription";
import Notifications from "../pages/Main/Support/Notifications";

export const dashboardItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: RiDashboardHorizontalFill,
    element: <DashboardHome />,
  },
  {
    name: "Earning",
    path: "earnings",
    icon: TbCash,
    element: <Earnings />,
  },
  {
    name: "User",
    path: "users",
    icon: FaUser,
    element: <Guests />,
  },


  {
    name: "Subscription",
    path: "subscription",
    icon: GrUserManager,
    element: <Subscription />,
    
  },
  // {
  //   name: "EditSubscription ",
  //   path: "editSubscription",
  //   icon: IoSettingsOutline,
  //   element: <EditSubscription />,
  // },
  {
    // name: "Support",
    path: "support",
    // icon: BiSupport,
    element: <Notifications />,
  },
  {
    name: "Setting",
    path: "settings",
    icon: IoSettingsOutline,
    element: <Setting />,
  },
  {
    path: "/hosts/:id",
    element: <HostDetails />,
  },
  {
    name: "Settings",
    rootPath: "settings",
    icon: CiSettings,
    children: [
      {
        name: "Personal Information",
        path: "settings/profile",
        icon: CiUser,
        element: <MyProfile />,
      },
      {
        path: "settings/profile/edit",
        element: <EditMyProfile />,
      },
      {
        name: "Change Password",
        icon: FaServicestack,
        path: "settings/change-password",
        element: <ChangePassword />,
      },
      {
        name: "EditSubscription ",
        path: "settings/editSubscription",
        icon: IoSettingsOutline,
        element: <EditSubscription />,
      },
      {
        path: "settings/settings/change-password/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "settings/change-password/forgot-password/verify-email",
        element: <VerifyEmail />,
      },
      {
        name: "Terms & Condition",
        icon: FaServicestack,
        path: "settings/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "settings/terms-conditions/edit",
        element: <EditTermsConditions />,
      },
      {
        name: "Privacy Policy",
        icon: MdOutlineSecurityUpdateWarning,
        path: "settings/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "settings/privacy-policy/edit",
        element: <EditPrivacyPolicy />,
      },
      {
        name: "Trust & Safety",
        icon: BiMessageSquareDetail,
        path: "settings/trust-safety",
        element: <Trust />,
      },
      {
        path: "settings/trust-safety/edit",
        element: <EditTrust />,
      },
    ],
  },
];
