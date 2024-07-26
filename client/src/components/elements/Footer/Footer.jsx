import FooterLinks from "./FooterLinks";

const Footer = () => {
    const footerLinks = ["About Valve", "Jobs", "Steamworks", "Distribution", "Support", "Gift Cards", "Steam", "@steam"];

    return (
        <div className="bg-[#171A21] pb-10 px-10 smFooter:hidden font-sans text-xs">
            <div className="max-w-[1100px] mx-auto">
                <section>
                    <div className="h-[2rem]" />
                    <hr className="mb-2" />
                </section>
                <section>
                    <div className="flex h-[4rem] gap-1 bg-[171A21]">
                        <div className=" my-auto">
                            <div className="mr-3">
                                <img src="https://store.cloudflare.steamstatic.com/public/images/footerLogo_valve_new.png" className="max-w-[10rem]" />
                            </div>
                        </div>
                        <div className="w-4/6">
                            <div className="text-gray-400">
                                © 2024 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries. VAT included in all prices where applicable.
                            </div>
                        </div>
                        <div className="w-1/6 my-auto">
                            <div className="flex justify-end">
                                <img src="https://store.cloudflare.steamstatic.com/public/images/v6/logo_steam_footer.png" />
                            </div>
                        </div>
                    </div>
                    <hr className="mt-2" />
                </section>
                <section>
                    <div className="flex justify-between mt-4">
                        {footerLinks.map((link, index) => (
                            <FooterLinks key={index} isLast={index === footerLinks.length - 1}>
                                {link}
                            </FooterLinks>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Footer;
