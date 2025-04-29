import { NavBar } from "@/components/organisms/NavBar";

import wall from "../../../assets/wall.png";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { Footer } from "@/components/organisms/Footer";

export const Home = () => {
    return (
        <div className="">
            <NavBar />
            <div className="h-screen bg-cover bg-center w-full pl-32" style={{ backgroundImage: `url(${wall})` }}>
                <div className="flex flex-col items-start justify-center  w-[40%] pl-16  pt-40 gap-6">

                    <div className="flex flex-col items-start ">
                    <Typography label="Empower Your Mental " variant="h1" className="text-white" />
                    <Typography label="Health Journey Today" variant="h1" className="text-white" />
                    </div>


                    <Typography label="Welcome to a supportive community dedicated to your mental well-being. Join us to connect, share, and grow with others who understand your journey." variant="p" className="text-white" />

                    <div className="flex  items-start justify-between gap-4 w-1/3  ">
                        <Button label="Register as a doctor" type="default" onClick={() => (window.location.href = "/register")} />
                        <Button label="register as a patient" type="primary" onClick={() => (window.location.href = "/register")} />
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
};
