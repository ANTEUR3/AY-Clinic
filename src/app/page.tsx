import Image from "next/image";
import Landing from "./components/HomeComponents/Landing";
import Services from "./components/HomeComponents/Services";
import { ServiceItem } from "./components/HomeComponents/Services";
import { TbDental,TbMedicineSyrup } from "react-icons/tb";
import { GiMedicalDrip } from "react-icons/gi";
import { MdLocalPharmacy } from "react-icons/md";
import { CiMedicalClipboard } from "react-icons/ci";
import { BsLungsFill } from "react-icons/bs";
import About from "./components/HomeComponents/About";
import Doctors from "./components/HomeComponents/Doctors";

export default function Home() {
  return (
    <div>
         <Landing/>
         <Services >
          <ServiceItem index={1} information="Dental  center">
            <TbDental className="lg:text-5xl " />
          </ServiceItem>
          <ServiceItem index={2} information="Pharmacy">
            <TbMedicineSyrup className="lg:text-5xl " />
          </ServiceItem>
          <ServiceItem index={3} information="medical drip">
            <GiMedicalDrip className="lg:text-5xl " />
          </ServiceItem>
          <ServiceItem index={4} information="medical History">
            <CiMedicalClipboard className="lg:text-5xl " />
          </ServiceItem>
          <ServiceItem index={5} information="Lungs illness">
            <BsLungsFill className="lg:text-5xl " />
          </ServiceItem>
         </Services>
         <About />
         <Doctors/>
    </div>
  );
}
