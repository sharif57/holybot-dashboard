import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import logout from "../../assets/images/logout.png";
import { createElement, useEffect, useState } from "react";
import { routeLinkGenerators } from "../../utils/routeLinkGenerators";
import { dashboardItems } from "../../constants/router.constants";
import Swal from "sweetalert2";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineArrowRight } from "react-icons/md";
import { cn } from "../../lib/utils";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openNome, setOpenNome] = useState({});

  const handleLogOut = () => {
    Swal.fire({
      text: "Are you sure you want to logout?",
      showCancelButton: true,
      confirmButtonText: "     Sure    ",
      cancelButtonText: "Cancel",
      showConfirmButton: true,
      confirmButtonColor: "#DC2626",
      reverseButtons: true,
    }).then((res) => {
      if (res.isConfirmed) {
        // dispatch(logout());
        // localStorage.removeItem("token");
        // localStorage.removeItem("user-update");
        navigate("/auth");
      }
    });
  };
  useEffect(() => {
    // console.log(location.pathname.includes("earnings"));
  }, [location.pathname]);
  return (
    <div className="fixed top-0 left-0 w-[290px] min-h-screen h-full pr-0 bg-[#f6f7f0]">
      <div className="h-full flex flex-col justify-between  pt-[50px] border drop-shadow">
        <div className="space-y[24px">
          <div className="px-[38px]">
            <img className="w-[90%] mx-auto" src={logo} alt="" />
          </div>
          <ul className="mt-10 max-h-[650px] overflow-y-auto space-y-1 xl:space-y-2 px-4">
            {routeLinkGenerators(dashboardItems).map(
              ({ name, icon, path, children, rootPath }, indx) =>
                children?.length ? null
                  // (
                  //     <li key={indx} className="overflow-hidden">
                  //       <button
                  //         onClick={() => {
                  //           setOpenNome((c) => ({
                  //             name: c?.name === name ? null : name,
                  //           }));
                  //         }}
                  //         className={cn(
                  //           "outline-none hover:text-white  hover:bg-black w-full px-4 py-3 flex items-center justify-between gap-3 text-md transition-all rounded-full",
                  //           {
                  //             "bg-black text-white":
                  //               name === openNome?.name ||
                  //               (location.pathname.includes(rootPath) &&
                  //                 !openNome.name),
                  //           }
                  //         )}
                  //       >
                  //         <div className="flex items-center justify-start gap-3">
                  //           <div>{createElement(icon, { size: "17" })}</div>
                  //           <span>{name}</span>
                  //         </div>
                  //         <MdOutlineArrowRight
                  //           className={cn("text-gray-500", {
                  //             "rotate-90 text-white":
                  //               name === openNome?.name ||
                  //               (location.pathname.includes(rootPath) &&
                  //                 !openNome.name),
                  //           })}
                  //           size={23}
                  //         />
                  //       </button>
                  //       <div
                  //         className={cn(
                  //           "pl-8 pr-6 space-y-0.5 h-0 overflow-hidden",
                  //           {
                  //             "h-fit pt-1":
                  //               name === openNome?.name ||
                  //               (location.pathname.includes(rootPath) &&
                  //                 !openNome.name),
                  //           }
                  //         )}
                  //       >
                  //         {children?.map(({ subName, subPath, subIcon }, inx) => (
                  //           <NavLink
                  //             key={inx}
                  //             to={subPath}
                  //             className={({ isActive }) =>
                  //               isActive
                  //                 ? "bg-playground text-white" +
                  //                   " w-full px-4 py-1 flex items-center justify-start gap-3 transition-all rounded-sm text-md"
                  //                 : "text-[#646464] hover:text-white hover:bg-black" +
                  //                   " w-full px-4 py-1 flex items-center justify-start gap-3 transition-all rounded-sm text-md"
                  //             }
                  //           >
                  //             <div>{createElement(subIcon, { size: "17" })}</div>
                  //             <span> {subName}</span>
                  //           </NavLink>
                  //         ))}
                  //       </div>
                  //     </li>
                  //   ) 
                  : (
                    <li
                      onClick={() => {
                        setOpenNome((c) => ({
                          name: c?.name === name ? null : name,
                        }));
                      }}
                      key={indx}
                    >
                      <NavLink
                        to={path}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-white text-black" +
                            " w-full px-4 py-3 flex items-center justify-start gap-3 text-md transition-all rounded-full"
                            : " hover:text-black  hover:bg-gray-300" +
                            " w-full px-4 py-3 flex items-center justify-start gap-3 text-md transition-all rounded-full"
                        }
                      >
                        <div>{createElement(icon, { size: "18" })}</div>
                        <span> {name}</span>
                      </NavLink>
                    </li>
                  )
            )}
          </ul>
        </div>
        <div className="p-4 mt-auto  text-center">
          <button
            onClick={handleLogOut}
            className=" w-full bg-red text-black  font-semibold px-12 py-3 flex items-center justify-center gap-3 text-md outline-none rounded-full"
          >
            <img className="" src={logout} alt="" />
            <span className="text-white font-light">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
