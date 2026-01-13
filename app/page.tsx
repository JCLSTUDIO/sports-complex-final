"use client"; 
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// --- SLIDER COMPONENT ---
const ImageSlider = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="relative h-48 w-full overflow-hidden rounded-[2rem] bg-slate-100 mb-4">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={img} alt="Product view" fill className="object-cover" />
        </div>
      ))}
    </div>
  );
};

export default function DDandJSportsVenture() {
  const [searchQuery, setSearchQuery] = useState("");
  const whatsappNumber = "2349029291532";
  const socialHandle = "DDANDJSPORTSVENTURE";

  // --- OFFICIAL MASTER INVENTORY (IMAGE PATHS ADDED) ---
  const allItems = [
    // SNOOKER & BILLIARDS
    { cat: "Snooker & Billiards", name: "8ft Marble Snooker Board", price: "₦2,600,000", note: "Includes Sagamu Delivery" },
    { cat: "Snooker & Billiards", name: "7ft Marble Snooker Board", price: "₦1,800,000", note: "Includes Sagamu Delivery" },
    { cat: "Snooker & Billiards", name: "Non-Marble Board (with Coin)", price: "₦1,200,000" },
    { cat: "Snooker & Billiards", name: "Luxury Non-Marble Snooker Board", price: "₦1,000,000" },
    { cat: "Snooker & Billiards", name: "SNOOKER STICK (3IN1)", price: "₦65,000", images: ["/images/snooker-stick-3in1-1.jpg", "/images/snooker-stick-3in1-2.jpg", "/images/snooker-stick-3in1-3.jpg"] },
    { cat: "Snooker & Billiards", name: "SNOOKER BALL SET (PREMIUM)", price: "₦65,000", images: ["/images/snooker-balls.jpg"] },
    { cat: "Snooker & Billiards", name: "SNOOKER CLOTH (PREMIUM)", price: "₦45,000" },
    { cat: "Snooker & Billiards", name: "MASTER CHALK (BOX)", price: "₦15,000", images: ["/images/snooker-chalk-1.jpg", "/images/snooker-chalk-2.jpg"] },
    { cat: "Snooker & Billiards", name: "SNOOKER GLOVES", price: "₦2,500", images: ["/images/snooker-gloves.jpg"] },
    { cat: "Snooker & Billiards", name: "SNOOKER COIN DOLLAR/LIBERTY", price: "₦1,700" },
    { cat: "Snooker & Billiards", name: "CUE TIP GLUE", price: "₦1,500", images: ["/images/cue-tip-glue.jpg"] },
    { cat: "Snooker & Billiards", name: "SNOOKER TIP (9MM/10MM)", price: "₦700", images: ["/images/cue-tip.jpg"] },
    { cat: "Snooker & Billiards", name: "FLAT TIPS (9MM/10MM)", price: "₦700" },
    { cat: "Snooker & Billiards", name: "SNOOKER CHALK", price: "₦500", images: ["/images/snooker-chalk-1.jpg", "/images/snooker-chalk-2.jpg"] },

    // APPAREL & ACCESSORIES
    { cat: "Apparel & Accessories", name: "NIKE ZOOM PEGASUS (43)", price: "₦60,000" },
    { cat: "Apparel & Accessories", name: "NIKE FLYKNIT/ZOOMX CANVAS", price: "₦50,000" },
    { cat: "Apparel & Accessories", name: "NIKE PHANTOM BOOT", price: "₦50,000" },
    { cat: "Apparel & Accessories", name: "NIKE GHOST LACE BOOT", price: "₦40,000" },
    { cat: "Apparel & Accessories", name: "SKECHERS CANVAS (BLACK/BLUE/RED)", price: "₦40,000" },
    { cat: "Apparel & Accessories", name: "NIKE SNEAKERS", price: "₦40,000" },
    { cat: "Apparel & Accessories", name: "ADIDAS JOGGERS HIGH GRADE (3XL)", price: "₦38,000" },
    { cat: "Apparel & Accessories", name: "ADIDAS JOGGERS S-GRADE", price: "₦35,000" },
    { cat: "Apparel & Accessories", name: "NIKE JOGGERS S-GRADE", price: "₦35,000" },
    { cat: "Apparel & Accessories", name: "GYM BAG", price: "₦45,000", images: ["/images/ball-bag.jpg"] },
    { cat: "Apparel & Accessories", name: "ADIDAS CANVAS (40)", price: "₦30,000" },
    { cat: "Apparel & Accessories", name: "FACE CAP (PREMIUM)", price: "₦25,000" },
    { cat: "Apparel & Accessories", name: "ADIDAS F50 BOOTS (VARIOUS)", price: "₦25,000" },
    { cat: "Apparel & Accessories", name: "UNDER ARMOUR SHORT WITH TIGHT", price: "₦20,000" },
    { cat: "Apparel & Accessories", name: "NIKE LEGGINGS WITH POCKET", price: "₦17,000" },
    { cat: "Apparel & Accessories", name: "CHILDREN BOOT (33)", price: "₦13,000" },
    { cat: "Apparel & Accessories", name: "SHORT TIGHTS (M/L/XL/XXL)", price: "₦5,000" },
    { cat: "Apparel & Accessories", name: "NIKE/ADIDAS BLACK HOSE", price: "₦3,000" },

    // FIELD SPORTS
    { cat: "Field Sports", name: "MOLTEN AFC FOOTBALL", price: "₦25,000" },
    { cat: "Field Sports", name: "DERBY STAR FOOTBALL", price: "₦25,000" },
    { cat: "Field Sports", name: "STRIKER ACTIVE FOOTBALL", price: "₦25,000" },
    { cat: "Field Sports", name: "NIKE/ADIDAS BALL", price: "₦25,000" },
    { cat: "Field Sports", name: "GOALKEEPER GLOVES (HIGH GRADE)", price: "₦35,000" },
    { cat: "Field Sports", name: "CLUB JERSEYS", price: "₦20,000" },
    { cat: "Field Sports", name: "BADMINTON RACKET", price: "₦18,000", images: ["/images/Badminton-Racket.jpg"] },
    { cat: "Field Sports", name: "BALL BAG", price: "₦17,000", images: ["/images/ball-bag.jpg"] },
    { cat: "Field Sports", name: "TRAINING CONE (FLAT)", price: "₦15,000", images: ["/images/Training-Cone-(Flat).jpg", "/images/cone-with-poles-(1).jpg", "/images/cone-with-poles-(2).jpg"] },
    { cat: "Field Sports", name: "SILVER PUMP (BIG)", price: "₦10,000" },
    { cat: "Field Sports", name: "SILVER PUMP (SMALL)", price: "₦8,000" },
    { cat: "Field Sports", name: "WHISTLE (PLASTIC)", price: "₦5,000", images: ["/images/whistle.jpg"] },

    // GYM & FITNESS
    { cat: "Gym & Fitness", name: "50kg Chrome Barbell & Dumbbell Set", price: "₦235,000", images: ["/images/50kg-Chrome-Barbell-&-Dumbbell-Set.jpg", "/images/50kg-Chrome-Barbell-&-Dumbbell-Set-2.jpg", "/images/50kg-Chrome-Barbell-&-Dumbbell-Set-3.jpg"] },
    { cat: "Gym & Fitness", name: "30kg Chrome Dumbbell Set", price: "₦185,000", images: ["/images/30kg-Chrome-Dumbbell-Set.jpg", "/images/30kg-Chrome-Dumbbell-Set-2.jpg"] },
    { cat: "Gym & Fitness", name: "YOGA MAT (BIG)", price: "₦30,000", images: ["/images/Yoga-Mat-(Small).jpg"] },
    { cat: "Gym & Fitness", name: "YOGA MAT (SMALL)", price: "₦25,000", images: ["/images/Yoga-Mat-(Small).jpg"] },
    { cat: "Gym & Fitness", name: "WEIGHT LIFTING BELT", price: "₦25,000", images: ["/images/Weight-Lifting-Belt.jpg"] },
    { cat: "Gym & Fitness", name: "AB ROLLER WHEEL", price: "₦15,000", images: ["/images/ab-Roller-Wheel.jpg", "/images/rebound-roller-wheel-(1).jpg", "/images/rebound-roller-wheel-(2).jpg"] },
    { cat: "Gym & Fitness", name: "PUSH UP BAR", price: "₦12,000", images: ["/images/push-up-bar.jpg", "/images/Push-Up-Bar-2.jpg"] },
    { cat: "Gym & Fitness", name: "HAND GRIPPER (ADJUSTABLE)", price: "₦9,000", images: ["/images/Hand-Gripper-(Adjustable).jpg", "/images/hand-gripper.jpg"] },
    { cat: "Gym & Fitness", name: "SKIPPING ROPE (COUNTING)", price: "₦8,000", images: ["/images/Skipping-Rope-(Counting)-(1).jpg", "/images/Skipping-Rope-(Counting)-(3).jpg", "/images/Skipping-Rope-(Counting)-(4).jpg"] },
    { cat: "Gym & Fitness", name: "RESISTANCE LOOP BAND (5IN1)", price: "₦3,000", images: ["/images/Resistance-Loop-Band-(5-in-1).jpg", "/images/resistance-band-loop.jpg"] },

    // TABLE TENNIS
    { cat: "Table Tennis", name: "7ft Aluminum Table Tennis Board", price: "₦860,000" },
    { cat: "Table Tennis", name: "7ft SMC Table Tennis Board", price: "₦560,000", images: ["/images/7ft-SMC-Table-Tennis-Board.jpg"] },
    { cat: "Table Tennis", name: "TABLE TENNIS NET & POST", price: "₦12,000", images: ["/images/table-tennis-net.jpg"] },
    { cat: "Table Tennis", name: "TABLE TENNIS BAT (SINGLE)", price: "₦8,000" },
    { cat: "Table Tennis", name: "TABLE TENNIS EGG (WHITE)", price: "₦500" },

    // AWARDS & INDOOR GAMES
    { cat: "Awards & Indoor Games", name: "Premium Trophy (Gold Set)", price: "₦140,000" },
    { cat: "Awards & Indoor Games", name: "Premium Trophy (Silver Set)", price: "₦125,000" },
    { cat: "Awards & Indoor Games", name: "DART BOARD", price: "₦35,000" },
    { cat: "Awards & Indoor Games", name: "FIRST AID BOX", price: "₦18,000", images: ["/images/first-aid-box.jpg"] },
    { cat: "Awards & Indoor Games", name: "SCRABBLE (LARGE)", price: "₦15,000" },
    { cat: "Awards & Indoor Games", name: "CHESS SET", price: "₦12,000", images: ["/images/portable-chess.jpg", "/images/portable-chess-2.jpg", "/images/portable-chess-3.jpg"] },
    { cat: "Awards & Indoor Games", name: "MEDALS HIGH GRADE", price: "₦2,000" },

    // COMBAT SPORTS
    { cat: "Combat Sports", name: "BOXING GLOVES (EVERLAST)", price: "₦40,000", images: ["/images/Boxing-Gloves-(Everlast).jpg", "/images/Boxing-Gloves-(Everlast)-2.jpg"] },
    { cat: "Combat Sports", name: "BOXING GLOVES (VENOM)", price: "₦35,000" },
    { cat: "Combat Sports", name: "MOUTH GUARD", price: "₦4,000", images: ["/images/Mouth-Guard.jpg", "/images/Mouth-Guard-2.jpg"] },
  ];

  const categories = ["Snooker & Billiards", "Apparel & Accessories", "Field Sports", "Gym & Fitness", "Table Tennis", "Awards & Indoor Games", "Combat Sports"];

  const handleOrder = (itemName: string, itemPrice: string) => {
    const message = `Hello DD AND J SPORTS VENTURE, I want to purchase the ${itemName} (${itemPrice}). Please let me know the next steps.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#DB2777] selection:text-white">
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-[100] bg-white border-b shadow-sm">
        <div className="bg-[#1E40AF] text-white text-[9px] font-bold tracking-[0.3em] uppercase py-2.5 text-center px-4">
          🚚 Free delivery on Marble Snooker Boards within Sagamu
        </div>
        <div className="p-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-black text-[#1E40AF] tracking-tighter leading-none italic uppercase">
              DD AND J <span className="text-[#DB2777]">SPORTS</span>
            </h1>
            <p className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase mt-1">Wellness at its Peak | Est. 2024</p>
          </div>
          <div className="relative w-full md:w-[450px]">
            <input 
              type="text" 
              placeholder="Search gear, sizes, or categories..."
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-[#DB2777] outline-none transition-all"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* --- HERO --- */}
      <section className="bg-slate-50 py-16 px-8 md:px-12 border-b">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] uppercase italic">
            YOUR GAME, <br /> <span className="text-[#1E40AF]">OUR GEAR.</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
             <div className="bg-white p-4 rounded-xl border border-slate-200 flex-1">
                <p className="text-[9px] font-black uppercase text-[#DB2777] mb-1">HQ Branch: Makun</p>
                <p className="text-xs font-bold text-slate-600 italic">Ewusi makun road, Bright fashion, Makun Sagamu</p>
             </div>
             <div className="bg-white p-4 rounded-xl border border-slate-200 flex-1">
                <p className="text-[9px] font-black uppercase text-[#1E40AF] mb-1">Branch 2: Ajegunle</p>
                <p className="text-xs font-bold text-slate-600 italic">Beside Bossy Methodist High School, Sagamu</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- INVENTORY --- */}
      <main className="px-8 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          {categories.map((category) => {
            const categoryItems = allItems.filter(item => 
              item.cat === category && item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            if (categoryItems.length === 0) return null;

            return (
              <div key={category} className="mb-20 bg-slate-50/30 p-8 rounded-[3rem] border border-slate-100">
                <h3 className="text-2xl font-black uppercase italic tracking-tighter text-[#1E40AF] mb-10 flex items-center gap-4">
                  {category} <div className="h-[2px] flex-1 bg-slate-200"></div>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryItems.map((item, i) => (
                    <div key={i} className="flex flex-col border border-slate-100 p-8 rounded-[2.5rem] bg-white hover:border-[#DB2777] hover:shadow-xl transition-all group">
                      {item.images ? (
                        <ImageSlider images={item.images} />
                      ) : (
                        <div className="h-48 w-full bg-slate-50 rounded-[2rem] mb-4 flex items-center justify-center text-[10px] font-bold text-slate-300 uppercase">
                          No Image
                        </div>
                      )}
                      <div className="flex-1">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.cat}</span>
                        <h4 className="font-black uppercase text-sm mt-3 leading-tight group-hover:text-[#1E40AF]">{item.name}</h4>
                        <p className="text-2xl font-black mt-3 text-slate-900 tracking-tighter">{item.price}</p>
                        {item.note && <p className="text-[10px] text-green-600 font-bold mt-2 uppercase italic">{item.note}</p>}
                      </div>
                      <button onClick={() => handleOrder(item.name, item.price)} className="mt-8 w-full py-4 bg-slate-900 text-white text-[10px] font-black uppercase rounded-2xl hover:bg-[#DB2777] transition-all">Place Order</button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0F172A] text-white py-24 px-8 md:px-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-16 text-center lg:text-left">
          <div>
            <h1 className="text-3xl font-black italic tracking-tighter">DD AND J <span className="text-[#DB2777]">SPORTS</span></h1>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.5em] mt-4">@{socialHandle}</p>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-[10px] font-bold text-[#DB2777] uppercase tracking-[0.5em] mb-2">Call Headquarters</p>
            <p className="text-2xl md:text-4xl font-black tracking-tighter whitespace-nowrap">+234 902 929 1532</p>
          </div>
          <p className="text-[9px] text-slate-700 tracking-[0.5em] uppercase">© 2024 DD AND J Sports Venture.</p>
        </div>
      </footer>
    </div>
  );
}