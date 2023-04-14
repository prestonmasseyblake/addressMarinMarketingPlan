import "./App.css";
import { useState, useEffect } from 'react';
import { Link } from "react-scroll";
function App() {
  const [login, setLogin] = useState(true);
  const [password, setPassword] = useState("");


   const handleSubmit = (event) => {
     event.preventDefault();

     if (password === "Bailey@18") {
       setLogin(false);
       setPassword("");
     } else {
       alert("Incorrect password");
     }
   };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  return (
    <>
      {login ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
          <form
            className="bg-white p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button
              className="bg-[#000] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div>
          <div className="m-4">
            <h1 className="text-3xl font-bold text-center my-8">
              Address Marin Marketing Plan
            </h1>
            <div className="">
              <p className="font-bold underline">Sections</p>
              <ul className="mb-4">
                <li className="font-bold cursor-pointer">
                  <Link
                    activeClass="active"
                    to="Marketing Objectives"
                    spy={true}
                    smooth={true}
                  >
                    Marketing Objectives
                  </Link>
                </li>
                <li className="font-bold cursor-pointer">
                  <Link to="Marketing Plan Timeline" spy={true} smooth={true}>
                    Marketing Plan Timeline
                  </Link>
                </li>
                <li className="font-bold cursor-pointer">
                  <Link
                    to="Potential Unique Selling propositions"
                    spy={true}
                    smooth={true}
                  >
                    Potential Unique Selling propositions
                  </Link>
                </li>

                <li className="font-bold cursor-pointer">
                  <Link to="digital content" spy={true} smooth={true}>
                    digital content
                  </Link>
                </li>

                <li className="font-bold cursor-pointer">
                  <Link to="Marketing Budget" spy={true} smooth={true}>
                    Marketing Budget
                  </Link>
                </li>
              </ul>

              <h2
                id="Marketing Objectives"
                className="text-2xl font-bold underline"
              >
                Marketing Objectives
              </h2>
              <p className="text-lg my-2 font-bold">
                1. Define the target audience
              </p>
              <ul>
                <li className="">- Who are ideal clients</li>
                <li className="">
                  - What are their demographics, interests, and pain points
                </li>
                <li className="">
                  - By identifying your target audience, you can tailor your
                  marketing efforts to meet their needs and preferences.
                </li>
              </ul>
            </div>

            <p className="text-lg my-2 font-bold">2. Develop your brand</p>
            <p>
              Your brand is your identity as a real estate agent business, so
              it's essential to develop a strong and memorable brand that
              reflects your values and services.
            </p>
            <ul>
              <li className="">- Creating a logo</li>
              <li className="">- developing a unique selling proposition</li>
              <li className="">
                - designing a website that showcases your listings and expertise
              </li>
            </ul>

            <p className="text-lg my-2 font-bold">
              3. Establish an online presence
            </p>
            <p>
              In today's digital age, it's crucial to have a strong online
              presence.
            </p>
            <ul>
              <li className="">
                - creating social media profiles on popular platforms like
                Facebook, Instagram, and LinkedIn, as well as a Google My
                Business listing.
              </li>
              <li className="">
                - invest in search engine optimization (SEO) to improve your
                website's visibility and ranking on search engines like Google.
              </li>
              <li className="">
                - create digital content videos, images, blogs, live streams and
                Q&A's.
              </li>
            </ul>

            <p className="text-lg my-2 font-bold">
              4. Build relationships with your clients
            </p>
            <p>
              Real estate is a relationship-based industry, so it's essential to
              build strong relationships with your clients and maintaining
              relationships.
            </p>
            <ul>
              <li className="">- exceptional customer service.</li>
              <li className="">- staying in touch with past clients.</li>
              <li className="">
                - offering personalized recommendations and advice.
              </li>
            </ul>

            <p className="text-lg my-2 font-bold">
              5. Utilize various marketing channels
            </p>

            <ul>
              <li className="">
                - Advertise your listings and services on social media platforms
                like Facebook and Instagram.
              </li>
              <li className="">
                - Partner with local businesses to promote your services and
                build brand awareness.
              </li>
              <li className="">
                - Attend local networking events to build relationships with
                other professionals in the industry.
              </li>
              <li className="">
                - Host open houses and other events to showcase your listings
                and services to potential clients.
              </li>
            </ul>

            <p className="text-lg my-2 font-bold">
              6. Measure your results and adjust your strategy
            </p>

            <ul>
              <li className="">
                - Use analytics tools like Google Analytics and social media
                insights to track the results of your marketing efforts.
              </li>
              <li className="">
                - Analyze your website traffic, social media engagement, lead
                generation, and conversion rates to identify areas for
                improvement.
              </li>
              <li className="">
                - Make adjustments to your marketing strategy based on your
                results to optimize your efforts and improve your ROI.
              </li>
            </ul>

            <hr></hr>
            <h2
              id="Marketing Plan Timeline"
              className="text-2xl mb-2 mt-8 font-bold underline"
            >
              Marketing Plan Timeline
            </h2>
            <p className="text-lg font-bold">
              a more detailed marketing plan with dates attached to each
              deliverable to be completed over the next 6 months.
            </p>
            <div className="flex ">
              <a
                href="https://trello.com/invite/b/ugZ3RNbd/ATTIdb62d6522b36e6fce0b6e83dba95b445D93C8D96/address-marin"
                target="_blank"
                rel="noreferrer"
                className="mr-4 bg-[#000] text-white p-2 my-4 rounded-md font-bold "
              >
                Trello Board
              </a>

              <a
                href="https://github.com/users/prestonmasseyblake/projects/1"
                target="_blank"
                rel="noreferrer"
                className="bg-[#000] text-white p-2 my-4 rounded-md font-bold "
              >
                Website Kanban
              </a>
            </div>
            <p className="text-lg my-2 font-bold">
              Month 1: Define your target audience, website cleanup/improvements
            </p>

            <ul>
              <li className="">
                - Conduct market research to identify the demographics and
                interests of your target audience. Deadline: End of Month 1
              </li>
              <li className="">
                - Create buyer and seller personas that represent your ideal
                clients. Deadline: End of Month 1
              </li>
              <li className="">
                - ADA Compliance on website. Deadline: End of Month 1
              </li>
              <li className="">
                - Get all listing working, searching, automate listing scraping.
                Deadline: End of Month 1
              </li>
            </ul>

            <p className="text-lg my-2 font-bold">Month 2: Develop the brand</p>

            <ul>
              <li className="">
                - Conduct a brand audit to assess your current brand identity
                and make any necessary updates or changes. Deadline: End of Week
                5
              </li>
              <li className="">
                - Develop a unique selling proposition (USP) that differentiates
                your real estate agent business from competitors in the area.{" "}
                <span className="font-bold">
                  See suggestions later in document{" "}
                </span>
                Deadline: End of Month 2
              </li>
              <li className="">
                - Create a memorable and professional logo that reflects your
                brand identity and values. Deadline: End of Month 2
              </li>
              <li className="">
                - make sure website showcases your listings, services, and
                expertise and integrates with branding color images ect.
                Deadline: End of Month 2
              </li>
            </ul>

            <p className="text-lg my-2 font-bold">
              Month 3: Establish an online presence
            </p>

            <ul>
              <li className="">
                - Create profiles on popular social media platforms like
                Facebook, Instagram, and LinkedIn if already audit which ones to
                create and focus on. Deadline: End of Week 1 of Month 3
              </li>
              <li className="">
                - Optimize your website for search engines (SEO) by
                incorporating relevant keywords and metadata, creating
                high-quality content, and improving your website speed and
                mobile responsiveness. Deadline: Ongoing
              </li>
              <li className="">
                - Create and optimize your Google My Business listing to improve
                your visibility and ranking in local search results. Deadline:
                End of Week 2 of Month 3
              </li>
              <li className="">
                - Develop a content marketing strategy that includes creating
                blog posts, videos, and other types of content that educate and
                inform your target audience. Deadline: End of Month 3
              </li>
              <li className="">
                - Utilize online advertising platforms like Google Ads and
                Facebook Ads to reach your target audience and promote your
                listings and services. Deadline: Ongoing
              </li>
            </ul>

            <p className="text-lg my-2 font-bold">
              Month 4: Build and maintain relationships with your clients
            </p>

            <ul>
              <li className="">
                - Stay in touch with past clients through personalized follow-up
                emails, newsletters, and social media. This will need to be
                systemized for effectiveness Deadline: Ongoing
              </li>
              <li className="">
                - Offer personalized recommendations and advice based on your
                clients' needs and preferences. Deadline: Ongoing
              </li>
              <li className="">
                - Host client appreciation events to show your gratitude and
                build relationships with your clients this will also need to be
                systemized. Deadline: End of Month 4 for plan but ongoing
              </li>
            </ul>

            <p className="text-lg my-2 font-bold">
              Month 5: Utilize various marketing channels
            </p>

            <ul>
              <li className="">
                - Advertise your listings and services on social media platforms
                like Facebook and Instagram. Deadline: Ongoing
              </li>
              <li className="">
                - Partner with local businesses to promote your services and
                build brand awareness. Deadline: Ongoing
              </li>
              <li className="">
                - Attend local networking events to build relationships with
                other professionals in the industry. Deadline: Ongoing
              </li>
              <li className="">
                - Host open houses and other events to showcase your listings
                and services to potential clients. Deadline: Ongoing
              </li>
            </ul>

            <p className="text-lg my-2 font-bold">
              Month 6: Measure the results and adjust your strategy
            </p>

            <ul>
              <li className="">
                - Use analytics tools like Google Analytics and social media
                insights to track the results of your marketing efforts.
                Deadline: Ongoing.
              </li>
              <li className="">
                - Partner with local businesses to promote your services and
                build brand awareness. Deadline: Ongoing
              </li>
              <li className="">
                - Analyze your website traffic, social media engagement, lead
                generation, and conversion rates to identify areas for
                improvement. Deadline: Ongoing
              </li>
              <li className="">
                - Make adjustments to your marketing strategy based on your
                results to optimize your efforts and improve your ROI. Deadline:
                Ongoing
              </li>
            </ul>

            <hr></hr>
            <h2
              id="Potential Unique Selling propositions"
              className="text-2xl mb-2 mt-8 font-bold underline"
            >
              Potential Unique Selling propositions
            </h2>
            <p className="font-bold">
              Green Living Focused: Marin County is known for its commitment to
              sustainability and environmentalism. As a real estate agent, you
              could specialize in "green" homes and properties and market
              yourself as an expert in eco-friendly living.
            </p>
            <br></br>
            <p className="font-bold">
              Luxury Properties Focused: Marin County is home to some of the
              most desirable and luxurious homes in the Bay Area. If you
              specialize in high-end properties, you could leverage your
              expertise to attract affluent buyers and sellers looking for a
              premium real estate experience.
            </p>
            <p className="font-bold">
              Only sell super high end homes 5m or Greater
            </p>
            <br></br>
            <p className="font-bold">
              Investment Properties Focused: Marin County is a great location
              for real estate investments. As a real estate agent, you could
              specialize in investment properties and offer clients insights
              into the local rental market, property management, and other
              investment strategies.
            </p>
            <br></br>

            <p className="font-bold">
              Digital Marketing Focused: In today's digital age, having a strong
              online presence is crucial for real estate agents. If you have
              expertise in digital marketing, social media, or content creation,
              you could position yourself as a tech-savvy real estate team who
              can leverage the latest tools and platforms to attract buyers and
              sellers.
            </p>
            <br></br>

            <hr></hr>
            <h2
              id="digital content"
              className="text-2xl mb-2 mt-8 font-bold underline"
            >
              What type of digital content should Address Marin focus on
            </h2>
            <p className="font-bold">
              Property Listings: High-quality property listings are essential
              for any real estate agent. Make sure to include detailed property
              descriptions, high-quality photos, and virtual tours to showcase
              each property's unique features and appeal.
            </p>
            <br></br>
            <p className="font-bold">
              Local Market Insights: Share your insights into the local real
              estate market by creating blog posts, videos, or social media
              content. You can offer tips for homebuyers and sellers, share
              market updates and trends, and highlight new developments or
              neighborhoods in the area.
            </p>
            <p className="font-bold">
              Client Testimonials: Happy clients are one of your best marketing
              assets. Encourage satisfied clients to leave reviews and
              testimonials on your website, social media profiles, or
              third-party review sites like Zillow or Yelp.
            </p>
            <br></br>
            <p className="font-bold">
              Educational Content: Offer helpful resources and educational
              content to attract potential clients and position yourself as a
              trusted advisor. You can create guides, ebooks, or webinars on
              topics like home buying/selling, financing, or the local real
              estate market.
            </p>
            <br></br>

            <p className="font-bold">
              Behind-the-Scenes Content: Give potential clients a peek behind
              the curtain by sharing behind-the-scenes content on your social
              media profiles or website. You can share photos and videos of your
              team, showcase your office or workspace, or highlight the tools
              and technologies you use to serve clients. These would be things
              such as instagram reels, live streams with Q&A's.
            </p>
            <br></br>

            <h2
              id="Marketing Budget"
              className="text-2xl mb-2 mt-8 font-bold underline"
            >
              Marketing Budget
            </h2>
            <p className="font-bold">
              Define Your Objectives: Start by defining your marketing
              objectives. What are your goals for the coming year? Do you want
              to increase brand awareness, generate more leads, or target a
              specific audience? Make sure your objectives are specific,
              measurable, and achievable.
            </p>
            <br></br>
            <p className="font-bold">
              Determine Your Target Audience: Identify your target audience and
              determine the best ways to reach them. For example, if you're
              targeting first-time homebuyers, you may want to focus on social
              media advertising or email marketing campaigns.
            </p>
            <p className="font-bold">
              Research Costs: Research the costs of different marketing channels
              and tactics. This can include digital advertising, direct mail
              campaigns, print ads, and events. Make sure to factor in any
              design or production costs.
            </p>
            <br></br>
            <p className="font-bold">
              Allocate Your Budget: Allocate your budget based on the channels
              and tactics that will best help you achieve your marketing
              objectives. Consider splitting your budget across different
              channels to reach a broader audience.
            </p>
            <p className="font-bold">
              Monitor and Adjust: Monitor the performance of your marketing
              campaigns and adjust your budget as needed. Use analytics tools to
              track key metrics such as website traffic, leads generated, and
              conversions.
            </p>
            <br></br>

            <p className="font-bold">
              Behind-the-Scenes Content: Give potential clients a peek behind
              the curtain by sharing behind-the-scenes content on your social
              media profiles or website. You can share photos and videos of your
              team, showcase your office or workspace, or highlight the tools
              and technologies you use to serve clients. These would be things
              such as instagram reels, live streams with Q&A's.
            </p>

            <br></br>
            <p className="font-bold">
              A good rule of thumb is to allocate 5-10% of your annual revenue
              towards marketing efforts. However, this may vary depending on
              your business's size, industry, and growth stage.
            </p>

            <br></br>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
