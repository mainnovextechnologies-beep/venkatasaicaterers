
function SEOManager() {
  const location = useLocation();
  const baseUrl = "https://venkatasaicaterers.vercel.app";

  const pages = {
    "/": {
      title: "Venkatsai Caterers in Indupally | Wedding & Event Catering",
      description:
        "Venkatsai Caterers in Indupally offers wedding catering, traditional South Indian food, reception catering, birthday parties and family function catering. Explore menus and catering packages."
    },
    "/menu": {
      title: "Traditional South Indian Catering Menu | Venkatsai Caterers",
      description:
        "Explore traditional South Indian catering menu selections from Venkatsai Caterers in Indupally, including sweets, snacks, rice varieties, curries and customised menus."
    },
    "/packages": {
      title: "Wedding & Event Catering Packages in Indupally | Venkatsai",
      description:
        "Explore Venkatsai Caterers packages for weddings, receptions, engagements and family celebrations in Indupally. Contact us to discuss menu options and pricing."
    },
    "/about": {
      title: "About Venkatsai Caterers | Indupally Catering Services",
      description:
        "Learn about Venkatsai Caterers in Indupally and our focus on traditional flavours, carefully prepared food and catering for memorable celebrations."
    },
    "/contact": {
      title: "Contact Venkatsai Caterers in Indupally | Catering Enquiries",
      description:
        "Contact Venkatsai Caterers for wedding catering, reception catering, family functions, event menus and catering package enquiries in Indupally."
    }
  };

  React.useEffect(() => {
    const page = pages[location.pathname];
    const title = page?.title || "Page Not Found | Venkatsai Caterers";
    const description =
      page?.description || "The requested page could not be found.";

    const canonicalUrl = `${baseUrl}${location.pathname}`;

    document.title = title;

    const setMeta = (selector, attributes, content) => {
      let element = document.head.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");

        Object.entries(attributes).forEach(([key, value]) => {
          element.setAttribute(key, value);
        });

        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    setMeta(
      'meta[name="description"]',
      { name: "description" },
      description
    );

    setMeta(
      'meta[name="robots"]',
      { name: "robots" },
      page ? "index, follow, max-image-preview:large" : "noindex, follow"
    );

    setMeta(
      'meta[property="og:type"]',
      { property: "og:type" },
      "website"
    );

    setMeta(
      'meta[property="og:site_name"]',
      { property: "og:site_name" },
      "Venkatsai Caterers"
    );

    setMeta(
      'meta[property="og:title"]',
      { property: "og:title" },
      title
    );

    setMeta(
      'meta[property="og:description"]',
      { property: "og:description" },
      description
    );

    setMeta(
      'meta[property="og:url"]',
      { property: "og:url" },
      canonicalUrl
    );

    setMeta(
      'meta[name="twitter:card"]',
      { name: "twitter:card" },
      "summary_large_image"
    );

    setMeta(
      'meta[name="twitter:title"]',
      { name: "twitter:title" },
      title
    );

    setMeta(
      'meta[name="twitter:description"]',
      { name: "twitter:description" },
      description
    );

    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;

    const businessSchema = {
      "@context": "https://schema.org",
      "@type": "Caterer",
      "@id": `${baseUrl}/#business`,
      name: "Venkatsai Caterers",
      url: `${baseUrl}/`,
      description:
        "Venkatsai Caterers provides wedding catering, traditional South Indian food, family function catering and event catering in Indupally.",
      areaServed: {
        "@type": "Place",
        name: "Indupally, Andhra Pradesh, India"
      },
      servesCuisine: [
        "Indian",
        "South Indian",
        "Traditional Indian Food"
      ]
    };

    let schemaScript = document.getElementById(
      "venkatsai-business-schema"
    );

    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "venkatsai-business-schema";
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify(businessSchema);

  }, [location.pathname]);

  return null;
}

  React.useEffect(() => {
    const page = pages[location.pathname];
    const title = page?.title || "Page Not Found | Venkatsai Caterers";
    const description =
      page?.description || "The requested page could not be found.";
    const canonicalUrl = `${baseUrl}${location.pathname}`;

    document.title = title;

    const setMeta = (selector, attributes, content) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        Object.entries(attributes).forEach(([key, value]) =>
          element.setAttribute(key, value)
        );
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', { name: "description" }, description);
    setMeta(
      'meta[name="robots"]',
      { name: "robots" },
      page ? "index, follow, max-image-preview:large" : "noindex, follow"
    );
    setMeta('meta[property="og:type"]', { property: "og:type" }, "website");
    setMeta('meta[property="og:site_name"]', { property: "og:site_name" }, "Venkatsai Caterers");
    setMeta('meta[property="og:title"]', { property: "og:title" }, title);
    setMeta('meta[property="og:description"]', { property: "og:description" }, description);
    setMeta('meta[property="og:url"]', { property: "og:url" }, canonicalUrl);
    setMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
    setMeta('meta[name="twitter:title"]', { name: "twitter:title" }, title);
    setMeta('meta[name="twitter:description"]', { name: "twitter:description" }, description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Business identity only: add verified address, phone, opening hours and
    // coordinates after replacing the existing placeholder contact details.
    const businessSchema = {
      "@context": "https://schema.org",
      "@type": "Caterer",
      "@id": `${baseUrl}/#business`,
      name: "Venkatsai Caterers",
      url: `${baseUrl}/`,
      image: `${baseUrl}/images/logo.png`,
      description:
        "Venkatsai Caterers provides wedding catering, traditional South Indian food, family function catering and event catering in Indupally.",
      areaServed: {
        "@type": "Place",
        name: "Indupally, Andhra Pradesh, India"
      },
      servesCuisine: ["Indian", "South Indian", "Traditional Indian Food"]
    };

    let schemaScript = document.getElementById("venkatsai-business-schema");
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "venkatsai-business-schema";
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(businessSchema);
  }, [location.pathname]);

  return null;
}

function Header(){const [open,setOpen]=useState(false);const loc=useLocation();React.useEffect(()=>setOpen(false),[loc.pathname]);return <header className="header"><div className="nav-wrap"><Link to="/" className="brand"><img src={logo} alt="Venkatsai Caterers logo"/></Link><button className="mobile-toggle" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<MenuIcon/>}</button><nav className={open?'nav open':'nav'}>{[['Home','/'],['Menu','/menu'],['Packages','/packages'],['About Us','/about'],['Contact Us','/contact']].map(([t,p])=><NavLink key={p} to={p} end={p==='/'}>{t}</NavLink>)}<Link className="nav-cta" to="/contact">Get a Quote <ArrowUpRight size={16}/></Link></nav></div></header>}
function Footer(){return <footer className="footer"><div className="footer-main"><div><img className="footer-logo" src={logo} alt="Venkatsai Caterers"/><p>Good Food... Great Memories...</p><p className="muted">Bringing authentic flavours and warm hospitality to your special occasions.</p></div><div><h4>Explore</h4><Link to="/">Home</Link><Link to="/menu">Our Menu</Link><Link to="/packages">Packages</Link><Link to="/about">About Us</Link></div><div><h4>Our Services</h4>{services.slice(0,5).map(s=><a key={s[0]} href="/contact">{s[0]}</a>)}</div><div><h4>Get in touch</h4><p><Phone size={15}/> {phoneNumber}</p><p><Mail size={15}/> hello@venkatsaicaterers.com</p><p><MapPin size={15}/> Business address to be added</p><div className="social"><a href="#instagram" aria-label="Instagram"><span className="social-letter social-instagram">◎</span></a><a href="#facebook" aria-label="Facebook"><span className="social-letter social-facebook">f</span></a></div></div></div><div className="footer-bottom"><span>© 2026 Venkatsai Caterers. All Rights Reserved.</span><span>Made for moments worth celebrating.</span></div></footer>}
function Floating(){return <><a className="float-wa" href={whatsapp('Hello Venkatsai Caterers, I would like to enquire about catering.')} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle/></a><a className="float-call" href={`tel:${phoneNumber.replaceAll(' ','')}`} aria-label="Call"><Phone/></a><button className="backtop" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top"><ArrowUp/></button></>}
function SectionTitle({eyebrow,title,desc}){return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{desc&&<p>{desc}</p>}<i className="ornament">✦ ─── ✦</i></div>}
function Home(){return <><section className="hero"><div className="hero-image"/><div className="hero-overlay"/><div className="hero-content"><span className="eyebrow">A feast for every celebration</span><h1>Making Every<br/><em>Celebration</em> Delicious</h1><p>From traditional flavours to grand celebrations, Venkatsai Caterers brings exceptional taste, quality and hospitality to every occasion.</p><div className="hero-actions"><Link className="button gold" to="/packages">Explore Our Packages <ArrowUpRight/></Link><Link className="button outline" to="/contact">Get a Free Quote</Link></div><div className="hero-note"><span/> Authentic flavours. Thoughtful service. Beautiful memories.</div></div><div className="hero-brand"><img src={logo} alt="Venkatsai Caterers — Good Food, Great Memories"/></div></section><section className="highlights"><div><ChefHat/><b>Authentic Indian Flavours</b></div><div><Leaf/><b>Quality Ingredients</b></div><div><Utensils/><b>Professional Catering Team</b></div><div><Heart/><b>Memorable Food Experiences</b></div></section><section className="section"><SectionTitle eyebrow="Made for your moments" title="Catering for Every Occasion" desc="Thoughtfully prepared menus and gracious service, whatever you’re celebrating."/><div className="service-grid">{services.map((s,i)=><Link className="service-card" to="/contact" key={s[0]}><img src={food(['photo-1519167758481-83f550bb49b3','photo-1511795409834-ef04bbd61622','photo-1519222970733-f546218fa6d7','photo-1467003909585-2f8a72700288','photo-1600891964599-f61ba0e24092','photo-1515003197210-e0cd7184f8b5','photo-1547592180-85f173990554','photo-1547592180-85f173990554'][i])} alt={s[0]}/><div className="service-info"><span>0{i+1}</span><h3>{s[0]}</h3><p>{s[1]}</p><b>Enquire <ChevronRight size={15}/></b></div></Link>)}</div></section><section className="package-preview"><div className="section"><SectionTitle eyebrow="A little something for everyone" title="Our Signature Packages" desc="Choose a spread that feels just right for your celebration."/><div className="preview-grid">{packages.slice(0,3).map((p,i)=><article className="preview-card" key={p.name}><span className="package-num">0{i+1}</span><h3>{p.name}</h3><div className="price">{p.price}<small> / plate</small></div><p>{p.items.length} thoughtfully selected menu inclusions</p><Link to="/packages">Explore package <ArrowUpRight size={16}/></Link></article>)}</div><div className="center"><Link className="button dark" to="/packages">View All Packages <ArrowUpRight/></Link></div></div></section><section className="why section"><div className="why-photo"><img src={food('photo-1555939594-58d7cb561ad1')} alt="Freshly prepared catering dishes"/><div className="photo-caption">Prepared with care, served with heart.</div></div><div className="why-copy"><span className="eyebrow">The Venkatsai promise</span><h2>Every detail matters.<br/><em>Every plate tells a story.</em></h2><p>We believe food is at the heart of every celebration. Our focus is simple: authentic taste, carefully selected ingredients and warm hospitality that makes guests feel welcome.</p><ul>{['Traditional and authentic taste','Carefully selected ingredients','Hygienic food preparation','Experienced catering professionals','Customisable catering arrangements','Attention to every event detail'].map(x=><li key={x}><span>✓</span>{x}</li>)}</ul><Link className="text-link" to="/about">Discover our story <ArrowUpRight/></Link></div></section><section className="testimonial section"><SectionTitle eyebrow="Kind words" title="Memories Made Together" desc="Sample testimonial content — replace with genuine customer reviews before publishing."/><div className="quote-card"><div className="stars">★★★★★</div><blockquote>“The sample review goes here. Add a real customer’s words about the food, service and celebration.”</blockquote><p>— Customer name · Review placeholder</p></div></section><section className="cta-band"><span className="eyebrow">Let’s make it memorable</span><h2>Planning a Special Occasion?</h2><p>Let us make your celebration unforgettable with delicious food and excellent service.</p><Link className="button gold" to="/contact">Enquire Now <ArrowUpRight/></Link></section></>}
function PageHero({eyebrow,title,desc}){return <div className="page-hero"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{desc}</p><div className="breadcrumbs"><Link to="/">Home</Link><ChevronRight size={14}/>{title}</div></div>}
function MenuPage(){const [active,setActive]=useState('Sweets');return <><PageHero eyebrow="From our kitchen" title="A Menu Full of Tradition" desc="Explore familiar favourites, festive specials and flavours made for sharing."/><section className="section menu-section"><div className="category-tabs">{Object.keys(menuData).map(c=><button className={active===c?'active':''} onClick={()=>setActive(c)} key={c}>{c}</button>)}</div><div className="menu-content"><div className="menu-photo"><img src={food('photo-1547592180-85f173990554')} alt="Traditional Indian food"/><div><span>Venkatsai selection</span><h3>{active}</h3></div></div><div className="dish-list"><h2>{active}</h2><p>Sample selections — menus can be customised to your event.</p>{menuData[active].map((d,i)=><div className="dish" key={d}><span>{d}</span><i>✦</i></div>)}<Link className="button dark" to="/contact">Customise Your Menu <ArrowUpRight/></Link></div></div><p className="menu-note">Menu items and availability are subject to confirmation. Contact us to discuss your preferences.</p></section></>}
function PackagesPage(){return <><PageHero eyebrow="Made to match your celebration" title="Catering Packages" desc="Clear choices, generous variety and the freedom to make your menu your own."/><section className="section packages-page"><div className="package-grid">{packages.map(p=><article className={`package-card ${p.popular?'popular':''}`} key={p.name}>{p.popular&&<div className="popular-tag">Most Popular</div>}<div className="package-head"><span>{p.name}</span><h2>{p.price}<small> / plate</small></h2></div><div className="package-table"><div className="table-head"><span>Food item</span><span>Qty.</span></div>{p.items.map(([item,qty])=><div className="package-row" key={item}><span>{item}</span><b>{qty}</b></div>)}</div><a className="button gold full" target="_blank" rel="noreferrer" href={whatsapp(`Hello Venkatsai Caterers, I am interested in ${p.name} (${p.price} per plate). Please share more details.`)}>Enquire About {p.name} <MessageCircle size={17}/></a></article>)}</div><div className="addons"><SectionTitle eyebrow="Make it extra special" title="Delicious Add-ons" desc="Customise your catering experience by adding more delicious options to your package."/><div className="addon-grid"><article><img src={food('photo-1490645935967-10de6ba17061')} alt="Fresh fruit selection"/><div><span>Fresh & seasonal</span><h3>Fruit Selection</h3><p>4 to 6 varieties</p><b>₹20 – ₹25 <small>/ plate</small></b></div></article><article><img src={food('photo-1601050690597-df0568f70950')} alt="Indian chaat snacks"/><div><span>Street-food favourites</span><h3>Chat Items</h3><p>4 to 6 varieties</p><b>₹30 – ₹35 <small>/ plate</small></b></div></article></div></div></section></>}
function About(){return <><PageHero eyebrow="Our philosophy" title="Serving Happiness, One Plate at a Time" desc="Food is an important part of every celebration. We bring delicious flavours, quality food and memorable dining experiences to weddings, family functions and special occasions."/><section className="section about-layout"><div className="about-image"><img src={food('photo-1555939594-58d7cb561ad1')} alt="A deliciously prepared meal"/></div><div className="about-text"><span className="eyebrow">Our story</span><h2>Good food brings<br/><em>people together.</em></h2><p>At Venkatsai Caterers, our goal is to bring delicious flavours, quality food and memorable dining experiences to weddings, family functions and special occasions.</p><p>With attention to taste, presentation and hospitality, we aim to make every event special.</p><div className="about-values"><div><Sparkles/><h3>Our Food Philosophy</h3><p>Celebrate tradition and flavour with menus made for sharing.</p></div><div><Leaf/><h3>Our Quality Commitment</h3><p>Careful preparation, thoughtful ingredients and service with care.</p></div></div></div></section><section className="section gallery"><SectionTitle eyebrow="A taste of the experience" title="Food, Family & Festivity"/><div className="gallery-grid">{['photo-1547592180-85f173990554','photo-1555939594-58d7cb561ad1','photo-1569058242253-92a9c755a0ec','photo-1601050690597-df0568f70950'].map((im,i)=><img key={im} src={food(im)} alt={`Catering gallery image ${i+1}`}/>)}</div></section></>}
function Contact(){const [form,setForm]=useState({name:'',phone:'',email:'',event:'',date:'',location:'',guests:'',package:'',requirements:''});const [err,setErr]=useState('');const update=e=>setForm({...form,[e.target.name]:e.target.value});const submit=e=>{e.preventDefault();if(!form.name||!form.phone||!form.event||!form.date||!form.guests){setErr('Please complete all required fields.');return}setErr('');const msg=`Catering enquiry\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nEvent: ${form.event}\nDate: ${form.date}\nLocation: ${form.location}\nGuests: ${form.guests}\nPackage: ${form.package}\nRequirements: ${form.requirements}`;window.open(whatsapp(msg),'_blank','noopener,noreferrer')};return <><PageHero eyebrow="We would love to hear from you" title="Let’s Plan Your Celebration" desc="Tell us a little about your event. We’ll help you find the right menu and package."/><section className="section contact-layout"><aside className="contact-aside"><span className="eyebrow">Contact details</span><h2>Let’s talk<br/><em>good food.</em></h2><p>Reach out to discuss your event, menu preferences and guest count.</p><div className="contact-detail"><Phone/><div><small>Call us</small><b>{phoneNumber}</b></div></div><div className="contact-detail"><MessageCircle/><div><small>WhatsApp</small><b>+91 90000 00000</b></div></div><div className="contact-detail"><Mail/><div><small>Email</small><b>hello@venkatsaicaterers.com</b></div></div><div className="contact-detail"><MapPin/><div><small>Location</small><b>Business address to be added</b></div></div><div className="map-placeholder">Google Maps location can be embedded here.</div></aside><form className="enquiry-form" onSubmit={submit}><h2>Send an Enquiry</h2><p>Fields marked * are required.</p><div className="form-grid"><label>Customer name *<input name="name" value={form.name} onChange={update} required placeholder="Your full name"/></label><label>Phone number *<input name="phone" value={form.phone} onChange={update} required type="tel" placeholder="Your phone number"/></label><label>Email address<input name="email" value={form.email} onChange={update} type="email" placeholder="you@example.com"/></label><label>Event type *<select name="event" value={form.event} onChange={update} required><option value="">Select event</option>{['Wedding','Reception','Engagement','Birthday','Housewarming','Corporate Event','Family Function','Festival','Other'].map(x=><option key={x}>{x}</option>)}</select></label><label>Event date *<input name="date" value={form.date} onChange={update} type="date" required/></label><label>Event location<input name="location" value={form.location} onChange={update} placeholder="City / venue"/></label><label>Number of guests *<input name="guests" value={form.guests} onChange={update} type="number" min="1" required placeholder="Expected guests"/></label><label>Interested package<select name="package" value={form.package} onChange={update}><option value="">Choose package</option>{packages.map(p=><option key={p.name}>{p.name} — {p.price}</option>)}<option>Custom package</option></select></label><label className="wide">Additional requirements<textarea name="requirements" value={form.requirements} onChange={update} rows="4" placeholder="Menu preferences, special requests..."/></label></div>{err&&<p className="form-error">{err}</p>}<button className="button gold full" type="submit">Send Enquiry via WhatsApp <MessageCircle/></button><small className="form-note">This form opens WhatsApp with your details. Replace the placeholder contact number before publishing.</small></form></section></>}
function NotFound(){return <PageHero eyebrow="404" title="This page wandered off" desc="Let's get you back to something delicious."/>}
function App(){return <BrowserRouter><SEOManager/><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/menu" element={<MenuPage/>}/><Route path="/packages" element={<PackagesPage/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/><Floating/></BrowserRouter>}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
