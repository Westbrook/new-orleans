export const days = [
  {
    "dow": "WED",
    "date": 14,
    "title": "Arrive & explore",
    "area": "French Quarter · an easy first evening",
    "short": "Arrival",
    "mood": "A soft landing",
    "intro": "Check in, have dinner, and take a short river walk if time allows.",
    "walking": "About 1–2 miles if you take the river stroll.",
    "reserve": "No fixed booking tonight. Keep space for flight delays.",
    "rain": "Skip the river; settle into Napoleon House or the hotel’s Peacock Room.",
    "route": [
      "fontenot",
      "napoleon-house"
    ],
    "stops": [
      {
        "time": "AFTER ARRIVAL",
        "title": "Check in at Fontenot",
        "text": "Drop your bags and meet downstairs once everyone has arrived.",
        "venue": "fontenot",
        "tag": "A flexible start",
        "travel": "MSY → hotel: allow roughly 35–60 minutes by car, plus baggage time. This is a planning allowance, not a traffic prediction.",
        "originId": "",
        "mode": "driving"
      },
      {
        "time": "5:30 PM · SUGGESTED",
        "title": "Dinner at Napoleon House",
        "text": "Share a warm muffuletta and sides. Try a Pimm’s Cup if you like.",
        "venue": "napoleon-house",
        "tag": "Your first good meal",
        "travel": "Hotel → Napoleon House: roughly 20–25 minutes on foot. Cross Canal at a signal and continue through the Quarter toward Chartres and St. Louis.",
        "originId": "fontenot",
        "mode": "walking"
      },
      {
        "time": "AFTER DINNER · OPTIONAL",
        "title": "An optional river walk",
        "text": "Walk toward Jackson Square and the riverfront while there’s daylight. Skip it if you’re tired.",
        "tag": "No checklist required",
        "travel": "Use Chartres toward Jackson Square, then cross Decatur at a marked crossing for the riverfront. Return to the hotel along Decatur and across Canal; take a car if tired."
      }
    ],
    "alternatives": [
      "old-absinthe-house",
      "lafittes",
      "port-of-call"
    ]
  },
  {
    "dow": "THU",
    "date": 15,
    "title": "The French Quarter",
    "area": "French Quarter & Frenchmen Street",
    "short": "The Quarter",
    "mood": "Beignets to brass",
    "intro": "Beignets, a Quarter walk, an afternoon break, then live music.",
    "walking": "About 2–3 miles across the day; use a car home.",
    "reserve": "Book one Preservation Hall show for four. Pick its actual time first, then arrange dinner around it.",
    "rain": "Bookshops, a long café stop, and an indoor set make this a good rain day.",
    "route": [
      "cafe-du-monde",
      "royal-street",
      "central-grocery",
      "preservation-hall",
      "spotted-cat"
    ],
    "stops": [
      {
        "time": "9:00 AM · SUGGESTED",
        "title": "Beignets at Café du Monde",
        "text": "Start with two orders of beignets for four; add more as needed. Café au lait is the classic pairing.",
        "venue": "cafe-du-monde",
        "travel": "Hotel → Café du Monde: allow 25–30 minutes walking through the Quarter, or a short taxi ride.",
        "originId": "fontenot",
        "mode": "walking"
      },
      {
        "time": "10:00 AM–12:00 PM · WANDER",
        "title": "Royal Street, books & the market",
        "text": "Browse Faulkner House and the French Market. Stop for street musicians; Tuba Skinny appearances are not guaranteed.",
        "venue": "royal-street",
        "extra": [
          "faulkner-house",
          "french-market"
        ],
        "travel": "These stops form a compact Quarter loop. Royal Street works may shift performers and walking access; follow posted detours.",
        "originId": "cafe-du-monde",
        "mode": "walking"
      },
      {
        "time": "NOON · THEN A PROPER BREAK",
        "title": "Muffulettas, then a hotel break",
        "text": "Share a whole muffuletta, cut into quarters, as a light lunch. Return to Fontenot for a 2–3 hour break.",
        "venue": "central-grocery",
        "tag": "Protect the afternoon",
        "travel": "Central Grocery → hotel: allow 25–30 minutes walking or take a car.",
        "originId": "royal-street",
        "mode": "walking"
      },
      {
        "time": "EVENING · CHOOSE A TICKET TIME",
        "title": "Preservation Hall",
        "text": "Book a 45-minute show for four. Choose a real calendar time before planning dinner; Coop’s is a nearby option.",
        "venue": "preservation-hall",
        "extra": [
          "coops-place"
        ],
        "tag": "Book this one",
        "travel": "Leave at least 30 minutes between finishing dinner and the ticketed arrival time. Follow the arrival instructions on your tickets.",
        "originId": "fontenot",
        "mode": "walking"
      },
      {
        "time": "LATER · ONLY IF YOU FEEL LIKE IT",
        "title": "One set on Frenchmen",
        "text": "Choose Spotted Cat, d.b.a., Three Muses or Maison. Stay for a set; browse the art market if you have energy.",
        "venue": "spotted-cat",
        "extra": [
          "dba",
          "three-muses",
          "maison",
          "frenchmen-art-market"
        ],
        "travel": "Preservation Hall → Frenchmen: roughly 20 minutes on foot through the Quarter and across Esplanade. Taxi/rideshare back to Fontenot when done.",
        "originId": "preservation-hall",
        "mode": "walking"
      }
    ],
    "alternatives": [
      "witches-brew",
      "cane-table",
      "johnnys-po-boys",
      "vaughans"
    ]
  },
  {
    "dow": "FRI",
    "date": 16,
    "title": "Tremé & Bywater",
    "area": "Tremé, Marigny & Bywater",
    "short": "Bywater",
    "mood": "A long, lovely Friday",
    "intro": "Lunch in Tremé. Rest at the hotel. Records and backyard music in Bywater.",
    "walking": "Around 1 mile locally, with cars between neighborhoods.",
    "reserve": "Reserve Dooky Chase lunch for four. Bacchanal is first come; reconfirm its 5pm opening.",
    "rain": "Choose St. Roch Market or an indoor dinner instead of a wet backyard.",
    "route": [
      "dooky-chase",
      "fontenot",
      "euclid-records",
      "bacchanal"
    ],
    "stops": [
      {
        "time": "11:00 AM · LUNCH RESERVATION",
        "title": "Lunch at Dooky Chase",
        "text": "Reserve for four. Try the fried chicken and ask about the current lunch menu; the old buffet price is unverified.",
        "venue": "dooky-chase",
        "tag": "Reserve for four",
        "travel": "Fontenot → Dooky Chase: plan about 15–25 minutes by car. Check the booking confirmation for arrival time.",
        "originId": "fontenot",
        "mode": "driving"
      },
      {
        "time": "1:00–3:30 PM · OFF THE CLOCK",
        "title": "Hotel break",
        "text": "Rest for a couple of hours before the evening outing.",
        "venue": "fontenot",
        "tag": "Keep this gap",
        "originId": "dooky-chase",
        "mode": "driving"
      },
      {
        "time": "4:00 PM · RECORD-BIN TIME",
        "title": "Browse Euclid Records",
        "text": "Browse before the posted 6pm closing, then head toward Bacchanal.",
        "venue": "euclid-records",
        "travel": "Hotel → Euclid: plan 15–25 minutes by car. Euclid → Bacchanal is roughly a 20-minute neighborhood walk; take a short car ride if preferred.",
        "originId": "fontenot",
        "mode": "driving"
      },
      {
        "time": "5:00 PM · ARRIVE NEAR OPENING",
        "title": "An evening at Bacchanal",
        "text": "Arrive near the current 5pm opening; confirm hours first. Share wine and cheese in the backyard.",
        "venue": "bacchanal",
        "tag": "The evening’s anchor",
        "travel": "Take a taxi/rideshare back to Fontenot after the set. Do not plan a long late walk from deep Bywater.",
        "originId": "euclid-records",
        "mode": "walking"
      }
    ],
    "alternatives": [
      "pizza-delicious",
      "bjs-lounge",
      "st-roch-market",
      "country-club",
      "funk-fest"
    ]
  },
  {
    "dow": "SAT",
    "date": 17,
    "title": "An Uptown Saturday",
    "area": "Lower Garden District & Carrollton",
    "short": "Uptown",
    "mood": "Sandwiches, streetcars, soul",
    "intro": "A casual lunch, an afternoon break, and dinner beside Maple Leaf.",
    "walking": "About 1–2 miles in short stretches; longer legs by car or transit.",
    "reserve": "Jacques-Imo’s generally takes reservations only for five or more; four should arrive at Saturday’s 4pm opening. Check Maple Leaf’s exact show before buying.",
    "rain": "Trade the streetcar wander for a car and enjoy longer indoor meals.",
    "route": [
      "turkey-and-the-wolf",
      "fontenot",
      "jacques-imos",
      "maple-leaf"
    ],
    "stops": [
      {
        "time": "11:00 AM · AN EARLY LUNCH",
        "title": "Lunch at Turkey and the Wolf",
        "text": "Arrive near opening. Split the fried bologna and another sandwich; leave room for an early dinner.",
        "venue": "turkey-and-the-wolf",
        "travel": "Hotel → Turkey and the Wolf: roughly 10–20 minutes by car, or around 30–40 minutes walking. Times are estimates.",
        "originId": "fontenot",
        "mode": "driving"
      },
      {
        "time": "EARLY AFTERNOON · SLOW IT DOWN",
        "title": "Magazine Street or a hotel break",
        "text": "Browse nearby shops or head straight back to Fontenot. A St. Charles streetcar ride is optional; check service alerts.",
        "venue": "fontenot",
        "tag": "Nothing to book",
        "originId": "turkey-and-the-wolf",
        "mode": "driving"
      },
      {
        "time": "4:00 PM · ARRIVE AT OPENING",
        "title": "Dinner at Jacques-Imo’s",
        "text": "Arrive at Saturday’s 4pm opening. Four-person parties generally walk in; ask about the evening specials.",
        "venue": "jacques-imos",
        "tag": "Walk-in for four",
        "travel": "Hotel → Oak Street: allow 25–40 minutes by car. A St. Charles/Carrollton transit trip needs substantially more time and a same-day service check.",
        "originId": "fontenot",
        "mode": "driving"
      },
      {
        "time": "EVENING · CALENDAR DEPENDENT",
        "title": "A set at Maple Leaf",
        "text": "Check the October 17 calendar for the act and start time. Snake and Jake’s is an optional final stop.",
        "venue": "maple-leaf",
        "extra": [
          "snake-jakes"
        ],
        "travel": "Jacques-Imo’s → Maple Leaf: next door on Oak Street. Return to Fontenot by taxi/rideshare when you are ready.",
        "originId": "jacques-imos",
        "mode": "walking"
      }
    ],
    "alternatives": [
      "funk-fest",
      "city-park",
      "bayou-st-john"
    ]
  },
  {
    "dow": "SUN",
    "date": 18,
    "title": "Plantation & swamps",
    "area": "Your plantation & swamp outing",
    "short": "The bayou",
    "mood": "One day, one big adventure",
    "intro": "Your existing tour has the whole day. Keep the evening flexible.",
    "walking": "Depends on your operator and plantation grounds.",
    "reserve": "Use your existing tour booking. Confirm the operator, pickup point, pickup time, transport and expected return.",
    "rain": "Follow the operator’s weather and cancellation guidance; use the hotel as your flexible fallback.",
    "route": [
      "fontenot",
      "willie-maes"
    ],
    "stops": [
      {
        "time": "BEFORE PICKUP · TIME TO CONFIRM",
        "title": "Confirm your pickup",
        "text": "Save the tour confirmation. Confirm pickup, transport, lunch and expected return time.",
        "venue": "fontenot",
        "tag": "Your existing plan",
        "originId": "",
        "mode": "driving"
      },
      {
        "time": "ALL DAY · PROTECTED",
        "title": "Plantation & swamp tour",
        "text": "Follow your booked itinerary. Allow time for the plantation’s history of slavery and the lives of enslaved people.",
        "tag": "Plantation + swamps",
        "travel": "Pack closed-toe comfortable shoes, water, a light rain layer, sun protection and insect repellent. Confirm the actual duration with your operator."
      },
      {
        "time": "AFTER RETURN · OPTIONAL",
        "title": "An easy dinner near the hotel",
        "text": "If back in time, try Willie Mae’s current CBD restaurant at 898 Baronne. Confirm the kitchen is serving; the hotel is the easy fallback.",
        "venue": "willie-maes",
        "tag": "An easy landing",
        "travel": "Fontenot → Willie Mae’s CBD at 898 Baronne: roughly 15–20 minutes walking or a short car ride. The original Tremé address is not the current dinner destination.",
        "originId": "fontenot",
        "mode": "walking"
      }
    ],
    "alternatives": []
  },
  {
    "dow": "MON",
    "date": 19,
    "title": "A last morning",
    "area": "A slow morning, then home",
    "short": "Departure",
    "mood": "Leave a little room",
    "intro": "Keep plans close to the hotel and work around your flight.",
    "walking": "As much or as little as departure allows.",
    "reserve": "Confirm checkout, luggage storage and your airport transfer. Set your leaving time from your airline’s arrival guidance.",
    "rain": "A long hotel breakfast is a perfectly good finale.",
    "route": [
      "fontenot",
      "central-grocery"
    ],
    "stops": [
      {
        "time": "MORNING · YOUR FLIGHT COMES FIRST",
        "title": "Breakfast at the hotel",
        "text": "Have breakfast and confirm checkout, luggage storage and the airport transfer.",
        "venue": "fontenot",
        "tag": "Flexible departure",
        "originId": "",
        "mode": "walking"
      },
      {
        "time": "ONLY WITH TIME TO SPARE",
        "title": "An optional sandwich stop",
        "text": "Central Grocery posts a 9am opening. Go only if the round trip comfortably fits before departure.",
        "venue": "central-grocery",
        "travel": "Allow the Quarter round trip plus shopping time; skip this entirely if it tightens your airport margin.",
        "originId": "fontenot",
        "mode": "walking"
      },
      {
        "time": "YOUR PLANNED TRANSFER",
        "title": "Airport transfer",
        "text": "Confirm space for four people and luggage. Leave enough time for traffic and your airline’s recommended airport arrival.",
        "tag": "Head home unhurried",
        "travel": "Fontenot → MSY: plan roughly 35–60 minutes by car and add a traffic buffer. This is not a live route estimate."
      }
    ],
    "alternatives": [
      "cafe-du-monde",
      "brothers-food-mart"
    ]
  }
];
