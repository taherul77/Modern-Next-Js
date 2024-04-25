import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between item-center sm-px-16 px-6 py-4">


        <Link href="/" className="flex justify-center item-center">
          <Image src="/logo.svg" alt="Car logo" width={180} height={18} className="object-contain"></Image>
        </Link>
        <CustomButton title="Sign In" type="button" containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"/>
      </nav>
    </header>
  );
};

export default Navbar;
