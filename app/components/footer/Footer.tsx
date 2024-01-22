import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import {MdFacebook} from 'react-icons/md'; 
import {AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
    return (  <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row
            justify-between pt-16 pb-8"> 
            <FooterList>
                <h3 className="text-base font-bold
                md-2">Shop Categories</h3>
                <Link href="#">Phones</Link>
                <Link href="#">Laptops</Link>
                <Link href="#">Desktops</Link>
                <Link href="#">Watches</Link>
                <Link href="#">Tvs</Link>
                <Link href="#">Accessories</Link>
            </FooterList>
            <FooterList>
                <h3 className="text-base font-bold
                md-2">Costumer Services</h3>
                <Link href="#">Contact Us</Link>
                <Link href="#">Shipping Policy</Link>
                <Link href="#">Returns & Exchanges</Link>
                <Link href="#">FAQs</Link>
            </FooterList>
            <div className="w-full md:w-1/3 mb-6
            md:mb-0">
                <h3 className="text-base font-bold
                md-2">About Us</h3>
                 <p className="md-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                 ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                 in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                 </p>
                 <p>&copy;{new Date().getFullYear()} E-Shop. ALl rights reserved</p>
            </div>
            <FooterList>
            <h3 className="text-base font-bold
                md-2">Follow Us</h3>
                <div className="flex gap-2">
                <Link href="#">
                    <MdFacebook size={24}/>
                </Link>
                <Link href="#">
                    <AiFillTwitterCircle size={24}/>
                </Link>
                <Link href="#">
                    <AiFillInstagram size={24}/>
                </Link>
                <Link href="#">
                    <AiFillLinkedin size={24}/>
                </Link>
                </div>
            </FooterList>
            </div>
        </Container>
        </footer>
        );
};
 
export default Footer;