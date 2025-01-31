import { Button } from "../Shared/Button";
import SearchBar from "./SearchBar";
import { TextLogo } from "./TextLogo";
import { MdKeyboardArrowDown } from "react-icons/md";

function Header() {
  return (
    <div className="flex flex-row h-20 items-center p-4 justify-between">
      <div className="p-2">
        <TextLogo />
      </div>
      <Button btnText={"Explore"} btnColor={"black"} />
      <SearchBar />
      <Button btnText={"Log in"} btnColor={"#E9E9E9"} textColor="black" />
      <Button btnText={"Sign up"} btnColor={"#E60023"} />
      <div className="hover:bg-themegray-light rounded-full">
        <MdKeyboardArrowDown color="#767676" size={25} />
      </div>
    </div>
  );
}

export default Header;
