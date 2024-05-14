import s from "./Home.module.css";

function Home() {
  return (
    <>
      <main className={s.main}>
        <section id="services" className="services">
          <h2>Our Services</h2>
          <p>
            At our car rental company, we offer a wide range of vehicles for
            rent to meet your transportation needs. Whether you need a compact
            car for a quick trip around town or a spacious SUV for a family
            vacation, we've got you covered.
          </p>
          <p>
            We strive to provide excellent customer service and competitive
            prices to ensure your satisfaction. Our fleet is well-maintained and
            regularly serviced to guarantee a safe and comfortable driving
            experience for our customers.
          </p>
          <p>
            With convenient rental locations and flexible rental options,
            renting a car with us is easy and hassle-free. Explore our website
            to learn more about our services and book your rental today!
          </p>
        </section>
        <section id="about" className="about">
          <h2>About Us</h2>
          <p>
            Founded in 20XX, our car rental company has been serving customers
            across the country for over a decade. We are committed to providing
            reliable and affordable transportation solutions to our customers.
          </p>
          <p>
            Our team consists of experienced professionals who are dedicated to
            delivering exceptional service and exceeding customer expectations.
            We take pride in our reputation for honesty, integrity, and
            transparency in all our dealings.
          </p>
          <p>
            Whether you're traveling for business or leisure, we're here to make
            your journey as smooth and enjoyable as possible. Trust us for all
            your car rental needs, and experience the difference with our
            personalized service and attention to detail.
          </p>
        </section>
        <section id="contact" className="contact">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or inquiries, please don't hesitate to
            contact us. Our friendly and knowledgeable staff are here to assist
            you with all your car rental needs.
          </p>
          <p>
            You can reach us by phone at +1-XXX-XXX-XXXX or by email at
            info@carrentalservice.com. Alternatively, you can visit one of our
            rental locations in person to speak with a member of our team.
          </p>
          <p>
            We look forward to serving you and helping you make the most of your
            next journey!
          </p>
        </section>
      </main>
    </>
  );
}

export default Home;
