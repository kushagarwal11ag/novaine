export interface ProductColor {
  name: string;
  hex: string;
  imgSide: string;
  imgFront: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: 'kids' | 'ranger' | 'city';
  sizes: string[];
  speeds: string;
  ageGroup: string;
  frame: string;
  brakes: string;
  imageSide: string;
  imageFront: string;
  colors: ProductColor[];
  isPopular: boolean;
  tag: string;
  desc: string;
}

export const PRODUCTS: Product[] = [
  // Kids Models (14T, 16T, 20T)
  {
    id: 'kombat',
    name: 'Kombat',
    category: 'Kids Bikes',
    categorySlug: 'kids',
    sizes: ['14T', '16T', '20T'],
    speeds: 'Single Speed',
    ageGroup: '4-7 Years',
    frame: 'Hi-Ten Steel Sport Frame',
    brakes: 'Caliper Brakes',
    imageSide: '/assets/images/kombat_side.jpg',
    imageFront: '/assets/images/kombat_front.jpg',
    colors: [
      { name: 'Racing Red', hex: '#E31E24', imgSide: '/assets/images/kombat_side.jpg', imgFront: '/assets/images/kombat_front.jpg' },
      { name: 'Matt Black', hex: '#1C1B17', imgSide: '/assets/images/kids_2_img_0.jpg', imgFront: '/assets/images/kids_2_img_1.jpg' },
      { name: 'Neon Yellow', hex: '#F5B800', imgSide: '/assets/images/kids_4_img_0.jpg', imgFront: '/assets/images/kids_4_img_1.jpg' }
    ],
    isPopular: true,
    tag: 'Popular Kids Choice',
    desc: 'The Novaine Kombat is engineered for aspiring young riders featuring a heavy-duty steel frame, child-safe full chain guard, sturdy training wheels, and easy-reach brake levers.'
  },
  {
    id: 'magnet',
    name: 'Magnet',
    category: 'Kids Bikes',
    categorySlug: 'kids',
    sizes: ['14T', '16T', '20T'],
    speeds: 'Single Speed',
    ageGroup: '5-8 Years',
    frame: 'Carbon-Grade Steel Geometry',
    brakes: 'Power V-Brakes',
    imageSide: '/assets/images/magnet_side.jpg',
    imageFront: '/assets/images/magnet_front.jpg',
    colors: [
      { name: 'Electric Blue', hex: '#00A0E3', imgSide: '/assets/images/magnet_side.jpg', imgFront: '/assets/images/magnet_front.jpg' },
      { name: 'Seagreen / Grey', hex: '#66C3D0', imgSide: '/assets/images/kids_5_img_0.jpg', imgFront: '/assets/images/kids_5_img_1.jpg' },
      { name: 'Fluor Green', hex: '#39B54A', imgSide: '/assets/images/prod_3_img_0.jpg', imgFront: '/assets/images/prod_3_img_1.jpg' }
    ],
    isPopular: true,
    tag: 'Trending Model',
    desc: 'With striking graphics and aerodynamic styling, the Novaine Magnet delivers effortless pedaling and magnetic charm for urban adventures.'
  },
  {
    id: 'boomer',
    name: 'Boomer',
    category: 'Kids Bikes',
    categorySlug: 'kids',
    sizes: ['14T', '16T', '20T'],
    speeds: 'Single Speed',
    ageGroup: '4-7 Years',
    frame: 'Ergonomic Low-Step Steel',
    brakes: 'Caliper Brakes',
    imageSide: '/assets/images/boomer_side.jpg',
    imageFront: '/assets/images/boomer_front.jpg',
    colors: [
      { name: 'Fire Red', hex: '#E31E24', imgSide: '/assets/images/boomer_side.jpg', imgFront: '/assets/images/boomer_front.jpg' },
      { name: 'Cobalt Blue', hex: '#1E40AF', imgSide: '/assets/images/kids_4_img_0.jpg', imgFront: '/assets/images/kids_4_img_1.jpg' }
    ],
    isPopular: true,
    tag: 'Bestseller',
    desc: 'The Novaine Boomer brings explosive fun and rugged durability with broad terrain-gripping tyres, cushioned saddle, and quick-adjust seatclamp.'
  },

  // Ranger / Adult Models (24T, 26T)
  {
    id: 'hunt',
    name: 'Hunt',
    category: 'Ranger Bikes',
    categorySlug: 'ranger',
    sizes: ['24T', '26T'],
    speeds: '21-Speed / Single Speed',
    ageGroup: '9+ Years & Adults',
    frame: 'Hydroformed Steel MTB Frame',
    brakes: 'Front & Rear Mechanical Disc Brakes',
    imageSide: '/assets/images/hunt_side.jpg',
    imageFront: '/assets/images/hunt_front.jpg',
    colors: [
      { name: 'Gunmetal / Orange', hex: '#374151', imgSide: '/assets/images/hunt_side.jpg', imgFront: '/assets/images/hunt_front.jpg' },
      { name: 'Crimson Red', hex: '#B91C1C', imgSide: '/assets/images/prod_6_img_0.jpg', imgFront: '/assets/images/prod_6_img_1.jpg' },
      { name: 'Stealth Black', hex: '#111827', imgSide: '/assets/images/prod_7_img_0.jpg', imgFront: '/assets/images/prod_7_img_1.jpg' }
    ],
    isPopular: true,
    tag: 'Flagship Ranger',
    desc: 'The Novaine Hunt is an all-terrain powerhouse equipped with Shimano-grade 21-speed gears, front suspension fork, aggressive tread 2.4" tyres, and dual disc brakes.'
  },
  {
    id: 'hunt-pro',
    name: 'Hunt Pro',
    category: 'Ranger Bikes',
    categorySlug: 'ranger',
    sizes: ['24T', '26T'],
    speeds: '21-Speed Multi-Gear',
    ageGroup: '12+ Years & Adults',
    frame: 'Ultra-Tough Aero-Steel Frame',
    brakes: 'Dual Disc Brakes + Lockout Suspension',
    imageSide: '/assets/images/prod_5_img_0.jpg',
    imageFront: '/assets/images/prod_5_img_1.jpg',
    colors: [
      { name: 'Matte Military Green', hex: '#4B5320', imgSide: '/assets/images/prod_5_img_0.jpg', imgFront: '/assets/images/prod_5_img_1.jpg' },
      { name: 'Dark Titanium', hex: '#4A5568', imgSide: '/assets/images/prod_8_img_0.jpg', imgFront: '/assets/images/prod_8_img_1.jpg' }
    ],
    isPopular: true,
    tag: 'Pro Performance',
    desc: 'Novaine Hunt Pro takes trail riding to the next level with precision indexed gear shifting, suspension lockout for climbing, double-wall alloy rims, and wide riser handlebar.'
  },
  {
    id: 'cyclone',
    name: 'Cyclone',
    category: 'Ranger Bikes',
    categorySlug: 'ranger',
    sizes: ['24T', '26T'],
    speeds: 'Single Speed',
    ageGroup: '10+ Years & Adults',
    frame: 'Modern Progressive Hardtail',
    brakes: 'Disc Brakes with Alloy Levers',
    imageSide: '/assets/images/cyclone_side.jpg',
    imageFront: '/assets/images/cyclone_front.jpg',
    colors: [
      { name: 'Neon Yellow / Black', hex: '#FACC15', imgSide: '/assets/images/cyclone_side.jpg', imgFront: '/assets/images/cyclone_front.jpg' },
      { name: 'Electric Cyan', hex: '#06B6D4', imgSide: '/assets/images/prod_3_img_0.jpg', imgFront: '/assets/images/prod_3_img_1.jpg' }
    ],
    isPopular: true,
    tag: 'Popular Ranger',
    desc: 'Unleash unstoppable momentum with Novaine Cyclone — razor-sharp styling, internal cable routing look, and ultra-durable steel chassis manufactured at Ludhiana facility.'
  },
];
