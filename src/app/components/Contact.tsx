import { MapPin, Phone, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [expandedHours, setExpandedHours] = useState<string | null>(null);

  const toggleHours = (section: string) => {
    setExpandedHours(expandedHours === section ? null : section);
  };

  const hoursData = {
    restaurant: [
      { day: "Monday", hours: "7 am–10 pm" },
      { day: "Tuesday", hours: "7:30 am–10 pm" },
      { day: "Wednesday", hours: "7 am–10 pm" },
      { day: "Thursday", hours: "7 am–10 pm" },
      { day: "Friday", hours: "7 am–10 pm" },
      { day: "Saturday", hours: "7 am–10:30 pm" },
      { day: "Sunday", hours: "7 am–10:30 pm" },
    ],
    driveThrough: [
      { day: "Monday", hours: "9 am–5 pm" },
      { day: "Tuesday", hours: "9 am–5 pm" },
      { day: "Wednesday", hours: "9 am–5 pm" },
      { day: "Thursday", hours: "9 am–5 pm" },
      { day: "Friday", hours: "9 am–5 pm" },
      { day: "Saturday", hours: "9 am–5 pm" },
      { day: "Sunday", hours: "9 am–5 pm" },
    ],
    delivery: [
      { day: "Monday", hours: "9 am–11:30 pm" },
      { day: "Tuesday", hours: "9 am–11:30 pm" },
      { day: "Wednesday", hours: "9 am–11 pm" },
      { day: "Thursday", hours: "9 am–11 pm" },
      { day: "Friday", hours: "9 am–5 pm" },
      { day: "Saturday", hours: "9 am–11:30 pm" },
      { day: "Sunday", hours: "9 am–10 pm" },
    ],
    breakfast: [
      { day: "Monday", hours: "8–11 am" },
      { day: "Tuesday", hours: "8:30–11 am" },
      { day: "Wednesday", hours: "8:30–11 am" },
      { day: "Thursday", hours: "8:30–11 am" },
      { day: "Friday", hours: "8:30–11 am" },
      { day: "Saturday", hours: "8–11 am" },
      { day: "Sunday", hours: "7–11 am" },
    ],
  };

  return (
    <section id="contact" className="bg-[#1A1A1A] py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2
                className="text-[#F5F5F5] mb-8"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(28px, 5vw, 40px)',
                  fontWeight: 700,
                }}
              >
                Find Us
              </h2>

              {/* Address */}
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#C9A84C]" size={24} />
                </div>
                <div>
                  <p
                    className="text-[#F5F5F5] mb-1"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500 }}
                  >
                    Address
                  </p>
                  <p
                    className="text-[#9E9E9E]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: 1.6 }}
                  >
                    Near ICICI Bank, Majitar<br />
                    Sikkim 737136
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#C9A84C]" size={24} />
                </div>
                <div>
                  <p
                    className="text-[#F5F5F5] mb-1"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500 }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:07043577723"
                    className="text-[#C9A84C] hover:text-[#E6C76A] transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 600 }}
                  >
                    07043577723
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-[#C9A84C]" size={24} />
                </div>
                <div className="flex-1">
                  <p
                    className="text-[#F5F5F5] mb-3"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500 }}
                  >
                    Opening Hours
                  </p>
                  
                  {/* Hours Accordion */}
                  <div className="flex flex-col gap-2">
                    {/* Restaurant Hours */}
                    <div className="bg-[#0D0D0D] rounded-lg overflow-hidden border border-[#C9A84C]/20">
                      <button
                        onClick={() => toggleHours('restaurant')}
                        className="w-full flex items-center justify-between p-3 hover:bg-[#0D0D0D]/80 transition-colors"
                      >
                        <span
                          className="text-[#F5F5F5]"
                          style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500 }}
                        >
                          Restaurant
                        </span>
                        <ChevronDown 
                          className={`text-[#C9A84C] transition-transform ${expandedHours === 'restaurant' ? 'rotate-180' : ''}`} 
                          size={16} 
                        />
                      </button>
                      {expandedHours === 'restaurant' && (
                        <div className="px-3 pb-3 space-y-1">
                          {hoursData.restaurant.map((hour) => (
                            <div 
                              key={hour.day}
                              className="flex justify-between text-[#9E9E9E]"
                              style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px' }}
                            >
                              <span>{hour.day}</span>
                              <span>{hour.hours}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Drive-Through Hours */}
                    <div className="bg-[#0D0D0D] rounded-lg overflow-hidden border border-[#C9A84C]/20">
                      <button
                        onClick={() => toggleHours('driveThrough')}
                        className="w-full flex items-center justify-between p-3 hover:bg-[#0D0D0D]/80 transition-colors"
                      >
                        <span
                          className="text-[#F5F5F5]"
                          style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500 }}
                        >
                          Drive-through
                        </span>
                        <ChevronDown 
                          className={`text-[#C9A84C] transition-transform ${expandedHours === 'driveThrough' ? 'rotate-180' : ''}`} 
                          size={16} 
                        />
                      </button>
                      {expandedHours === 'driveThrough' && (
                        <div className="px-3 pb-3 space-y-1">
                          {hoursData.driveThrough.map((hour) => (
                            <div 
                              key={hour.day}
                              className="flex justify-between text-[#9E9E9E]"
                              style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px' }}
                            >
                              <span>{hour.day}</span>
                              <span>{hour.hours}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Delivery Hours */}
                    <div className="bg-[#0D0D0D] rounded-lg overflow-hidden border border-[#C9A84C]/20">
                      <button
                        onClick={() => toggleHours('delivery')}
                        className="w-full flex items-center justify-between p-3 hover:bg-[#0D0D0D]/80 transition-colors"
                      >
                        <span
                          className="text-[#F5F5F5]"
                          style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500 }}
                        >
                          Delivery
                        </span>
                        <ChevronDown 
                          className={`text-[#C9A84C] transition-transform ${expandedHours === 'delivery' ? 'rotate-180' : ''}`} 
                          size={16} 
                        />
                      </button>
                      {expandedHours === 'delivery' && (
                        <div className="px-3 pb-3 space-y-1">
                          {hoursData.delivery.map((hour) => (
                            <div 
                              key={hour.day}
                              className="flex justify-between text-[#9E9E9E]"
                              style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px' }}
                            >
                              <span>{hour.day}</span>
                              <span>{hour.hours}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Breakfast Hours */}
                    <div className="bg-[#0D0D0D] rounded-lg overflow-hidden border border-[#C9A84C]/20">
                      <button
                        onClick={() => toggleHours('breakfast')}
                        className="w-full flex items-center justify-between p-3 hover:bg-[#0D0D0D]/80 transition-colors"
                      >
                        <span
                          className="text-[#F5F5F5]"
                          style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500 }}
                        >
                          Breakfast
                        </span>
                        <ChevronDown 
                          className={`text-[#C9A84C] transition-transform ${expandedHours === 'breakfast' ? 'rotate-180' : ''}`} 
                          size={16} 
                        />
                      </button>
                      {expandedHours === 'breakfast' && (
                        <div className="px-3 pb-3 space-y-1">
                          {hoursData.breakfast.map((hour) => (
                            <div 
                              key={hour.day}
                              className="flex justify-between text-[#9E9E9E]"
                              style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px' }}
                            >
                              <span>{hour.day}</span>
                              <span>{hour.hours}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.google.com/maps/place/Relax+Point+Restaurant+cum+Bar/@27.1861712,88.5026683,17z/data=!4m16!1m9!3m8!1s0x39e6a12d5b2df609:0x9dda93b320de329f!2sRelax+Point+Restaurant+cum+Bar!8m2!3d27.1861712!4d88.5026683!9m1!1b1!16s%2Fg%2F11st860c2t!3m5!1s0x39e6a12d5b2df609:0x9dda93b320de329f!8m2!3d27.1861712!4d88.5026683!16s%2Fg%2F11st860c2t"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C9A84C] text-[#0D0D0D] px-8 py-4 rounded-lg hover:bg-[#E6C76A] transition-all duration-300 shadow-lg hover:shadow-xl text-center flex-1"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500 }}
              >
                Get Directions
              </a>
              <a
                href="tel:07043577723"
                className="border-2 border-[#C9A84C] text-[#C9A84C] px-8 py-4 rounded-lg hover:bg-[#C9A84C] hover:text-[#0D0D0D] transition-all duration-300 text-center flex-1"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500 }}
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right - Map */}
          <div className="bg-[#0D0D0D] rounded-xl overflow-hidden shadow-2xl h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.6234567890123!2d88.50048131502123!3d27.186171208321456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a12d5b2df609%3A0x9dda93b320de329f!2sRelax%20Point%20Restaurant%20cum%20Bar!5e0!3m2!1sen!2sin!4v1711186234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Relax Point Restaurant cum Bar Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}