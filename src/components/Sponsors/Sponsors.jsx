import Vector1 from "../../assets/Images/Vector1.png";
import Sponsor from "../../assets/Images/Our Sponsers.png";
import Red from "../../assets/Images/Red.png";
import Yellow from "../../assets/Images/Yellow.png";
import Blue from "../../assets/Images/Blue.png";
import Green from "../../assets/Images/Green.png";
const Sponsors = () => {
	return (
		<div>
			<img src={Sponsor} className="" />
			<div className="grid grid-cols-2 justify-items-center p-4 m-4 gap-4 sm:grid-cols-4">
				<div>
					<img src={Red} className="" />
					<p className="font-bluu text-[#C90909] text-3xl sm:text-4xl text-center">
						Sponsor 1
					</p>
				</div>
				<div>
					<img src={Yellow} className="" />
					<p className="font-bluu text-[#FBD702] text-3xl sm:text-4xl text-center">
						Sponsor 1
					</p>
				</div>
				<div>
					<img src={Blue} className="" />
					<p className="font-bluu text-[#00587E] text-3xl sm:text-4xl text-center">
						Sponsor 1
					</p>
				</div>
				<div>
					<img src={Green} className="" />
					<p className="font-bluu text-[#1D7239] text-3xl sm:text-4xl text-center">
						Sponsor 1
					</p>
				</div>
			</div>
		</div>
	);
};
export default Sponsors;
