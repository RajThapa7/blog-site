import FooterMenu from "../FooterMenu/FooterMenu";
import SocialLinks from "../SocialLinks/SocialLinks";
import { AiFillHeart } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="flex flex-col px-[3%]">
      <div className="flex gap-x-36 py-6 pt-10">
        <div>
          <SocialLinks />
        </div>
        <FooterMenu className="flex-grow basis-0" />
      </div>
      <div className="mx-auto  h-[2px] w-full bg-gray-300"></div>

      <div className="flex w-full justify-between py-4">
        <p className="flex items-center ">&#169; 2023 RajThapa</p>
        <p className="flex items-center">
          Made with &nbsp; <AiFillHeart /> &nbsp; Kathmandu, Nepal
        </p>
      </div>
    </footer>
  );
}
