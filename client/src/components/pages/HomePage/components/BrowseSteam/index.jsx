import BrowseSteamButton from "./BrowseSteamButton";

const BrowseSteam = () => {
    const browseSteamLists = ["new releases", "specials", "free games", "by user tags"];

    return (
        <div className="grid grid-cols-cards gap-3 text-center font-semibold lgNewRelease:grid-cols-2">
            {browseSteamLists.map((item) => (
                <BrowseSteamButton key={item}>{item}</BrowseSteamButton>
            ))}
        </div>
    );
};

export default BrowseSteam;
