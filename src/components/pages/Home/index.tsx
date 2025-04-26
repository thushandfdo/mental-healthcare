// import './index.scss';

import { Button } from "@/components/atoms/Button";

export const Home = () => {
    return (
        <div className="">
            <div className="container mx-auto flex h-screen items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-sky-600">Welcome to Our Website</h1>
                    <p className="mt-4 text-lg text-gray-700">This is a simple home page.</p>
                </div>
            </div>
            <Button onClick={() => console.log("Button Cliked...!")} label="Click Me" />
        </div>
    );
};
