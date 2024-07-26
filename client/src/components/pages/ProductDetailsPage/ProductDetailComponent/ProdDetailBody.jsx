/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import steamDataSet from "./steamDataset";
import ProdDetailOffers from "./ProdDetailOffers";

const ProdDetailBody = (props) => {
    const params = useParams();
    const id = params.id;
    const gameData = steamDataSet[id];
    const product = props.products;

    return (
        <>
            <div id="wrapper">
                <div className="prodSideBar flex-col mt-6 ml-4 max-w-2/6 max-h-full">
                    <div id="reasonHeader" className="text-lg py-2 px-4 bg-black">
                        <p>Is this game relevant to you?</p>
                    </div>
                    <div id="recommendationReasons" className="text-sm p-4 mb-2">
                        <p className="reasonFor leading-10 text-greyFontColor flex gap-1">
                            <span>
                                <img src="https://store.cloudflare.steamstatic.com/public/images/v6/app/game_reasons_info.png" className="mt-3" />
                            </span>
                            998 hours played
                        </p>
                        <hr />
                        <p className="reasonFor leading-10 text-greyFontColor flex gap-1">
                            <span>
                                <img src="https://store.cloudflare.steamstatic.com/public/images/v6/app/game_reasons_for.png" className="mt-3" />
                            </span>
                            User reviews:
                            <span className="text-buttonColor">Very Positive</span>
                        </p>
                        <hr />
                        <p className="reasonFor leading-10 text-greyFontColor flex gap-1">
                            <span>
                                <img src="https://store.cloudflare.steamstatic.com/public/images/v6/app/game_reasons_for.png" className="mt-3" />
                            </span>
                            In the top sellers
                        </p>
                        <hr />
                        <p className="reasonFor leading-10 text-greyFontColor flex gap-1">
                            <span>
                                <img src="https://store.cloudflare.steamstatic.com/public/images/v6/app/game_reasons_for.png" className="mt-3" />
                            </span>
                            Recommended by 44 friends
                        </p>
                        <div className="friendBlocks flex gap-2 mb-4 ml-4">
                            <img src="https://avatars.cloudflare.steamstatic.com/0bfd6a007df7f197f6b622848c60547bc3e611a0.jpg" />
                            <img src="https://avatars.cloudflare.steamstatic.com/775cd934d94b7e916caefbe3e64ba50191564162.jpg" />
                            <img src="https://avatars.cloudflare.steamstatic.com/18d4e24e9a47d8b6f2c93cb8a902799a86fc4ec8.jpg" />
                            <img src="https://avatars.cloudflare.steamstatic.com/d13fe8eea64ea4d1bc9e12bdf13d4862cd75adff.jpg" />
                            <img src="https://avatars.cloudflare.steamstatic.com/29479a0ba0b91fcd9a1074e38cf5193991baec33.jpg" />
                            <img src="https://avatars.cloudflare.steamstatic.com/c871b186688af8421ee26d93323cdfb059efe23e.jpg" />
                        </div>
                        <p />
                        <hr />
                        <p className="reasonFor leading-10 text-greyFontColor flex gap-1">
                            <span>
                                <img src="https://store.cloudflare.steamstatic.com/public/images/v6/app/game_reasons_info.png" className="mt-3" />
                            </span>
                            <span className="text-buttonColor">141 friends</span>
                            have played this game:
                        </p>
                        <div className="friendBlocks flex gap-2 mb-4 ml-4">
                            <img src="https://avatars.cloudflare.steamstatic.com/0bfd6a007df7f197f6b622848c60547bc3e611a0.jpg" />
                            <img src="https://avatars.cloudflare.steamstatic.com/775cd934d94b7e916caefbe3e64ba50191564162.jpg" />
                            <img src="https://avatars.cloudflare.steamstatic.com/18d4e24e9a47d8b6f2c93cb8a902799a86fc4ec8.jpg" />
                            <img src="https://avatars.cloudflare.steamstatic.com/d13fe8eea64ea4d1bc9e12bdf13d4862cd75adff.jpg" />
                            <img src="https://avatars.cloudflare.steamstatic.com/29479a0ba0b91fcd9a1074e38cf5193991baec33.jpg" />
                            <img src="https://avatars.cloudflare.steamstatic.com/c871b186688af8421ee26d93323cdfb059efe23e.jpg" />
                        </div>
                        <p />
                    </div>
                    {/* product detail feature content */}
                    <div className="prodFeat flex p-4 max-w-2/6 max-h-2/5">
                        <div className="prodIconHead flex flex-col">
                            {product?.productFeatures?.map((feature) => (
                                <img className="prodIcon p-0.5 mb-0.5 w-9 h-6 max-w-9 max-h-6 bg-iconBg" 
                                        src={feature.icon} />
                            ))}
                        </div>
                        <div className="prodFeatHead w-full flex flex-col">
                            {product?.productFeatures?.map((feature, index) => (
                                <div key={index} className="prodFeatContent p-0.5 ml-0.5 mb-0.5 text-xs w-full text-buttonColor bg-blueItemBg">
                                    <span>
                                        <a href="#">{feature.name}</a>
                                    </span>
                                </div>   
                            ))}
                        </div>
                    </div>
                    {/* game languages */}
                    <div className="prodLang my-2 p-4 text-fontColor text-xs max-w-full max-h-screen">
                        <p>Languages</p>
                        <table>
                            <tbody>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th>Interface</th>
                                    <th>Full Audio</th>
                                    <th>Subtitles</th>
                                </tr>
                                <tr>
                                    <td>English</td>
                                    <td>✔</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Czech</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Danish</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Dutch</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Finnish</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>French</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>German</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Hungarian</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Italian</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Japanese</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Korean</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Norwegian</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Polish</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Portuguese - Portugal</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Portuguese - Brazil</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Romanian</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Russian</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Simplified Chinese</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Spanish - Spain</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Swedish</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Thai</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Traditional Chinese</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Turkish</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Bulgarian</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Ukrainan</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Greek</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Spanish - Latin America</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Vietnamese</td>
                                    <td>✔</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* game achievement */}
                    <div className="gameAchievement p-4 text-greyFontColor text-xs">
                        <p>Include {gameData?.achievement_count ?? 0} Steam Achievements</p>
                        {gameData ? 
                            gameData.achievement_images.map((_, index) => {
                                return <img key={index} src={gameData.achievement_images[index]} className="mt-4 w-16 h-16" />;
                            })
                        : null }
                    </div>
                    <div className="pointShop max-w-full max-h-screen my-2 p-4">
                        <div className="pointShopHeader flex mb-4 text-xs w-full">
                            <p>Points Shop Items Available</p>
                        </div>
                        <div className="pointShopImg flex gap-1 w-16 h-16">
                        {gameData ? 
                            gameData.point_shop_images.map((_, index) => {
                                return <img key={index} src={gameData.point_shop_images[index]} className="bg-black" />;
                            })
                            : null }
                            <a href className="flex justify-center items-center bg-blueItemBg text-buttonColor rounded-sm text-sm text-center min-w-14 min-h-16">
                                View all {gameData?.point_shop_count ?? 0}
                            </a>
                        </div>
                    </div>
                    {/* game genre */}
                    <div className="prodGenre p-5 w-full text-xs">
                        <p className="text-headerFontColor leading-6">
                            <span className="text-fontColor uppercase">Title:</span> {product.name}
                        </p>
                        <p className="text-headerFontColor leading-6">
                            <span className="text-fontColor uppercase">Genre:</span>
                            {product?.Categories?.map((category, index) => {
                                return <span key={index}>{category.name}, </span>;
                            })}
                        </p>
                        <p className="text-headerFontColor leading-6">
                            <span className="text-fontColor uppercase">Developer:</span>
                            {product.developer}
                        </p>
                        <p className="text-headerFontColor leading-6">
                            <span className="text-fontColor uppercase">Publisher:</span>
                            {product.publisher}
                        </p>
                        <p className="text-headerFontColor leading-6">
                            <span className="text-fontColor uppercase">Release Date:</span>
                            {product.release_date}
                        </p>
                        <div className="genreButtonHeader">
                            <div className="genreButton bg-blueItemBg text-buttonColor p-1 mb-1 rounded-sm">
                                <span>
                                    <a href className="text-buttonColor">
                                        Visit the website
                                    </a>
                                </span>
                            </div>
                            <div className="genreButton bg-blueItemBg text-buttonColor p-1 mb-1 rounded-sm">
                                <span>
                                    <a href className="text-buttonColor">
                                        View update history
                                    </a>
                                </span>
                            </div>
                            <div className="genreButton bg-blueItemBg text-buttonColor p-1 mb-1 rounded-sm">
                                <span>
                                    <a href className="text-buttonColor">
                                        Read related news
                                    </a>
                                </span>
                            </div>
                            <div className="genreButton bg-blueItemBg text-buttonColor p-1 mb-1 rounded-sm">
                                <span>
                                    <a href className="text-buttonColor">
                                        View discussions
                                    </a>
                                </span>
                            </div>
                            <div className="genreButton bg-blueItemBg text-buttonColor p-1 mb-1 rounded-sm">
                                <span>
                                    <a href className="text-buttonColor">
                                        Visit the Workshop
                                    </a>
                                </span>
                            </div>
                            <div className="genreButton bg-blueItemBg text-buttonColor p-1 mb-1 rounded-sm">
                                <span>
                                    <a href className="text-buttonColor">
                                        Find Community Groups
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="shareEmbedRow p-4 my-2  min-w-full">
                        <span className="bg-buttonColorBg text-buttonColor rounded-sm py-2 px-4">
                            <button>Share</button>
                        </span>
                        <span className="bg-buttonColorBg text-buttonColor rounded-sm py-2 px-4">
                            <button>Embed</button>
                        </span>
                        <span className="bg-buttonColorBg text-buttonColor rounded-sm py-2 px-4">⚑</span>
                    </div>
                    {/* gameAwards */}
                    <div className="gameAwards">
                        <p>Awards</p>
                        <div className="gameAwardsBannerBG">
                            <a href="https://store.steampowered.com/steamawards/2020">
                                <div className="gameAwardsBannerEvent">
                                    <div className="gameAwardsBannerAwards">The Steam Awards&nbsp;</div>
                                    <div className="gameAwardsBannerYear">2020</div>
                                </div>
                                <div className="gameAwardsBannerContents">
                                    <div className="gameAwardsBannerLeft">
                                        <span className="gameAwardsBannerWinner">Winner</span>
                                        <div className="gameAwardsBannerDesc">
                                            Labor of Love <span>Award</span>
                                        </div>
                                    </div>
                                    <div className="gameAwardsBannerRight">
                                        <img src="https://cdn.cloudflare.steamstatic.com/store/promo/steamawards2020/trophy2020.png?v=3" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <a href="https://store.steampowered.com/steamawards/2020"></a>
                    </div>
                </div>
                {/* Game buying options */}
                <div id="cardWrapper">
                    <ProdDetailOffers product={product}/>
                    {/* game description */}
                    <div className="gameDesc text-greyFontColor">
                        <span className="text-white text-xl">About this game</span>
                        <hr />
                        {product.description}
                    </div>
                    {/* game system requirement */}
                    <div className="max-w-4xl rounded">
                        <div className="text-base font-light uppercase">System Requirements</div>
                        <hr />
                        <div className="sysReqTabs flex gap-6 text-xs p-0.5">
                            <div className="tabs text-greyFontColor bg-iconBg py-0.5 px-3 mt-2 ml-2">Windows</div>
                            <div className="tabs text-greyFontColor py-0.5 px-3 mt-2 ml-2">SteamOS + Linux</div>
                        </div>
                    </div>
                    <div className="sysReqContainer">
                        <div>
                            <div className="windowsReq text-xs text-headerFontColor leading-4 mt-4">Minimum</div>
                            <ul className="windowsReq text-xs leading-6 l">
                                <li className="list-none ">
                                    <span className="text-greyFontColor">OS: </span>{product?.SysReq?.CategorySysReq?.osName}
                                </li>
                                <li className="list-none ">
                                    <span className="text-greyFontColor">Processor:</span> {product?.SysReq?.processor}
                                </li>
                                <li className="list-none">
                                    <span className="text-greyFontColor">Memory:</span> {product?.SysReq?.memory}
                                </li>
                                <li className="list-none">
                                    <span className="text-greyFontColor">Graphics:</span> {product?.SysReq?.graphics}
                                </li>
                                <li className="list-none">
                                    <span className="text-greyFontColor">DirectX:</span> {product?.SysReq?.directX}
                                </li>
                                <li className="list-none">
                                    <span className="text-greyFontColor">Storage:</span> {product?.SysReq?.storage}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProdDetailBody;
