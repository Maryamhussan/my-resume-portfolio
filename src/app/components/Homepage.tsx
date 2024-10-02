import Link from "next/link";

export default function homepage(){ 
    return (
      <div className="parentcontainer">
        <div className="Content">
          <div className="main-content">
            
            <h1>Hi, I'm Maryam Hussain</h1>
            
            <p>
              I'm a graphic designer and nextjs web developer with a passion for
              creating stunning visuals and impactful designs. Let's work
              together to make your brand stand out!
            </p>
            <Link href={"/contact"}>
              <button className="contact-button">Hire Me</button>
            </Link>
          </div>
          <div className="image">
            <img
              src="/images/profile.jpeg"
              alt="Maryam Hussain"
              className="profileImage"
            />
          </div>
        </div>
      </div>
    );
};