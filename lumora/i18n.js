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
    'process.s1.title': 'Start',
    'process.s1.text': '30 minutes. I find where the site leaks money — and whether I’m the one to plug it.',
    'process.s2.title': 'Clarity',
    'process.s2.text': 'Who it’s for, what they buy, the one next step. No pixels until that’s obvious.',
    'process.s3.title': 'Build',
    'process.s3.text': 'I ship the path on a real URL. You review. I don’t decorate a leak.',
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
    'meta.title': 'G8 Flow — Sajtovi koji povećavaju prihod',
    'meta.desc': 'G8 Flow pravi sajtove koji prodaju — jasna ponuda, jasan put i jedan sledeći korak koji saobraćaj pretvara u pozive.',
    'jsonld.job': 'Web dizajner i developer',
    'jsonld.catalog': 'Izrada sajtova i aplikacija',
    'jsonld.offer.launch': 'Sajt sa jednom ponudom i jasnim putem do kupovine ili zakazivanja.',
    'jsonld.offer.growth': 'Prodavnica, zakazivanje ili duži put koji konvertuje.',
    'jsonld.offer.custom': 'Aplikacije i posebno definisani projekti — zakažite poziv.',
    'jsonld.area': 'Širom sveta',

    'skip': 'Preskoči na sadržaj',
    'brand.home': 'G8 Flow početna',
    'nav.primary': 'Glavna navigacija',
    'nav.mobile': 'Mobilni meni',
    'nav.home': 'Početna',
    'nav.work': 'Radovi',
    'nav.about': 'O meni',
    'nav.process': 'Proces',
    'nav.services': 'Usluge',
    'nav.pricing': 'Cene',
    'nav.feedback': 'Utisci',
    'nav.contact': 'Kontakt',
    'nav.menu': 'Meni',
    'nav.open': 'Otvori meni',
    'nav.close': 'Zatvori',
    'nav.startProject': 'Započni projekat →',
    'lang.label': 'Jezik',
    'lang.en': 'Engleski',
    'lang.sr': 'Srpski',

    'hero.h1a': 'Neka Vaš sajt',
    'hero.h1b': 'poveća prihod',
    'hero.lead': 'Većina sajtova izgleda skupo, a ne prodaje ništa. Ja ponudu učinim očiglednom, put jasnim, a sledeći korak nemoguće da se propusti.',
    'hero.scroll': 'Skrolujte da istražite',
    'cta.talk': 'Pričajmo',
    'cta.viewWork': 'Pogledajte radove',
    'cta.book': 'Zakažite poziv',
    'cta.seeWork': 'Pogledajte radove',
    'cta.startBuild': 'Započnite izradu',
    'cta.workWithMe': 'Radimo zajedno',
    'cta.seeNumber': 'Pogledajte brojku',
    'cta.buildThis': 'Napravite ovo',
    'cta.estimate': 'Dobijte procenu',

    'work.eyebrow': 'Portfolio',
    'work.h2': 'Izabrani radovi',
    'work.gallery': 'Galerija izabranih radova',
    'work.pause': 'Pauziraj pregled',
    'work.play': 'Pusti pregled',
    'work.slide': 'Slajd {n} od {total}: {title}',
    'work.visit': 'Otvori {host}',
    'work.bs.services': 'Sajt ponude · put do prodaje',
    'work.bs.copy': 'Program je bio jak. Sajt nije — posetioci nisu znali za koga je, kako izgleda 90 dana, ni gde da kupe. Ponovo sam ga složio kao razgovor sa trenerom: problem, obećanje, put, pa jedan korak do kupovine. Obim je bio kompletan sajt ponude — tekst, mobilni raspored i živi put do prodaje, ne brošura.',
    'work.bs.copyMobile': 'Nisu znali za koga je ni gde da kupe. Složio sam put: problem, obećanje, jedan korak do kupovine.',
    'work.lk.services': 'Prodavnica · naplata',
    'work.lk.copy': 'Lenkolino je dekoracija za dečije sobe — ručno rađeni baloni, čestitke, personalizovani pokloni — a sajt je kupovinu činio dodatnim poslom. Poslao sam prodavnicu sa jasnom pričom o proizvodu, poverenjem odmah i kratkim putem do naplate. Obim je bio asortiman + korpa, ne lep katalog sa zakopanim formularem — cenjeno kao Growth izrada sa fiksnim rokom.',
    'work.lk.copyMobile': 'Prodavnica dekora za dečije sobe. Jasna priča o proizvodu, poverenje odmah, kratak put do naplate.',
    'work.tm.services': 'Lični brend · zakazivanje',
    'work.tm.copy': 'Marina je imala praksu. Stranci na starom prisustvu nisu videli ponudu niti mogli da zakažu u jednom skrolu. Napravio sam sajt vođen portretom koji odgovara ko je ona, šta je rad i koji je sledeći korak — uvod od 30 minuta u kalendaru. Obim je bio Launch lični brend: tekst, struktura i zakazivanje pre lansiranja.',
    'work.tm.copyMobile': 'Nisu videli ponudu niti mogli da zakažu. Jedan skrol: ko je, šta radi, uvod od 30 minuta.',
    'work.stat.build': 'Vreme izrade',
    'work.stat.launchRange': 'Launch opseg',
    'work.stat.growthRange': 'Growth opseg',
    'work.stat.sales': 'Online prodaja',
    'work.stat.booking': 'Zakazivanje termina',
    'work.weeks3': '3 nedelje',
    'work.weeks4': '4 nedelje',
    'work.weeks5': '5 nedelja',
    'work.live': 'Uživo',

    'about.aria': 'O meni',
    'about.eyebrow': 'O meni',
    'about.h2': 'Ko sam <span class="about__h2-accent">ja?</span>',
    'about.lead': 'Ja sam Goran. Pravim sajtove koji prodaju — ne sajtove koji samo izgledaju skupo. Ako imate saobraćaj a nemate pozive, popravim ponudu, put i jedan sledeći korak — da stranac shvati u jednom skrolu i zna tačno šta da uradi.',
    'about.photo': 'Goran — G8 Flow',

    'process.eyebrow': 'Kako radim',
    'process.h2': 'Početak. Jasnoća. Izrada. Lansiranje.',
    'process.s1.title': 'Početak',
    'process.s1.text': '30 minuta. Nađem gde sajt gubi novac — i da li sam ja taj koji to zatvara.',
    'process.s2.title': 'Jasnoća',
    'process.s2.text': 'Za koga je, šta kupuju, jedan sledeći korak. Nema piksela dok to nije očigledno.',
    'process.s3.title': 'Izrada',
    'process.s3.text': 'Šaljem put na pravi URL. Vi pregledate. Ne dekoršem curenje.',
    'process.s4.title': 'Lansiranje',
    'process.s4.text': 'Uživo, povezano, prima novac. Zatim održavanje da put ostane otvoren.',

    'sol.eyebrow': 'Šta radim',
    'sol.h2': 'Šta isporučujem',
    'sol.lead': 'Digitalna rešenja merena prema tome šta Vam treba da prodate',
    'sol.web.kicker': '01 Sajtovi i platforme',
    'sol.web.title': 'Brzi i responzivni sajtovi',
    'sol.web.text': 'Počinjem od problema, korisnika i cilja biznisa — od početka do kraja.',
    'sol.app.kicker': '02 Mobilne aplikacije',
    'sol.app.title': 'Aplikacije koje stvarno otvaraju',
    'sol.app.text': 'Ne šaljem šablonske aplikacije. Svaka izrada ide kroz to za koga je, prototip, pa proizvod koji ljudi stvarno otvore.',

    'ind.eyebrow': 'Šta mogu da napravim',
    'ind.h2': 'Različite industrije, različita pravila. Ishod je isti: shvate, pa kupe.',
    'ind.ecom': 'E-commerce i maloprodaja',
    'ind.ecom.1': 'Prodavnica u kojoj priča o proizvodu čini kupovinu očiglednom',
    'ind.ecom.2': 'Naplata koja ne deluje kao dodatni posao',
    'ind.ecom.3': 'Plaćanja, dostava i zalihe povezani da stvarno možete da prodajete',
    'ind.ecom.4': 'Katalozi koji ostaju brzi i kad lista poraste',
    'ind.re': 'Građevina i nekretnine',
    'ind.re.1': 'Sajt koji pokazuje projekat, ne PDF deponiju',
    'ind.re.2': 'Jedan sledeći korak: upit, razgledanje ili ponuda',
    'ind.re.3': 'Leadovi, ponude i tok projekta na jednom mestu ako Vam treba',
    'ind.hos': 'Ugostiteljstvo i turizam',
    'ind.hos.1': 'Rezervacija smeštaja bez telefonskog ping-ponga',
    'ind.hos.2': 'Ponuda, sobe i dokaz u jednom skrolu',
    'ind.hos.3': 'Upiti i rezervacije koji prate putovanje',
    'ind.mfg': 'Proizvodnja i industrija',
    'ind.mfg.1': 'Šta pravite, za koga, kako se kupuje — tim redom',
    'ind.mfg.2': 'Specifikacije koje ne ubijaju prodaju',
    'ind.mfg.3': 'Zahtev za ponudu koji prodaja stvarno može da koristi',
    'ind.health': 'Zdravlje i wellness',
    'ind.health.1': 'Za koga je i šta je termin — pre nego što odu',
    'ind.health.2': 'Zakazivanje na stranici, ne „pišite nam“',
    'ind.health.3': 'Alati oko pravog toka rada, sa zaključanim pristupom',
    'ind.creative': 'Kreativa, fotografija i mediji',
    'ind.creative.1': 'Rad koji prodaje, ne galerija koja samo izgleda skupo',
    'ind.creative.2': 'Teške slike koje i dalje brzo učitavaju',
    'ind.creative.3': 'Jedan put od „sviđa mi se“ do plaćeno',
    'ind.sport': 'Sport, fitnes i zajednica',
    'ind.sport.1': 'Za koga je program — u jednoj rečenici',
    'ind.sport.2': 'Put, ne „o nama“',
    'ind.sport.3': 'Kupovina, zakazivanje ili prijava na sajtu — ne zakopani DM',
    'ind.law': 'Pravo i advokatura',
    'ind.law.1': 'Da li uzimate moj slučaj — odgovoreno pre poziva',
    'ind.law.2': 'Oblasti rada bez zida latinizama',
    'ind.law.3': 'Jedan sledeći korak: zakažite konsultacije, ne „kontaktirajte kancelariju“',

    'price.eyebrow': 'Paketi i cene',
    'price.h2': 'Izaberite šta Vam treba. Vidite koliko košta.',
    'price.lead': 'Tri opsega. Kalkulator ispod je poštena brojka za ono što stvarno čekirate. Konačna ponuda se zaključava na pozivu od 30 minuta.',
    'price.ranges': 'Opsezi izrade',
    'price.launch.copy': 'Jedna ponuda. Jedan put. Sajt koji može da proda ili zakaže — ne brošura koja izgleda skupo.',
    'price.growth.copy': 'Prodavnica, zakazivanje ili duži put. Isti posao: shvate, pa kupe.',
    'price.custom.price': 'Zakažite poziv',
    'price.custom.copy': 'Aplikacije, čudni stekovi ili miks koji kalkulator ne može čisto da oceni. Obim zaključavam na pozivu.',
    'price.rec': 'Preporučeno',
    'price.type': 'Tip projekta',
    'price.kind.site': 'Sajt',
    'price.kind.app': 'Aplikacija',
    'price.pages': 'Koliko stranica',
    'price.pages.1': '1 stranica',
    'price.cms': 'CMS',
    'price.cms.none': 'Bez CMS-a',
    'price.cms.cms': 'CMS',
    'price.cms.shop': 'Prodavnica (naplata)',
    'price.addons': 'Dodaci',
    'price.addon.ecom': 'E-commerce dodaci',
    'price.addon.member': 'Članstvo',
    'price.addon.book': 'Zakazivanje',
    'price.plats': 'Platforme',
    'price.plat.pwa': 'PWA / web aplikacija',
    'price.screens': 'Ekrani',
    'price.mods': 'Šta aplikacija uključuje',
    'price.mod.auth': 'Prijava',
    'price.mod.profiles': 'Profili',
    'price.mod.pay': 'Plaćanja',
    'price.mod.book': 'Zakazivanje',
    'price.mod.chat': 'Chat / bot',
    'price.mod.admin': 'Admin',
    'price.mod.push': 'Push',
    'price.mod.maps': 'Mape',
    'price.mod.video': 'Video uživo',
    'price.mod.offline': 'Offline',
    'price.est': 'Procenjena izrada',
    'price.care0': 'Održavanje 0 € / mes',
    'price.care': 'Održavanje {n} / mes',
    'price.from': 'Od {n}',
    'price.over': 'Zakažite poziv — obim posebno',
    'price.overNote': 'Ovaj miks je prešao čistu procenu.',
    'price.note': 'Samo procena. Konačna ponuda posle poziva od 30 minuta.',
    'price.summary.site': 'Sajt',
    'price.summary.app': 'Aplikacija',
    'price.summary.noPlat': 'nema platforme',
    'price.summary.screens': 'ekrani',
    'price.summary.noMod': 'nema modula',
    'price.summary.build': 'izrada',
    'price.summary.care': 'održavanje',
    'price.summary.over': 'PREKO LIMITA',

    'form.name': 'Vaše ime',
    'form.email': 'Email',
    'form.budget': 'Budžet',
    'form.budgetPh': 'npr. 3–5k €',
    'form.notes': 'O projektu',
    'form.notesPh': 'Šta treba da ljudi urade na sajtu?',
    'form.company': 'Kompanija',
    'form.send': 'Pošaljite upit',
    'form.sending': 'Šaljem…',
    'form.ok': 'Stiglo je — upit je u mom inboxu i javljam se u roku od jednog radnog dana.<br><a href="https://calendly.com/goransantic/30min" target="_blank" rel="noopener noreferrer">Uzmi termin od 30 minuta sad</a> ako želite da brojku zaključamo danas.',
    'form.err.fields': 'Unesite ime i ispravan email da mogu da odgovorim.',
    'form.err.send': 'Slanje nije prošlo. <a href="{mailto}">Pošaljite mi direktno email</a> ili <a href="{cal}" target="_blank" rel="noopener noreferrer">zakažite poziv</a>.',
    'mail.subject': 'Novi upit — G8 Flow',
    'mail.name': 'Ime',
    'mail.email': 'Email',
    'mail.budget': 'Budžet',
    'mail.estimate': 'Procena',
    'mail.about': 'O projektu:',

    'fb.aria': 'Utisci klijenata',
    'fb.h2': 'Utisci klijenata',
    'fb.stars': '5 od 5',
    'fb.1.h': 'Sajt objasni ponudu pre poziva.',
    'fb.1.p': '„Ljudi su ranije sletali na staru stranicu i i dalje pitali šta tih 90 dana zapravo jesu. Sad sajt to odgovara, a oni koji se jave već znaju šta kupuju.“',
    'fb.1.name': 'Fitness trener, Srbija',
    'fb.1.role': 'Busy Strong 90 · sajt ponude',
    'fb.2.h': 'Lepo ne plaća kiriju. Plaćaju klijenti.',
    'fb.2.p': '„Ne plaćaju me zato što brend izgleda skupo. Plaćaju me kad zauzeti ljudi kupe trening i stvarno trenuju. Sajt proda ishod pre nego što mi uopšte pišu. Aplikacija je mesto gde se pojave, ostanu i prestanu da nestaju posle prve nedelje. Zajedno su zatvorili curenje — ljudi koji su posle konsultacija nestajali sad plate, uđu i rade. To je posao. To je ovo uradilo.“',
    'fb.2.role': 'Fitness trener',
    'fb.3.h': 'Kupovina je prestala da deluje kao dodatni posao.',
    'fb.3.p': '„Ručno rađene stvari je i onako teško prodati online, a da sajt još i ometa. Sad je priča o proizvodu napred, a naplata kratak put umesto lavirinta.“',
    'fb.3.name': 'Vlasnica prodavnice, Srbija',
    'fb.3.role': 'Lenkolino · prodavnica i naplata',
    'fb.4.h': 'Manje „zainteresovanih.“ Više zakazanih termina.',
    'fb.4.p': '„Stranci su sletali na stranicu i odlazili bez da znaju šta nudim. Jedan skrol ih sad vodi na uvod od 30 minuta u mom kalendaru.“',
    'fb.4.name': 'Praktičarka wellnessa, Srbija',
    'fb.4.role': 'Thrive with Marina · lični brend',

    'ticker.aria': 'Ponude sajta',
    'ticker.1': 'Sajt treba da Vam donosi novac — ne samo da izgleda skupo',
    'ticker.2': 'Saobraćaj bez poziva je samo skupo šum',
    'ticker.3': 'Jasna ponuda. Jasan put. Jedan sledeći korak',
    'ticker.4': 'Prestanite da polirate stranice koje ne konvertuju',
    'ticker.5': 'Dajte im ponudu koju ne mogu da ignorišu',
    'ticker.6': 'Zakažite poziv. Dobijte plan. Pošaljite sajt koji prodaje',
    'ticker.7': 'Ako ne shvate u jednom skrolu — gubite prodaju',
    'ticker.8': 'Lepo je opciono. Plaćajući klijenti nisu',

    'faq.eyebrow': 'Pre zakazivanja',
    'faq.h2': 'Pravi odgovori.',
    'faq.q1': 'Koliko traje izrada sajta?',
    'faq.a1': 'Sajtovi u Launch opsegu obično izađu za 3–4 nedelje. Growth (prodavnica, zakazivanje, duži put) je oko 5 nedelja. Sat kreće posle poziva, kad su ponuda i stranice jasne — ne posle maglovitog „trebalo bi da napravimo sajt.“',
    'faq.q2': 'Šta je uključeno u izradu?',
    'faq.a2': 'Struktura teksta, dizajn, mobilni raspored, jedan put konverzije i lansiranje. Dobijate sajt koji može da prima novac ili termine — ne moodboard. Dodatni sistemi (CMS, prodavnica, članstvo) su ono što čekirate u kalkulatoru.',
    'faq.q3': 'Šta je mesečno održavanje?',
    'faq.a3': 'Održavanje je hosting, izmene i da put radi posle lansiranja. Kalkulator pokazuje mesečni iznos pored izrade. Možete da ga preskočite i hostujete sami; većina ne, jer mrtav plugin košta više od održavanja.',
    'faq.q4': 'Za koga je ovo?',
    'faq.a4': 'Vlasnike koji već nešto prodaju — trening, prodavnicu, praksu — i čiji trenutni sajt izgleda u redu ali ne konvertuje. Ako Vam treba konkurs za logo ili brošura od 40 strana, ovo nije to.',
    'faq.q5': 'Kako izgleda proces?',
    'faq.a5': 'Poziv, pa jasnoća, pa izrada, pa lansiranje. Zaključam za koga je i jedan sledeći korak pre piksela. Pregledate na pravom URL-u. Kad je uživo, može da uzme prodaju.',
    'faq.q6': 'Moram li da zakažem poziv da dobijem brojku?',
    'faq.a6': 'Ne. Koristite kalkulator za opseg. Poziv zaključava obim i konačnu ponudu. Ako radije prvo pričate, uzmite termin od 30 minuta.',
    'faq.q7': 'Već imam sajt. Možete li da ga popravite?',
    'faq.a7': 'Da, ako je problem ponuda ili put — ne „neka mi plava bude plavlja.“ Zadržim što radi, isečem što curi, i pošaljem stranicu koja prodaje. To je obično Launch ili Growth iznova, ne farbanje.',

    'foot.h2a': 'Neka sajt',
    'foot.h2b': 'sam sebi vrati ulog.',
    'foot.tag': 'Sajtovi koji prodaju. Jasne ponude, čiste izrade i put od posete do zakazanog poziva.',
    'foot.explore': 'Istražite',
    'foot.start': 'Početak',
    'foot.copy': '© 2026 G8 Flow. Sva prava zadržana.',
    'foot.privacy': 'Privatnost',
    'foot.terms': 'Uslovi',
    'foot.contact': 'Kontakt',

    'legal.back': '← Nazad na sajt',
    'legal.backBrand': '← Nazad na G8 Flow',
    'legal.eyebrow': 'Pravno',
    'legal.privacy.title': 'Politika privatnosti — G8 Flow',
    'legal.privacy.desc': 'Kako G8 Flow tretira podatke koje pošaljete kroz formular, link za zakazivanje i analitiku sajta.',
    'legal.privacy.h1': 'Politika privatnosti',
    'legal.privacy.meta': 'Poslednje ažuriranje 16. avgust 2026.',
    'legal.privacy.lead': 'Ukratko: uzimam podatke koje Vi odlučite da pošaljete da bih odgovorio o projektu. Ne prodajem ih, nemam reklamne trekere, i brišem ih kad više nisu potrebni.',
    'legal.privacy.h.who': 'Ko je odgovoran',
    'legal.privacy.p.who': 'Ovaj sajt vodi <strong>G8 Flow</strong> (Goran Šantić), freelance praksa web dizajna i razvoja sa sedištem u Srbiji. Za pitanja o privatnosti pišite na <a href="mailto:goransantic92@gmail.com">goransantic92@gmail.com</a>.',
    'legal.privacy.h.what': 'Šta prikupljam i zašto',
    'legal.privacy.h.form': 'Formular za upit',
    'legal.privacy.p.form': 'Kad pošaljete formular u delu sa cenama, primam ime, email, napomenu o budžetu, opis projekta i procenu koju je kalkulator dao. Koristim to samo da odgovorim na upit i pripremim ponudu. Poruku u inbox dostavlja <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Resend</a>, provajder email dostave koji radi u moje ime.',
    'legal.privacy.h.book': 'Zakazivanje poziva',
    'legal.privacy.p.book': 'Dugmad „Zakažite poziv“ otvaraju <a href="https://calendly.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer">Calendly</a>. Kad zakažete, Calendly obrađuje podatke koje unesete po sopstvenom obaveštenju o privatnosti i deli termin sa mnom.',
    'legal.privacy.h.analytics': 'Analitika',
    'legal.privacy.p.analytics': 'Koristim Vercel Web Analytics da vidim koje stranice i dugmad se koriste. Nema kolačića, ne pravi profil o Vama i ne prati Vas po drugim sajtovima. Beleži zbirne signale: putanju stranice, referrer, zemlju, tip uređaja i koje pozive na akciju ste kliknuli. Pogledajte <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer">obaveštenje o privatnosti Vercel Analytics</a>.',
    'legal.privacy.h.logs': 'Serverski logovi',
    'legal.privacy.p.logs': 'Sajt je na Vercelu, koji čuva kratkotrajne tehničke logove (IP adresa, user agent, vremenske oznake) radi bezbednosti i sprečavanja zloupotrebe. Endpoint za upite koristi Vašu IP adresu u memoriji nekoliko sekundi da uspori spam; ne čuva se.',
    'legal.privacy.h.dont': 'Šta ne radim',
    'legal.privacy.li.1': 'Nema reklamnih ni kolačića za praćenje po drugim sajtovima',
    'legal.privacy.li.2': 'Nema prodaje, iznajmljivanja ni trgovine Vašim podacima',
    'legal.privacy.li.3': 'Nema prijavljivanja na newsletter sakrivenog u formularu',
    'legal.privacy.li.4': 'Nema automatskog odlučivanja ni profilisanja',
    'legal.privacy.h.basis': 'Pravni osnov',
    'legal.privacy.p.basis': 'Gde se primenjuje GDPR, oslanjam se na Vaš pristanak i na legitimni interes da odgovorim na poslovne upite i da sajt ostane bezbedan i funkcionalan (čl. 6(1)(a) i 6(1)(f) GDPR).',
    'legal.privacy.h.keep': 'Koliko dugo čuvam',
    'legal.privacy.p.keep': 'Emailovi sa upitima stoje dok je razgovor poslovno relevantan, i do 24 meseca posle poslednjeg kontakta, zatim se brišu. Evidencija vezana za potpisan projekat čuva se koliko zahtevaju računovodstvena pravila. Analitički podaci su zbirni i Vercel ih čuva po sopstvenom rasporedu.',
    'legal.privacy.h.whoelse': 'Ko još vidi podatke',
    'legal.privacy.p.whoelse': 'Samo provajderi potrebni da sajt radi i da Vam odgovorim: Vercel (hosting, analitika), Resend (email), Calendly (zakazivanje) i moj email provajder. Nikome drugom ne delim podatke osim ako zakon to zahteva.',
    'legal.privacy.h.rights': 'Vaša prava',
    'legal.privacy.p.rights': 'Možete da zatražite da Vam pokažem podatke koje imam o Vama, da ih ispravim, obrišem, ograničim kako ih koristim, ili da Vam ih pošaljem u prenosivom formatu. Pristanak možete da povučete u svakom trenutku i da podnesete pritužbu nadležnom telu za zaštitu podataka. Pišite na <a href="mailto:goransantic92@gmail.com">goransantic92@gmail.com</a> i odgovaram u roku od 30 dana.',
    'legal.privacy.h.changes': 'Izmene',
    'legal.privacy.p.changes': 'Ako se ova politika bitno promeni, ažuriraću datum na vrhu stranice.',
    'legal.privacy.foot.terms': 'Uslovi korišćenja',

    'legal.terms.title': 'Uslovi korišćenja — G8 Flow',
    'legal.terms.desc': 'Uslovi koji važe za ovaj sajt, procene cena koje daje i projekte koje isporučuje G8 Flow.',
    'legal.terms.h1': 'Uslovi korišćenja',
    'legal.terms.meta': 'Poslednje ažuriranje 16. avgust 2026.',
    'legal.terms.lead': 'Ukratko: brojke na ovom sajtu su procene, ne ponude. Ništa nije obavezujuće dok oboje ne potpišemo predlog. Vi posedujete rad koji platite.',
    'legal.terms.h.who': 'Sa kim razgovarate',
    'legal.terms.p.who': 'Ovaj sajt pripada <strong>G8 Flow</strong> (Goran Šantić), freelance praksi web dizajna i razvoja sa sedištem u Srbiji. Kontakt: <a href="mailto:goransantic92@gmail.com">goransantic92@gmail.com</a>.',
    'legal.terms.h.est': 'Procena je procena',
    'legal.terms.p.est': 'Kalkulator daje početni opseg na osnovu opcija koje čekirate. To nije ponuda, obaveza cene ni roka. Konačan obim, cena, dinamika plaćanja i datumi isporuke dogovaraju se u pisanom predlogu posle poziva. Gde je paket prikazan kao opseg, konačna cifra zavisi od obima, spremnosti sadržaja i integracija.',
    'legal.terms.h.cases': 'Studije slučaja i rezultati',
    'legal.terms.p.cases': 'Primeri opisuju stvarno urađen rad. Iznosi investicije su opsezi, a vreme izrade važi za te konkretne projekte. Ništa na sajtu ne garantuje isti komercijalni rezultat kod Vas — ishod zavisi od ponude, tržišta, saobraćaja i follow-up-a.',
    'legal.terms.h.fb': 'Utisci klijenata',
    'legal.terms.p.fb': 'Utisci dolaze od stvarnih klijenata. Neki su sa imenom i fotografijom uz dozvolu; drugi su navedeni samo po ulozi i projektu, na zahtev klijenta. Citati mogu biti skraćeni ili prevedeni, nikad izmenjeni po smislu.',
    'legal.terms.h.run': 'Kako teče projekat',
    'legal.terms.li.1': 'Rad kreće posle potpisanog predloga i prve uplate.',
    'legal.terms.li.2': 'Svaka faza ima dogovoreni broj krugova izmena, naveden u predlogu.',
    'legal.terms.li.3': 'Zahtevi van dogovorenog obima se posebno nude pre nego što ih krenem.',
    'legal.terms.li.4': 'Rokovi pretpostavljaju da Vi date tekst, slike i pristupe kad je dogovoreno. Kašnjenje sa bilo koje strane pomera raspored.',
    'legal.terms.h.pay': 'Plaćanje',
    'legal.terms.p.pay': 'Ako predlog ne kaže drugačije, projekti se fakturišu na rate — avans unapred i ostatak pre lansiranja. Cene su u evrima i ne uključuju poreze ni naknade za transakcije u Vašoj zemlji. Mesečno održavanje se naplaćuje unapred i može se otkazati uz 30 dana obaveštenja.',
    'legal.terms.h.own': 'Vlasništvo i licence',
    'legal.terms.p.own': 'Kad je poslednja faktura plaćena, Vi posedujete dizajn i prilagođeni kod urađen za projekat. Komponente trećih strana — fontovi, pluginovi, stock, frameworkovi, hosting — ostaju pod svojim licencama, koje Vi održavate. Gotov rad mogu da pokažem u portfoliju osim ako pismeno dogovorimo da neću.',
    'legal.terms.h.you': 'Vaše obaveze',
    'legal.terms.p.you': 'Potvrđujete da je sadržaj koji mi date Vaš za korišćenje, zakonit i da ne krši tuđa prava. Vi ste odgovorni za tačnost tvrdnji, cena i pravnog teksta na sopstvenom sajtu.',
    'legal.terms.h.limits': 'Ograničenja',
    'legal.terms.p.limits': 'Ovaj sajt i sadržaj daju se kakvi jesu, bez garancije neprekidne dostupnosti ili odsustva grešaka. Koliko zakon dozvoljava, nisam odgovoran za posrednu ili posledičnu štetu, uključujući izgubljenu dobit ili podatke. Odgovornost vezana za projekat je ograničena na naknade koje ste platili za taj projekat.',
    'legal.terms.h.third': 'Usluge trećih strana',
    'legal.terms.p.third': 'Sajt vodi na Calendly za zakazivanje i učitava Vercel Web Analytics. Njihovi uslovi važe kad ih koristite. Pogledajte <a href="./privacy.html">Politiku privatnosti</a> za to kuda idu podaci.',
    'legal.terms.h.law': 'Merodavno pravo',
    'legal.terms.p.law': 'Ovi uslovi se tumače po zakonima Republike Srbije. Svaki spor ću prvo pokušati da rešim direktno.',
    'legal.terms.h.changes': 'Izmene',
    'legal.terms.p.changes': 'Mogu da ažuriram ove uslove; datum na vrhu pokazuje važeću verziju. Uslovi u potpisanom predlogu uvek imaju prednost nad ovim tekstom.',
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
