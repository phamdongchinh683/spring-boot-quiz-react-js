import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
 return (
  <footer className="bg-blue-600 text-white py-8">
   <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left gap-8">
     <div className="flex-1">
      <h6 className="text-lg font-bold mb-3">About Us</h6>
      <p className="text-sm">
       Quiz Master is your ultimate platform for engaging and educational quizzes. Explore, compete, and grow!
      </p>
     </div>
     <div className="flex-1">
      <h6 className="text-lg font-bold mb-3">Quick Links</h6>
      <ul className="text-sm space-y-2">
       <li>
        <Link to="/profile" className="text-white hover:underline">
         Profile
        </Link>
       </li>
       <li>
        <Link to="/exam" className="text-white hover:underline">
         Exam
        </Link>
       </li>
       <li>
        <Link to="https://www.facebook.com/vegetarian2003" className="text-white hover:underline">
         Contact
        </Link>
       </li>
      </ul>
     </div>
     <div className="flex-1">
      <h6 className="text-lg font-bold mb-3">Contact Us</h6>
      <p className="text-sm">Email: dchinh6803@gmail.com</p>
      <p className="text-sm">Phone: 0772573366</p>
      <p className="text-sm">Address: 40 binh thai da nang city</p>
     </div>
    </div>

    <div className="mt-8 text-center">
     <p className="text-sm">&copy; {new Date().getFullYear()} Quiz Master. All Rights Reserved.</p>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
