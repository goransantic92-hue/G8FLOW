/* G8 Flow — EN / SR. Brand, plan names, URLs stay shared. */
(function (global) {
  const STORAGE = 'g8-lang';
  const SITE = 'https://g8flow-kappa.vercel.app/';

  const en = {
    'meta.title': 'G8 Flow — Sites that grow revenue',
    'meta.desc': 'G8 Flow builds websites that sell — clear offers, clear paths, and the one next step that turns traffic into calls.',
    'jsonld.job': 'Web designer and developer',
    'jsonld.catalog': 'Website and app builds',
    'jsonld.offer.launch': 'A one-offer site with a clear path to buy or book.',
    'jsonld.offer.growth': 'Shop, booking, or a longer path that converts.',
    'jsonld.offer.custom': 'Apps and scoped builds — book a call.',
    'jsonld.area': 'Worldwide',

    'skip': 'Skip to content',
    'brand.home': 'G8 Flow home',
    'nav.primary': 'Primary',
    'nav.mobile': 'Mobile',
    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.process': 'Process',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.feedback': 'Feedback',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.open': 'Open menu',
    'nav.close': 'Close',
    'nav.startProject': 'Start a project →',
    'lang.label': 'Language',
    'lang.en': 'English',
    'lang.sr': 'Serbian',

    'hero.h1a': 'Make your website',
    'hero.h1b': 'grow your revenue',
    'hero.lead': 'Most sites look expensive and sell nothing. I make the offer obvious, the path clear, and the next step impossible to miss.',
    'hero.scroll': 'Scroll to explore',
    'cta.talk': 'Talk to me',
    'cta.viewWork': 'View Work',
    'cta.book': 'Book a call',
    'cta.seeWork': 'See the work',
    'cta.startBuild': 'Start a build',
    'cta.workWithMe': 'Work with me',
    'cta.seeNumber': 'See the number',
    'cta.buildThis': 'Build this',
    'cta.estimate': 'Get an estimate',

    'work.eyebrow': 'Portfolio',
    'work.h2': 'Selected Work',
    'work.gallery': 'Selected work gallery',
    'work.pause': 'Pause preview',
    'work.play': 'Play preview',
    'work.slide': 'Slide {n} of {total}: {title}',
    'work.visit': 'Visit {host}',
    'work.bs.services': 'Offer site · sales path',
    'work.bs.copy': 'The program was strong. The site was not — visitors could not tell who it was for, what 90 days looked like, or where to buy. I rebuilt it as a coach-on-a-call: problem, promise, path, then one purchase step. Scope was a full offer site with copy, mobile layout, and a live sales path — not a brochure.',
    'work.bs.copyMobile': 'They couldn’t tell who it was for or where to buy. I rebuilt the path: problem, promise, one purchase step.',
    'work.lk.services': 'Shop · checkout',
    'work.lk.copy': 'Lenkolino is décor for kids’ rooms — handmade balloons, birth cards, personalised gifts — with a site that made buying feel like extra work. I shipped a shop with a clear product story, trust up front, and a short path to checkout. Scope was merchandising + cart, not a pretty catalog with a buried form — priced as a Growth-range build with a fixed launch window.',
    'work.lk.copyMobile': 'Kids’ room décor shop. Clear product story, trust up front, short path to checkout.',
    'work.tm.services': 'Personal brand · booking',
    'work.tm.copy': 'Marina had the practice. Strangers landing on the old presence could not see the offer or book a session in one scroll. I built a portrait-led site that answers who she is, what the work is, and the next step — a 30-minute intro on the calendar. Scope was a Launch-range personal brand site: copy, structure, and booking wired before launch.',
    'work.tm.copyMobile': 'They couldn’t see the offer or book. One scroll: who she is, the work, a 30-minute intro.',
    'work.stat.build': 'Build time',
    'work.stat.launchRange': 'Launch range',
    'work.stat.growthRange': 'Growth range',
    'work.stat.sales': 'Online sales',
    'work.stat.booking': 'Session booking',
    'work.weeks3': '3 weeks',
    'work.weeks4': '4 weeks',
    'work.weeks5': '5 weeks',
    'work.live': 'Live',

    'about.aria': 'About me',
    'about.eyebrow': 'About me',
    'about.h2': 'Who am <span class="about__h2-accent">I?</span>',
    'about.lead': 'I’m Goran. I build sites that sell — not sites that only look expensive. If you get traffic but not calls, I fix the offer, the path, and the one next step — so a stranger gets it in one scroll and knows exactly what to do.',
    'about.photo': 'Goran — G8 Flow',

    'process.eyebrow': 'How I work',
    'process.h2': 'Start. Clarify. Build. Launch.',
    'process.s1.step': 'Step 01',
    'process.s1.title': 'Start',
    'process.s1.text': '30 minutes. I find where the site leaks money — and whether I’m the one to plug it.',
    'process.s2.step': 'Step 02',
    'process.s2.title': 'Clarity',
    'process.s2.text': 'Who it’s for, what they buy, the one next step. No pixels until that’s obvious.',
    'process.s3.step': 'Step 03',
    'process.s3.title': 'Build',
    'process.s3.text': 'I ship the path on a real URL. You review. I don’t decorate a leak.',
    'process.s4.step': 'Step 04',
    'process.s4.title': 'Launch',
    'process.s4.text': 'Live, wired, taking money. Then care so the path stays open.',

    'sol.eyebrow': 'What I do',
    'sol.h2': 'What I ship',
    'sol.lead': 'Comprehensive digital solutions tailored to your needs',
    'sol.web.kicker': '01 Websites and platforms',
    'sol.web.title': 'Fast and responsive websites',
    'sol.web.text': 'I begin by understanding the problem, the users, and the business goals from start to finish.',
    'sol.app.kicker': '02 Mobile applications',
    'sol.app.title': 'Perfectly suited mobile apps',
    'sol.app.text': 'I don’t ship template apps. Every build goes through who it’s for, a prototype, then a product people will actually open.',

    'ind.eyebrow': 'What I can build',
    'ind.h2': 'Different industries, different rules. I still ship the same outcome: they get it, then they buy.',
    'ind.ecom': 'E-commerce & Retail',
    'ind.ecom.1': 'A shop where the product story makes the buy obvious',
    'ind.ecom.2': 'Checkout that doesn’t feel like extra work',
    'ind.ecom.3': 'Payments, shipping, and stock wired so you can actually sell',
    'ind.ecom.4': 'Catalogs that stay fast when the list gets long',
    'ind.re': 'Construction & Real Estate',
    'ind.re.1': 'A site that shows the project, not a PDF dump',
    'ind.re.2': 'One next step: inquiry, viewing, or quote',
    'ind.re.3': 'Leads, quotes, and project flow in one place if you need it',
    'ind.hos': 'Hospitality & Tourism',
    'ind.hos.1': 'Book the stay without a phone tag',
    'ind.hos.2': 'Offer, rooms, and proof in one scroll',
    'ind.hos.3': 'Inquiry and booking flows that match the trip',
    'ind.mfg': 'Manufacturing & Industry',
    'ind.mfg.1': 'What you make, who it’s for, how to buy — in that order',
    'ind.mfg.2': 'Specs without killing the sale',
    'ind.mfg.3': 'A quote request sales can actually use',
    'ind.health': 'Healthcare & Wellness',
    'ind.health.1': 'Who it’s for and what the session is — before they bounce',
    'ind.health.2': 'Book on the page, not “email us”',
    'ind.health.3': 'Tools around the real workflow, with access locked down',
    'ind.creative': 'Creative, Photography & Media',
    'ind.creative.1': 'Work that sells, not a gallery that only looks expensive',
    'ind.creative.2': 'Heavy images that still load fast',
    'ind.creative.3': 'One path from “I like this” to paid',
    'ind.sport': 'Sports, Fitness & Community',
    'ind.sport.1': 'Who the program is for in one line',
    'ind.sport.2': 'The path, not “about us”',
    'ind.sport.3': 'Buy, book, or apply on the site — not a buried DM',
    'ind.law': 'Law & Legal Services',
    'ind.law.1': 'Do you take my case — answered before they call',
    'ind.law.2': 'Practice areas without a wall of Latin',
    'ind.law.3': 'One next step: book a consult, not “contact the office”',

    'price.eyebrow': 'Packages & pricing',
    'price.h2': 'Pick what you need. See what it costs.',
    'price.lead': 'Three ranges. The calculator below is the honest number for what you actually check. Final quote locks on a 30-minute call.',
    'price.ranges': 'Build ranges',
    'price.launch.copy': 'One offer. One path. A site that can sell or book — not a brochure that looks expensive.',
    'price.growth.copy': 'Shop, booking, or a longer path. Same job: they get it, then they buy.',
    'price.custom.price': 'Book a call',
    'price.custom.copy': 'Apps, odd stacks, or a mix the calculator can’t price cleanly. I scope it on the call.',
    'price.rec': 'Recommended',
    'price.type': 'Project type',
    'price.kind.site': 'Website',
    'price.kind.app': 'App',
    'price.pages': 'How many pages',
    'price.pages.1': '1 page',
    'price.cms': 'CMS',
    'price.cms.none': 'No CMS',
    'price.cms.cms': 'CMS',
    'price.cms.shop': 'Shop (checkout)',
    'price.addons': 'Add-ons',
    'price.addon.ecom': 'E-commerce extras',
    'price.addon.member': 'Membership',
    'price.addon.book': 'Booking',
    'price.plats': 'Platforms',
    'price.plat.pwa': 'PWA / web app',
    'price.screens': 'Screens',
    'price.mods': 'What the app includes',
    'price.mod.auth': 'Auth',
    'price.mod.profiles': 'Profiles',
    'price.mod.pay': 'Payments',
    'price.mod.book': 'Booking',
    'price.mod.chat': 'Chat / bot',
    'price.mod.admin': 'Admin',
    'price.mod.push': 'Push',
    'price.mod.maps': 'Maps',
    'price.mod.video': 'Live video',
    'price.mod.offline': 'Offline',
    'price.est': 'Estimated build',
    'price.care0': 'Care €0 / mo',
    'price.care': 'Care {n} / mo',
    'price.from': 'From {n}',
    'price.over': 'Book a call — scoped separately',
    'price.overNote': 'This mix is past a clean estimate.',
    'price.note': 'Estimate only. Final quote after a 30-minute call.',
    'price.summary.site': 'Site',
    'price.summary.app': 'App',
    'price.summary.noPlat': 'no platform',
    'price.summary.screens': 'screens',
    'price.summary.noMod': 'no modules',
    'price.summary.build': 'build',
    'price.summary.care': 'care',
    'price.summary.over': 'OVER CAP',

    'form.name': 'Your name',
    'form.email': 'Email',
    'form.budget': 'Budget',
    'form.budgetPh': 'e.g. €3k–€5k',
    'form.notes': 'About the project',
    'form.notesPh': 'What should this make people do?',
    'form.company': 'Company',
    'form.send': 'Send inquiry',
    'form.sending': 'Sending…',
    'form.ok': 'Got it — the inquiry is in my inbox and I reply within one business day.<br><a href="https://calendly.com/goransantic/30min" target="_blank" rel="noopener noreferrer">Grab a 30-minute slot now</a> if you\'d rather lock the number today.',
    'form.err.fields': 'Add your name and a valid email so I can reply.',
    'form.err.send': 'Send didn\'t go through. <a href="{mailto}">Email it to me directly</a> or <a href="{cal}" target="_blank" rel="noopener noreferrer">book a call</a>.',
    'mail.subject': 'New inquiry — G8 Flow',
    'mail.name': 'Name',
    'mail.email': 'Email',
    'mail.budget': 'Budget',
    'mail.estimate': 'Estimate',
    'mail.about': 'About the project:',

    'fb.aria': 'Client feedback',
    'fb.h2': 'Client feedback',
    'fb.stars': '5 out of 5',
    'fb.1.h': 'The site explains the offer before the call.',
    'fb.1.p': '“People used to land on the old page and still ask what the 90 days actually were. Now the site answers that, and the ones who reach out already know what they’re buying.”',
    'fb.1.name': 'Fitness coach, Serbia',
    'fb.1.role': 'Busy Strong 90 · offer site',
    'fb.2.h': 'Pretty doesn’t pay my rent. Paying clients do.',
    'fb.2.p': '“I don’t get paid because the brand looks expensive. I get paid when busy people buy coaching and actually train. The website sells the outcome before they ever DM me. The app is where they show up, stay, and stop disappearing after week one. Together they plugged the leak — the people who used to ghost after a consult now pay, log in, and do the work. That’s the job. That’s what this did.”',
    'fb.2.role': 'Fitness coach',
    'fb.3.h': 'Buying stopped feeling like extra work.',
    'fb.3.p': '“Handmade pieces are hard enough to sell online without the site fighting you. Now the product story is up front and checkout is a short path instead of a maze.”',
    'fb.3.name': 'Shop owner, Serbia',
    'fb.3.role': 'Lenkolino · shop & checkout',
    'fb.4.h': 'Fewer “interested.” More booked sessions.',
    'fb.4.p': '“Strangers used to land on my page and leave without knowing what I offer. One scroll now gets them to a 30-minute intro on my calendar.”',
    'fb.4.name': 'Wellness practitioner, Serbia',
    'fb.4.role': 'Thrive with Marina · personal brand',

    'ticker.aria': 'Site offers',
    'ticker.1': 'Your site should make you money — not just look expensive',
    'ticker.2': 'Traffic without calls is just expensive noise',
    'ticker.3': 'Clear offer. Clear path. One next step',
    'ticker.4': 'Stop polishing pages that don\'t convert',
    'ticker.5': 'Make them an offer they can\'t ignore',
    'ticker.6': 'Book the call. Get the plan. Ship the site that sells',
    'ticker.7': 'If they don\'t get it in one scroll — you lose the sale',
    'ticker.8': 'Pretty is optional. Paying customers aren\'t',

    'faq.eyebrow': 'Before you book',
    'faq.h2': 'Straight answers.',
    'faq.q1': 'How long does a site take?',
    'faq.a1': 'Launch-range sites usually ship in 3–4 weeks. Growth-range (shop, booking, longer path) is about 5 weeks. The clock starts after the call, when the offer and pages are clear — not after a vague “we should do a website.”',
    'faq.q2': 'What’s included in the build?',
    'faq.a2': 'Copy structure, design, mobile layout, the one conversion path, and launch. You get a site that can take money or bookings — not a moodboard. Extra systems (CMS, shop, membership) are what you check in the calculator.',
    'faq.q3': 'What is monthly care?',
    'faq.a3': 'Care is hosting, updates, and keeping the path working after launch. The calculator shows a monthly number next to the build. You can skip it and host it yourself; most people don’t, because a dead plugin costs more than care.',
    'faq.q4': 'Who is this for?',
    'faq.a4': 'Owners who already sell something — coaching, a shop, a practice — and whose current site looks fine but doesn’t convert. If you need a logo contest or a 40-page brochure, this isn’t it.',
    'faq.q5': 'How does the process work?',
    'faq.a5': 'Call, then clarity, then build, then launch. I lock who it’s for and the one next step before pixels. You review on a real URL. When it’s live, it can take the sale.',
    'faq.q6': 'Do I have to book a call to get a number?',
    'faq.a6': 'No. Use the calculator for a range. The call locks scope and the final quote. If you’d rather talk first, grab a 30-minute slot.',
    'faq.q7': 'I already have a site. Can you fix it?',
    'faq.a7': 'Yes, if the problem is the offer or the path — not “make my blue more blue.” I keep what works, cut what leaks, and ship a page that sells. That’s usually a Launch or Growth rebuild, not a paint job.',

    'foot.h2a': 'Let\'s make your',
    'foot.h2b': 'site pay for itself.',
    'foot.tag': 'Sites that sell. Clear offers, clean builds, and a path from visit to booked call.',
    'foot.explore': 'Explore',
    'foot.start': 'Start',
    'foot.copy': '© 2026 G8 Flow. All rights reserved.',
    'foot.privacy': 'Privacy',
    'foot.terms': 'Terms',
    'foot.contact': 'Contact',

    'legal.back': '← Back to site',
    'legal.backBrand': '← Back to G8 Flow',
    'legal.eyebrow': 'Legal',
    'legal.privacy.title': 'Privacy Policy — G8 Flow',
    'legal.privacy.desc': 'How G8 Flow handles the data you send through the inquiry form, booking link, and site analytics.',
    'legal.privacy.h1': 'Privacy Policy',
    'legal.privacy.meta': 'Last updated 16 August 2026',
    'legal.privacy.lead': 'Short version: I collect the details you choose to send me so I can reply about a project. I don\'t sell them, I don\'t run advertising trackers, and I delete them when they\'re no longer needed.',
    'legal.privacy.h.who': 'Who is responsible',
    'legal.privacy.p.who': 'This site is operated by <strong>G8 Flow</strong> (Goran Šantić), a freelance web design and development practice based in Serbia. For any privacy question, write to <a href="mailto:goransantic92@gmail.com">goransantic92@gmail.com</a>.',
    'legal.privacy.h.what': 'What I collect and why',
    'legal.privacy.h.form': 'Inquiry form',
    'legal.privacy.p.form': 'When you submit the form in the pricing section, I receive the name, email address, budget note, project description, and the estimate the calculator produced. I use it only to answer your inquiry and to prepare a quote. The submission is delivered to my inbox by <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Resend</a>, an email delivery provider acting on my behalf.',
    'legal.privacy.h.book': 'Booking a call',
    'legal.privacy.p.book': 'The "Book a call" buttons open <a href="https://calendly.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer">Calendly</a>. When you schedule, Calendly processes the details you enter under its own privacy notice and shares the booking with me.',
    'legal.privacy.h.analytics': 'Analytics',
    'legal.privacy.p.analytics': 'I use Vercel Web Analytics to see which pages and buttons get used. It is cookie-free and does not build a profile of you or follow you across other sites. It records aggregate signals such as page path, referrer, country, device type, and which calls-to-action were clicked. See the <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Analytics privacy notice</a>.',
    'legal.privacy.h.logs': 'Server logs',
    'legal.privacy.p.logs': 'The site is hosted on Vercel, which keeps short-lived technical logs (IP address, user agent, timestamps) for security and abuse prevention. The inquiry endpoint also uses your IP address in memory for a few seconds to throttle spam submissions; it is not stored.',
    'legal.privacy.h.dont': 'What I don\'t do',
    'legal.privacy.li.1': 'No advertising or cross-site tracking cookies',
    'legal.privacy.li.2': 'No selling, renting, or trading your data',
    'legal.privacy.li.3': 'No newsletter sign-up hidden inside the inquiry form',
    'legal.privacy.li.4': 'No automated decision-making or profiling',
    'legal.privacy.h.basis': 'Legal basis',
    'legal.privacy.p.basis': 'Where the GDPR applies, I rely on your consent and on my legitimate interest in responding to business inquiries and keeping the site secure and functional (Art. 6(1)(a) and 6(1)(f) GDPR).',
    'legal.privacy.h.keep': 'How long I keep it',
    'legal.privacy.p.keep': 'Inquiry emails are kept for as long as the conversation is commercially relevant, and up to 24 months after my last contact, then deleted. Records tied to a signed project are kept for as long as accounting rules require. Analytics data is aggregate and retained by Vercel per its own retention schedule.',
    'legal.privacy.h.whoelse': 'Who else sees it',
    'legal.privacy.p.whoelse': 'Only the providers needed to run the site and reply to you: Vercel (hosting, analytics), Resend (email delivery), Calendly (scheduling), and my email provider. I don\'t share your data with anyone else unless the law requires it.',
    'legal.privacy.h.rights': 'Your rights',
    'legal.privacy.p.rights': 'You can ask me to show you the data I hold about you, correct it, delete it, restrict how I use it, or send it to you in a portable format. You can also withdraw consent at any time and lodge a complaint with your local data protection authority. Email <a href="mailto:goransantic92@gmail.com">goransantic92@gmail.com</a> and I\'ll respond within 30 days.',
    'legal.privacy.h.changes': 'Changes',
    'legal.privacy.p.changes': 'If this policy changes materially, I\'ll update the date at the top of this page.',
    'legal.privacy.foot.terms': 'Terms of Service',

    'legal.terms.title': 'Terms of Service — G8 Flow',
    'legal.terms.desc': 'The terms that apply to this site, the pricing estimates it produces, and projects delivered by G8 Flow.',
    'legal.terms.h1': 'Terms of Service',
    'legal.terms.meta': 'Last updated 16 August 2026',
    'legal.terms.lead': 'Short version: the numbers on this site are estimates, not offers. Nothing is binding until we both sign a proposal. You own the work you pay for.',
    'legal.terms.h.who': 'Who you\'re dealing with',
    'legal.terms.p.who': 'This site belongs to <strong>G8 Flow</strong> (Goran Šantić), a freelance web design and development practice based in Serbia. Contact: <a href="mailto:goransantic92@gmail.com">goransantic92@gmail.com</a>.',
    'legal.terms.h.est': 'The estimate is an estimate',
    'legal.terms.p.est': 'The pricing calculator gives a starting range based on the options you tick. It is not a quote, an offer, or a promise of price or timeline. Final scope, price, payment schedule, and delivery dates are agreed in a written proposal after a call. Where a package is shown as a range, the final figure depends on scope, content readiness, and integrations.',
    'legal.terms.h.cases': 'Case studies and results',
    'legal.terms.p.cases': 'Project examples describe work actually delivered. Investment figures are shown as ranges, and build times reflect what those specific projects took. Nothing on this site guarantees that your project will produce the same commercial result — outcomes depend on your offer, market, traffic, and follow-up.',
    'legal.terms.h.fb': 'Client feedback',
    'legal.terms.p.fb': 'Testimonials come from real clients. Some are shown with the client\'s name and photo with their permission; others are attributed by role and project only, at the client\'s request. Quotes may be lightly edited for length or translated, never for meaning.',
    'legal.terms.h.run': 'How a project runs',
    'legal.terms.li.1': 'Work starts after a signed proposal and the first payment.',
    'legal.terms.li.2': 'Each phase includes a defined number of revision rounds, set in the proposal.',
    'legal.terms.li.3': 'Requests beyond the agreed scope are quoted separately before I start them.',
    'legal.terms.li.4': 'Timelines assume you supply copy, images, and access when agreed. Delays on either side move the schedule.',
    'legal.terms.h.pay': 'Payment',
    'legal.terms.p.pay': 'Unless the proposal says otherwise, projects are invoiced in instalments with a deposit up front and the balance before launch. Prices are in euros and exclude any taxes or transaction fees that apply in your country. Monthly care plans are billed monthly in advance and can be cancelled with 30 days\' notice.',
    'legal.terms.h.own': 'Ownership and licences',
    'legal.terms.p.own': 'When the final invoice is paid, you own the design and the custom code produced for your project. Third-party components — fonts, plugins, stock media, frameworks, hosting — stay under their own licences, which you are responsible for maintaining. I may show the finished work in my portfolio unless we agree in writing that I won\'t.',
    'legal.terms.h.you': 'Your responsibilities',
    'legal.terms.p.you': 'You confirm that any content you give me is yours to use, is lawful, and doesn\'t infringe anyone\'s rights. You are responsible for the accuracy of claims, prices, and legal text on your own site.',
    'legal.terms.h.limits': 'Limits',
    'legal.terms.p.limits': 'This site and its content are provided as they are, without warranty of uninterrupted availability or freedom from error. To the extent the law allows, I am not liable for indirect or consequential losses, including lost profit or lost data. Liability tied to a project is capped at the fees you paid for that project.',
    'legal.terms.h.third': 'Third-party services',
    'legal.terms.p.third': 'This site links to Calendly for scheduling and loads Vercel Web Analytics. Their own terms apply when you use them. See the <a href="./privacy.html">Privacy Policy</a> for what data goes where.',
    'legal.terms.h.law': 'Governing law',
    'legal.terms.p.law': 'These terms are governed by the laws of the Republic of Serbia. I\'ll try to settle any dispute directly before anything else.',
    'legal.terms.h.changes': 'Changes',
    'legal.terms.p.changes': 'I may update these terms; the date at the top shows the current version. The terms in your signed proposal always win over anything written here.',
    'legal.terms.foot.privacy': 'Privacy Policy',
  };

  const sr = {
    'meta.title': 'G8 Flow — Sajtovi od kojih ostane novac',
    'meta.desc': 'Pravim sajtove koji prodaju. Odmah se vidi šta nudiš, kuda treba ići i šta kliknuti — da poseta postane poziv, a ne samo pregled.',
    'jsonld.job': 'Web dizajner i programer',
    'jsonld.catalog': 'Sajtovi i aplikacije',
    'jsonld.offer.launch': 'Jedna ponuda i jasan put do kupovine ili termina.',
    'jsonld.offer.growth': 'Prodavnica, zakazivanje ili duži sajt koji zaista prodaje.',
    'jsonld.offer.custom': 'Aplikacije i nestandardni projekti — prvo razgovaramo.',
    'jsonld.area': 'Srbija i inostranstvo',

    'skip': 'Preskoči na sadržaj',
    'brand.home': 'G8 Flow, početna',
    'nav.primary': 'Glavna navigacija',
    'nav.mobile': 'Meni',
    'nav.home': 'Početna',
    'nav.work': 'Izabrani radovi',
    'nav.about': 'O meni',
    'nav.process': 'Kako radim',
    'nav.services': 'Šta radim',
    'nav.pricing': 'Cene',
    'nav.feedback': 'Utisci',
    'nav.contact': 'Kontakt',
    'nav.menu': 'Meni',
    'nav.open': 'Otvori meni',
    'nav.close': 'Zatvori',
    'nav.startProject': 'Hajde da krenemo →',
    'lang.label': 'Jezik',
    'lang.en': 'Engleski',
    'lang.sr': 'Srpski',

    'hero.h1a': 'Neka ti sajt',
    'hero.h1b': 'donosi novac',
    'hero.lead': 'Većina sajtova izgleda skupo, a ne proda ništa. Ja napravim da se odmah vidi šta nudiš, kuda treba ići i šta kliknuti — da to ne može da se promaši.',
    'hero.scroll': 'Idi nadole',
    'cta.talk': 'Hajde da pričamo',
    'cta.viewWork': 'Pogledaj radove',
    'cta.book': 'Zakaži poziv',
    'cta.seeWork': 'Pogledaj šta sam radio',
    'cta.startBuild': 'Krenimo',
    'cta.workWithMe': 'Radi sa mnom',
    'cta.seeNumber': 'Pogledaj cenu',
    'cta.buildThis': 'Ovo hoću',
    'cta.estimate': 'Zatraži procenu',

    'work.eyebrow': 'Radovi',
    'work.h2': 'Izabrani radovi',
    'work.gallery': 'Galerija izabranih radova',
    'work.pause': 'Zaustavi pregled',
    'work.play': 'Pusti pregled',
    'work.slide': 'Rad {n} od {total}: {title}',
    'work.visit': 'Otvori {host}',
    'work.bs.services': 'Sajt za prodaju programa',
    'work.bs.copy': 'Program je bio dobar. Sajt nije. Posetioci nisu znali za koga je, šta rade tih 90 dana, ni gde da plate. Složio sam ga kao razgovor sa trenerom: šta boli, šta dobijaš, kako ide, pa kupovina u jednom koraku. To je bio ceo sajt — tekst, mobilni prikaz i put do plaćanja. Ne katalog.',
    'work.bs.copyMobile': 'Nisu znali za koga je ni gde da plate. Složio sam redosled: problem, obećanje, kupovina.',
    'work.lk.services': 'Prodavnica',
    'work.lk.copy': 'Lenkolino pravi dekor za dečije sobe — balone, čestitke, poklone po meri. Kupovina na starom sajtu je delovala kao još jedan posao. Napravio sam prodavnicu na kojoj se odmah vidi šta kupuješ, zašto da veruješ i gde je kasa. Korpa i proizvodi, ne lep katalog sa formularom na dnu. Growth paket, u dogovorenom roku.',
    'work.lk.copyMobile': 'Prodavnica dekora za dečije sobe. Vidiš proizvod, veruješ, plaćaš. Bez lutanja.',
    'work.tm.services': 'Lični sajt · termini',
    'work.tm.copy': 'Marina ima praksu. Ko je otvorio stari sajt nije video šta nudi, ni kako da uzme termin. Napravio sam sajt oko nje: ko je, šta radi i uvod od pola sata u kalendaru. Launch paket — tekst, raspored i zakazivanje, spremno pre puštanja.',
    'work.tm.copyMobile': 'Nije se videlo šta nudi ni kako da se zakaže. Sad: ko je, šta radi, termin od 30 minuta.',
    'work.stat.build': 'Koliko je trebalo',
    'work.stat.launchRange': 'Launch paket',
    'work.stat.growthRange': 'Growth paket',
    'work.stat.sales': 'Prodaja preko sajta',
    'work.stat.booking': 'Termini',
    'work.weeks3': '3 nedelje',
    'work.weeks4': '4 nedelje',
    'work.weeks5': '5 nedelja',
    'work.live': 'U funkciji',

    'about.aria': 'O meni',
    'about.eyebrow': 'O meni',
    'about.h2': 'Ko sam <span class="about__h2-accent">ja?</span>',
    'about.lead': 'Ja sam Goran. Sajt ti treba da donosi posao, ne da lepo stoji. Ako ti ljudi otvore stranicu i odu — nije im jasno šta nudiš, kuda idu ni šta da kliknu. To sređujem. Ko te vidi prvi put, odmah treba da zna šta da uradi.',
    'about.photo': 'Goran — G8 Flow',

    'process.eyebrow': 'Proces',
    'process.h2': 'Od razgovora do sajta koji prodaje.',
    'process.s1.step': 'Korak 01',
    'process.s1.title': 'Razgovor',
    'process.s1.text': 'Upoznajem vaš posao, klijente i ciljeve. Besplatno i bez obaveza — 30 minuta, uživo ili online.',
    'process.s2.step': 'Korak 02',
    'process.s2.title': 'Dogovor pre izrade',
    'process.s2.text': 'Pre nego što krenemo da pravimo, sredimo za koga je sajt, šta nudite i šta treba da kliknu. Dok to nije jasno — ne crtamo.',
    'process.s3.step': 'Korak 03',
    'process.s3.title': 'Izrada i dorada',
    'process.s3.text': 'Dobijate pravi link i gledate sajt dok se pravi. Na osnovu vaših komentara dorađujem dizajn i sadržaj dok nije spreman za lansiranje.',
    'process.s4.step': 'Korak 04',
    'process.s4.title': 'Lansiranje i podrška',
    'process.s4.text': 'Sajt ide uživo, spreman da primi poruku, uplatu ili termin. Ostajem tu za izmene i pitanja.',

    'sol.eyebrow': 'Šta radim',
    'sol.h2': 'Šta ti predajem',
    'sol.lead': 'Sajt ili aplikacija mereni prema tome šta treba da se proda — ne prema tome šta je trenutno moderno.',
    'sol.web.kicker': '01 Sajtovi',
    'sol.web.title': 'Sajtovi koji se ne guše na telefonu',
    'sol.web.text': 'Prvo čujem šta ne radi, ko dolazi i šta treba da urade. Odatle se pravi sajt, ne obrnuto.',
    'sol.app.kicker': '02 Aplikacije',
    'sol.app.title': 'Aplikacije koje ljudi zaista otvore',
    'sol.app.text': 'Ne uzimam šablon i ne menjam samo boju. Prvo odredimo za koga je, zatim skica, pa stvar koju će da drže u džepu.',

    'ind.eyebrow': 'Gde to radi',
    'ind.h2': 'Svaka struka ima svoja pravila. Posao je isti: da shvate šta nudiš, pa da kupe.',
    'ind.ecom': 'Prodavnice i maloprodaja',
    'ind.ecom.1': 'Prodavnica na kojoj se vidi zašto da uzmeš, ne samo slika i cena',
    'ind.ecom.2': 'Plaćanje koje ne izgleda kao kazna',
    'ind.ecom.3': 'Kartica, dostava i stanje na lageru — da stvarno možeš da prodaš',
    'ind.ecom.4': 'Katalog koji ne uspori kad imaš puno artikala',
    'ind.re': 'Građevina i nekretnine',
    'ind.re.1': 'Sajt koji pokaže objekat, ne gomilu PDF-ova',
    'ind.re.2': 'Jedna stvar da urade: upit, razgledanje ili ponuda',
    'ind.re.3': 'Upiti, ponude i posao na jednom mestu, ako ti treba',
    'ind.hos': 'Ugostiteljstvo i turizam',
    'ind.hos.1': 'Rezervacija bez telefona napred-nazad',
    'ind.hos.2': 'Šta nudiš, kakve su sobe i zašto da ti veruju — u jednom prolazu',
    'ind.hos.3': 'Upit i rezervacija onako kako gost stvarno ide',
    'ind.mfg': 'Proizvodnja i industrija',
    'ind.mfg.1': 'Šta praviš, kome i kako se naručuje — tim redom',
    'ind.mfg.2': 'Tehnički podaci koji ne ubiju prodaju',
    'ind.mfg.3': 'Zahtev za ponudu koji prodaja može da koristi, ne da dešifruje',
    'ind.health': 'Zdravlje i wellness',
    'ind.health.1': 'Za koga je i šta je termin — pre nego što odu',
    'ind.health.2': 'Termin na sajtu, ne „pišite nam na mejl“',
    'ind.health.3': 'Alati oko pravog posla, sa zaključanim pristupom',
    'ind.creative': 'Foto, video, kreativci',
    'ind.creative.1': 'Rad koji se proda, ne galerija koja samo lepo stoji',
    'ind.creative.2': 'Velike slike koje se i dalje brzo otvore',
    'ind.creative.3': 'Od „sviđa mi se“ do uplate, bez lutanja',
    'ind.sport': 'Sport, teretana, zajednica',
    'ind.sport.1': 'Za koga je program — u jednoj rečenici',
    'ind.sport.2': 'Put do prijave, ne stranica „o nama“',
    'ind.sport.3': 'Kupi, zakaži ili se prijavi tu — ne u poruci na dnu Instagrama',
    'ind.law': 'Advokati i kancelarije',
    'ind.law.1': 'Da li uzimate ovaj slučaj — da se vidi pre poziva',
    'ind.law.2': 'Oblasti rada bez zida tuđih reči',
    'ind.law.3': 'Jedna stvar: zakaži razgovor, ne „kontaktirajte kancelariju“',

    'price.eyebrow': 'Paketi i cene',
    'price.h2': 'Šta ti treba. Koliko košta.',
    'price.lead': 'Tri paketa. Kalkulator ispod daje poštenu cifru za ono što čekiraš. Konačna cena se dogovori na pozivu od pola sata.',
    'price.ranges': 'Paketi',
    'price.launch.copy': 'Jedna ponuda. Jedan put. Sajt koji može da proda ili da uzme termin — ne brošura koja samo lepo stoji.',
    'price.growth.copy': 'Prodavnica, termini ili duži sajt. Isti posao: da shvate, pa da plate.',
    'price.custom.price': 'Zakaži poziv',
    'price.custom.copy': 'Aplikacija, nestandardan spoj stvari, ili nešto što kalkulator ne može čisto da sračuna. To merimo u razgovoru.',
    'price.rec': 'Najčešći izbor',
    'price.type': 'Šta praviš',
    'price.kind.site': 'Sajt',
    'price.kind.app': 'Aplikacija',
    'price.pages': 'Koliko stranica',
    'price.pages.1': '1 stranica',
    'price.cms': 'CMS',
    'price.cms.none': 'Bez CMS-a',
    'price.cms.cms': 'CMS',
    'price.cms.shop': 'Prodavnica (kasa)',
    'price.addons': 'Dodaci',
    'price.addon.ecom': 'Dodaci za prodavnicu',
    'price.addon.member': 'Članarina',
    'price.addon.book': 'Termini',
    'price.plats': 'Platforme',
    'price.plat.pwa': 'PWA / veb-aplikacija',
    'price.screens': 'Ekrani',
    'price.mods': 'Šta aplikacija uključuje',
    'price.mod.auth': 'Prijava',
    'price.mod.profiles': 'Profili',
    'price.mod.pay': 'Plaćanje',
    'price.mod.book': 'Termini',
    'price.mod.chat': 'Poruke / bot',
    'price.mod.admin': 'Admin',
    'price.mod.push': 'Obaveštenja',
    'price.mod.maps': 'Mape',
    'price.mod.video': 'Video uživo',
    'price.mod.offline': 'Radi i bez mreže',
    'price.est': 'Okvirna cena izrade',
    'price.care0': 'Održavanje 0 € / mes',
    'price.care': 'Održavanje {n} / mes',
    'price.from': 'Od {n}',
    'price.over': 'Ovo merimo na pozivu',
    'price.overNote': 'Ovoliko stvari ne stane u jednu poštenu cifru.',
    'price.note': 'Ovo je okvir. Tačna cena sledi posle poziva od pola sata.',
    'price.summary.site': 'Sajt',
    'price.summary.app': 'Aplikacija',
    'price.summary.noPlat': 'nije izabrana platforma',
    'price.summary.screens': 'ekrani',
    'price.summary.noMod': 'nema dodataka',
    'price.summary.build': 'izrada',
    'price.summary.care': 'održavanje',
    'price.summary.over': 'IZVAN KALKULATORA',

    'form.name': 'Ime',
    'form.email': 'Email',
    'form.budget': 'Budžet',
    'form.budgetPh': 'npr. 3–5 hiljada €',
    'form.notes': 'O čemu je reč',
    'form.notesPh': 'Šta ljudi treba da urade kad uđu na sajt?',
    'form.company': 'Firma',
    'form.send': 'Pošalji',
    'form.sending': 'Šaljem…',
    'form.ok': 'Stiglo je. Javljam se u toku radnog dana.<br><a href="https://calendly.com/goransantic/30min" target="_blank" rel="noopener noreferrer">Uzmi odmah termin od 30 minuta</a> ako hoćeš da cenu zatvorimo danas.',
    'form.err.fields': 'Treba mi ime i ispravan email, da znam kome da se javim.',
    'form.err.send': 'Slanje nije uspelo. <a href="{mailto}">Pošalji mi email direktno</a> ili <a href="{cal}" target="_blank" rel="noopener noreferrer">zakaži poziv</a>.',
    'mail.subject': 'Novi upit — G8 Flow',
    'mail.name': 'Ime',
    'mail.email': 'Email',
    'mail.budget': 'Budžet',
    'mail.estimate': 'Procena',
    'mail.about': 'O čemu je reč:',

    'fb.aria': 'Šta kažu klijenti',
    'fb.h2': 'Šta kažu klijenti',
    'fb.stars': '5 od 5',
    'fb.1.h': 'Sajt kaže šta nudiš pre nego što te zovu.',
    'fb.1.p': '„Ranije su ulazili na staru stranicu i opet pitali šta su tih 90 dana. Sad im to sajt kaže, pa se jave oni koji već znaju šta kupuju.“',
    'fb.1.name': 'Trener, Srbija',
    'fb.1.role': 'Busy Strong 90 · sajt programa',
    'fb.2.h': 'Lepo ne plaća kiriju. Plaćaju ljudi koji treniraju.',
    'fb.2.p': '„Ne živim od toga što brend izgleda skupo. Živim kad zauzeti ljudi plate trening i stvarno dođu. Sajt im to kaže pre nego što mi pišu. Aplikacija je mesto gde ostanu i ne nestanu posle prve nedelje. To je zatvorilo rupu: koji su posle razgovora nestajali, sad plate, uđu i rade. To mi je posao. To je ovo uradilo.“',
    'fb.2.role': 'Trener',
    'fb.3.h': 'Kupovina više nije muka.',
    'fb.3.p': '„Ručne stvari je i onako teško prodati preko neta, a da ti sajt još i smeta. Sad se vidi šta kupuješ, a kasa je kratka — nije lavirint.“',
    'fb.3.name': 'Vlasnica prodavnice, Srbija',
    'fb.3.role': 'Lenkolino · prodavnica',
    'fb.4.h': 'Manje „zanima me“. Više zakazanih.',
    'fb.4.p': '„Dolazili su, nisu znali šta radim i odlazili. Sad u jednom prolazu dođu do uvoda od pola sata u mom kalendaru.“',
    'fb.4.name': 'Wellness praksa, Srbija',
    'fb.4.role': 'Thrive with Marina · lični sajt',

    'ticker.aria': 'Poruke',
    'ticker.1': 'Sajt treba da ti donosi novac — ne samo da lepo izgleda',
    'ticker.2': 'Posete bez poziva su bačen novac',
    'ticker.3': 'Šta nudiš. Kuda idu. Šta da kliknu.',
    'ticker.4': 'Prestani da sređuješ stranice koje niko ne koristi',
    'ticker.5': 'Daj im ponudu koju ne mogu da preskoče',
    'ticker.6': 'Zakaži poziv. Dogovorimo. Lansiramo sajt koji prodaje',
    'ticker.7': 'Ako ne shvate odmah — prodaja ti curi',
    'ticker.8': 'Lepo sme da bude. Klijenti koji plate nisu opcija',

    'faq.eyebrow': 'Pre poziva',
    'faq.h2': 'Bez uvijanja.',
    'faq.q1': 'Koliko traje izrada sajta?',
    'faq.a1': 'Launch obično traje 3–4 nedelje. Growth (prodavnica, termini, duži sajt) oko 5. Rad kreće posle poziva, kad znamo šta nudiš i koje stranice treba — ne posle „hajde da napravimo neki sajt“.',
    'faq.q2': 'Šta dobijam u ceni?',
    'faq.a2': 'Tekst, izgled, mobilni prikaz, jedan put do kupovine ili termina, i lansiranje. Dobiješ sajt koji može da primi novac, ne maketu. CMS, prodavnicu i članarinu čekiraš u kalkulatoru.',
    'faq.q3': 'Šta je mesečno održavanje?',
    'faq.a3': 'Hosting, sitne izmene i to da sajt ostane u funkciji posle lansiranja. Kalkulator pokazuje mesečni iznos pored izrade. Možeš i bez toga, da ga držiš sam; većina neće, jer pokvarena stvar posle košta više.',
    'faq.q4': 'Za koga radim ovo?',
    'faq.a4': 'Za ljude koji već nešto prodaju — trening, radnju, praksu — a sajt izgleda u redu i ne donosi ništa. Ako ti treba konkurs za logo ili knjiga od 40 strana, nismo za to.',
    'faq.q5': 'Kako ide od poziva do sajta?',
    'faq.a5': 'Razgovor, dogovor, izrada, lansiranje. Prvo pola sata bez obaveze. Dok nije jasno za koga je sajt i šta da kliknu, ne crtamo. Gledate na pravom linku. Kad ide uživo, može da proda.',
    'faq.q6': 'Moram li da zakažem poziv da vidim cenu?',
    'faq.a6': 'Ne. Kalkulator ti daje okvir. Na pozivu zatvorimo šta tačno ulazi i koliko košta. Ako hoćeš prvo da čuješ čoveka, uzmi pola sata.',
    'faq.q7': 'Imam sajt. Možeš li da ga središ?',
    'faq.a7': 'Mogu, ako ne prodaje zato što se ne vidi šta nudiš ili kuda da idu — ne ako hoćeš „malo plavlju plavu“. Što radi, ostaje. Što curi, seče se. To je obično Launch ili Growth iznova, ne premaz.',

    'foot.h2a': 'Neka ti sajt',
    'foot.h2b': 'vrati što si dao.',
    'foot.tag': 'Sajtovi od kojih ostane novac. Jasno šta nudiš, čisto urađeno, i put od ulaska do zakazanog poziva.',
    'foot.explore': 'Sajt',
    'foot.start': 'Početak',
    'foot.copy': '© 2026 G8 Flow. Sva prava zadržana.',
    'foot.privacy': 'Privatnost',
    'foot.terms': 'Uslovi',
    'foot.contact': 'Kontakt',

    'legal.back': '← Nazad na sajt',
    'legal.backBrand': '← Nazad na G8 Flow',
    'legal.eyebrow': 'Pravno',
    'legal.privacy.title': 'Politika privatnosti — G8 Flow',
    'legal.privacy.desc': 'Kako postupam sa onim što mi pošaljete preko formulara, zakazivanja i analitike.',
    'legal.privacy.h1': 'Politika privatnosti',
    'legal.privacy.meta': 'Poslednji put ažurirano 16. avgusta 2026.',
    'legal.privacy.lead': 'Ukratko: uzimam samo ono što Vi sami pošaljete, da Vam odgovorim. Ne prodajem to, nemam reklame koje Vas prate i brišem kad više nije potrebno.',
    'legal.privacy.h.who': 'Ko stoji iza ovoga',
    'legal.privacy.p.who': 'Sajt vodi <strong>G8 Flow</strong> (Goran Šantić). Radim sam — dizajn i izrada sajtova — iz Srbije. Za pitanja o podacima pišite na <a href="mailto:goransantic92@gmail.com">goransantic92@gmail.com</a>.',
    'legal.privacy.h.what': 'Šta uzimam i zašto',
    'legal.privacy.h.form': 'Formular',
    'legal.privacy.p.form': 'Kad pošaljete formular u delu sa cenama, stigne mi ime, email, budžet, šta Vam treba i cifra iz kalkulatora. To koristim samo da Vam se javim i da spremim ponudu. Poruku u sanduče šalje <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Resend</a>, u moje ime.',
    'legal.privacy.h.book': 'Zakazivanje poziva',
    'legal.privacy.p.book': 'Dugme „Zakaži poziv“ otvara <a href="https://calendly.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer">Calendly</a>. Kad uzmete termin, Calendly obrađuje ono što unesete po svojim pravilima i meni pošalje termin.',
    'legal.privacy.h.analytics': 'Analitika',
    'legal.privacy.p.analytics': 'Koristim Vercel Web Analytics da vidim koje stranice i dugmad se koriste. Nema kolačića, ne pravim profil o Vama i ne pratim Vas po drugim sajtovima. Beleži zbirno: koju stranicu, odakle ste došli, zemlju, tip uređaja i koje dugme ste kliknuli. Detalji su u <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer">Vercelovom obaveštenju</a>.',
    'legal.privacy.h.logs': 'Tehnički zapisi',
    'legal.privacy.p.logs': 'Sajt je na Vercelu. On kratko drži tehničke zapise (IP adresa, pregledač, vreme) zbog bezbednosti. Forma za upit drži Vašu IP adresu u memoriji nekoliko sekundi da uspori neželjenu poštu; ne čuva je.',
    'legal.privacy.h.dont': 'Šta ne radim',
    'legal.privacy.li.1': 'Nema reklama ni kolačića koji Vas prate po internetu',
    'legal.privacy.li.2': 'Ne prodajem, ne iznajmljujem i ne menjam Vaše podatke',
    'legal.privacy.li.3': 'Formular Vas ne upisuje na nikakvu mailing listu',
    'legal.privacy.li.4': 'Nema automatskih odluka ni profilisanja',
    'legal.privacy.h.basis': 'Pravni osnov',
    'legal.privacy.p.basis': 'Gde važi GDPR, oslanjam se na Vaš pristanak i na legitimni interes da odgovorim na poslovne upite i da sajt ostane bezbedan (čl. 6(1)(a) i 6(1)(f) GDPR).',
    'legal.privacy.h.keep': 'Koliko dugo čuvam',
    'legal.privacy.p.keep': 'Poruke sa upitima držim dok je razgovor još posao, najduže 24 meseca posle poslednjeg kontakta, pa ih brišem. Dokumentaciju uz potpisan projekat čuvam koliko traži knjigovodstvo. Analitika je zbirna i Vercel je drži po svojim pravilima.',
    'legal.privacy.h.whoelse': 'Ko još vidi podatke',
    'legal.privacy.p.whoelse': 'Samo servisi bez kojih sajt ne radi i bez kojih Vam ne mogu da odgovorim: Vercel (hosting, analitika), Resend (email), Calendly (termini) i moj email nalog. Nikome drugom ne dajem podatke, osim ako to zakon traži.',
    'legal.privacy.h.rights': 'Vaša prava',
    'legal.privacy.p.rights': 'Možete da zatražite da Vam pokažem šta imam o Vama, da to ispravim, obrišem, ograničim ili da Vam pošaljem u formatu koji možete da ponesete. Pristanak možete da povučete kad hoćete i da se žalite nadležnom telu za zaštitu podataka. Pišite na <a href="mailto:goransantic92@gmail.com">goransantic92@gmail.com</a> — odgovaram u roku od 30 dana.',
    'legal.privacy.h.changes': 'Izmene',
    'legal.privacy.p.changes': 'Ako se ovo bitno promeni, promeniću i datum na vrhu stranice.',
    'legal.privacy.foot.terms': 'Uslovi korišćenja',

    'legal.terms.title': 'Uslovi korišćenja — G8 Flow',
    'legal.terms.desc': 'Pravila za ovaj sajt, cifre na njemu i posao koji isporučuje G8 Flow.',
    'legal.terms.h1': 'Uslovi korišćenja',
    'legal.terms.meta': 'Poslednji put ažurirano 16. avgusta 2026.',
    'legal.terms.lead': 'Ukratko: brojke na sajtu su grubi okvir, ne ponuda. Ništa nije obavezujuće dok oboje ne potpišemo predlog. Rad koji platite je Vaš.',
    'legal.terms.h.who': 'Sa kim pričate',
    'legal.terms.p.who': 'Sajt pripada <strong>G8 Flow</strong> (Goran Šantić). Radim sam, dizajn i izrada sajtova, iz Srbije. Kontakt: <a href="mailto:goransantic92@gmail.com">goransantic92@gmail.com</a>.',
    'legal.terms.h.est': 'Procena nije ponuda',
    'legal.terms.p.est': 'Kalkulator daje grubi okvir prema onome što čekirate. To nije ponuda, ni obećanje cene ni roka. Tačan obim, cena, rate i datumi stoje u pisanom predlogu posle poziva. Gde paket stoji kao raspon, konačna cifra zavisi od obima, od toga da li je sadržaj spreman i od povezivanja sa drugim servisima.',
    'legal.terms.h.cases': 'Primeri radova',
    'legal.terms.p.cases': 'Primeri su stvarno urađen posao. Ulaz je dat kao raspon, a vreme važi za te konkretne projekte. Ništa na sajtu ne obećava isti rezultat kod Vas — to zavisi od toga šta nudite, od tržišta, koliko ljudi dolazi i da li ih pratite.',
    'legal.terms.h.fb': 'Šta kažu klijenti',
    'legal.terms.p.fb': 'Tekstovi dolaze od stvarnih klijenata. Neki su sa imenom i slikom uz dozvolu; drugi samo po ulozi i projektu, jer su tako hteli. Citati mogu da se skrate ili prevedu, ali se smisao nikad ne izokreće.',
    'legal.terms.h.run': 'Kako ide posao',
    'legal.terms.li.1': 'Rad kreće kad je predlog potpisan i prva rata uplaćena.',
    'legal.terms.li.2': 'Svaka faza ima dogovoreni broj krugova izmena, naveden u predlogu.',
    'legal.terms.li.3': 'Što nije u dogovoru, posebno se nudi pre nego što krenem.',
    'legal.terms.li.4': 'Rokovi važe ako Vi date tekst, slike i pristupe kad je dogovoreno. Kašnjenje sa bilo koje strane pomera raspored.',
    'legal.terms.h.pay': 'Plaćanje',
    'legal.terms.p.pay': 'Ako predlog ne kaže drugačije, plaća se na rate — avans unapred, ostatak pre puštanja. Cene su u evrima, bez poreza i naknada u Vašoj zemlji. Mesečno održavanje se plaća unapred i može da se otkaže uz 30 dana najave.',
    'legal.terms.h.own': 'Vlasništvo',
    'legal.terms.p.own': 'Kad je poslednja faktura plaćena, Vaš je dizajn i kod urađen za projekat. Stvari trećih lica — fontovi, dodaci, slike, alati, hosting — ostaju pod svojim licencama, koje Vi održavate. Gotov rad mogu da pokažem u portfoliju, osim ako pismeno dogovorimo da neću.',
    'legal.terms.h.you': 'Vaše obaveze',
    'legal.terms.p.you': 'Potvrđujete da je sadržaj koji mi date Vaš, zakonit i da ne krši tuđa prava. Vi odgovarate za tačnost tvrdnji, cena i pravnog teksta na svom sajtu.',
    'legal.terms.h.limits': 'Ograničenja',
    'legal.terms.p.limits': 'Sajt i sadržaj su kakvi jesu — ne garantujem da će uvek biti dostupan ili bez greške. Koliko zakon dozvoljava, nisam odgovoran za posrednu štetu, uključujući izgubljenu dobit ili podatke. Za konkretan projekat, odgovornost ide do iznosa koji ste platili za taj posao.',
    'legal.terms.h.third': 'Usluge trećih lica',
    'legal.terms.p.third': 'Sajt vodi na Calendly za termine i učitava Vercel Web Analytics. Njihova pravila važe kad ih koristite. U <a href="./privacy.html">politici privatnosti</a> piše kuda idu podaci.',
    'legal.terms.h.law': 'Koji zakon važi',
    'legal.terms.p.law': 'Ovi uslovi se tumače po zakonima Republike Srbije. Ako dođe do spora, prvo ću pokušati da se dogovorimo direktno.',
    'legal.terms.h.changes': 'Izmene',
    'legal.terms.p.changes': 'Mogu da ažuriram ove uslove; datum na vrhu pokazuje važeću verziju. Što piše u potpisanom predlogu uvek važi pre ovog teksta.',
    'legal.terms.foot.privacy': 'Politika privatnosti',
  };

  const DICT = { en: en, sr: sr };
  let current = 'en';

  function detect() {
    try {
      const q = new URLSearchParams(location.search).get('lang');
      if (q === 'sr' || q === 'en') return q;
      const saved = localStorage.getItem(STORAGE);
      if (saved === 'sr' || saved === 'en') return saved;
      const n = String(navigator.language || '').toLowerCase();
      if (n.indexOf('sr') === 0 || n.indexOf('hr') === 0 || n.indexOf('bs') === 0) return 'sr';
    } catch (e) {}
    return 'en';
  }

  function interpolate(str, vars) {
    if (!vars) return str;
    return String(str).replace(/\{(\w+)\}/g, function (_, k) {
      return vars[k] == null ? '' : String(vars[k]);
    });
  }

  function t(key, vars) {
    const table = DICT[current] || DICT.en;
    const raw = table[key] != null ? table[key] : (DICT.en[key] != null ? DICT.en[key] : key);
    return interpolate(raw, vars);
  }

  function setMeta(selector, attr, value) {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  }

  function applyMeta() {
    const title = t('meta.title');
    const desc = t('meta.desc');
    if (document.body && document.body.hasAttribute('data-legal')) {
      const kind = document.body.getAttribute('data-legal');
      document.title = t('legal.' + kind + '.title');
      setMeta('meta[name="description"]', 'content', t('legal.' + kind + '.desc'));
      return;
    }
    document.title = title;
    setMeta('meta[name="description"]', 'content', desc);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', desc);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', desc);
    const ld = document.getElementById('g8-jsonld');
    if (!ld) return;
    try {
      const data = JSON.parse(ld.textContent);
      const graph = data['@graph'] || [];
      graph.forEach(function (node) {
        if (node['@type'] === 'ProfessionalService') {
          node.description = desc;
          node.areaServed = t('jsonld.area');
          if (node.hasOfferCatalog) {
            node.hasOfferCatalog.name = t('jsonld.catalog');
            const items = node.hasOfferCatalog.itemListElement || [];
            if (items[0]) items[0].description = t('jsonld.offer.launch');
            if (items[1]) items[1].description = t('jsonld.offer.growth');
            if (items[2]) items[2].description = t('jsonld.offer.custom');
          }
        }
        if (node['@type'] === 'Person') node.jobTitle = t('jsonld.job');
        if (node['@type'] === 'FAQPage' && node.mainEntity) {
          for (let i = 0; i < 7; i++) {
            const q = node.mainEntity[i];
            if (!q) continue;
            q.name = t('faq.q' + (i + 1));
            if (q.acceptedAnswer) q.acceptedAnswer.text = t('faq.a' + (i + 1));
          }
        }
      });
      ld.textContent = JSON.stringify(data);
    } catch (e) {}
  }

  function apply(root) {
    const scope = root || document;
    scope.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      const val = t(key);
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = val;
      else el.textContent = val;
    });
    scope.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
    scope.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });
    applyMeta();
    syncSwitchers();
  }

  function syncSwitchers() {
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      const on = btn.getAttribute('data-lang') === current;
      btn.classList.toggle('is-on', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function setLang(lang, opts) {
    const next = lang === 'sr' ? 'sr' : 'en';
    current = next;
    const persist = !opts || opts.persist !== false;
    if (persist) {
      try { localStorage.setItem(STORAGE, next); } catch (e) {}
    }
    document.documentElement.lang = next === 'sr' ? 'sr' : 'en';
    document.documentElement.setAttribute('data-lang', next);
    apply();
    document.documentElement.classList.remove('i18n-pending');
    document.documentElement.classList.add('is-i18n-ready');
    if (opts && opts.updateUrl) {
      try {
        const url = new URL(location.href);
        if (next === 'en') url.searchParams.delete('lang');
        else url.searchParams.set('lang', 'sr');
        history.replaceState(null, '', url.pathname + url.search + url.hash);
      } catch (e) {}
    }
    document.dispatchEvent(new CustomEvent('g8:langchange', { detail: { lang: next } }));
  }

  function bind() {
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('[data-lang]');
      if (!btn || !btn.closest('.lang-switch')) return;
      e.preventDefault();
      setLang(btn.getAttribute('data-lang'), { updateUrl: true });
    });
  }

  current = (global.__g8lang === 'sr' || global.__g8lang === 'en') ? global.__g8lang : detect();
  global.G8I18n = {
    t: t,
    getLang: function () { return current; },
    setLang: setLang,
    apply: apply,
    SITE: SITE,
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setLang(current, { persist: true });
      bind();
    });
  } else {
    setLang(current, { persist: true });
    bind();
  }
})(window);
