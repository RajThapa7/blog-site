import Image from "next/image";
import Button from "../Button/Button";
import mail from "public/mail.svg";

export default function Subscribe() {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-center pb-4">
            <Image src={mail} alt="mail" width={120} />
          </div>
          <h2 className="text-3xl font-bold">
            Subscribe for the latest updates{" "}
          </h2>
          <p>Subscribe to Newsletter and never miss new post every week</p>
        </div>
        <div className="flex gap-x-4">
          <input
            type="text"
            name=""
            id=""
            className="w-full rounded-md bg-white p-3 px-4"
            placeholder="Enter your email here..."
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
}
