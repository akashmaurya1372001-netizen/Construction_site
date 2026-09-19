import React, { useState, useEffect } from "react";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { SERVICES_DATA } from "../data/constructionData.js";

export const ContactQuote = ({ preselectedService = "" }) => {
  // =========================================================
  // EMAILJS CONFIGURATION
  // =========================================================

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // =========================================================
  // INITIAL FORM DATA
  // =========================================================

  const getInitialFormData = () => ({
    name: "",
    email: "",
    phone: "",
    serviceType: preselectedService || "Commercial Construction",
    projectScope: "new-build",
    location: "",
    details: "",
  });

  const [formData, setFormData] = useState(getInitialFormData);

  // =========================================================
  // UI STATES
  // =========================================================

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [ticketId, setTicketId] = useState("");

  // =========================================================
  // UPDATE PRESELECTED SERVICE
  // =========================================================

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceType: preselectedService,
      }));
    }
  }, [preselectedService]);

  // =========================================================
  // HANDLE INPUT CHANGE
  // =========================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  // =========================================================
  // GENERATE TICKET ID
  // =========================================================

  const generateTicketId = () => {
    return `BC-${Math.floor(100000 + Math.random() * 900000)}`;
  };

  // =========================================================
  // HANDLE SUBMIT
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSubmitting(true);

    // Check EmailJS configuration
    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      console.error("EmailJS configuration is missing.");

      setError(
        "Email service is not configured correctly. Please try again later."
      );

      setSubmitting(false);
      return;
    }

    // =======================================================
    // GENERATE TICKET BEFORE SENDING EMAIL
    // =======================================================

    const newTicketId = generateTicketId();

    console.log("Generated Ticket ID:", newTicketId);

    try {
      // =====================================================
      // SEND EMAIL USING EMAILJS
      // =====================================================

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          // Client information
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,

          // Project information
          service_type: formData.serviceType,
          project_scope: formData.projectScope,

          // Project requirements
          details: formData.details,

          // Ticket information
          ticket_id: newTicketId,

          // Company information
          company_name: "Badhanti Construction Contractors",
          ticket_type: "Construction Inquiry",
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      // =====================================================
      // SUCCESS
      // =====================================================

      setTicketId(newTicketId);
      setSubmitted(true);

      console.log("Email sent successfully");
      console.log("Ticket ID:", newTicketId);
    } catch (err) {
      console.error("EmailJS Error:", err);

      setError(
        "Unable to send your inquiry right now. Please try again or contact us directly by phone."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // =========================================================
  // RESET FORM
  // =========================================================

  const handleNewInquiry = () => {
    setSubmitted(false);
    setSubmitting(false);
    setError("");
    setTicketId("");

    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType:
        preselectedService || "Commercial Construction",
      projectScope: "new-build",
      location: "",
      details: "",
    });
  };

  // =========================================================
  // COMMON STYLES
  // =========================================================

  const inputClassName = `
    w-full
    bg-stone-900
    border
    border-stone-700
    rounded-xl
    px-4
    py-3
    text-stone-100
    text-sm
    placeholder:text-stone-600
    focus:outline-none
    focus:border-amber-400
    transition-colors
  `;

  const labelClassName = `
    block
    text-xs
    font-mono
    uppercase
    tracking-wider
    text-stone-400
    mb-1.5
  `;

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <section
      id="contact"
      className="
        py-12
        sm:py-16
        lg:py-20
        bg-stone-900
        text-stone-100
        relative
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-16">
          <div
            className="
              inline-flex
              items-center
              gap-2
              text-amber-400
              font-mono
              uppercase
              tracking-widest
              text-xs
              sm:text-sm
            "
          >
            <span className="w-6 sm:w-8 h-px bg-amber-400" />

            <span>Project Estimation & Inquiry</span>
          </div>
        </div>

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-6
            sm:gap-8
            lg:gap-12
            items-start
          "
        >
          {/* ===================================================
              FORM
          ==================================================== */}

          <div
            className="
              lg:col-span-8
              bg-stone-950
              rounded-2xl
              sm:rounded-3xl
              p-5
              sm:p-8
              lg:p-10
              border
              border-stone-800
              shadow-2xl
              min-w-0
            "
          >
            {/* =================================================
                SUCCESS MESSAGE
            ================================================== */}

            {submitted ? (
              <div
                id="quote-submission-success"
                className="
                  text-center
                  py-10
                  sm:py-12
                  space-y-5
                  sm:space-y-6
                "
              >
                <div
                  className="
                    w-16
                    h-16
                    rounded-full
                    bg-emerald-500/20
                    text-emerald-400
                    border
                    border-emerald-500/40
                    flex
                    items-center
                    justify-center
                    mx-auto
                  "
                >
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    font-black
                    text-white
                  "
                >
                  Proposal Request Received
                </h3>

                <p
                  className="
                    text-stone-300
                    max-w-md
                    mx-auto
                    text-sm
                    leading-relaxed
                  "
                >
                  Thank you,{" "}
                  <span className="text-amber-400 font-bold">
                    {formData.name || "Client"}
                  </span>
                  . Your inquiry for{" "}
                  <span className="text-stone-100 font-semibold">
                    {formData.serviceType}
                  </span>{" "}
                  has been successfully sent to our team.
                </p>

                {/* Ticket */}
                <div
                  className="
                    p-4
                    bg-stone-900
                    rounded-xl
                    border
                    border-stone-800
                    max-w-sm
                    mx-auto
                    font-mono
                    text-xs
                    text-stone-400
                  "
                >
                  <div>
                    TICKET ID: #{ticketId}
                  </div>

                  <div className="text-emerald-400 mt-1">
                    REQUEST SENT SUCCESSFULLY
                  </div>
                </div>

                <p
                  className="
                    text-xs
                    text-stone-500
                    max-w-sm
                    mx-auto
                  "
                >
                  Our team will review your requirements and
                  contact you as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={handleNewInquiry}
                  className="
                    px-6
                    py-3
                    rounded-lg
                    bg-stone-800
                    hover:bg-stone-700
                    text-xs
                    font-mono
                    font-bold
                    uppercase
                    text-stone-300
                    transition-colors
                  "
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              /* =================================================
                 FORM
              ================================================== */

              <form
                id="quote-calculator-form"
                onSubmit={handleSubmit}
                className="space-y-7 sm:space-y-8"
              >
                {/* =================================================
                    TITLE
                ================================================== */}

                <div className="flex justify-center">
                  <h2
                    className="
                      text-2xl
                      sm:text-3xl
                      md:text-4xl
                      font-black
                      text-white
                      tracking-tight
                      text-center
                      underline
                      underline-offset-7
                      decoration-2
                    "
                  >
                    CONSULTANCY INQUIRY
                  </h2>
                </div>

                {/* =================================================
                    ERROR MESSAGE
                ================================================== */}

                {error && (
                  <div
                    className="
                      flex
                      items-start
                      gap-3
                      p-4
                      rounded-xl
                      bg-red-500/10
                      border
                      border-red-500/30
                      text-red-300
                      text-sm
                    "
                  >
                    <AlertCircle
                      className="
                        w-5
                        h-5
                        shrink-0
                        text-red-400
                      "
                    />

                    <span>{error}</span>
                  </div>
                )}

                {/* =================================================
                    NAME
                ================================================== */}

                <div>
                  <label
                    htmlFor="name"
                    className={labelClassName}
                  >
                    Name *
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClassName}
                  />
                </div>

                {/* =================================================
                    EMAIL + PHONE
                ================================================== */}

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-5
                    sm:gap-6
                  "
                >
                  <div>
                    <label
                      htmlFor="email"
                      className={labelClassName}
                    >
                      Email *
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className={labelClassName}
                    >
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      autoComplete="tel"
                      placeholder="+91 8756327246"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClassName}
                    />
                  </div>
                </div>

                {/* =================================================
                    PROJECT ADDRESS
                ================================================== */}

                <div>
                  <label
                    htmlFor="location"
                    className={labelClassName}
                  >
                    Project Address *
                  </label>

                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    autoComplete="street-address"
                    placeholder="Enter your project address"
                    value={formData.location}
                    onChange={handleChange}
                    className={inputClassName}
                  />
                </div>

                {/* =================================================
                    SERVICE + SCOPE
                ================================================== */}

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-5
                    sm:gap-6
                  "
                >
                  <div>
                    <label
                      htmlFor="serviceType"
                      className="
                        block
                        text-xs
                        font-mono
                        uppercase
                        tracking-wider
                        text-stone-300
                        mb-2
                        font-bold
                      "
                    >
                      Construction Service
                    </label>

                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className={inputClassName}
                    >
                      {SERVICES_DATA.map((service) => (
                        <option
                          key={service.id}
                          value={service.title}
                        >
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="projectScope"
                      className="
                        block
                        text-xs
                        font-mono
                        uppercase
                        tracking-wider
                        text-stone-300
                        mb-2
                        font-bold
                      "
                    >
                      Scope Type
                    </label>

                    <select
                      id="projectScope"
                      name="projectScope"
                      value={formData.projectScope}
                      onChange={handleChange}
                      className={inputClassName}
                    >
                      <option value="new-build">
                        New Construction (Ground-Up)
                      </option>

                      <option value="renovation">
                        Renovation
                      </option>

                      <option value="old-construction">
                        Old Construction
                      </option>

                      <option value="addition">
                        Extension / Addition
                      </option>
                    </select>
                  </div>
                </div>

                {/* =================================================
                    MESSAGE
                ================================================== */}

                <div>
                  <label
                    htmlFor="details"
                    className={labelClassName}
                  >
                    Message *
                  </label>

                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    required
                    placeholder="Briefly describe your construction requirements..."
                    value={formData.details}
                    onChange={handleChange}
                    className="
                      w-full
                      bg-stone-900
                      border
                      border-stone-700
                      rounded-xl
                      px-4
                      py-3
                      text-stone-100
                      text-sm
                      placeholder:text-stone-600
                      focus:outline-none
                      focus:border-amber-400
                      resize-y
                      transition-colors
                    "
                  />
                </div>

                {/* =================================================
                    SUBMIT
                ================================================== */}

                <div
                  className="
                    pt-1
                    flex
                    justify-end
                  "
                >
                  <button
                    type="submit"
                    id="submit-quote-request-btn"
                    disabled={submitting}
                    className="
                      w-full
                      sm:w-auto
                      min-w-[170px]
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      bg-amber-500
                      hover:bg-amber-400
                      active:bg-amber-600
                      disabled:opacity-60
                      disabled:cursor-not-allowed
                      text-stone-950
                      font-black
                      px-8
                      py-3.5
                      rounded-xl
                      uppercase
                      tracking-wider
                      text-sm
                      transition-all
                      shadow-lg
                    "
                  >
                    {submitting ? (
                      <>
                        <span>Sending...</span>

                        <span
                          className="
                            w-4
                            h-4
                            border-2
                            border-stone-950/30
                            border-t-stone-950
                            rounded-full
                            animate-spin
                          "
                        />
                      </>
                    ) : (
                      <>
                        <span>Submit</span>

                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* ===================================================
              CONTRACTOR INFORMATION
          ==================================================== */}

          <div
            className="
              lg:col-span-4
              space-y-6
              min-w-0
            "
          >
            <div
              className="
                bg-stone-950
                p-5
                sm:p-7
                lg:p-8
                rounded-2xl
                sm:rounded-3xl
                border
                border-stone-800
                space-y-6
              "
            >
              <h3
                className="
                  text-base
                  sm:text-lg
                  font-black
                  text-white
                  uppercase
                  tracking-wider
                  font-mono
                  underline
                  underline-offset-7
                  decoration-2
                "
              >
                CONTACTS
              </h3>

              <div
                className="
                  space-y-5
                  text-sm
                  text-stone-300
                "
              >
                {/* Contractor */}

                <div className="flex items-start gap-3">
                  <Clock
                    className="
                      w-5
                      h-5
                      text-amber-400
                      shrink-0
                      mt-0.5
                    "
                  />

                  <div className="min-w-0">
                    <div className="font-bold text-white">
                      CONTRACTOR NAME
                    </div>

                    <div className="text-stone-400 mt-0.5 font-bold">
                      MR Badhanti Prasad Maurya
                    </div>
                  </div>
                </div>

                {/* Phone */}

                <div className="flex items-start gap-3">
                  <Phone
                    className="
                      w-5
                      h-5
                      text-amber-400
                      shrink-0
                      mt-0.5
                    "
                  />

                  <div className="min-w-0">
                    <div className="font-bold text-white">
                      CONTACT NO
                    </div>

                    <div className="text-stone-400 mt-0.5">
                      <a
                        href="tel:+918756327246"
                        className="
                          hover:text-amber-400
                          transition-colors
                          font-bold
                        "
                      >
                        +91 8756327246
                      </a>

                      <br />

                      <a
                        href="tel:+916306661981"
                        className="
                          hover:text-amber-400
                          transition-colors
                          font-bold
                        "
                      >
                        +91 6306661981
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}

                <div className="flex items-start gap-3">
                  <Mail
                    className="
                      w-5
                      h-5
                      text-amber-400
                      shrink-0
                      mt-0.5
                    "
                  />

                  <div className="min-w-0">
                    <div className="font-bold text-white">
                      MAIL
                    </div>

                    <a
                      href="mailto:badhanticonstruction@gmail.com"
                      className="
                        text-stone-400
                        mt-0.5
                        font-mono
                        break-all
                        hover:text-amber-400
                        transition-colors
                        font-bold
                      "
                    >
                      badhanticonstruction@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}

                <div className="flex items-start gap-3">
                  <MapPin
                    className="
                      w-5
                      h-5
                      text-amber-400
                      shrink-0
                      mt-0.5
                    "
                  />

                  <div className="min-w-0">
                    <div className="font-bold text-white">
                      LOCATION
                    </div>

                    <div
                      className="
                        text-stone-400
                        mt-0.5
                        leading-relaxed
                        font-bold
                      "
                    >
                      Ma Gayatri Nagar Colony,
                      <br />
                      Chandpur
                      <br />
                      Varanasi, Uttar Pradesh-221106
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactQuote;