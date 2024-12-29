import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import hamburger from '../assets/hamburger.svg'


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
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
