// src/TermsOfService.tsx
import React from "react";
import { Link } from "react-router-dom";

const Disclaimer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Reuse your existing header structure if needed, or just title */}
      <header className="bg-white py-6 shadow-md border-b-4 border-green-600">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-600 tracking-wider">
            Terms of Service
          </h1>
        </div>
      </header>

      {/* Main Content - Full Terms */}
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 space-y-6 leading-relaxed">
          {/* Effective Date */}
          <div className="text-center border-b border-gray-300 pb-4">
            <p className="text-sm text-gray-600 font-semibold">
              <strong>Effective Date:</strong> November 24, 2024
            </p>
          </div>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-green-600 pb-2">
              1. AGREEMENT TO TERMS
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              These Terms of Service (“Terms”) constitute a legally binding agreement made between you ("the User") and the owners and operators of satta-king-fast.com ("we," "us," or "our"), concerning your access to and use of the Services. By accessing the Services, you agree that you have read, understood, and agree to be bound by these Terms.{" "}
              <strong className="text-red-600">
                If you do not agree, you are prohibited from using the Services and must discontinue use immediately.
              </strong>
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-green-600 pb-2">
              2. DESCRIPTION OF THE SERVICES
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-4">
              The services provided (collectively, "the Services") consist of an independent media platform and informational archive. Our function is to:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1 mb-4">
              <li>
                Aggregate, organize, and present publicly available data originating from{" "}
                <strong>offline, regional, or state-sanctioned public draws and announcements.</strong>
              </li>
              <li>
                Present this aggregated data for the purposes of{" "}
                <strong>journalistic analysis, public information, and statistical archiving.</strong>
              </li>
            </ul>
            <p className="text-gray-700 text-sm md:text-base">
              You acknowledge and agree to the following:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1 mb-4">
              <li>
                The Services are provided for informational and historical reference only. The information provided is not intended as advice of any kind.{" "}
                <strong className="text-red-600">
                  The User agrees not to rely on the information on this Website for any personal or financial decision-making.
                </strong>
              </li>
              <li>
                The data provided is informational in nature. We do not guarantee the absolute accuracy, timeliness, or completeness of the data and disclaim any liability for errors or omissions.
              </li>
              <li>
                The Services are provided entirely free of charge. This is a{" "}
                <strong>non-transactional</strong> service, and we do not facilitate or accept any form of{" "}
                <strong>financial exchanges</strong> between users or third parties.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-green-600 pb-2">
              3. PRIVACY POLICY
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              Our Privacy Policy, which is incorporated into these Terms, describes how we handle the information you may provide to us. By using the Services, you consent to the collection and use of this information as set forth in the Privacy Policy.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-green-600 pb-2">
              4. USER ELIGIBILITY AND RESPONSIBILITY
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              The Services are intended for users who are of the legal age of majority in their jurisdiction. It is your{" "}
              <strong className="text-red-600">sole and absolute responsibility</strong> to ensure that your access to and use of the Services is not in violation of any applicable local, state, or national law or regulation in your jurisdiction.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-green-600 pb-2">
              5. GOVERNING LAW AND JURISDICTION
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              These Terms and any dispute that arises between you and us will be governed by the laws of the State of Wyoming, USA, without regard to its conflict of law principles. You agree that all disputes related to these Terms or the Services will be brought exclusively in the state and federal courts located in Cheyenne, Wyoming, USA. You hereby consent to the personal jurisdiction and venue in such forums.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-green-600 pb-2">
              6. INTELLECTUAL PROPERTY RIGHTS
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              The Services and their original content, features, and functionality are and will remain the exclusive property of us and our licensors, protected by copyright, trademark, and other laws of the United States and foreign countries.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-green-600 pb-2">
              7. PROHIBITED CONDUCT
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              You agree not to misuse the Services, including but not limited to, scraping, interfering with the network, or using the data for any commercial purpose without our prior written consent.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-green-600 pb-2">
              8. DISCLAIMERS; LIMITATION OF LIABILITY
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              <strong className="text-red-600 block">THE SERVICES ARE PROVIDED "AS-IS" AND "AS-AVAILABLE" AT YOUR SOLE RISK.</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              <strong className="text-red-600">LIMITATION OF LIABILITY:</strong> IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES. OUR AGGREGATE LIABILITY SHALL NOT EXCEED ONE HUNDRED U.S. DOLLARS (U.S. $100.00).
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-green-600 pb-2">
              9. GENERAL TERMS
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2">
              <li>
                <strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and us regarding the Services.
              </li>
              <li>
                <strong>Severability:</strong> If any provision is held to be invalid, the remaining provisions will remain in full force.
              </li>
              <li>
                <strong>Revisions:</strong> We may revise these Terms from time to time. By continuing to access or use the Services after revisions become effective, you agree to be bound by the revised Terms.
              </li>
            </ul>
          </section>

          {/* Back Link */}
          <div className="text-center pt-6 border-t border-gray-300">
            <Link
              to="/"
              className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition font-semibold"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Reuse your existing green bottom bar */}
      <div className="bg-green-600 text-white text-center py-2 font-semibold text-sm mt-auto">
        Satta King Fast Results of December 11, 2025 & December 10, 2025
      </div>
    </div>
  );
};

export default Disclaimer;