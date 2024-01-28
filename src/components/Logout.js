import { useContext } from "react";
import { AuthGoogleContext } from "../contexts/AuthGoogle";

export const Logout = () => {
  const { logoutIsOpen, signOut } = useContext(AuthGoogleContext);

  return (
    <div
      onClick={signOut}
      className={`${
        logoutIsOpen ? "right-20" : "-right-full"
      } w-[30px] cursor-pointer underline  fixed top-20 h-[30px] shadow-2xl uppercase transition-all duration-300 z-20 px-4 flex flex-col`}
    >
      Logout
    </div>
  );
};
