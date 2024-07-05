import "./index.css";

function Quantitative() {
  function whyWeChoose() {
    return (
      <div className="why-we-choose-container">
        <div className="why-we-choose-first-container">
          <h1 className="why-we-choose-main-heading">Why Choose Us for Practicing Quantitative Aptitude Questions?</h1>
          <p className="why-we-choose-main-des">
            Here are the reasons why our platform is the ideal choice for
            practicing quantitative aptitude questions:
          </p>
        </div>
        <ul className="we-choose-list-container">
          <li>
            <p className="we-choose-question">1. Comprehensive Resource</p>
            <p className="why-we-choose-ans">
              Our platform serves as a one-stop solution, offering a wide range
              of questions to help students enhance their problem-solving
              skills. You can practice the latest questions from various topics,
              along with accessing definitions, concepts, real-time
              applications, and formulas.
            </p>
          </li>

          <li>
            <p className="we-choose-question">2. User-Friendly Interface</p>
            <p className="why-we-choose-ans">
              We present important quantitative aptitude questions in a creative
              and informative manner. Our unique and appealing user interface
              includes easy navigation, detailed explanations, a forum for
              discussing doubts, and various other features to enhance your
              learning experience.
            </p>
          </li>
          <li>
            <p className="we-choose-question">3. Expertly Curated Content</p>
            <p className="why-we-choose-ans">
              With the help of our industry experts, our platform provides
              simple explanations for complex quantitative aptitude concepts.
              This enables students to easily grasp the principles and
              effectively apply their understanding through practice questions.
            </p>
          </li>
          <li>
            <p className="we-choose-question">4. Regular Updates</p>
            <p className="why-we-choose-ans">
              Our platform is consistently updated to ensure students have
              access to the most recent and relevant quantitative aptitude
              questions. With just one click, you can practice questions from
              various topics, complete with detailed explanations, at your own
              pace.
            </p>
          </li>
          <li>
            <p className="we-choose-question">5. Completely Free</p>
            <p className="why-we-choose-ans">
              Our platform is entirely free for learners to practice
              quantitative aptitude questions. We do not charge any fees, and
              all resources, including our newsletter, YouTube channel, and
              webinars, are available at no cost.
            </p>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="Quantitative-overall-container">
      <div className="introduction-container">
        <div className="introduction-content-container">
          <h1 className="Quanti-main-heading">Quantitative Aptitude</h1>
          <p className="Quanti-description">
            Quantitative aptitude evaluates a candidate's numerical and
            analytical skills. Mastering this area requires a thorough
            understanding of concepts, formulas, tips, and techniques.
            Furthermore, consistent practice with questions and answers is
            crucial for scoring well in placement exams, where this section
            holds considerable importance.
          </p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/6256141/pexels-photo-6256141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
            className="introduction-image"
          />
        </div>
      </div>
      <div className="topic-button-container">
        <div>
          <h1 className="topics-buttons-heading">
            Quantitative Aptitude Topics
          </h1>
        </div>

        <ul className="list-container">
          <li>
            <button className="problem-button">Number System</button>
          </li>
          <li>
            <button className="problem-button">HCF and LCM</button>
          </li>
          <li>
            <button className="problem-button">Percentage</button>
          </li>
          <li>
            <button className="problem-button">Average</button>
          </li>
          <li>
            <button className="problem-button">Simple Interest</button>
          </li>
          <li>
            <button className="problem-button">Ages</button>
          </li>
          <li>
            <button className="problem-button">Profit and Loss</button>
          </li>
        </ul>
      </div>
      {whyWeChoose()}
    </div>
  );
}

export default Quantitative;
