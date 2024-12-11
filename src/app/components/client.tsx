
import React from 'react';
import Image from 'next/image';

function Client() {
  return (
    <div>
      {/* Client Testimonials Section */}
      <section className="client" id="clients">
        <div className="section__container client__container">
          <h2 className="section__header">What our clients say</h2>
          <div className="client__grid">
            <div className="client__card">
              <Image
                src="/client-1.jpg"
                alt="Photo of a satisfied client 1"
                width={100}
                height={100}
                loading="lazy"
              />
              <p>
                The booking process was seamless, and the confirmation was instant. 
                I highly recommend WDM&Co for hassle-free hotel bookings.
              </p>
            </div>
            <div className="client__card">
              <Image
                src="/client-2.jpg"
                alt="Photo of a satisfied client 2"
                width={100}
                height={100}
                loading="lazy"
              />
              <p>
                The website provided detailed information about the hotel, including 
                amenities, photos, which helped me make an informed decision.
              </p>
            </div>
            <div className="client__card">
              <Image
                src="/client-3.jpg"
                alt="Photo of a satisfied client 3"
                width={100}
                height={100}
                loading="lazy"
              />
              <p>
                I was able to book a room within minutes, and the hotel exceeded my 
                expectations. I appreciate WDM&Co's efficiency and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Client;
