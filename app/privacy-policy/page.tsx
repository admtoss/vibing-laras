import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Velaris from "@/components/ui/velaris";

export const metadata: Metadata = {
  title: "Privacy Policy — Laras.ai",
  description:
    "Laras.ai Privacy Policy v1.2 (last updated 1 October 2026). How we collect, use, share and protect personal data under Indonesia UU PDP and Singapore PDPA.",
};

const HERO_BG = "#151e2c";
const HERO_COLORS = ["#9c7c50", "#3f5f68", "#54472f", "#1d2a3c"];

const TOC = [
  { n: "1", t: "Who we are" },
  { n: "2", t: "Two roles: your company's records and our own data" },
  { n: "3", t: "The personal data we collect" },
  { n: "4", t: "How we use personal data, and on what legal basis" },
  { n: "5", t: "Artificial intelligence and our AI provider" },
  { n: "6", t: "Usage analytics and aggregated insights" },
  { n: "7", t: "Improving Laras's AI" },
  { n: "8", t: "What we never do" },
  { n: "9", t: "Who we share personal data with" },
  { n: "10", t: "International transfers" },
  { n: "11", t: "How long we keep personal data" },
  { n: "12", t: "How we protect personal data" },
  { n: "13", t: "Your rights" },
  { n: "14", t: "Device permissions" },
  { n: "15", t: "Children" },
  { n: "16", t: "Changes to this Policy" },
  { n: "17", t: "Country-specific information" },
  { n: "18", t: "Contact us" },
];

function TableShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-2xl ring-1 ring-[#E3E6DF]">
      <table className="w-full min-w-[640px] border-collapse bg-white text-left text-sm leading-relaxed">
        {children}
      </table>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="bg-[#0B1F33] px-4 py-3 align-top text-[13px] font-semibold text-white">
      {children}
    </th>
  );
}

function Td({ children, strong = false }: { children: React.ReactNode; strong?: boolean }) {
  return (
    <td
      className={`border-t border-[#E3E6DF] px-4 py-3 align-top text-[#334155] ${
        strong ? "font-semibold text-[#0B1F33]" : ""
      }`}
    >
      {children}
    </td>
  );
}

