import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "./ui/input";
import cart from "../assets/cart.svg";
import account from "../assets/account.svg";
import SideMenu from "./SideMenu";
import { Button } from "./ui/button";

const Navbar = () => {
const loggedIn = true;
  return (
    <nav className="sticky top-0 z-10">
      <div className="w-full h-[60px] bg-neutral-100 flex items-center px-10 justify-between max-sm:px-5">
        <div className="logo poppins-medium text-2xl">3legant.</div>
        <div className="links gap-6 hidden md:flex">
          <NavLink to={"/"}>Home</NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              Categories
            </DropdownMenuTrigger>
            <DropdownMenuContent>
            <DropdownMenuLabel>Jackets</DropdownMenuLabel>
              <DropdownMenuSeparator/>
              <DropdownMenuItem>Puffers</DropdownMenuItem>
              <DropdownMenuItem>Bombers</DropdownMenuItem>
              <DropdownMenuItem>Lightweight Jackets</DropdownMenuItem>
              <DropdownMenuItem>Gilets</DropdownMenuItem>
              <DropdownMenuItem>Coats</DropdownMenuItem>
              <DropdownMenuItem>Rainwear</DropdownMenuItem>
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
              <DropdownMenuContent className="mr-5"     >
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Orders</DropdownMenuItem>
                <DropdownMenuItem className="p-1">
                    <Button className="w-full bg-neutral-900">
                        Log out
                    </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            :
            <Button>
                Sign In
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
