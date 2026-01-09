import React from 'react';

export default function DDandJSports() {
  const whatsappLink = "https://wa.me/2349029291532";

  // SNUKER & BILLIARDS
  const snookerBoards = [
    { name: '7ft Marble Snooker Board', price: '₦1,800,000', note: 'Free Delivery in Sagamu' },
    { name: '8ft Marble Snooker Board', price: '₦2,600,000', note: 'Free Delivery in Sagamu' },
    { name: 'Luxury Non-Marble Board', price: '₦1,000,000', note: 'Premium Finish' },
    { name: 'Coin-Op Snooker Board', price: '₦1,200,000', note: 'Non-Marble' },
  ];

  // TABLE TENNIS
  const tableTennis = [
    { name: '7ft Aluminum Board', price: '₦860,000', material: 'Durable Aluminum' },
    { name: '7ft SMC Board', price: '₦560,000', material: 'High-quality SMC' },
  ];

  // ACCESSORIES & GEAR
  const gear = [
    { name: 'La Liga Football', price: '₦25,000', cat: 'Ball' },
    { name: 'Spalding Basketball', price: '₦25,000', cat: 'Ball' },
    { name: 'Nike/Adidas Basketball', price: '₦20,000', cat: 'Ball' },
    { name: 'Premium Face Caps', price: '₦25,000', cat: 'Apparel' },
    { name: 'Dumbbells', price: '₦4,500/kg', cat: 'Gym' },
    { name: 'Snooker Chalk/Tips', price: '₦500', cat: 'Parts' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#DB2777] selection:text-white">
      
      {/* TOP DELIVERY ANNOUNCEMENT */}
      <div className="bg-[#1E40AF] text-white text-[10px] font-bold tracking-[0.3em] uppercase py-3 text-center px-4">
        🚚 Free delivery on 7ft & 8ft Marble Boards within Sagamu
      </div>

      {/* NAVIGATION */}
      <nav className="p-6 flex justify-between items-center bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="flex flex-col">
          <h1 className="text-xl font-black tracking-tighter text-[#1E40AF] leading-none">
            DD AND J <span className="text-[#DB2777]">SPORTS</span>
          </h1>
          <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400 uppercase">Headquarters: Sagamu</span>
        </div>
        <a href={whatsappLink} className="bg-[#25D366] text-white px-5 py-2 text-[10px] font-bold tracking-widest hover:bg-[#1E40AF] transition-all uppercase rounded-full flex items-center gap-2">
          Chat With Us
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="relative py-20 px-8 md:px-24 bg-slate-50">
        <div className="max-w-4xl relative z-10">
          <span className="text-[#DB2777] font-bold tracking-[0.4em] uppercase text-xs">Wellness at its Peak</span>
          <h2 className="text-[10vw] md:text-[6vw] font-black leading-[0.9] tracking-tighter mb-8 text-slate-900 mt-2">
            PREMIUM <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E40AF] to-[#DB2777]">
              SPORTS GEAR.
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl leading-relaxed mb-10 border-l-4 border-[#1E40AF] pl-8">
            From professional marble snooker boards to high-performance table tennis setups. 
            DD and J Sports Venture provides elite equipment for champions.
          </p>
        </div>
      </section>

      {/* SNOOKER BOARDS SECTION */}
      <section className="py-20 px-8 md:px-24">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-2xl font-black uppercase tracking-tight italic">Snooker & Billiards</h3>
          <div className="h-[2px] flex-1 bg-slate-100"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {snookerBoards.map((item, i) => (
            <div key={i} className="border border-slate-100 p-8 rounded-2xl hover:border-[#1E40AF] transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 bg-slate-50 text-[8px] font-bold text-slate-400">{item.note}</div>
              <h4 className="text-sm font-bold mb-4 uppercase">{item.name}</h4>
              <p className="text-xl font-black text-[#1E40AF] mb-6">{item.price}</p>
              <a href={whatsappLink} className="block w-full text-center py-3 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#DB2777] transition-colors">Inquire</a>
            </div>
          ))}
        </div>
      </section>

      {/* TABLE TENNIS & BALLS */}
      <section className="py-20 px-8 md:px-24 bg-slate-900 text-white rounded-[40px] mx-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-[#DB2777] text-xs font-bold tracking-widest uppercase mb-8">Table Tennis Units</h3>
            {tableTennis.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-6 border-b border-slate-800">
                <div>
                  <p className="font-bold text-lg">{item.name}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">{item.material}</p>
                </div>
                <p className="text-[#DB2777] font-black">{item.price}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-[#1E40AF] text-xs font-bold tracking-widest uppercase mb-8">Pro Accessories</h3>
            <div className="grid grid-cols-2 gap-4">
              {gear.map((item, i) => (
                <div key={i} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <p className="text-[10px] text-slate-500 uppercase font-bold">{item.cat}</p>
                  <p className="text-sm font-bold mt-1">{item.name}</p>
                  <p className="text-[#25D366] text-xs font-bold mt-2">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-8 md:px-24 text-center">
        <h2 className="text-2xl font-black italic text-[#1E40AF]">DD AND J <span className="text-[#DB2777]">SPORTS</span></h2>
        <p className="text-slate-400 text-xs mt-4 tracking-[0.4em] uppercase font-bold">Sagamu Headquarters</p>
        <div className="mt-10 flex flex-col items-center">
            <p className="text-slate-400 text-[10px] uppercase mb-2">Sales & Support</p>
            <a href={whatsappLink} className="text-2xl font-black hover:text-[#DB2777] transition-colors tracking-tighter">+234 902 929 1532</a>
        </div>
        <div className="mt-20 text-[9px] text-slate-300 tracking-[0.3em] uppercase">
          © 2026 DD AND J Sports Venture — Wellness at its Peak.
        </div>
      </footer>
    </div>
  );
}