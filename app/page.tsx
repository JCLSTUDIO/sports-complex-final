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

  const allItems = [
    // SNOOKER & BILLIARDS (Images connected to your folder)
    { cat: "Snooker & Billiards", name: "8ft Marble Snooker Board", price: "₦2,600,000", note: "Includes Sagamu Delivery", images: ["/images/marble-board-8ft.jpg"] },
    { cat: "Snooker & Billiards", name: "7ft Marble Snooker Board", price: "₦1,800,000", note: "Includes Sagamu Delivery", images: ["/images/marble-board-7ft.jpg"] },
    { cat: "Snooker & Billiards", name: "SNOOKER STICK (3IN1)", price: "₦65,000", images: ["/images/nooker-stick-3in1-1.jpg", "/images/nooker-stick-3in1-2.jpg", "/images/nooker-stick-3in1-3.jpg"] },
    { cat: "Snooker & Billiards", name: "SNOOKER BALL SET (PREMIUM)", price: "₦65,000", images: ["/images/snooker-balls.jpg"] },
    { cat: "Snooker & Billiards", name: "MASTER CHALK (BOX)", price: "₦15,000", images: ["/images/master-chalk.jpg"] },
    { cat: "Snooker & Billiards", name: "SNOOKER GLOVES", price: "₦2,500", images: ["/images/snooker-gloves.jpg"] },
    { cat: "Snooker & Billiards", name: "PROFESSIONAL VELCRO GLOVES", price: "₦5,000", images: ["/images/gloves-velcro.jpg"] },
    { cat: "Snooker & Billiards", name: "CUE TIP GLUE", price: "₦1,500", images: ["/images/cue-tip-glue.jpg"] },
    { cat: "Snooker & Billiards", name: "SNOOKER TIP (9MM/10MM)", price: "₦700", images: ["/images/cue-tip.jpg"] },
    { cat: "Snooker & Billiards", name: "SNOOKER CHALK", price: "₦500", images: ["/images/snooker-chalk-1.jpg", "/images/snooker-chalk-2.jpg"] },

    // APPAREL & ACCESSORIES
    { cat: "Apparel & Accessories", name: "NIKE ZOOM PEGASUS (43)", price: "₦60,000" },
    { cat: "Apparel & Accessories", name: "NIKE PHANTOM BOOT", price: "₦50,000" },
    { cat: "Apparel & Accessories", name: "ADIDAS JOGGERS HIGH GRADE (3XL)", price: "₦38,000" },
    { cat: "Apparel & Accessories", name: "GYM BAG", price: "₦45,000" },

    // FIELD SPORTS
    { cat: "Field Sports", name: "MOLTEN AFC FOOTBALL", price: "₦25,000" },
    { cat: "Field Sports", name: "DERBY STAR FOOTBALL", price: "₦25,000" },
    { cat: "Field Sports", name: "GOALKEEPER GLOVES (HIGH GRADE)", price: "₦35,000" },

    // GYM & FITNESS
    { cat: "Gym & Fitness", name: "50kg Chrome Barbell & Dumbbell Set", price: "₦235,000" },
    { cat: "Gym & Fitness", name: "AB ROLLER WHEEL", price: "₦15,000" },
    { cat: "Gym & Fitness", name: "HAND GRIPPER (ADJUSTABLE)", price: "₦9,000" },

    // TABLE TENNIS
    { cat: "Table Tennis", name: "7ft Aluminum Table Tennis Board", price: "₦860,000" },
    { cat: "Table Tennis", name: "TABLE TENNIS BAT (SINGLE)", price: "₦8,000" },

    // AWARDS & INDOOR GAMES
    { cat: "Awards & Indoor Games", name: "Premium Trophy (Gold Set)", price: "₦140,000" },
    { cat: "Awards & Indoor Games", name: "CHESS SET", price: "₦12,000" },

    // COMBAT SPORTS
    { cat: "Combat Sports", name: "BOXING GLOVES (EVERLAST)", price: "₦40,000" },
  ];

  const categories = ["Snooker & Billiards", "Apparel & Accessories", "Field Sports", "Gym & Fitness", "Table Tennis", "Awards & Indoor Games", "Combat Sports"];

  const handleOrder = (itemName: string, itemPrice: string) => {
    const message = `Hello DD AND J SPORTS VENTURE, I want to purchase the ${itemName} (${itemPrice}).`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <header className="sticky top-0 z-[100] bg-white border-b shadow-sm">
        <div className="bg-[#1E40AF] text-white text-[9px] font-bold py-2.5 text-center px-4 uppercase tracking-[0.3em]">
          🚚 Free delivery on Marble Snooker Boards within Sagamu
        </div>
        <div className="p-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <h1 className="text-2xl font-black text-[#1E40AF] italic uppercase">
            DD AND J <span className="text-[#DB2777]">SPORTS</span>
          </h1>
          <input 
            type="text" 
            placeholder="Search gear..."
            className="w-full md:w-[450px] bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm outline-none focus:ring-2 focus:ring-[#DB2777]"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      <section className="bg-slate-50 py-16 px-8 md:px-12 border-b">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] uppercase italic">
            YOUR GAME, <br /> <span className="text-[#1E40AF]">OUR GEAR.</span>
          </h2>
        </div>
      </section>

      <main className="px-8 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          {categories.map((category) => {
            const categoryItems = allItems.filter(item => 
              item.cat === category && item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            if (categoryItems.length === 0) return null;

            return (
              <div key={category} className="mb-20 bg-slate-50/30 p-8 rounded-[3rem] border border-slate-100">
                <h3 className="text-2xl font-black uppercase italic text-[#1E40AF] mb-10 flex items-center gap-4">
                  {category} <div className="h-[2px] flex-1 bg-slate-200"></div>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryItems.map((item, i) => (
                    <div key={i} className="flex flex-col border border-slate-100 p-6 rounded-[2.5rem] bg-white hover:shadow-xl transition-all group">
                      {item.images ? <ImageSlider images={item.images} /> : <div className="h-48 w-full bg-slate-100 rounded-[2rem] mb-4 flex items-center justify-center text-[10px] font-bold text-slate-300">Coming Soon</div>}
                      <div className="flex-1">
                        <span className="text-[9px] font-black text-slate-400 uppercase">{item.cat}</span>
                        <h4 className="font-black uppercase text-sm mt-3 group-hover:text-[#1E40AF]">{item.name}</h4>
                        <p className="text-2xl font-black mt-3 text-slate-900 tracking-tighter">{item.price}</p>
                      </div>
                      <button onClick={() => handleOrder(item.name, item.price)} className="mt-8 w-full py-4 bg-slate-900 text-white text-[10px] font-black uppercase rounded-2xl hover:bg-[#DB2777]">Place Order</button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <footer className="bg-[#0F172A] text-white py-24 px-8 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-16 text-center lg:text-left">
          <h1 className="text-3xl font-black italic">DD AND J <span className="text-[#DB2777]">SPORTS</span></h1>
          <p className="text-2xl md:text-4xl font-black">+234 902 929 1532</p>
        </div>
      </footer>
    </div>
  );
}