function Section({
  id,
  no,
  title,
  children,
}: {
  id: string;
  no: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="flex items-baseline gap-3 text-xl font-semibold tracking-tight text-[#0B1F33] md:text-2xl">
        <span className="shrink-0 rounded-lg bg-[#EDF1F6] px-2.5 py-1 font-mono text-sm text-[#2F6B4F]">
          {no}
        </span>
        <span>{title}</span>
      </h2>
      <div className="mt-4 grid gap-4 text-[15px] leading-relaxed text-[#334155]">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-dvh bg-white text-[#0B1F33]">
      {/* Simple header for legal pages */}
      <header className="fixed inset-x-0 top-3 z-40 sm:top-4">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between gap-2 rounded-full bg-white/85 py-1 pr-1.5 pl-1.5 shadow-[0_8px_30px_rgba(11,31,51,0.12)] ring-1 ring-black/5 backdrop-blur-xl">
          <div className="flex shrink-0 items-center gap-1">
            <Link
              href="/"
              aria-label="Back to home"
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#0B1F33] transition hover:bg-[#0B1F33]/5 active:translate-y-px active:scale-[0.98]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 256 256">
                <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" fill="currentColor" />
              </svg>
            </Link>
            <Link href="/" className="flex items-center" aria-label="Laras.ai home">
              <Image src="/assets/Logo-laras.svg" alt="Laras.ai" width={92} height={27} className="h-6 w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/#free-trial"
              className="shrink-0 rounded-full bg-[#0B1F33] px-4 py-2.5 text-sm font-medium whitespace-nowrap text-white transition hover:bg-[#14745A] active:translate-y-px active:scale-[0.98]"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#151e2c]">
        <Velaris bg={HERO_BG} colors={HERO_COLORS} speed={1.0} grain={0.35} height="100%" className="absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 pt-32 pb-12 text-center sm:px-6">
          <h1 className="mx-auto max-w-[20ch] text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-white md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm tracking-wide text-white/70">
            Version 1.2
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        {/* TOC */}
        <nav aria-label="Table of contents" className="rounded-[1.5rem] bg-[#F4F3EC] p-6 sm:p-8">
          <h2 className="text-sm font-semibold tracking-[0.14em] text-[#0B1F33] uppercase">On this page</h2>
          <div className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {[TOC.slice(0, Math.ceil(TOC.length / 2)), TOC.slice(Math.ceil(TOC.length / 2))].map(
              (col, i) => (
                <ol key={i} className="grid content-start gap-y-2">
                  {col.map((s) => (
                    <li key={s.n}>
                      <a href={`#s${s.n}`} className="group flex items-baseline gap-2.5 text-sm leading-relaxed">
                        <span className="shrink-0 font-mono font-semibold text-[#2F6B4F]">{s.n}.</span>
                        <span className="text-[#334155] underline-offset-4 group-hover:text-[#0B1F33] group-hover:underline">
                          {s.t}
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>
              )
            )}
          </div>
        </nav>

        <article className="mt-12 grid gap-12">
          <Section id="s1" no="1" title="Who we are">
            <p>
              Laras.ai (“Laras”, “we”, “us”, “our”) is an AI-assisted expense, memo and approval service for
              businesses. Laras is operated by <strong>PT Brilliann Nuswantara Bhagawanta</strong>, a limited
              liability company established under the laws of the Republic of Indonesia, with its registered
              address at Gedung Menara Kuningan Lantai 7 Unit M, Jl. H.R. Rasuna Said Blok X-7 Kav. 5,
              Kelurahan Karet Kuningan, Kecamatan Setiabudi, Kota Administrasi Jakarta Selatan, DKI Jakarta,
              Indonesia, and business identification number (NIB) 022010489171.
            </p>
            <p>
              The Laras mobile apps are published on the Apple App Store and Google Play by{" "}
              <strong>PT Digital Equitas Primier</strong> on behalf of PT Brilliann Nuswantara Bhagawanta.
              PT Digital Equitas Primier acts only as the app publisher: it receives the download and store
              statistics that Apple and Google provide to every publisher, and it does not access the
              information you put into Laras.
            </p>
            <p>
              Privacy contact and Data Protection Officer:{" "}
              <a href="mailto:info@laras.id" className="font-semibold text-[#0D7A5F] underline underline-offset-4">
                info@laras.id
              </a>
            </p>
            <p>
              Laras serves companies registered in Indonesia and in Singapore. The rules that apply to you
              follow the country your company selected when it registered: Indonesian Law No. 27 of 2022 on
              Personal Data Protection (“UU PDP”) and its implementing regulations for companies in
              Indonesia, and the Singapore Personal Data Protection Act 2012 (“PDPA”) for companies in
              Singapore.
            </p>
          </Section>

          <Section id="s2" no="2" title="Two roles: your company's records and our own data">
            <p>
              Laras is used by companies. Each company (the “Customer”) registers an account and invites its
              own people (employees, finance staff, approvers). This creates two different situations, and we
              treat them differently.
            </p>
            <div className="grid gap-3">
              <div className="rounded-2xl bg-[#EDF1F6] p-5">
                <p className="font-semibold text-[#0B1F33]">2.1 Your company&apos;s records belong to your company.</p>
                <p className="mt-2">
                  The receipts, invoices, memos, approvals, signatures and other business records that users
                  put into Laras (“Customer Data”) are owned and controlled by the Customer. For Customer
                  Data, the Customer is the data controller (under the PDPA, the “organisation”) and we
                  process it on the Customer&apos;s behalf and on its instructions as its processor (under the
                  PDPA, its “data intermediary”), as set out in our Terms of Service. If you use Laras through
                  your employer, your employer decides which of your data goes into Laras and is your first
                  point of contact for questions about those records.
                </p>
              </div>
              <div className="rounded-2xl bg-[#EDF1F6] p-5">
                <p className="font-semibold text-[#0B1F33]">2.2 Some data is ours to control.</p>
                <p className="mt-2">
                  We are the data controller for the data we need to run, secure and improve the Service:
                  your account and login data, consent records, usage and device data, support conversations,
                  and the aggregated, de-identified insights described in Section 6. This Policy is mainly
                  about that data, and it also explains how we handle Customer Data as a processor.
                </p>
              </div>
            </div>
          </Section>

          <Section id="s3" no="3" title="The personal data we collect">
            <TableShell>
              <thead>
                <tr>
                  <Th>Category</Th>
                  <Th>What it includes</Th>
                  <Th>Where it comes from</Th>
                </tr>
              </thead>
              <tbody>
                <tr><Td strong>Account data</Td><Td>Name, work email address, password (stored only as a one-way hash), the Google or Apple sign-in identifier if you use single sign-on, language preference, role in the company</Td><Td>You, or the Google or Apple sign-in you choose</Td></tr>
                <tr><Td strong>Company and membership data</Td><Td>Company name and profile, company timezone, your department, your role, who invited you, approval assignments</Td><Td>The company&apos;s Admin, you, or Laras when you confirm a detail in chat</Td></tr>
                <tr><Td strong>Invitation data</Td><Td>The email address of a person you invite, and the invitation status</Td><Td>The user who sends the invitation</Td></tr>
                <tr><Td strong>Documents</Td><Td>Photos and PDF files of receipts and invoices, and the fields read from them: vendor, date, amounts, taxes, line items, expense category. These may contain personal data printed on the document, such as a name or phone number</Td><Td>You, when you upload</Td></tr>
                <tr><Td strong>Memos and approvals</Td><Td>Memo content, activity names, approval requests and decisions, rejection reasons, comments, approval history</Td><Td>You and the other users of your company</Td></tr>
                <tr><Td strong>Signatures and initials (paraf)</Td><Td>The signature and paraf images you draw or upload, applied to memos you approve or request</Td><Td>You</Td></tr>
                <tr><Td strong>Chat conversations</Td><Td>Your messages to Laras and her replies, bookmarks</Td><Td>You and the Service</Td></tr>
                <tr><Td strong>Usage data</Td><Td>Features used, actions taken, timestamps, the number of chats, documents and memos processed, AI processing volume (tokens), response times, errors</Td><Td>Generated automatically when you use the Service</Td></tr>
                <tr><Td strong>Device and technical data</Td><Td>Device model, operating system and app version, push notification token, IP address, browser type, crash reports and diagnostic logs</Td><Td>Your device and browser, automatically</Td></tr>
                <tr><Td strong>Security and audit data</Td><Td>Sign-in events, failed sign-in attempts, account lockouts, a record of every memo, approval and settings change, file fingerprints used to detect duplicate uploads</Td><Td>Generated automatically</Td></tr>
                <tr><Td strong>Consent records</Td><Td>When you accepted these documents, which version, and your AI processing consent</Td><Td>You</Td></tr>
                <tr><Td strong>Support and billing data</Td><Td>Messages you send to our support line (including WhatsApp), and for the company account: plan, licence period, seats and the payment reference of a bank transfer</Td><Td>You and your company&apos;s Admin</Td></tr>
              </tbody>
            </TableShell>
            <div className="rounded-2xl border border-[#0B1F33]/15 bg-white p-5 shadow-sm">
              <p className="font-semibold text-[#0B1F33]">What we do not collect.</p>
              <p className="mt-2">
                Face ID, Touch ID and fingerprint checks happen entirely on your device; Laras only receives
                a yes or no result and never receives your biometric data. We do not read your contacts, we
                do not track your location, we do not collect data about other apps on your device, and we do
                not show advertising.
              </p>
            </div>
          </Section>

          <Section id="s4" no="4" title="How we use personal data, and on what legal basis">
            <p>
              The table shows the legal basis under UU PDP. For companies in Singapore, we rely on your
              consent (including consent given by your use of the Service for the purposes we notify you of
              here), on the legitimate interests exception, or on another basis the PDPA permits; see Section
              17.2.
            </p>
            <TableShell>
              <thead>
                <tr>
                  <Th>Purpose</Th>
                  <Th>Data used</Th>
                  <Th>Legal basis under UU PDP</Th>
                </tr>
              </thead>
              <tbody>
                <tr><Td>Creating and securing your account, signing you in, locking an account after failed attempts, invitation and password emails</Td><Td>Account, membership, invitation, security data</Td><Td>Performance of the contract with you and your company</Td></tr>
                <tr><Td>Reading receipts and invoices, drafting memos, answering in chat, reporting, approval routing and notifications</Td><Td>Documents, memos and approvals, chat, signatures, membership data</Td><Td>Performance of the contract; processing on the Customer&apos;s instructions</Td></tr>
                <tr><Td>Sending documents and chat to our AI provider (Section 5)</Td><Td>Documents, chat, memo content</Td><Td>Your explicit consent, and performance of the contract</Td></tr>
                <tr><Td>Applying the company&apos;s plan, usage allowance and seat limits</Td><Td>Usage data, billing data</Td><Td>Performance of the contract</Td></tr>
                <tr><Td>Detecting misuse, fraud and duplicate receipts, keeping an audit trail</Td><Td>Security and audit data, file fingerprints, documents</Td><Td>Legitimate interest and legal obligation</Td></tr>
                <tr><Td>Measuring and improving the Service, fixing errors, localising Laras for regions and industries</Td><Td>Usage, device and technical data; aggregated or de-identified data</Td><Td>Legitimate interest, and your consent where required</Td></tr>
                <tr><Td>Building aggregated, de-identified insights (Section 6)</Td><Td>Usage data and Customer Data, after aggregation and de-identification</Td><Td>Legitimate interest, and authorised by the Customer in the Terms of Service</Td></tr>
                <tr><Td>Improving Laras&apos;s AI with de-identified documents (Section 7)</Td><Td>Documents and memos, after de-identification</Td><Td>Legitimate interest, and authorised by the Customer in the Terms of Service</Td></tr>
                <tr><Td>Answering support requests and contacting the Admin about the licence</Td><Td>Support and billing data, account data</Td><Td>Performance of the contract</Td></tr>
                <tr><Td>Complying with law, tax and accounting rules, and requests from authorities</Td><Td>Any category, as required</Td><Td>Legal obligation</Td></tr>
              </tbody>
            </TableShell>
            <p>
              We use your data only for the purposes listed here. If we want to use it for a new purpose that
              is not compatible with these, we will tell you first and, where the law requires it, ask for
              your consent.
            </p>
          </Section>

          <Section id="s5" no="5" title="Artificial intelligence and our AI provider">
            <p>
              Laras uses large language models from <strong>Anthropic PBC</strong> (United States) through
              Anthropic&apos;s commercial API to read receipts and invoices, draft memos, learn a
              company&apos;s memo template and reply in chat. To do this, the content you give Laras
              (document images and PDF files, your chat messages and the related memo details) is sent to
              Anthropic for processing.
            </p>
            <ul className="grid list-disc gap-3 pl-5">
              <li>
                <strong>We ask for your explicit permission before any of your content is sent to Anthropic.</strong>{" "}
                You give it at sign-up, separately from accepting these documents. You can withdraw it at any
                time (Section 13); because reading documents and chatting with Laras depend on it, the AI
                features stop working for you if you do.
              </li>
              <li>
                Under Anthropic&apos;s commercial terms, Anthropic does not use content sent through its API
                to train its models, and keeps it only for a limited period for trust and safety purposes.
              </li>
              <li>
                Laras&apos;s outputs are suggestions. Laras never approves or rejects a memo; every approval
                decision is made by a person. Values Laras proposes are marked as suggested until a user
                confirms them. You have the right to object to decisions made solely by automated processing;
                in Laras, no decision with legal or financial effect on you is made that way.
              </li>
            </ul>
          </Section>

          <Section id="s6" no="6" title="Usage analytics and aggregated insights">
            <p>
              Laras is built to fit the way businesses work in each region and industry. To do that, we study
              how the Service is used.
            </p>
            <p>
              <strong>6.1 Usage analytics.</strong> We analyse usage, device and technical data to understand
              which features are used, where users get stuck, how long responses take and what goes wrong, so
              that we can fix and improve the Service.
            </p>
            <p>
              <strong>6.2 Aggregated, de-identified insights.</strong> We combine data from many Customers,
              including information read from documents (such as expense categories, typical amounts, document
              formats, tax treatment and common spending patterns by region or industry), into aggregated
              statistics that do not identify any person or any Customer (“Aggregated Data”). Aggregated Data
              belongs to us. We use it to localise and improve Laras, to give Customers anonymous benchmarks,
              and we may share or commercialise it with third parties, for example as industry or regional
              reports.
            </p>
            <div className="rounded-2xl bg-[#EDF1F6] p-5">
              <p className="font-semibold text-[#0B1F33]">6.3 Our safeguards. Before any Aggregated Data leaves Laras:</p>
              <ul className="mt-2 grid list-disc gap-2 pl-5">
                <li>it is combined from at least 10 different Customers for every figure released, so no single company&apos;s figures can be seen or worked out;</li>
                <li>it contains no names, email addresses, signatures, document images, or any data that identifies a person or a Customer, or the transactions of any single Customer;</li>
                <li>anyone who receives it must agree in writing not to try to re-identify any person or Customer.</li>
              </ul>
              <p className="mt-3">
                Aggregated Data is not personal data. Usage data that can still be linked to you remains
                personal data, and we treat it under this Policy.
              </p>
            </div>
          </Section>

          <Section id="s7" no="7" title="Improving Laras's AI">
            <p>
              To make Laras read Indonesian and regional receipts more accurately, we may use samples of
              documents and memos to test and tune Laras (for example, to build test sets, improve our
              instructions to the AI model, or, in future, train a model of our own). When we do this:
            </p>
            <ul className="grid list-disc gap-2 pl-5">
              <li>we remove or mask personal details such as names, phone numbers, signatures and account numbers where it is practical to do so;</li>
              <li>access is limited to the members of our team who need it, under confidentiality obligations;</li>
              <li>the material is never given to Anthropic or any other AI provider for training their models;</li>
              <li>a Customer can opt out in writing at <a href="mailto:info@laras.id" className="font-semibold text-[#0D7A5F] underline underline-offset-4">info@laras.id</a>, and its documents are then excluded going forward.</li>
            </ul>
          </Section>

          <Section id="s8" no="8" title="What we never do">
            <ul className="grid list-disc gap-2 rounded-2xl bg-[#0B1F33] p-5 pl-10 text-white">
              <li>We <strong>never sell</strong> your personal data or your company&apos;s Customer Data.</li>
              <li>We never share Customer Data with third parties for their own marketing or advertising.</li>
              <li>We never let our AI provider train its models on your content.</li>
              <li>We never show ads or track you across other companies&apos; apps and websites.</li>
              <li>We never use Customer Data from one Customer to serve another Customer, except in aggregated, de-identified form under Section 6.</li>
            </ul>
          </Section>

          <Section id="s9" no="9" title="Who we share personal data with">
            <p>
              <strong>9.1 Your company.</strong> Users of your company see the data the Service is designed
              to show them, according to their role: for example, your approver sees the memos you send for
              approval, and your Admin sees users and company settings.
            </p>
            <p>
              <strong>9.2 Our service providers (processors).</strong> We use the following providers to run
              the Service. Each processes personal data only on our instructions and is bound by contract to
              protect it with the same or equal protection as this Policy.
            </p>
            <TableShell>
              <thead>
                <tr>
                  <Th>Provider</Th>
                  <Th>What it does for Laras</Th>
                  <Th>Location of processing</Th>
                </tr>
              </thead>
              <tbody>
                <tr><Td strong>Google Cloud Platform (Google LLC)</Td><Td>Hosting, database, file storage, logging and monitoring</Td><Td>Indonesia (Jakarta region)</Td></tr>
                <tr><Td strong>Google Firebase (Google LLC)</Td><Td>Sign-in, push notifications, crash reporting for the mobile apps</Td><Td>Global infrastructure, may include outside Indonesia</Td></tr>
                <tr><Td strong>Anthropic PBC</Td><Td>AI processing of documents and chat (Section 5)</Td><Td>United States</Td></tr>
                <tr><Td strong>Apple Inc.</Td><Td>Sign in with Apple; push notifications to iPhones</Td><Td>Global</Td></tr>
                <tr><Td strong>Our email delivery provider</Td><Td>Sending invitation, verification and password emails</Td><Td>May include outside Indonesia</Td></tr>
                <tr><Td strong>WhatsApp (Meta)</Td><Td>Support conversations, only if you contact us there</Td><Td>Global</Td></tr>
              </tbody>
            </TableShell>
            <p>
              We will update this list before we add a provider that processes personal data, and we notify
              Customers&apos; Admins of material changes.
            </p>
            <p>
              <strong>9.3 Legal reasons.</strong> We may disclose personal data when required by law, a court
              order or a lawful request from a government authority, or to protect the rights, property or
              safety of Laras, our users or the public.
            </p>
            <p>
              <strong>9.4 Business transfers.</strong> If our business is merged, acquired or its assets are
              sold, personal data may transfer to the new owner, who must continue to protect it under this
              Policy. We will notify you before that happens.
            </p>
          </Section>

          <Section id="s10" no="10" title="International transfers">
            <p>
              Our main systems and your stored data are hosted in Jakarta, Indonesia, for companies in both
              Indonesia and Singapore. Some processing takes place elsewhere, namely AI processing by
              Anthropic in the United States and some Firebase and Apple services. For companies in
              Singapore, this means your data is transferred from Singapore to Indonesia and to the United
              States.
            </p>
            <p>
              We only transfer personal data across borders in line with the law that applies to you: under UU
              PDP, to a country with an equal or higher level of protection, under binding contractual
              safeguards, or with your consent; under the PDPA, only where the recipient is bound by legally
              enforceable obligations (such as contracts) to protect it to a standard comparable to the PDPA.
              By giving the AI consent in Section 5, you consent to the transfer of your content to Anthropic
              in the United States for that purpose.
            </p>
          </Section>

          <Section id="s11" no="11" title="How long we keep personal data">
            <TableShell>
              <thead>
                <tr>
                  <Th>Data</Th>
                  <Th>How long</Th>
                </tr>
              </thead>
              <tbody>
                <tr><Td>Your account and profile after you delete your account</Td><Td>Your account is deactivated immediately. Your personal login and profile data are permanently deleted <strong>10 days</strong> later; during those 10 days our support team can restore the account if you ask.</Td></tr>
                <tr><Td>Customer Data (documents, memos, approvals, signatures on decided memos, audit history)</Td><Td>As long as the Customer&apos;s account exists. These are your company&apos;s business records, so they <strong>stay with the company</strong> when an individual user deletes their account.</Td></tr>
                <tr><Td>A company account on a free trial with no licence</Td><Td>Deleted at the end of the calendar year once the company has been inactive for six months.</Td></tr>
                <tr><Td>A company account whose licence has ended and is suspended</Td><Td>Deleted at the end of the calendar year once the company has been inactive for twelve months.</Td></tr>
                <tr><Td>Security, audit and consent records</Td><Td>As long as the company account exists, and longer where the law requires.</Td></tr>
                <tr><Td>Usage and diagnostic data</Td><Td>As long as needed for the purposes in Section 4, after which it is deleted or aggregated.</Td></tr>
                <tr><Td>Backups</Td><Td>Overwritten on our regular backup cycle.</Td></tr>
                <tr><Td>Aggregated Data</Td><Td>Indefinitely, as it does not identify anyone.</Td></tr>
              </tbody>
            </TableShell>
            <p>
              Because deletion of inactive companies runs at the end of each calendar year, the actual time
              between last activity and deletion can be longer than the minimum shown. A Customer can ask us
              to delete its whole company account sooner by contacting us; the Admin can export the
              company&apos;s records first.
            </p>
          </Section>

          <Section id="s12" no="12" title="How we protect personal data">
            <p>
              All data is encrypted in transit (TLS). Passwords are stored only as one-way hashes. Secrets
              are kept in a managed secret store. Access is controlled by role and checked on our servers for
              every protected action; every memo, approval and settings change is written to an audit log that
              cannot be edited. Approval decisions in the mobile app require Face ID, Touch ID or fingerprint
              (or the device passcode). Our staff access personal data only when needed to run or support the
              Service.
            </p>
            <p>
              No system is perfectly secure. If a personal data breach occurs, we will notify the affected
              people and the authorities within the time the law of your country requires (Section 17), and
              tell you what happened, what data was involved and what we are doing about it. Where the breach
              concerns Customer Data, we will also notify the Customer&apos;s Admin without delay, so the
              Customer can meet its own obligations.
            </p>
          </Section>

          <Section id="s13" no="13" title="Your rights">
            <p>Depending on the law of your country (Section 17), you have the right to:</p>
            <ul className="grid list-disc gap-2 pl-5">
              <li>get information about how we process your personal data and why;</li>
              <li>access your personal data and obtain a copy;</li>
              <li>correct inaccurate or incomplete data;</li>
              <li>have your personal data deleted;</li>
              <li>withdraw your consent;</li>
              <li>object to decisions based solely on automated processing, including profiling;</li>
              <li>restrict or suspend processing;</li>
              <li>receive your data in a commonly used format and have it transferred to another controller;</li>
              <li>claim compensation for a breach of your rights, under the law.</li>
            </ul>
            <p>
              <strong>How to exercise them.</strong> You can update most of your details in Settings. To
              delete your account, use <strong>Settings &gt; Delete account</strong> in the mobile app or the
              web app. If you cannot use the app, follow the steps at{" "}
              <a href="https://laras.id/delete-account" target="_blank" rel="noreferrer" className="font-semibold text-[#0D7A5F] underline underline-offset-4">
                https://laras.id/delete-account
              </a>{" "}
              or email <a href="mailto:info@laras.id" className="font-semibold text-[#0D7A5F] underline underline-offset-4">info@laras.id</a> from
              your registered address. For anything else, email info@laras.id. We may ask you to verify your
              identity. We respond within the time the law of your country requires (Section 17), and tell
              you if a request will take longer to complete.
            </p>
            <p>
              <strong>Requests about Customer Data.</strong> If your request concerns your company&apos;s
              records (for example, deleting a memo or a receipt), we will pass it to your company, which
              decides as the controller of those records, and we will help it respond.
            </p>
            <p>
              <strong>Withdrawing consent</strong> does not affect processing that took place before you
              withdrew it. If you withdraw the AI consent, the AI features stop working for you; your account
              and records remain.
            </p>
          </Section>

          <Section id="s14" no="14" title="Device permissions">
            <p>
              The mobile apps ask for these permissions only when you use the related feature, and you can
              change them in your device settings at any time:
            </p>
            <ul className="grid list-disc gap-2 pl-5">
              <li><strong>Camera:</strong> to photograph a receipt or invoice.</li>
              <li><strong>Photos:</strong> to upload a receipt, invoice or signature image you choose.</li>
              <li><strong>Notifications:</strong> to tell you about approvals and memo updates. Laras works without them; you will see updates inside the app.</li>
              <li><strong>Face ID, Touch ID or fingerprint:</strong> to confirm an approval decision and to unlock the app. The check runs on your device only.</li>
            </ul>
          </Section>

          <Section id="s15" no="15" title="Children">
            <p>
              The Service is for businesses and for people aged 18 or over. We do not knowingly collect
              personal data from anyone under 18. If you believe a child has given us personal data, contact
              us and we will delete it.
            </p>
          </Section>

          <Section id="s16" no="16" title="Changes to this Policy">
            <p>
              We may update this Policy as the Service changes. We will show the version and effective date
              at the top. For material changes we will notify you in the app or by email before they take
              effect and, where the law requires, ask for your consent again.
            </p>
          </Section>

          <Section id="s17" no="17" title="Country-specific information">
            <p>
              The country that applies to you is the country your company selected when it registered for
              Laras.
            </p>
            <div className="grid gap-3">
              <div className="rounded-2xl bg-[#EDF1F6] p-5">
                <p className="font-semibold text-[#0B1F33]">17.1 Indonesia (UU PDP)</p>
                <ul className="mt-2 grid list-disc gap-2 pl-5">
                  <li><strong>Legal bases:</strong> as listed in Section 4.</li>
                  <li><strong>Your rights:</strong> all the rights listed in Section 13, including data portability and the right to object to decisions based solely on automated processing.</li>
                  <li><strong>Response time:</strong> we respond to requests to access, correct, delete, restrict processing or withdraw consent within <strong>3 x 24 hours</strong> of receiving and verifying the request.</li>
                  <li><strong>Data breach:</strong> we notify the affected people and the authority in writing within <strong>3 x 24 hours</strong> of becoming aware of the breach.</li>
                  <li><strong>Complaints:</strong> to the Indonesian personal data protection authority.</li>
                  <li><strong>Language:</strong> the Indonesian version of this Policy prevails if the two versions differ.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-[#EDF1F6] p-5">
                <p className="font-semibold text-[#0B1F33]">17.2 Singapore (PDPA)</p>
                <ul className="mt-2 grid list-disc gap-2 pl-5">
                  <li><strong>Data Protection Officer:</strong> reachable at info@laras.id, and answered during Singapore business hours. Contact our Data Protection Officer for any question, request or complaint about your personal data.</li>
                  <li><strong>Consent and purposes:</strong> we collect, use and disclose your personal data with your consent for the purposes notified in this Policy, or where the PDPA allows us to do so without consent (for example, under the legitimate interests or business improvement exceptions). We do not use your data for a new purpose without notifying you and, where required, obtaining your consent.</li>
                  <li><strong>Withdrawing consent:</strong> you can withdraw consent at any time by giving us reasonable notice at info@laras.id. We will tell you the likely consequences (for example, that the AI features stop working) and act on it within a reasonable time.</li>
                  <li><strong>Access and correction:</strong> you can ask for your personal data and for information about how it has been used or disclosed in the past year, and ask us to correct errors. We respond as soon as reasonably possible and within <strong>30 days</strong>; if we need longer, we will tell you within 30 days when we will respond. We may charge a reasonable fee for an access request, and we will tell you the fee before processing it.</li>
                  <li><strong>Retention:</strong> we stop keeping personal data once it is no longer needed for the purposes it was collected for or for legal or business purposes, as described in Section 11.</li>
                  <li><strong>Transfers:</strong> your data is hosted in Jakarta, Indonesia, and AI processing takes place in the United States; we protect it as described in Section 10.</li>
                  <li><strong>Data breach:</strong> where a breach is likely to cause you significant harm, or affects 500 or more people, we notify the Personal Data Protection Commission (PDPC) within <strong>3 calendar days</strong> after assessing that it is notifiable, and we notify you as soon as practicable where it is likely to cause you significant harm.</li>
                  <li><strong>Identification numbers:</strong> we do not ask for your NRIC or FIN number. Please do not upload documents showing a full NRIC or FIN number unless your company requires it for its records.</li>
                  <li><strong>Complaints:</strong> if you are not satisfied with our response, you may complain to the Personal Data Protection Commission (www.pdpc.gov.sg).</li>
                  <li><strong>Language:</strong> the English version of this Policy prevails if the two versions differ.</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="s18" no="18" title="Contact us">
            <div className="rounded-[1.5rem] bg-[#0B1F33] p-6 text-white sm:p-8">
              <p className="font-semibold">PT Brilliann Nuswantara Bhagawanta</p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Gedung Menara Kuningan Lantai 7 Unit M, Jl. H.R. Rasuna Said Blok X-7 Kav. 5, Kelurahan Karet
                Kuningan, Kecamatan Setiabudi, Kota Administrasi Jakarta Selatan, DKI Jakarta, Indonesia
              </p>
              <div className="mt-4 grid gap-2 text-sm">
                <p>Data Protection Officer and privacy questions: <a href="mailto:info@laras.id" className="font-semibold underline underline-offset-4">info@laras.id</a></p>
                <p>Support: WhatsApp +62 823 2010 2573 | <a href="mailto:info@laras.id" className="font-semibold underline underline-offset-4">info@laras.id</a></p>
                <p>Website: <a href="https://laras.id" target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4">https://laras.id</a></p>
              </div>
            </div>
          </Section>
        </article>

        <p className="mt-12 border-t border-[#E3E6DF] pt-6 text-center text-xs text-[#64748B]">
          Laras.ai — Privacy Policy v1.2 · Last updated 1 October 2026
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-[#151e2c] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-2 px-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:px-6">
          <p>Copyright 2026 Laras.ai. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <Link href="/privacy-policy" className="font-semibold text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
