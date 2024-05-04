import { IProductCardProps } from "../../models/componet.interface";
import DropletButton from "../shared/DropletButton";
import LocalMallIcon from '@mui/icons-material/LocalMall';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card: React.FC<IProductCardProps> = ({ img, description, name, subName, price, originalPrice, discount , onClick}) => {
    return (
        <div className=" lg:w-64  md:mb-2 md:drop-shadow-lg  md:pb-3 my-3 lg:hover:scale-105 lg:hover:z-50 bg-white rounded-md transition ease-in-out delay-150 duration-200 h-fit pb-5" >
            <div className=" lg:w-64 font-second justify-self-end  md:justify-self-center md:w-36  h-42 md:h-36 w-full
                  lg:h-48 " >
                <img alt="food-img" src={img} className="lg:w-64 rounded-t-lg lg:rounded-none lg:rounded-t-lg lg:object-fill lg:h-full h-full w-full " />
            </div>
            <div className="px-4 mt-4 md:mt-0">
                <p className="text-primary-2 col-start-1 col-span-2 h-fit  font-second line-clamp-4  md:col-span-4 md:col-start-1 lg:order-1 lg:my-5 " >
                    {description}
                </p>
            </div>
            <div className="flex px-4 justify-between mt-5 md:mt-0">
                <div className="col-start-1 col-span-2 text-xl font-bold font-second lg:order-2 lg:mt-3 text-primary ">
                    {name}
                    <h2 className="col-start-1 col-span-2 text-xl  font-second lg:order-2  text-secondary font-montserrat font-medium">{subName}</h2>
                    <div>
                        <DropletButton
                            label={"Buy Now"}
                            onClick={onClick}
                            Icon={LocalMallIcon}
                            iconStyle={{ transform: "scaleX(-1)" }}
                        />
                    </div>
                </div>
                <div className="col-start-1 col-span-2 mt-2 text-lg text-Secondary-1 lg:order-3 lg:col-start-3 lg:justify-self-center lg:p-0 lg:self-center lg:col-span-1 lg:mt-3 font-main ">
                    <span className="font-bold">${price}</span>
                    <div>
                        <span className="text-gray-800 line-through text-sm font-semibold font-montserrat">
                            Rs.<span>{originalPrice}</span>
                        </span>
                        <div className="drop-shadow-sm bg-accent-ter text-[10px] font-semibold font-montserrat rounded-r-3xl rounded-bl-3xl px-2 flex align-center mt-1 justify-center pr-1">
                            <p className="px-1 text-white">
                                <span>{discount}</span>% off</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;