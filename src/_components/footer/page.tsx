import React from "react";
import Firstsectionfooter from "../customfooter/page";
import SecondsectionFooter from "../secondsectionfooter/page";
import Thirdsectionfooter from "../thirdsectionfooter/page";
import FourthsectionFooter from "../fourthsectionfooter/page";
import CustomiconFooter from "../customiconsfooter/page";

export default function Footer() {
    return <>
            <footer className="mt-auto p-5 bg-[#242625]">
          <div className="container grid md:grid-cols-2 lg:grid-cols-4 md:w-full mx-auto gap-12">
            <Firstsectionfooter />
            <SecondsectionFooter />
            <Thirdsectionfooter />
            <FourthsectionFooter />
          </div>
          <CustomiconFooter />
        </footer>

        </>
    ;
}
