import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Velaris from "@/components/ui/velaris";

export const metadata: Metadata = {
  title: "Terms of Services — Laras.ai",
  description:
    "Laras.ai Terms of Services v1.2 (last updated 1 October 2026). Agreement between PT Brilliann Nuswantara Bhagawanta and the Customer, covering Indonesia and Singapore.",
};

const HERO_BG = "#151e2c";
const HERO_COLORS = ["#9c7c50", "#3f5f68", "#54472f", "#1d2a3c"];

const TOC = [
  { n: "1", t: "About these Terms" },
  { n: "2", t: "Definitions" },
  { n: "3", t: "The Service" },
  { n: "4", t: "Accounts, Admins and Users" },
  { n: "5", t: "Trial, licences and usage allowances" },
  { n: "6", t: "Fees and payment" },
  { n: "7", t: "Customer Data" },
  { n: "8", t: "Laras Data: usage, aggregated insights and AI improvement" },
  { n: "9", t: "AI features" },
  { n: "10", t: "Customer responsibilities and acceptable use" },
  { n: "11", t: "Intellectual property" },
  { n: "12", t: "Third-party services and the app stores" },
  { n: "13", t: "Confidentiality" },
  { n: "14", t: "Warranties and disclaimers" },
  { n: "15", t: "Suspension and termination" },
  { n: "16", t: "Limitation of liability" },
  { n: "17", t: "Indemnity" },
  { n: "18", t: "Force majeure" },
  { n: "19", t: "Changes to these Terms" },
  { n: "20", t: "Governing law and disputes" },
  { n: "21", t: "General" },
  { n: "22", t: "Contact" },
  { n: "S1", t: "Schedule 1: Country Schedule" },
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

function Clause({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p>
      <strong className="font-semibold text-[#0B1F33]">{n} </strong>
      {children}
    </p>
  );
}

export default function TermsPage() {
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
            Terms of Services
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
          <Section id="s1" no="1" title="About these Terms">
            <Clause n="1.1">
              These Terms of Service (“Terms”) are an agreement between PT Brilliann Nuswantara Bhagawanta,
              a limited liability company established under the laws of the Republic of Indonesia, with its
              registered address at Gedung Menara Kuningan Lantai 7 Unit M, Jl. H.R. Rasuna Said Blok X-7
              Kav. 5, Kelurahan Karet Kuningan, Kecamatan Setiabudi, Kota Administrasi Jakarta Selatan, DKI
              Jakarta, Indonesia, and business identification number (NIB) 022010489171 (“Laras”, “we”,
              “us”), and the company or other organisation that registers for Laras.ai (the “Customer”).
            </Clause>
            <Clause n="1.2">
              The person who registers the Customer accepts these Terms on the Customer&apos;s behalf and
              confirms that they are authorised to do so. Every person the Customer invites to use the Service
              (a “User”) must also accept these Terms for their own use of the Service.
            </Clause>
            <Clause n="1.3">
              The Laras mobile apps are published on the Apple App Store and Google Play by PT Digital
              Equitas Primier on behalf of Laras. PT Digital Equitas Primier is not a party to these Terms and
              has no obligations under them.
            </Clause>
            <Clause n="1.4">If you do not accept these Terms, do not use the Service.</Clause>
            <Clause n="1.5">
              <strong>Country Schedule.</strong> Laras serves Customers registered in Indonesia and in
              Singapore. When registering, the Customer selects the country in which it is registered (the
              “Customer Country”). Schedule 1 (Country Schedule) sets out, for each Customer Country, the
              governing law, the dispute forum, the currency, the taxes and the prevailing language that
              apply. Where Schedule 1 and the body of these Terms differ, Schedule 1 prevails for that
              Customer Country. The Customer must keep its Customer Country accurate; a change of Customer
              Country takes effect from the next licence period. Until the Service offers the country selection
              at registration, the Customer Country is Indonesia unless our order confirmation states Singapore.
            </Clause>
          </Section>

          <Section id="s2" no="2" title="Definitions">
            <ul className="grid list-disc gap-2 pl-5">
              <li><strong>Service:</strong> the Laras.ai mobile apps, web app, the Laras AI assistant and related features we provide.</li>
              <li><strong>Admin:</strong> a User with administrator rights for the Customer&apos;s account.</li>
              <li><strong>Customer Data:</strong> the receipts, invoices, memos, approvals, signatures, chat content and other data that the Customer and its Users submit to the Service, and the outputs the Service produces from them for the Customer (such as extracted fields and memos).</li>
              <li><strong>Usage Data:</strong> data about how the Service is used and performs, such as features used, actions, timestamps, volumes, errors and device and technical data.</li>
              <li><strong>Aggregated Data:</strong> data derived from Usage Data and Customer Data that is aggregated across many customers and de-identified, so that it does not identify the Customer, any User or any individual, or reveal the transactions of any single customer.</li>
              <li><strong>Plan:</strong> the trial, licence or other plan applying to the Customer&apos;s account, including its term, number of seats and usage allowance.</li>
              <li><strong>Privacy Policy:</strong> the Laras.ai Privacy Policy published at <Link href="/privacy-policy" className="font-semibold text-[#0D7A5F] underline underline-offset-4">laras.id/privacy-policy</Link>.</li>
              <li><strong>Customer Country:</strong> the country of registration the Customer selects under clause 1.5, either Indonesia or Singapore.</li>
              <li><strong>Data Protection Law:</strong> for a Customer in Indonesia, Law No. 27 of 2022 on Personal Data Protection (“UU PDP”) and its implementing regulations; for a Customer in Singapore, the Personal Data Protection Act 2012 (“PDPA”) and its regulations; and in each case any other data protection law that applies to the processing.</li>
            </ul>
          </Section>

          <Section id="s3" no="3" title="The Service">
            <Clause n="3.1">
              Laras is an AI-assisted service that reads receipts and invoices, drafts expense memos, learns
              the Customer&apos;s memo template, routes memos for approval, sends notifications and answers
              questions about the Customer&apos;s memos in chat.
            </Clause>
            <Clause n="3.2">
              We continue to develop the Service and may add, change or remove features. We will not remove a
              core feature the Customer is paying for during a paid period without giving reasonable notice.
              New modules, such as policy and budget controls, may be offered under additional terms.
            </Clause>
            <Clause n="3.3">
              Some features may be labelled as early access or beta. They are provided as they are, may change
              or end, and are excluded from any service commitment.
            </Clause>
            <Clause n="3.4">
              The Service supports business administration. It does not move money, make payments, or provide
              accounting, tax, legal or financial advice.
            </Clause>
          </Section>

          <Section id="s4" no="4" title="Accounts, Admins and Users">
            <Clause n="4.1">
              The first person to register a company becomes its Admin. The Admin can invite Users, assign
              roles and approvers, and manage company settings.
            </Clause>
            <Clause n="4.2">
              The Customer is responsible for its Users: for who it invites, for the roles and approval rights
              it grants, for keeping sign-in credentials secure, and for all activity under its account. The
              Customer must tell us promptly at <a href="mailto:info@laras.id" className="font-semibold text-[#0D7A5F] underline underline-offset-4">info@laras.id</a> if it suspects unauthorised access.
            </Clause>
            <Clause n="4.3">
              Each account may be used only by the person it belongs to. Accounts may not be shared.
            </Clause>
            <Clause n="4.4">The Service is for businesses and for people aged 18 or over.</Clause>
            <Clause n="4.5">
              Each Plan includes a number of seats. A seat is used by every active User and every pending
              invitation. An invitation expires 3 days after it is sent. When all seats are used, new
              invitations are refused until a seat is released or added.
            </Clause>
            <Clause n="4.6">
              <strong>Deleting a User account.</strong> Any User can delete their own account in the app or on
              the web. The account is deactivated immediately and the User&apos;s personal login and profile
              data are deleted after 10 days, as described in the Privacy Policy. The memos, documents,
              approvals and audit history the User created are Customer Data and <strong>remain with the Customer</strong>.
              An Admin who is the only Admin must transfer the Admin role before deleting their account.
            </Clause>
            <Clause n="4.7">
              <strong>Deactivating a User.</strong> The Admin can deactivate a User. The User&apos;s history
              stays in the Customer&apos;s records and any pending approvals are reassigned.
            </Clause>
          </Section>

          <Section id="s5" no="5" title="Trial, licences and usage allowances">
            <Clause n="5.1">
              <strong>Trial.</strong> A newly registered company starts on a free trial with a limited usage
              allowance and a limited number of seats. The trial has no time limit but ends when its allowance
              is used.
            </Clause>
            <Clause n="5.2">
              <strong>Licences.</strong> A licence is purchased for a monthly or annual term and starts at the
              moment we activate it. Each licence term renews on the same day of the following month or year
              (or the last day of the month where that day does not exist).
            </Clause>
            <Clause n="5.3">
              <strong>Usage allowance.</strong> Each Plan includes a usage allowance shared by all Users of the
              Customer, measured in chats, where heavier actions (such as reading a document or generating a
              memo) count as more than one chat, and a usage limit on AI processing that protects the Service
              from runaway use. The allowance and limits for each Plan are set out in the order confirmation
              or activation notice. Allowances are monthly for licences, are not carried over to the next
              month, and have no cash value.
            </Clause>
            <Clause n="5.4">
              <strong>When the allowance is used.</strong> When the allowance or the limit is reached, the AI
              features pause until the next monthly allowance period or until the Plan is upgraded. Everything
              else continues to work: viewing, downloading and sharing memos and documents, deciding
              approvals, and notifications.
            </Clause>
            <Clause n="5.5">
              <strong>Grace period.</strong> If a licence period ends without renewal, the Service continues
              for a grace period of 7 days, and use during the grace period is charged to the next period. If
              the licence is not renewed within the grace period, the account becomes <strong>read-only</strong>:
              Users can still sign in, view, download and share their memos and documents, and decide
              approvals already pending, but cannot use the AI features, upload documents, create memos,
              request approvals or invite Users until the licence is renewed. <strong>The Customer&apos;s records are never withheld from it.</strong>
            </Clause>
            <Clause n="5.6">
              <strong>Size limits.</strong> To keep the Service reliable, we may limit file size, page count,
              the number of documents per message and the number of AI processing steps per action. Current
              limits are shown in the Service.
            </Clause>
          </Section>

          <Section id="s6" no="6" title="Fees and payment">
            <Clause n="6.1">
              Fees for a licence and for additional seats are stated in the order confirmation or invoice we
              issue, in the currency set out in Schedule 1. Fees are paid in advance for each period by bank
              transfer to the account we designate. The licence is activated once payment is confirmed.
            </Clause>
            <Clause n="6.2">
              Fees are stated exclusive of taxes. The Customer pays any applicable taxes, including Indonesian
              value added tax (PPN) or Singapore goods and services tax (GST), including where the Customer
              must account for GST itself under the reverse charge, except taxes on our income. If the law
              requires the Customer to withhold tax from a payment, the Customer will increase the payment so
              that we receive the full amount we would have received without the withholding, unless the
              parties agree otherwise in writing.
            </Clause>
            <Clause n="6.3">
              <strong>No refunds.</strong> Fees are non-refundable once a licence period has started,
              including for unused allowance, unused seats or early cancellation, except where the law requires
              a refund or where we end the Service without cause under clause 15.4.
            </Clause>
            <Clause n="6.4">
              We may change our fees for future periods by giving at least 30 days&apos; notice before the next
              renewal. A change never applies to a period already paid.
            </Clause>
            <Clause n="6.5">
              The mobile apps do not sell anything through Apple or Google in-app purchases.
            </Clause>
          </Section>

          <Section id="s7" no="7" title="Customer Data">
            <Clause n="7.1">
              <strong>The Customer owns its Customer Data.</strong> As between the Customer and Laras, the
              Customer keeps all rights in its Customer Data, including the memos, extracted data and other
              outputs the Service produces for it. We claim no ownership of Customer Data.
            </Clause>
            <Clause n="7.2">
              <strong>Licence to us.</strong> The Customer grants us a non-exclusive, worldwide, royalty-free
              licence to host, copy, process, transmit and display Customer Data as needed to provide, secure
              and support the Service, and for the purposes in clause 8.
            </Clause>
            <p>
              <strong className="font-semibold text-[#0B1F33]">7.3 Our role. </strong>
              For Customer Data, the Customer is the data controller (in Singapore terms, the organisation)
              and we act as its data processor (in Singapore terms, its data intermediary). We process
              Customer Data on the Customer&apos;s documented instructions, which are these Terms, the
              Customer&apos;s use of the Service and its settings, except where the law requires otherwise. We will:
            </p>
            <ul className="grid list-[lower-alpha] gap-2 pl-8">
              <li>keep Customer Data confidential and require our staff and service providers to do the same;</li>
              <li>apply the security measures described in the Privacy Policy;</li>
              <li>use only the service providers listed in the Privacy Policy, under written contracts with equivalent protection, and notify the Admin before adding a new one;</li>
              <li>host Customer Data in Indonesia (Jakarta), for Customers in every Customer Country, and transfer it abroad only as described in the Privacy Policy (in particular, AI processing by Anthropic PBC in the United States), with protection comparable to the Data Protection Law that applies to the Customer;</li>
              <li>notify the Customer of a personal data breach affecting Customer Data without undue delay, and in any case in time for the Customer to meet its own notice obligations under the Data Protection Law (3 x 24 hours under UU PDP; 3 calendar days after assessment for a notifiable breach under the PDPA);</li>
              <li>help the Customer respond to requests from individuals exercising their rights under the Data Protection Law over Customer Data;</li>
              <li>delete or return Customer Data at the end of the relationship as set out in clause 15.</li>
            </ul>
            <Clause n="7.4">
              <strong>Never sold.</strong> We never sell Customer Data and never share it with third parties
              for their own marketing or advertising.
            </Clause>
            <Clause n="7.5">
              <strong>Export.</strong> The Admin can download memos and documents through the Service at any
              time, including while the account is read-only.
            </Clause>
          </Section>

          <Section id="s8" no="8" title="Laras Data: usage, aggregated insights and AI improvement">
            <Clause n="8.1">
              <strong>Usage Data belongs to Laras.</strong> We own Usage Data and may use it to operate,
              secure, measure, improve and localise the Service. Where Usage Data identifies an individual, it
              is personal data and we handle it under the Privacy Policy.
            </Clause>
            <div>
              <p>
                <strong className="font-semibold text-[#0B1F33]">8.2 Aggregated Data belongs to Laras. </strong>
                The Customer authorises us to create Aggregated Data from Usage Data and Customer Data. We own
                Aggregated Data and may use it for any lawful purpose, including improving and localising the
                Service, providing benchmarks to customers, and sharing, licensing or selling it to third
                parties (for example, as regional or industry reports). Before Aggregated Data is shared
                outside Laras, we ensure that:
              </p>
              <ul className="mt-2 grid list-[lower-alpha] gap-2 pl-8">
                <li>every figure released is combined from at least 10 different customers;</li>
                <li>it contains no names, contact details, signatures, document images or other data that identifies the Customer, any User or any individual, or the transactions of any single customer;</li>
                <li>every recipient agrees in writing not to attempt to re-identify any customer or individual.</li>
              </ul>
            </div>
            <Clause n="8.3">
              <strong>AI improvement.</strong> The Customer authorises us to use samples of Customer Data to
              test and improve the Service&apos;s AI, including building test sets, improving our instructions
              to AI models and, in future, training models of our own. When we do so, we remove or mask
              personal details where practical, restrict access to authorised staff, and never provide Customer
              Data to Anthropic or any other AI provider for training their models. The Customer may opt out
              at any time by writing to <a href="mailto:info@laras.id" className="font-semibold text-[#0D7A5F] underline underline-offset-4">info@laras.id</a>; the opt-out applies going forward.
            </Clause>
            <Clause n="8.4">
              Clauses 8.1 to 8.3 survive the end of these Terms for data created before that time.
            </Clause>
          </Section>

          <Section id="s9" no="9" title="AI features">
            <p>
              <strong className="font-semibold text-[#0B1F33]">9.1 AI outputs can be wrong. </strong>
              Laras uses artificial intelligence to read documents, suggest values and draft memos. AI can
              misread a document, choose the wrong category or produce inaccurate text. Values Laras suggests
              are marked until a User confirms them.{" "}
              <strong>The Customer and its Users are responsible for reviewing and confirming extracted data
              and memos before relying on them, sending them for approval or using them for accounting or tax purposes.</strong>
            </p>
            <Clause n="9.2">
              <strong>People decide.</strong> Laras never approves or rejects a memo. Every approval decision
              is made by a User, and the Customer is responsible for its approval decisions and its internal
              controls.
            </Clause>
            <Clause n="9.3">
              <strong>Third-party AI.</strong> Content submitted for AI processing is sent to our AI provider,
              Anthropic PBC, as described in the Privacy Policy. Each User gives their own consent to this at
              sign-up.
            </Clause>
            <Clause n="9.4">
              <strong>Not professional advice.</strong> Nothing produced by the Service is accounting, tax,
              legal, audit or financial advice.
            </Clause>
          </Section>

          <Section id="s10" no="10" title="Customer responsibilities and acceptable use">
            <Clause n="10.1">
              The Customer confirms that it has, and will keep, a lawful basis (including any consent or
              notification required) under the Data Protection Law to submit the personal data contained in
              Customer Data (for example, the data of its employees, vendors and other people named on
              receipts and invoices), and that it has given those people any notice required.
            </Clause>
            <p><strong className="font-semibold text-[#0B1F33]">10.2 The Customer and its Users must not:</strong></p>
            <ul className="grid list-[lower-alpha] gap-2 pl-8">
              <li>upload documents that are forged or altered, or use the Service to commit or hide fraud;</li>
              <li>upload content that is unlawful, infringes someone else&apos;s rights, or contains malware;</li>
              <li>try to gain unauthorised access to the Service, other customers&apos; data or our systems, or test their security without our written permission;</li>
              <li>use the Service in a way that overloads it or bypasses its usage limits, seat limits or security measures;</li>
              <li>copy, reverse engineer or build a competing product from the Service, except as the law allows;</li>
              <li>use the Service to train or improve another AI system;</li>
              <li>resell or provide the Service to third parties without our written agreement;</li>
              <li>use the Service in breach of any law, including sanctions and anti-corruption laws.</li>
            </ul>
          </Section>

          <Section id="s11" no="11" title="Intellectual property">
            <Clause n="11.1">
              We and our licensors own the Service, including its software, design, models, prompts,
              templates, the Laras name, persona and brand, Usage Data and Aggregated Data. These Terms give
              the Customer a limited, non-exclusive, non-transferable right to use the Service during its
              Plan; they transfer no other rights.
            </Clause>
            <Clause n="11.2">
              If the Customer or a User gives us feedback or suggestions, we may use them freely without
              obligation.
            </Clause>
            <Clause n="11.3">
              <strong>Publicity.</strong> We will not use the Customer&apos;s name or logo in our marketing
              without the Customer&apos;s prior written consent.
            </Clause>
          </Section>

          <Section id="s12" no="12" title="Third-party services and the app stores">
            <Clause n="12.1">
              The Service relies on third-party services such as Google sign-in, Sign in with Apple, push
              notification services and our AI provider. Their own terms apply to their services, and we are
              not responsible for outages or changes we do not control.
            </Clause>
            <div>
              <p><strong className="font-semibold text-[#0B1F33]">12.2 Apple App Store. </strong>If a User downloads the iOS app from the Apple App Store:</p>
              <ul className="mt-2 grid list-[lower-alpha] gap-2 pl-8">
                <li>these Terms are between the Customer and User and Laras only, not with Apple Inc. (“Apple”), and Laras, not Apple, is solely responsible for the app and its content;</li>
                <li>the User&apos;s licence to use the app is limited to Apple-branded devices the User owns or controls, as permitted by the App Store usage rules;</li>
                <li>Apple has no obligation to provide maintenance or support for the app;</li>
                <li>to the extent any warranty applies by law, if the app fails to conform to it the User may notify Apple and Apple will refund any purchase price paid for the app (the app is free); Apple has no other warranty obligation, and any other claims, losses or costs from a failure to conform are Laras&apos;s responsibility, subject to these Terms;</li>
                <li>Laras, not Apple, is responsible for addressing any claims relating to the app, including product liability claims, claims that the app fails to meet a legal or regulatory requirement, and consumer protection or privacy claims;</li>
                <li>if a third party claims that the app or its use infringes its intellectual property rights, Laras, not Apple, is responsible for the investigation, defence, settlement and discharge of that claim;</li>
                <li>the User confirms they are not located in a country subject to a United States Government embargo or designated as a “terrorist supporting” country, and are not on any United States Government list of prohibited or restricted parties;</li>
                <li>questions, complaints or claims about the app should be sent to Laras at the contact details in clause 22;</li>
                <li>the User must comply with applicable third-party terms when using the app;</li>
                <li>Apple and its subsidiaries are third-party beneficiaries of these Terms and, once the User accepts them, Apple may enforce these Terms against the User as a third-party beneficiary.</li>
              </ul>
            </div>
            <Clause n="12.3">
              <strong>Google Play.</strong> If a User downloads the Android app from Google Play, these Terms
              are between the Customer and User and Laras only, not with Google, and Google&apos;s terms of
              service for Google Play also apply to the download.
            </Clause>
          </Section>

          <Section id="s13" no="13" title="Confidentiality">
            <Clause n="13.1">
              Each party will keep the other&apos;s confidential information confidential, use it only for the
              purposes of these Terms, and protect it with at least reasonable care. Customer Data is the
              Customer&apos;s confidential information. The Service, its non-public features, pricing and our
              technical information are our confidential information.
            </Clause>
            <Clause n="13.2">
              These obligations do not apply to information that is or becomes public without fault, was
              already known, is independently developed, or must be disclosed by law (with notice to the other
              party where lawful). Aggregated Data used in line with clause 8.2 is not the Customer&apos;s
              confidential information.
            </Clause>
          </Section>

          <Section id="s14" no="14" title="Warranties and disclaimers">
            <Clause n="14.1">
              We will provide the Service with reasonable skill and care, in line with these Terms and the
              Privacy Policy.
            </Clause>
            <Clause n="14.2">
              Except as stated in these Terms, the Service is provided “as is” and “as available”. To the
              extent the law allows, we make no other warranties, and we do not guarantee that the Service
              will be uninterrupted or error-free, or that AI outputs will be accurate or complete.
            </Clause>
          </Section>

          <Section id="s15" no="15" title="Suspension and termination">
            <Clause n="15.1">
              <strong>By the Customer.</strong> The Customer may stop using the Service at any time. A paid
              licence ends at the end of its current period if not renewed; clause 6.3 applies.
            </Clause>
            <Clause n="15.2">
              <strong>Suspension.</strong> We may suspend access, in whole or in part, without liability, if
              we reasonably believe it is needed to protect the Service, other customers or the public, if the
              Customer materially breaches clause 10, or if required by law. We will tell the Customer the
              reason and restore access once the issue is resolved.
            </Clause>
            <Clause n="15.3">
              <strong>Termination for breach.</strong> Either party may end these Terms by written notice if
              the other materially breaches them and does not fix the breach within 14 days of notice.
            </Clause>
            <Clause n="15.4">
              <strong>Termination without cause.</strong> We may end the Service for a Customer on at least 30
              days&apos; notice. If we do, we refund the unused portion of any prepaid fees.
            </Clause>
            <Clause n="15.5">
              <strong>Inactive accounts.</strong> A company on a free trial with no licence that has been
              inactive for six months is deleted at the end of that calendar year. A company whose account is
              read-only under clause 5.5 and has been inactive for twelve months is deleted at the end of that
              calendar year. Because deletion runs at the end of each calendar year, the time between last
              activity and deletion may be longer than these minimums. A company may ask us to delete its
              account earlier.
            </Clause>
            <Clause n="15.6">
              <strong>After termination.</strong> The Admin can export Customer Data for 30 days after the
              account ends or becomes read-only, and for as long as it remains read-only. After the account is
              deleted, we delete Customer Data from our live systems, and from backups on our regular backup
              cycle, except where the law requires us to keep it. Clauses 7.4, 8, 11, 13, 14, 16, 17, 20 and 21
              survive termination.
            </Clause>
          </Section>

          <Section id="s16" no="16" title="Limitation of liability">
            <Clause n="16.1">
              Nothing in these Terms limits liability that cannot be limited by law, including liability for
              fraud or wilful misconduct.
            </Clause>
            <Clause n="16.2">
              Neither party is liable for any indirect or consequential loss, or for lost profits, revenue,
              business opportunity or goodwill, however caused.
            </Clause>
            <Clause n="16.3">
              Our total liability arising out of or relating to these Terms and the Service, in any
              twelve-month period, is limited to the fees the Customer actually paid to us for the Service in
              the <strong>three (3) months</strong> before the event giving rise to the claim. For a Customer
              on a free trial, our total liability is limited to the fixed amount for its Customer Country in
              Schedule 1.
            </Clause>
            <Clause n="16.4">
              We are not liable for loss caused by the Customer&apos;s reliance on AI outputs that it did not
              review under clause 9.1, by approval decisions made by its Users, or by the Customer&apos;s
              breach of these Terms.
            </Clause>
          </Section>

          <Section id="s17" no="17" title="Indemnity">
            <p>
              The Customer will defend and indemnify Laras against third-party claims, and the resulting
              losses and reasonable costs, arising from Customer Data submitted without a lawful basis, from
              the Customer&apos;s or its Users&apos; breach of clause 10, or from their misuse of the Service.
            </p>
          </Section>

          <Section id="s18" no="18" title="Force majeure">
            <p>
              Neither party is liable for delay or failure caused by events beyond its reasonable control,
              including natural disasters, epidemics, war, government action, power or internet failures, and
              outages of third-party cloud or AI providers. Payment obligations for periods already used are
              not excused.
            </p>
          </Section>

          <Section id="s19" no="19" title="Changes to these Terms">
            <p>
              We may update these Terms. We will show the version and effective date at the top. For material
              changes, we will notify the Admin in the app or by email at least 14 days before they take
              effect. If the Customer continues to use the Service after that date, the updated Terms apply.
              If the Customer does not agree, it may stop using the Service before that date.
            </p>
          </Section>

          <Section id="s20" no="20" title="Governing law and disputes">
            <Clause n="20.1">These Terms are governed by the law set out in Schedule 1 for the Customer Country.</Clause>
            <Clause n="20.2">
              The parties will first try to resolve any dispute by good-faith discussion for 30 days. If it is
              not resolved, it will be finally settled by arbitration in the forum set out in Schedule 1 for
              the Customer Country, by a single arbitrator. The award is final and binding.
            </Clause>
            <Clause n="20.3">Either party may seek urgent interim relief from a competent court.</Clause>
            <Clause n="20.4">
              Nothing in this clause limits a User&apos;s rights under the Data Protection Law to complain to
              the data protection authority of their country.
            </Clause>
          </Section>

          <Section id="s21" no="21" title="General">
            <Clause n="21.1">
              <strong>Entire agreement.</strong> These Terms, the Privacy Policy and any order confirmation or
              activation notice form the whole agreement about the Service. If they conflict, an order
              confirmation signed by both parties prevails, then these Terms, then the Privacy Policy on
              matters of personal data.
            </Clause>
            <Clause n="21.2">
              <strong>Assignment.</strong> The Customer may not transfer these Terms without our written
              consent. We may transfer them to an affiliate or to a successor to our business, with notice.
            </Clause>
            <Clause n="21.3">
              <strong>Language.</strong> These Terms are made in Indonesian and English. If the two versions
              differ, the version named as prevailing in Schedule 1 for the Customer Country prevails.
            </Clause>
            <Clause n="21.4">
              <strong>Notices.</strong> We send notices to the Admin&apos;s email address or in the app. The
              Customer sends notices to <a href="mailto:info@laras.id" className="font-semibold text-[#0D7A5F] underline underline-offset-4">info@laras.id</a>.
            </Clause>
            <Clause n="21.5">
              <strong>Severability and waiver.</strong> If any part of these Terms is unenforceable, the rest
              remains in force. A failure to enforce a right is not a waiver of it.
            </Clause>
            <Clause n="21.6">
              <strong>Relationship.</strong> The parties are independent contractors.
            </Clause>
            <Clause n="21.7">
              <strong>Electronic acceptance.</strong> These Terms are accepted electronically and are binding
              as an electronic contract under Indonesian law. We keep a record of each acceptance, with its
              date and the version accepted.
            </Clause>
          </Section>

          <Section id="s22" no="22" title="Contact">
            <div className="rounded-[1.5rem] bg-[#0B1F33] p-6 text-white sm:p-8">
              <p className="font-semibold">PT Brilliann Nuswantara Bhagawanta</p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Gedung Menara Kuningan Lantai 7 Unit M, Jl. H.R. Rasuna Said Blok X-7 Kav. 5, Kelurahan Karet
                Kuningan, Kecamatan Setiabudi, Kota Administrasi Jakarta Selatan, DKI Jakarta, Indonesia
              </p>
              <div className="mt-4 grid gap-2 text-sm">
                <p>Support: WhatsApp +62 823 2010 2573 | <a href="mailto:info@laras.id" className="font-semibold underline underline-offset-4">info@laras.id</a></p>
                <p>Legal notices and privacy: <a href="mailto:info@laras.id" className="font-semibold underline underline-offset-4">info@laras.id</a></p>
                <p>Website: <a href="https://laras.id" target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4">https://laras.id</a></p>
              </div>
            </div>
          </Section>

          <Section id="sS1" no="S1" title="Schedule 1: Country Schedule">
            <p>
              The contracting party is <strong>PT Brilliann Nuswantara Bhagawanta</strong> for every Customer
              Country. All Customer Data is hosted in Jakarta, Indonesia, for every Customer Country.
            </p>
            <TableShell>
              <thead>
                <tr>
                  <Th>Item</Th>
                  <Th>Indonesia</Th>
                  <Th>Singapore</Th>
                </tr>
              </thead>
              <tbody>
                <tr><Td strong>Who it applies to</Td><Td>A Customer whose Customer Country is Indonesia</Td><Td>A Customer whose Customer Country is Singapore</Td></tr>
                <tr><Td strong>Governing law</Td><Td>Laws of the Republic of Indonesia</Td><Td>Laws of the Republic of Singapore</Td></tr>
                <tr><Td strong>Dispute forum (clause 20.2)</Td><Td>Arbitration administered by Badan Arbitrase Nasional Indonesia (BANI), seated in Jakarta, under the BANI rules in force, conducted in Indonesian</Td><Td>Arbitration administered by the Singapore International Arbitration Centre (SIAC), seated in Singapore, under the SIAC Rules in force, conducted in English</Td></tr>
                <tr><Td strong>Data Protection Law</Td><Td>UU PDP and its implementing regulations</Td><Td>PDPA and its regulations</Td></tr>
                <tr><Td strong>Currency of fees</Td><Td>Indonesian rupiah (IDR)</Td><Td>Singapore dollar (SGD)</Td></tr>
                <tr><Td strong>Taxes (clause 6.2)</Td><Td>PPN, where applicable</Td><Td>GST, where applicable, including under the reverse charge</Td></tr>
                <tr><Td strong>Trial liability amount (clause 16.3)</Td><Td>IDR 1,000,000</Td><Td>The amount in Singapore dollars equal to IDR 1,000,000 on the date of the claim</Td></tr>
                <tr><Td strong>Prevailing language (clause 21.3)</Td><Td>Indonesian</Td><Td>English</Td></tr>
                <tr><Td strong>Data protection authority</Td><Td>The Indonesian personal data protection authority</Td><Td>Personal Data Protection Commission (PDPC)</Td></tr>
              </tbody>
            </TableShell>
          </Section>
        </article>

        <p className="mt-12 border-t border-[#E3E6DF] pt-6 text-center text-xs text-[#64748B]">
          Laras.ai — Terms of Services v1.2 · Last updated 1 October 2026
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-[#151e2c] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-2 px-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:px-6">
          <p>Copyright 2026 Laras.ai. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <Link href="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="font-semibold text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
