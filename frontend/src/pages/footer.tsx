import React from "react";
import logo from "../assets/Group312.png";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Copyright Section */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={logo}
              alt="Company Logo"
              className="w-1/2 md:w-1/3 mb-4"
            />
            <p className="text-center md:text-left text-sm">
              &copy; 2025-2030, Manas Sankhla and Abhisek Gaur Company.
            </p>
          </div>

          {/* Company Section */}
          <div className="flex flex-col space-y-2">
            <p className="font-semibold text-lg">Company</p>
            <a href="" className="hover:text-blue-500">About</a>
            <a href="" className="hover:text-blue-500">Products</a>
            <a href="" className="hover:text-blue-500">Pricing</a>
            <a href="" className="hover:text-blue-500">Referral Programme</a>
            <a href="" className="hover:text-blue-500">Careers</a>
            <a href="" className="hover:text-blue-500">Stockify.tech</a>
            <a href="" className="hover:text-blue-500">Open Source</a>
            <a href="" className="hover:text-blue-500">Press & Media</a>
            <a href="" className="hover:text-blue-500">Stockify Cares</a>
          </div>

          {/* Support Section */}
          <div className="flex flex-col space-y-2">
            <p className="font-semibold text-lg">Support</p>
            <a href="" className="hover:text-blue-500">Contact Us</a>
            <a href="" className="hover:text-blue-500">Support Portal</a>
            <a href="" className="hover:text-blue-500">Connect Blog</a>
            <a href="" className="hover:text-blue-500">List of Charges</a>
            <a href="" className="hover:text-blue-500">Downloads & Resources</a>
            <a href="" className="hover:text-blue-500">Videos</a>
            <a href="" className="hover:text-blue-500">Market Overview</a>
            <a href="" className="hover:text-blue-500">How to File a Complaint?</a>
            <a href="" className="hover:text-blue-500">Status of Complaints</a>
          </div>

          {/* Account Section */}
          <div className="flex flex-col space-y-2">
            <p className="font-semibold text-lg">Account</p>
            <a href="" className="hover:text-blue-500">Open an Account</a>
            <a href="" className="hover:text-blue-500">Fund Transfer</a>
          </div>
        </div>

        {/* Disclaimer & Legal Section */}
        <div className="mt-8 text-xs text-gray-500">
          <p>
            Stockify Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            No.: INZ0000XXXXX CDSL/NSDL: Depository services through Stockify
            Broking Ltd. – SEBI Registration No.: IN-DP-XXX-XXXX Commodity
            Trading through Stockify Commodities Pvt. Ltd. MCX: XXXXX; NSE:
            XXXXX – SEBI Registration No.: INZ0000XXXXX Registered Address:
            Stockify Broking Ltd., 123 Market Street, Business Hub, Jodhpur -
            342304, Rajasthan, India. For any complaints pertaining to
            securities broking, please write to complaints@stockify.com. For
            DP-related issues, contact dp@stockify.com. Please ensure you
            carefully read the Risk Disclosure Document as prescribed by SEBI |
            ICF before investing.
          </p>

          <p className="mt-2">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances.
          </p>

          <p className="mt-2">Effective Communication</p>

          <p className="mt-2">Speedy Redressal of Grievances</p>

          <p className="mt-2">
            Attention Investors: Stock brokers can accept securities as margins
            only through a pledge in the depository system as per SEBI
            guidelines (effective from September 01, 2020). Update your email
            and phone number with your stock broker or depository participant.
            Receive OTP directly from the depository on your email and/or mobile
            number to create a pledge. Check your securities, mutual funds, and
            bonds in the consolidated account statement issued by NSDL/CDSL
            every month.
          </p>

          <p className="mt-2">
            Prevent unauthorized transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            transaction alerts directly from the exchange on your mobile/email
            at the end of the day. KYC is a one-time process while dealing in
            securities markets. Once KYC is done through a SEBI-registered
            intermediary, you do not need to undergo the same process again with
            another intermediary.
          </p>

          <p className="mt-2">
            Important Notice: If you are subscribing to an IPO, there is no
            need to issue a cheque. Simply write your bank account number and
            sign the IPO application form to authorize your bank to process
            payments in case of allotment. If not allotted, funds will remain in
            your bank account. Stockify does not provide stock tips or
            authorize anyone to trade on behalf of others. If you encounter
            someone claiming to be part of Stockify and offering trading services,
            please report it immediately by creating a support ticket.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
