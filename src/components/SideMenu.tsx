import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import hamburger from '../assets/hamburger.svg'
import { Input } from "./ui/input";
import { Button } from "./ui/button";


const SideMenu = () => {
  return (
    <Sheet>
      <div className="w-8 flex justify-center items-center md:hidden">
      <SheetTrigger>
        <div className="w-8 flex items-center justify-center">
          <img src={hamburger} alt="" className="w-8"/>
        </div>
      </SheetTrigger>
      </div>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="w-full text-left poppins-medium text-2xl flex flex-col gap-3">3legant.
            <Button>Sign In</Button>
          </SheetTitle>
          <div className="pt-4 flex flex-col justify-between h-full">
            <Input placeholder="Search Products"/>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
