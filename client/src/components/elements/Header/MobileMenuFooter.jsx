import valveLogoFooter from "../../../assets/images/logo_valve_footer.png";


const MobileMenuFooter = () => {
    return (
        <footer className="w-full absolute bottom-0 mb-4 p-4">
            <div className="h-full text-[0.6rem] lg:text-[18px]">
                <div className="w-[13vw] md:w-auto grid md:justify-end lg:mr-2">
                    <img src={valveLogoFooter} className="w-full md:w-[100px]" alt="" />
                </div>
                <div>
                    <p>
                        © Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
                        <a href="#" className="hover:text-white">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white">
                            Legal
                        </a>
                        <a href="#" className="hover:text-white">
                            Steam Subscriber Agreement
                        </a>
                        <a href="#" className="hover:text-white">
                            Refunds
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default MobileMenuFooter;
