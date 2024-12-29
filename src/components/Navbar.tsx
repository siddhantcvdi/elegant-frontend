import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "./ui/input";
import cart from "../assets/cart.svg";
import account from "../assets/account.svg";
import SideMenu from "./SideMenu";
import { Button } from "./ui/button";

const Navbar = () => {
    const loggedIn = false;
  return (
    <nav>
      <div className="w-full h-[60px] bg-neutral-100 flex items-center px-10 justify-between max-sm:px-5">
        <div className="logo poppins-medium text-2xl">3legant.</div>
        <div className="links gap-6 hidden md:flex">
          <NavLink to={"/"}>Home</NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              Categories
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact Us</NavLink>
        </div>
        <div className="flex items-center gap-4">
          <Input placeholder="Search Products" className="max-sm:hidden" />
          <NavLink to={"/cart"}>
            <div className="w-8 flex items-center justify-center">
              <img src={cart} alt="" />
            </div>
          </NavLink>
          <div className="flex items-center max-sm:hidden">
            {
            loggedIn?
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <div className="w-8 flex items-center justify-center">
                  <img src={account} alt="" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            :
            <Button>
                Login
            </Button> 
            }
          </div>
            <SideMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
