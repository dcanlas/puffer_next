export const ROOM_DETAILS = [
  {
    type: "family-room",
    smoobuType: "family room",
    name: "Family Room with A/C",
    description: `
    This room is our biggest and can host up to 6 guests and you have the option to add an extra mattress.

    It comes with a clothes rack, clothes drawer, desk, and a private bathroom. We also provide the essential toiletries like towels and toilet paper. 
    
    The room has a balcony where you can spend time admiring the ocean and the mountains that surround our location.`,
    occupancy: "6 pax",
    beds: "Bunk Bed (2x Double), Pull Out Double Bed",
    view: "Sea View",
    bathroom: "Private Bath",
    amenities: [
      { label: "Air Conditioning", icon: "fas fa-snowflake" },
      { label: "Toiletries", icon: "fas fa-soap" },
      { label: "Towels", icon: "fas fa-bath" },
      { label: "Balcony", icon: "fas fa-door-open" },
      { label: "Clothes Rack", icon: "fas fa-tshirt" },
    ],
  },
  {
    type: "standard-room",
    smoobuType: "standard room",
    name: "Standard Room with A/C",
    description: `
    These rooms can host 3 or 4 guests and have a private bath.

    It comes with a clothes rack, clothes drawer and, desk. We also provide the essential toiletries like towels and toilet paper. 
    
    The room has a balcony where you can spend time admiring the ocean and the mountains that surround our location.`,
    occupancy: "3-4 pax",
    beds: "Bunk Bed (1x Double) (1x Single), Pull Out Single Bed",
    view: "Sea View/ Mountain View",
    bathroom: "Private Bath",
    amenities: [
      { label: "Air Conditioning", icon: "fas fa-snowflake" },
      { label: "Toiletries", icon: "fas fa-soap" },
      { label: "Towels", icon: "fas fa-bath" },
      { label: "Balcony", icon: "fas fa-door-open" },
      { label: "Clothes Rack", icon: "fas fa-tshirt" },
    ],
  },
  {
    type: "budget-room",
    smoobuType: "budget room",
    name: "Fan Room - shared Bath",
    description: `
    The Seabreeze rooms offer amazing views of the ocean. This is a budget room in the resort.

    This room is ideal for 2 to 4 guests.

    It comes with a clothes rack, fan, and 2 double beds. There is NO A/C in this room. Guests of this room will be using common shared bathroom and toilet. We also provide the essential toiletries like towels and toilet paper.
    `,
    occupancy: "4 pax",
    beds: "Double Bed w/ Pull Out Double Bed",
    view: "Sea View",
    bathroom: "Shared Bath",
    amenities: [
      { label: "Fan", icon: "fas fa-fan" },
      { label: "Toiletries", icon: "fas fa-soap" },
      { label: "Towels", icon: "fas fa-bath" },
      { label: "Clothes Rack", icon: "fas fa-tshirt" },
    ],
  },
  {
    type: "family-fan",
    smoobuType: "family fan",
    name: "Fan Room w/ Private Bath and Patio",
    description: `
    This newly built Seabreeze rooms offer amazing views of the ocean and open up right into the beach. 

This room is ideal for up to 5 or 6 guests.

This is a Fan room only with no A/C. The room does have a private bath and shower. It also has a balcony with a dining set, perfect for relaxing and enjoying your meals.

We also provide the essential toiletries like towels and toilet paper.
    `,
    occupancy: "5-6 pax",
    beds: "Bunk Bed (2x Double), Pull Out Single Bed",
    view: "Sea View",
    bathroom: "Private Bath",
    amenities: [
      { label: "Fan", icon: "fas fa-fan" },
      { label: "Toiletries", icon: "fas fa-soap" },
      { label: "Towels", icon: "fas fa-bath" },
      { label: "Dining Set", icon: "fas fa-utensils" },
    ],
  },
];
