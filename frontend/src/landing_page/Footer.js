import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container border-top pt-5 mt-5">
        <div className="row g-4">
          {/* COMPANY INFO */}
          <div className="col-lg-4 col-md-6 col-12">
            <img
              src="/media/images/tradevault.jpeg"
              alt="Tradevault"
              className="footer-logo"
            />

            <p className="footer-copyright">
              &copy; 2010 - 2025, Not Tradevault Broking Ltd. All rights
              reserved.
            </p>
          </div>

          {/* COMPANY */}
          <div className="col-lg-2 col-md-6 col-12">
            <p className="footer-heading">Company</p>

            <a className="footer-link" href="/about">
              About
            </a>

            <a className="footer-link" href="/products">
              Products
            </a>

            <a className="footer-link" href="/pricing">
              Pricing
            </a>

            <a className="footer-link" href="/referral">
              Referral programme
            </a>

            <a className="footer-link" href="/careers">
              Careers
            </a>

            <a className="footer-link" href="/zerodha-tech">
              Tradevault.tech
            </a>

            <a className="footer-link" href="/press-media">
              Press & media
            </a>

            <a className="footer-link" href="/csr">
              Tradevault cares (CSR)
            </a>
          </div>

          {/* SUPPORT */}
          <div className="col-lg-3 col-md-6 col-12">
            <p className="footer-heading">Support</p>

            <a className="footer-link" href="/contact">
              Contact
            </a>

            <a className="footer-link" href="/support">
              Support portal
            </a>

            <a className="footer-link" href="/blog">
              Z-Connect blog
            </a>

            <a className="footer-link" href="/charges">
              List of charges
            </a>

            <a className="footer-link" href="/downloads">
              Downloads & resources
            </a>
          </div>

          {/* ACCOUNT */}
          <div className="col-lg-3 col-md-6 col-12">
            <p className="footer-heading">Account</p>

            <a className="footer-link" href="/open-account">
              Open an account
            </a>

            <a className="footer-link" href="/fund-transfer">
              Fund transfer
            </a>

            <a className="footer-link" href="/challenge">
              60 day challenge
            </a>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="footer-disclaimer">
          <p>
            Tradevault Broking Ltd.: Member of NSE & BSE – SEBI Registration
            no.: INZ000031633 CDSL: Depository services through Tradevault
            Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015
            Commodity Trading through Tradevault Commodities Pvt. Ltd. MCX:
            46025 – SEBI Registration no.: INZ000038238 Registered Address:
            Tradevault Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp.
            Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
            Karnataka, India.
          </p>

          <p>
            For any complaints pertaining to securities broking please write to
            complaints@Tradevault.com, for DP related to dp@Tradevault.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            communication, speedy redressal of grievances.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day.
          </p>

          <p>
            KYC is one time exercise while dealing in securities markets. Once
            KYC is done through a SEBI registered intermediary, you need not
            undergo the same process again when you approach another
            intermediary.
          </p>
        </div>

        {/* FOOTER LINKS */}
        <div className="footer-bottom">
          <a href="/nse">NSE</a>
          <a href="/bse">BSE</a>
          <a href="/mcx">MCX</a>
          <a href="/terms">Terms & conditions</a>
          <a href="/policies">Policies & procedures</a>
          <a href="/privacy">Privacy policy</a>
          <a href="/disclosure">Disclosure</a>
          <a href="/investor-attention">For investor's attention</a>
          <a href="/investor-charter">Investor charter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
