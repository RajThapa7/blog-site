import Image from "next/image";
import Button from "../Button/Button";
import mail from "public/mail.svg";
import Input from "../Input/Input";

export default function Subscribe() {
  return (
    <div className="flex flex-col items-center bg-gray-100 px-6 py-16">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-center pb-4">
            <Image src={mail} alt="mail" width={120} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            Subscribe for the latest updates{" "}
          </h2>
          <p>Subscribe to Newsletter and never miss new post every week</p>
        </div>
        <div className="flex gap-x-4">
          <Input placeholder="Enter your email here..." />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
}
