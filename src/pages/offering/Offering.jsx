import React, { useState } from 'react'
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillTrademarkCircle, AiOutlineStock, AiFillDollarCircle } from "react-icons/ai"
import { MdEditDocument } from "react-icons/md";
import { ImHammer2 } from "react-icons/im"
import { FaHandsHelping } from "react-icons/fa";
import Popmoredetail from './Popmoredetail';
import './offer.css'

export const Offering = () => {
  const [pop, setPop] = useState(false)
  const [poph, setPoph] = useState("")
  const [popid, setPopid] = useState("")
  const [detail, setDetail] = useState({})

  function glow(e) {
    for (const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }
  const data = [
    {
      id: 1,
      ele: <BsFillBriefcaseFill />,
      head: "Secretarial Compliance Services",
      head2: "Promotion, formation and incorporation of companies and matters related therewith",
      detail: ["Promotion, formation and incorporation of companies and matters related therewith",
        " Post Incorporation registrations / licenses like PAN,GST, IEC, ESI-PF, Trade License, Shops & Establishment, MSME Registration, Recognition for Start Ups etc.",
        "Assistance in conduct of Meetings of Board / Shareholders / Debenture Holders",
        "Issue and Allotment of Equity/Preference Shares/ Debentures",
        "Transfer and transmission of Shares",
        "Buy Back of Securities / Reduction of Capital",
        " Managing end to end Corporate Compliances for management and administration of Companies",
        " Guiding Companies for adherence to Secretarial Standards issued by the ICSI",
        "Secretarial Audit & Certifications",
        "  Annual Compliances for LLPs",
        "Assistance in Closure of Companies /LLPs",
        "Conversion of Companies to LLPs, LLP to Companies, Pvt Companies to Public Companies and Vice versa, Firms to LLPs",
        "Dealing in matters of liquidation / winding up/ restoration of Companies"]
    },
    {
      id: 2,
      ele: <ImHammer2 />,
      head: "Corporate Legal Consulting",
      head2: "Advising for Business Structuring / Strategic Alliances / Joint Ventures / Investments",
      detail: ["Advising for Business Structuring / Strategic Alliances / Joint Ventures / Investments Compliance Audit / Due Diligence",
        "Advisory and assistance for Takeovers / Mergers/ Acquisitions / Amalgamations / Demergers /Hive offs/ Slump Sale and other Corporate Restructuring Handling litigation relating to Oppression & Mismanagement of Companies",
        " Shareholders’ Grievances Redressal including Class Action Suits",
        "Handling CIRP Process and representing in matters relating to Insolvency / Bankruptcy under IBC",
        "Drafting / vetting of business Contracts / Agreements / MOUs / Term Sheets / Definitive Agreements / SHA / SPA",
        "  Drafting of Employment Agreements / CDA/ NDA / NCA etc.",
        "Drafting company employment/HR policies and compliance manuals",
        " Structuring and drafting of Employee Stock options plans.",
        " Drafting of various policies, charters etc.",
        " Arbitration and other Alternate Dispute Resolution for Commercial matters",
        " Competition Law Advisory in respect of Cartels / Abuse of Dominance / Combinations",
        "Drafting of Anti Sexual Harassment Policies and ensuring compliance."]
    },
    {
      id: 3,
      ele: <AiFillTrademarkCircle />,
      head: "Intellectual Property Protection",
      head2: "Conducting Trademark Search, Logo / Brand Registration / Renewals / Monitoring, etc.",
      detail: [

        "Conducting Trademark Search",
        "Logo / Brand Registration / Renewals",
        "Tech-driven Trademark Protection and Monitoring",
        "Handling TM Infringement / Opposition / Litigation matters",
        " Licensing/ Assignment Agreements",


        " Copyright Filing and Registration",
        "    Handling Copyright Licensing/Transfers",
        "     Advisory for Copyright Opposition/ Infringement / Litigation matters",



        "  FTO Search",
        " Patent Applications, Claims and Registration",
        "   Advisory for Opposition/ Infringement / Litigation matters"]
    },
    {
      id: 4,
      ele: <AiOutlineStock />,
      head: "Capital Markets Compliances",
      head2: "IPO / Public Issue/ Listing of Securities, ADR/GDRs on Stock Exchanges",
      detail: [

        "IPO / Public Issue/ Listing of Securities, ADR/GDRs on Stock Exchanges",
        "SME Listing on BSE/NSE Platforms",
        "Listing of shares arising out of Conversion of Debentures/Warrants/ Notes/Bonds into Equity Shares",
        "Listing of equity shares issued pursuant to exercise of options granted under ESPS/ESOS/SARS/GEBS/RBS",
        "Registration of AIF, REITS, InvITs etc. with SEBI",
        "Reconciliation of Share Capital Audit of Listed Companies",
        "Audit of Depository Participants/ Portfolio Managers/ Stock Brokers/Clearing Members/Trading Members/Credit Rating Agencies / Investment Adviser / Research Analyst",
        "SEBI Investigation, Inspections, Adjudications",
        "Ensuring compliance of the Takeover Regulations",
        "Dematerialisation of Shares and other Securities",
        "Compliance with SEBI (Prohibition of Insider Trading) Regulations, 1992",
        "Revocation of Suspended Companies",
        "Advisory, Opinion, Compliances and Certifications under SEBI Laws/ Regulations"]
    },
    {
      id: 5,
      ele: <AiFillDollarCircle />,
      head: "Foreign Investment /RBI Matters Advisory",
      head2: "Advisory / Certifications / Compliances / Approvals for FDI / ODI / ECB transactions",
      detail: [

        " India Entry & Investment strategy for Foreign Companies",
        "Advisory for Setting up of WOS, JVs and Branch / Liaison / Project Offices",
        "Foreign Investment Strategy and advisory for Indian Companies",
        "Advisory / Certifications / Compliances / Approvals for FDI / ODI / ECB transactions",
        "RBI Compliances w.r.t. Transfer of shares between residents & non-residents and vice-versa",
        "Compounding of Offences for FEMA violations",
        "Other advisory and legal opinions under FEMA",
        "Licences/ Compliances / Approvals for NBFCs",
        "Approvals / Compliances under FCRA",
        "Conducting Due Diligence of Companies and Reporting to Banks",
        "Issue of Status and search reports for Bank Loans",
        "Advising & ensuring compliance of Exim Policy and Procedures",
        "Advising on matters relating to antidumping, subsidies and countervailing duties"]
    },
    {
      id: 6,
      ele: <MdEditDocument />,
      head: "Legal RepresentationServices",
      head2: "National Company Law Tribunal, Trademarks Registry, SEBI / Securities Appellate Tribunal, etc.",
      detail: [
        "National Company Law Tribunal",
        " Trademarks Registry",
        "     SEBI / Securities Appellate Tribunal",
        " Registrar of Companies",
        " Regional Director",
        " Consumer Forums",
        "Reserve Bank of India",
        "Competition Commission of India / COMPAT",
        " RERA Appellate Tribunal / Regulatory Authority",
        " Telecom Disputes Settlement & Appellate Tribunal",
        " Tax Authorities",
        "  Central Electricity Regulatory Commission.",
        "Other quasi-judicial bodies and Tribunals"
      ]
    },
    {
      id: 7,
      ele: <FaHandsHelping />,
      head: "Formation of Trusts, Societies, & NGOs",
      head2: "Registration / compliances in respect of different types of Societies",
      detail: [
        "Registration / compliances in respect of different types of Societies",
        "Drafting of Bye Laws and Charter documents including the Application forms, Nomination Forms, Election Guidelines, etc.",
        "Registration of Residents Welfare Association",
        "Guidance for conducting General body and Governing Body Meetings",
        "Maintenance of records and registers",
        "Ensuring Annual Compliances with RoS",
        "Drafting of Trust Deed and its registration",
        "Assistance in incorporation of Section 8 (Not for Profit) Companies"
      ]
    }

  ];

  return (
    <div className='offering' id='offerings'>
      <h1 className='tit'>OFFERINGS</h1>

      <div id="cards" onMouseMove={(e) => { glow(e) }} >

          {data.map(i=>(

           
              <div className="card"  key={i.id}>
          <div className="card-content"  onClick={() => { setPop(true); setPoph(i.head); setPopid(i.id); setDetail(i.detail) }}>
            <div className="card-image">
              <i className="fa-duotone fa-person-from-portal">{i.ele}</i>
            </div>
            <div className="card-info-wrapper" >
              <div className="card-info">
                <div className="card-info-title">
                  <h3>{i.head}</h3>
                  <h4>{i.head2}</h4>
                  <p >view more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
            

          ))}





        

        

        

        

      </div>

      <Popmoredetail trigger={pop} setTrigger={setPop} popid={popid} poph={poph} detail={detail} >
        <div>{popid}</div>
      </Popmoredetail>

    </div>
  )
}

