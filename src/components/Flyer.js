import React from 'react';
import flyer from '../img/start_earning_tubayo_pc_web.jpg';

function Flyer() {
    return (
        <div>
            <img src={flyer} alt="flyerImg" style={{ width: "100%", height: "20rem" }} />
            <div className="container-fluid my-5">
                <h4>Some of The Benefits of Hosting.</h4>
                <div>
                    <h6>1. Develop A Deeper Connection</h6>
                    <p>
                        Form a deeper connection between your message and
                        the audience you’re trying to reach. An in-person event
                        creates the opportunity for the human connection that is
                         missed in online interactions. There is nothing like the energy
                          that is formed through people meeting face to face.
                    </p>
                    <h6>2. Stand out</h6>
                    <p>
                        Separate yourself from other people in your industry
                         and be an individual that brings others together.
                    </p>
                    <h6>3. Share Your Personality</h6>
                    <p>
                        Give people the opportunity to dive a little deeper
                         into getting to know you through the unique experience you’re
                         sharing with them. Add your own authentic flair to your event and
                          always be genuine.
                    </p>
                    <h6>4. Form A Bond</h6>
                    <p>
                        Build solid relationships with your community
                         and create a bond with them through your event.
                         You will be able to give back to them in a way that really
                          leaves an impact as you bring your vision to life.
                    </p>
                    <h6>5. Make A Profit</h6>
                    <p>
                        You can make a profit in more than just money.
                        The credibility, relationships, and connections that
                         you make are just as valuable as any ticket sales you could
                          potentially receive.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Flyer
