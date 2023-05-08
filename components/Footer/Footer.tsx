import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import FooterMenu from "../FooterMenu/FooterMenu";
import SocialLinks from "../SocialLinks/SocialLinks";
import { AiFillHeart } from "react-icons/ai";

const data = [
  {
    id: 0,
    icon: <BsFacebook />,
    link: "https://www.facebook.com/raj.thappa.3",
  },

  {
    id: 1,
    icon: <BsTwitter />,
    link: "https://twitter.com/rajthapa_7",
  },

  {
    id: 2,
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/rajthapa7/",
  },
  {
    id: 3,
    icon: <BsGithub />,
    link: "https://www.github.com/rajthapa7/",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col bg-gray-200 px-[3%] pb-4 pt-12">
      <div className="flex flex-col gap-x-36 gap-y-10 py-6 pt-10 lg:flex-row">
        <div className="flex w-full justify-center lg:w-fit">
          <SocialLinks {...{ data }} />
        </div>
        <FooterMenu className="flex-grow basis-0" />
      </div>
      <div className="mx-auto h-[2px] w-full bg-gray-300"></div>

      <div className="flex w-full flex-col items-center justify-between gap-y-2 py-4 md:flex-row">
        <p className="flex items-center ">&#169; 2023 RajThapa</p>
        <p className="flex items-center">
          Made with &nbsp; <AiFillHeart /> &nbsp; Kathmandu, Nepal
        </p>
      </div>
    </footer>
  );
}
