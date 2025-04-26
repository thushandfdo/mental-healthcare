import { Button } from "components/atoms/Button";
import { Typography } from "components/atoms/Typography";
import NavBar from "components/organisms/NavBar";

export const Home = () => {
    return (
        <div className="container flex items-center justify-center h-screen mx-auto">
            <NavBar />
            <div className="flex flex-col items-center justify-center w-full gap-5">
                <div className="text-center bg-red-200">
                    <Typography label="Welcome to Our Website" variant="h1" className="text-sky-600" />
                    <Typography label="This is a simple home page." className="mt-[40px] w-[80%] bg-gray-300" />
                </div>
                <Button onClick={() => console.log("Button Cliked...!")} label="Click Me" type="secondary" />
            </div>
        </div>
    );
};
