const translations = {
  sl: {
    scan_title: "Kako deluje ReachMe",
    scan_intro: "Ko nekdo skenira ReachMe, takoj vidi zaupanja vredne kontakte, ki jih izbereš za deljenje.",
    scan_card_title: "Skeniraj ReachMe",
    scan_card_text: "Skeniraj QR na svojem ReachMe izdelku.",
    profile_card_title: "Odpri profil",
    profile_card_text: "Po skenu se odpre izbran ReachMe profil.",
    contact_card_title: "Kontaktiraj osebo",
    contact_card_text: "Pokliči ali pošlji sporočilo izbranemu kontaktu.",
    benefit1: "Brez aplikacije",
    benefit2: "Ti imaš nadzor",
    benefit3: "Takojšnja povezava",

    hero_eyebrow: "Predstavljamo ReachMe",
    hero_title: "Ostanite povezani kjerkoli.",
    hero_text: "Preprost način, da drugi stopijo v stik z ljudmi, ki jim zaupate.",
    hero_cta: "Pridruži se waitlisti",
    hero_secondary: "Poglej produkte",
    hero_placeholder_title: "Glavna slika produkta",
    hero_placeholder_text: "Tukaj pride ReachMe Clip render ali fotografija.",
    hero_placeholder_note: "Zamenjaj placeholder s svojo sliko.",
    not_tracker_title: "Ni tracker. Je pot nazaj do tvojih ljudi.",
    not_tracker_text: "ReachMe pomaga ljudem hitro stopiti v stik z vašimi izbranimi kontakti, ko je to najbolj pomembno.",
    step1_title: "Skeniraj QR",
    step1_text: "Nekdo skenira ReachMe QR in odpre tvoj aktivni profil.",
    step2_title: "Kontaktiraj osebe",
    step2_text: "Hitro lahko kontaktirajo tvoje izbrane kontakte.",
    step3_title: "Ti imaš nadzor",
    step3_text: "QR ostane isti. Aktivni profil lahko kadarkoli zamenjaš.",
    products_title: "ReachMe produkti",
    products_text: "Izberi obliko, ki najbolje ustreza tvojemu načinu uporabe.",
    clip_text: "Premium money-clip stil za vsakdanjo uporabo.",
    clip_placeholder: "Placeholder za Clip sliko",
    keychain_text: "Za ključe, torbe, backpacke in potovanja.",
    keychain_placeholder: "Placeholder za Keychain sliko",
    band_text: "Wearable verzija za dogodke in skupine.",
    band_placeholder: "Placeholder za Band sliko",

    waitlist_title: "Pridruži se ReachMe waitlisti",
    waitlist_intro:
      "Pomagaj oblikovati ReachMe in bodi med prvimi, ki izvejo za lansiranje.",
    form_email_label: "Email naslov *",
    form_email_placeholder: "tvoj@email.com",
    form_usecase_label: "Za kaj bi primarno uporabljal/a ReachMe?",
    form_select_option: "Izberi možnost",
    form_select_option_2: "Izberi možnost",
    use_travel: "Potovanja in prtljaga",
    use_bags: "Backpacki in torbe",
    use_children: "Otroci",
    use_elderly: "Starejši družinski člani",
    use_keys: "Ključi",
    use_pets: "Hišni ljubljenčki",
    use_events: "Dogodki in festivali",
    use_other: "Drugo",
    form_product_label: "Kateri produkt te najbolj zanima?",
    product_both: "Vsi",
    form_attachment_label: "Kam bi ReachMe najprej pritrdil/a?",
    form_attachment_placeholder:
      "Na kovček, otroški nahrbtnik, očetovo torbo...",
    waitlist_button: "Pridruži se waitlisti",
    waitlist_note: "Zgodnji člani bodo pomagali oblikovati prihodnost ReachMe.",
  },

  en: {
    scan_title: "How ReachMe Works",
    scan_intro: "When someone scans ReachMe, they instantly see the trusted contacts you choose to share.",
    scan_card_title: "Scan ReachMe",
    scan_card_text: "Scan the QR on your ReachMe product.",
    profile_card_title: "Open Profile",
    profile_card_text: "After scanning, the selected ReachMe profile opens.",
    contact_card_title: "Contact a Trusted Person",
    contact_card_text: "Call or send a message to one of the selected contacts.",
    benefit1: "No app required",
    benefit2: "You're in control",
    benefit3: "Connect instantly",

    hero_eyebrow: "Introducing ReachMe",
    hero_title: "Stay connected anywhere.",
    hero_text: "A simple way for others to connect with the people you trust.",
    hero_cta: "Join waitlist",
    hero_secondary: "Explore products",
    hero_placeholder_title: "Main product image",
    hero_placeholder_text: "ReachMe Clip render or photo goes here.",
    hero_placeholder_note: "Replace this placeholder with your own image.",
    not_tracker_title: "Not a tracker. A way back to your people.",
    not_tracker_text: "ReachMe helps people quickly connect with your chosen contacts when it matters most.",
    step1_title: "Scan the QR",
    step1_text: "Someone scans your ReachMe QR and opens your active profile.",
    step2_title: "Contact your people",
    step2_text: "They can quickly contact your chosen trusted contacts.",
    step3_title: "You stay in control",
    step3_text:
      "The QR stays the same. You can change the active profile anytime.",
    products_title: "ReachMe products",
    products_text: "Choose the format that best fits your needs.",
    clip_text: "A premium money-clip style object for everyday carry.",
    clip_placeholder: "Clip image placeholder",
    keychain_text: "For keys, bags, backpacks, and travel.",
    keychain_placeholder: "Keychain image placeholder",
    band_text: "A wearable version for events and groups.",
    band_placeholder: "Band image placeholder",

    waitlist_title: "Join the ReachMe Waitlist",
    waitlist_intro:
      "Help shape the future of ReachMe and be among the first to hear when we launch.",
    form_email_label: "Email address *",
    form_email_placeholder: "your@email.com",
    form_usecase_label: "What would you primarily use ReachMe for?",
    form_select_option: "Select an option",
    form_select_option_2: "Select an option",
    use_travel: "Travel & luggage",
    use_bags: "Backpacks & bags",
    use_children: "Children",
    use_elderly: "Elderly family members",
    use_keys: "Keys",
    use_pets: "Pets",
    use_events: "Events & festivals",
    use_other: "Other",
    form_product_label: "Which product interests you most?",
    product_both: "All",
    form_attachment_label: "What would you attach ReachMe to first?",
    form_attachment_placeholder:
      "My suitcase, my child’s backpack, my father’s bag...",
    waitlist_button: "Join Waitlist",
    waitlist_note: "Early members will help shape the future of ReachMe.",
  },
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("relink_lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      element.setAttribute("placeholder", translations[lang][key]);
    }
  });

  const disclaimer = document.getElementById("render-disclaimer");
  if (disclaimer) {
    disclaimer.textContent =
      lang === "en"
        ? "ReachMe is currently in development. Product images are concept renders and may evolve before launch."
        : "ReachMe je trenutno v razvoju. Prikazane slike so konceptni renderji in se lahko pred lansiranjem spremenijo.";
  }

  document.getElementById("btn-sl").classList.toggle("active", lang === "sl");
  document.getElementById("btn-en").classList.toggle("active", lang === "en");
}

const savedLanguage = localStorage.getItem("relink_lang") || "sl";
setLanguage(savedLanguage);
