/**
 * Travelink - Dynamic Data Store
 * Brand: Travelink by Akshay
 * Tagline: "Where Journeys Connect"
 */

const TRAVELINK_DATA = {
  brand: {
    name: "Travelink",
    author: "Akshay",
    tagline: "Where Journeys Connect",
    bio: "Passionate travel content creator, storyteller, and network builder based in Qatar with strong roots in India. Dedicated to helping global travelers navigate Qatar's rich heritage and modern wonders while building a vibrant worldwide community of adventurers.",
    stats: [
      { label: "Countries Explored", value: "28+" },
      { label: "Community Members", value: "45K+" },
      { label: "Qatar Guides Published", value: "120+" },
      { label: "Travel Network Hubs", value: "15" }
    ],
    contacts: {
      qatarPhone: "+974 71713955",
      qatarPhoneRaw: "+97471713955",
      indiaPhone: "+91 8848582223",
      indiaPhoneRaw: "+918848582223",
      email: "connect@travelink.me",
      location: "Doha, Qatar & Kerala, India"
    },
    socials: {
      instagram: "https://instagram.com/travelink.akshay",
      youtube: "https://youtube.com/@travelink.akshay",
      tiktok: "https://tiktok.com/@travelink.akshay",
      whatsapp: "https://wa.me/97471713955"
    }
  },

  travelTips: [
    {
      id: "tip-1",
      title: "Essential Packing Checklist for Middle East & Desert Climate",
      category: "Packing Tips",
      readTime: "5 min read",
      date: "July 20, 2026",
      image: "assets/images/desert_safari.jpg",
      summary: "Master light, breathable fabrics, sun protection, hydration gear, and cultural modesty attire for desert trips.",
      fullContent: "Traveling in Qatar and the GCC region requires thoughtful packing. Key items include lightweight linen shirts, UV protection sunglasses, electrolyte tablets, reusable insulated water flasks, and versatile scarves for mosque visits. Don't forget universal power adapters (Type G plug in Qatar) and comfortable slip-on shoes for dune activities."
    },
    {
      id: "tip-2",
      title: "Smart Budget Travel Guide: Exploring Qatar on a Shoestring",
      category: "Budget Travel",
      readTime: "7 min read",
      date: "July 15, 2026",
      image: "assets/images/souq_waqif.jpg",
      summary: "How to use the Doha Metro for 2 QAR per ride, savor authentic local meals at Souq Waqif, and access free museum days.",
      fullContent: "Doha is surprisingly accessible for budget travelers! Take advantage of the state-of-the-art Doha Metro network (only 2 QAR per ride). Eat delicious shawarma and Karak tea at Souq Waqif for under 15 QAR. Many public parks like Mia Park and Katara Hills offer stunning skyline views free of charge."
    },
    {
      id: "tip-3",
      title: "Qatar Visa & Hayya Portal: Everything You Need to Know (2026)",
      category: "Visa & Documentation",
      readTime: "6 min read",
      date: "July 10, 2026",
      image: "assets/images/museum.jpg",
      summary: "Step-by-step breakdown of visa-free entry for 100+ nationalities, Hayya platform application, and travel insurance guidelines.",
      fullContent: "Qatar offers visa-free entry for nationals of over 100 countries! Make sure your passport is valid for at least 6 months from entry. For smooth processing, register your travel details on the Hayya platform and keep hotel confirmation printouts handy."
    },
    {
      id: "tip-4",
      title: "Qatar Cultural Etiquette: Respectful Travel & Local Customs",
      category: "Local Culture",
      readTime: "4 min read",
      date: "July 02, 2026",
      image: "assets/images/souq_waqif.jpg",
      summary: "Learn essential Arabic greetings, photography rules, dress code norms, and traditional Qatari hospitality customs.",
      fullContent: "Qatar welcomes visitors with warm Arabian hospitality! Greeting someone with 'Marhaba' or 'As-salamu alaykum' goes a long way. Modest dress covering shoulders and knees is recommended in public places. Always ask permission before photographing local people."
    },
    {
      id: "tip-5",
      title: "Top 10 Content Creator Hacks for Cinematic Travel Shots in Doha",
      category: "Travel Hacks",
      readTime: "8 min read",
      date: "June 25, 2026",
      image: "assets/images/hero.jpg",
      summary: "Best golden hour spots, drone permit tips, camera gear protection against sand, and aesthetic angles along West Bay.",
      fullContent: "Capture Doha like a pro! Best golden hour spots include the MIA Park dhow harbor, Katara Amphitheatre, and the Pearl-Qatar canal bridges. Protect your camera sensors from desert dust with sealed bags, and shoot early morning for empty streetscapes at Souq Waqif."
    },
    {
      id: "tip-6",
      title: "Navigating Public Transport & SIM Cards in Qatar",
      category: "Travel Hacks",
      readTime: "5 min read",
      date: "June 18, 2026",
      image: "assets/images/dhow_cruise.jpg",
      summary: "Comparison of Ooredoo vs Vodafone tourist SIMs, Metro travel cards, and ride-hailing apps like Karwa and Uber.",
      fullContent: "Pick up a free or discounted tourist SIM at Hamad International Airport arrival hall. For getting around, download the Karwa Bus and Doha Metro app. Metro Day Passes cost just 6 QAR ($1.65 USD) for unlimited daily travel!"
    }
  ],

  qatarEvents: [
    {
      id: "evt-1",
      title: "Qatar International Food Festival (QIFF)",
      category: "Seasonal Festivals",
      date: "Aug 15 - Aug 25, 2026",
      location: "Lusail Boulevard, Qatar",
      image: "assets/images/souq_waqif.jpg",
      description: "A culinary extravaganza featuring Michelin-star chefs, local street food stalls, live cooking masterclasses, and fireworks over Lusail."
    },
    {
      id: "evt-2",
      title: "Souq Waqif Heritage & Falconry Festival",
      category: "Cultural Events",
      date: "Sep 01 - Sep 10, 2026",
      location: "Souq Waqif Heritage Quarter, Doha",
      image: "assets/images/souq_waqif.jpg",
      description: "Immerse yourself in ancient Qatari falconry traditions, traditional Bedouin music, craft workshops, and aromatic spice bazaars."
    },
    {
      id: "evt-3",
      title: "Inland Sea Sunset Dune Rally & Desert Camp",
      category: "Desert Activities",
      date: "Weekly Every Friday",
      location: "Khor Al Adaid (Inland Sea)",
      image: "assets/images/desert_safari.jpg",
      description: "Guided 4x4 dune bashing, camel riding, sandboarding, and stargazing at an authentic Bedouin desert camp by the Arabian Gulf."
    },
    {
      id: "evt-4",
      title: "Doha Waterfront Architectural & City Night Tour",
      category: "City Tours",
      date: "Daily at 6:00 PM",
      location: "West Bay Promenade & Corniche",
      image: "assets/images/hero.jpg",
      description: "Explore the illuminated skyscrapers of West Bay, Mina District's pastel houses, and the Museum of Islamic Art park at dusk."
    },
    {
      id: "evt-5",
      title: "Katara Dhow & Maritime Heritage Exhibition",
      category: "Family Activities",
      date: "Oct 05 - Oct 14, 2026",
      location: "Katara Cultural Village Beach",
      image: "assets/images/dhow_cruise.jpg",
      description: "Family-friendly maritime festival celebrating pearling history, wooden boat crafting, pearl diving shows, and seafood feasts."
    },
    {
      id: "evt-6",
      title: "Museum of Islamic Art Night Light Show",
      category: "Cultural Events",
      date: "Sep 20 - Sep 30, 2026",
      location: "MIA Park, Doha",
      image: "assets/images/museum.jpg",
      description: "Captivating light projection mapping across I.M. Pei's iconic museum facade, paired with traditional Qatari instrumental performances."
    }
  ],

  activities: [
    {
      id: "act-1",
      title: "Thrilling Desert Safari & Sandboarding",
      category: "Desert Adventure",
      duration: "4 - 6 Hours",
      location: "Mesaieed & Khor Al Adaid",
      image: "assets/images/desert_safari.jpg",
      description: "Conquer dramatic golden dunes in a 4x4 Land Cruiser, try sandboarding down steep ridges, and witness the sea meeting the desert."
    },
    {
      id: "act-2",
      title: "Traditional Sunset Dhow Cruise on Doha Bay",
      category: "Cruises & Water",
      duration: "2 Hours",
      location: "Doha Corniche Pier",
      image: "assets/images/dhow_cruise.jpg",
      description: "Sail on a handcrafted wooden dhow as the sun dips below West Bay skyline. Includes Arabic tea, fresh juices, and traditional tunes."
    },
    {
      id: "act-3",
      title: "Souq Waqif Night Spice & Heritage Tour",
      category: "Culture & Culinary",
      duration: "3 Hours",
      location: "Souq Waqif, Doha",
      image: "assets/images/souq_waqif.jpg",
      description: "Wander through centuries-old alleys, taste authentic Qatari Machboos, smell rare perfumes, and visit the iconic Falcon Souq."
    },
    {
      id: "act-4",
      title: "National Museum of Qatar Architecture Walk",
      category: "Museums & Arts",
      duration: "2.5 Hours",
      location: "Museum Park St, Doha",
      image: "assets/images/museum.jpg",
      description: "Discover Jean Nouvel's masterpiece inspired by the desert rose crystal, showcasing Qatar's story from ancient oceans to modern state."
    },
    {
      id: "act-5",
      title: "Katara Cultural Village & Amphitheatre",
      category: "Arts & Heritage",
      duration: "3 Hours",
      location: "Katara, Doha",
      image: "assets/images/hero.jpg",
      description: "Visit the Greek-style marble amphitheatre, pigeon towers, art galleries, high-end shops, and pristine public beach front."
    },
    {
      id: "act-6",
      title: "The Pearl-Qatar & Qanat Quartier Canal Stroll",
      category: "Modern Doha",
      duration: "2 Hours",
      location: "The Pearl Island",
      image: "assets/images/souq_waqif.jpg",
      description: "Experience Doha's 'Little Venice' with pastel-colored Mediterranean buildings, Venetian bridges, yacht marina, and boutique cafes."
    }
  ]
};
