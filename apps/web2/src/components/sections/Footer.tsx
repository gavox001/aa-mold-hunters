import { Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-eco-primary-dark text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-bold">AA</div>
            <span className="font-bold">Mold Hunters</span>
          </div>
          <p className="text-white/80 text-sm mb-4">
            Florida's trusted mold remediation experts. Licensed, insured, and ready 24/7.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">f</a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">in</a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">★</a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#" className="hover:text-eco-primary transition">Mold Remediation</a></li>
            <li><a href="#" className="hover:text-eco-primary transition">Water Damage</a></li>
            <li><a href="#" className="hover:text-eco-primary transition">Roof Leak Repair</a></li>
            <li><a href="#" className="hover:text-eco-primary transition">Air Quality Testing</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Service Areas</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Miami-Dade County</li>
            <li>Broward County</li>
            <li>Palm Beach County</li>
            <li>Orlando • Tampa • Statewide</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (305) 555-1234
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Serving All Florida
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              24/7 Emergency Response
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} AA Mold Hunters. Licensed & Insured • IICRC Certified • DBPR Registered</p>
        <p className="mt-2">
          <a href="#" className="hover:text-eco-primary transition">Privacy Policy</a> • 
          <a href="#" className="hover:text-eco-primary transition">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
