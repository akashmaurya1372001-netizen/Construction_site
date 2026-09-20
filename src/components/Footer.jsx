
import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  ShieldCheck
} from 'lucide-react';

import logo from "../assets/Bccwhite.png";
import { FaWhatsapp, FaInstagram  ,FaFacebook} from "react-icons/fa";

export const Footer = ({ onNavigate }) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      id="site-footer"
      className="
        bg-stone-950
        text-stone-300
        border-t
        border-stone-800
      "
    >

      {/* Main Footer Container */}
      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          xl:px-10
          py-10
          sm:py-12
          lg:py-14
        "
      >

        {/* ================= MAIN FOOTER ================= */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-12
            gap-8
            sm:gap-10
            lg:gap-12
          "
        >

          {/* ================= BRAND INFO ================= */}
          <div
            className="
              sm:col-span-2
              lg:col-span-5
              space-y-4
            "
          >

            {/* Logo */}
            <div className="flex items-center">

              <img
                src={logo}
                alt="Badhanti Construction Contractor logo"
                className="
                  w-44
                  sm:w-52
                  md:w-56
                  lg:w-60
                  h-auto
                  max-w-full
                  object-contain
                "
              />

            </div>

            {/* Trust Badge */}
            <div
              className="
                flex
                items-center
                gap-2
                text-[10px]
                sm:text-xs
                font-mono
                text-amber-400
                pt-1
              "
            >

              <ShieldCheck
                className="
                  w-4
                  h-4
                  text-emerald-400
                  shrink-0
                "
              />

              <span>
                Trusted Construction Contractor
              </span>

            </div>

          </div>


          {/* ================= CONTACT ================= */}
          <div
            className="
              sm:col-span-1
              lg:col-span-4
              space-y-4
            "
          >

            <h4
              className="
                text-xs
                font-mono
                uppercase
                tracking-widest
                text-stone-400
                font-bold
              "
            >
              Estimating Office
            </h4>


            <div
              className="
                space-y-3
                text-xs
                sm:text-sm
                text-stone-400
                font-mono
              "
            >

              {/* ================= ADDRESS ================= */}
              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >

                <MapPin
                  className="
                    w-4
                    h-4
                    text-amber-400
                    shrink-0
                    mt-0.5
                  "
                />

                <span className="leading-relaxed">
                  MAA GAYATRI NAGAR COLONY,
                  CHANDPUR, VARANASI,
                  UP-221106
                </span>

              </div>


              {/* ================= PHONE ================= */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <Phone
                  className="
                    w-4
                    h-4
                    text-amber-400
                    shrink-0
                  "
                />

                <a
                  href="tel:+918756327246"
                  className="
                    hover:text-amber-400
                    transition-colors
                    break-all
                  "
                >
                  +91 6306661981
                </a>

              </div>


              {/* ================= EMAIL ================= */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  min-w-0
                "
              >

                <Mail
                  className="
                    w-4
                    h-4
                    text-amber-400
                    shrink-0
                  "
                />

                <a
                  href="mailto:your@email.com"
                  className="
                    hover:text-amber-400
                    transition-colors
                    break-all
                  "
                >
                  badhanticonstruction@gmail.com
                </a>

              </div>


              {/* ================= SOCIAL MEDIA ================= */}
              <div
                className="
                  flex
                  items-center
                  gap-4
                  pt-2
                "
              >

                {/* WhatsApp */}
                <a
                  href="https://wa.me/916306661981"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    text-2xl
                    sm:text-3xl
                    text-green-500
                    hover:text-green-400
                    hover:-translate-y-0.5
                    transition-all
                  "
                >
                  <FaWhatsapp />
                </a>


                {/* Instagram */}
                <a
                  href="https://www.instagram.com/badhanti_construction?stkn=MWNrM3RkcXFlNWVxMw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    text-2xl
                    sm:text-3xl
                    text-pink-500
                    hover:text-pink-400
                    hover:-translate-y-0.5
                    transition-all
                  "
                >
                  <FaInstagram />
                </a>
                 <a
                  href="https://www.facebook.com/share/14p4TLvHio8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    text-2xl
                    sm:text-3xl
                    text-blue-400
                    hover:text-blue-300
                    hover:-translate-y-0.5
                    transition-all
                  "
                >
                 <FaFacebook />
                </a>

              </div>

            </div>

          </div>


          {/* ================= BACK TO TOP ================= */}
          <div
            className="
              sm:col-span-1
              lg:col-span-3
              flex
              items-start
              sm:justify-end
              lg:justify-end
            "
          >

            <button
              onClick={scrollToTop}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-4
                py-2.5
                rounded-lg
                bg-stone-900
                hover:bg-stone-800
                text-stone-300
                hover:text-amber-400
                text-xs
                sm:text-sm
                font-mono
                transition-all
                border
                border-stone-800
                hover:border-stone-700
                w-full
                sm:w-auto
              "
            >

              <ArrowUp className="w-3.5 h-3.5" />

              <span>
                Back to top
              </span>

            </button>

          </div>

        </div>


        {/* ================= BOTTOM BAR ================= */}
        <div
          className="
            mt-10
            sm:mt-12
            pt-6
            sm:pt-8
            border-t
            border-stone-800/80
            flex
            flex-col
            sm:flex-row
            items-center
            sm:items-center
            justify-between
            gap-3
            text-[10px]
            sm:text-xs
            font-mono
            text-stone-500
            text-center
            sm:text-left
          "
        >

          <div className="leading-relaxed">
            © {new Date().getFullYear()} Badhanti Construction Contractors.
            All rights reserved.
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
