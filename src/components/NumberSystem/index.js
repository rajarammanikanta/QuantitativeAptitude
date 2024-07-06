import React, { useState } from "react";
import Header from "../Header";
import Nav from 'react-bootstrap/Nav';
import "./index.css";

function NumberSystem() {
  const [activeTab, setActiveTab] = useState('numberSystemIntro');

  function numberSystemIntro() {
    return (
      <div className="background">
        <div className="heading-dec-container">
          <h1 className="main-heading">Number System</h1>
          <p className="main-desc">
            A number system is a method for representing and expressing
            numerical values. It offers a framework for counting, measuring, and
            executing mathematical operations. In the context of aptitude tests,
            grasping the concepts and principles of number systems is crucial.
            It enables individuals to solve numerical problems efficiently and
            accurately.
          </p>
        </div>
      </div>
    );
  }

  function concepts() {
    return (
      <div className="concepts">
        <h2>Understanding the Concepts of Number System</h2>
        <p>
          The number system is a fundamental concept in mathematics that deals with the representation and manipulation of numbers. It encompasses various number systems, such as the decimal system, binary system, octal system, and hexadecimal system. Understanding the concepts of the number system is essential for performing numerical operations, conversions, and solving problems.
        </p>
        <p>The following are the important number system concepts:</p>
        <ul className="concepts-list">
          <li>
            <h3>Number Bases</h3>
            <p>
              Number bases refer to the positional notation systems used to represent numbers. The most commonly used base is the decimal system (base-10), but there are other bases like binary (base-2), octal (base-8), and hexadecimal (base-16). Each base has a set of digits and a positional value system.
            </p>
          </li>
          <li>
            <h3>Operations on Number Systems</h3>
            <p>
              The number system allows for various operations, including addition, subtraction, multiplication, and division. These operations are performed based on the rules and properties of the specific number system being used.
            </p>
          </li>
          <li>
            <h3>Decimal System</h3>
            <p>
              The decimal system, also known as the base-10 system, is the most commonly used number system. It uses ten digits (0-9) to represent numbers. Each digit's position in a number carries a value based on powers of 10.
            </p>
            <p>
              For Example:
              <br />
              The number 352 is interpreted as 3 × 10<sup>2</sup> + 5 × 10<sup>1</sup> + 2 × 10<sup>0</sup>.
            </p>
          </li>
          <li>
            <h3>Binary System</h3>
            <p>
              The binary system, also known as the base-2 system, is widely used in computer science and digital electronics. It uses two digits (0 and 1) to represent numbers. Each digit's position in a binary number carries a value based on powers of 2.
            </p>
            <p>
              For Example:
              <br />
              The binary number 101 is interpreted as 1 × 2<sup>2</sup> + 0 × 2<sup>1</sup> + 1 × 2<sup>0</sup>, which equals 5 in the decimal system.
            </p>
          </li>
          <li>
            <h3>Hexadecimal System</h3>
            <p>
              The hexadecimal system, also known as the base-16 system, is commonly used in computer programming and digital representation. It uses sixteen digits (0-9 and A-F) to represent numbers.
            </p>
            <p>
              The decimal numbers 10 to 15 are represented by the letters A to F, respectively. Each digit's position in a hexadecimal number carries a value based on powers of 16.
            </p>
            <p>
              For Example:
              <br />
              The hexadecimal number A3 is interpreted as 10 × 16<sup>1</sup> + 3 × 16<sup>0</sup>, which equals 163 in the decimal system.
            </p>
          </li>
          <li>
            <h3>Rational Numbers</h3>
            <p>
              Rational numbers are numbers that can be expressed as a fraction of two integers. They can be positive, negative, or zero. Rational numbers include integers, fractions, terminating decimals, and repeating decimals.
            </p>
            <p>
              For Example:
              <br />
              3/4, -5, 0.6, and 1.333... are all rational numbers.
            </p>
          </li>
          <li>
            <h3>Irrational Numbers</h3>
            <p>
              Irrational numbers are numbers that cannot be expressed as a fraction of two integers. They are non-repeating and non-terminating decimals.
            </p>
            <p>
              For Example:
              <br />
              Irrational numbers include π (pi) and √2 (square root of 2). These numbers cannot be expressed exactly as a finite decimal or fraction.
            </p>
          </li>
          <li>
            <h3>Real Numbers</h3>
            <p>
              Real numbers are the combination of rational and irrational numbers. They include all rational and irrational numbers. Real numbers can be represented on the number line and are used to measure quantities in various contexts, such as distance, time, and temperature.
            </p>
          </li>
        </ul>
      </div>
    );
  }

  function formulas() {
    return (
      <div className="formulas">
        <h2>Basic Formulas of Number System</h2>
        <p>Here are some of the most important formulas for solving number system aptitude problems:</p>
        <table className="formulas-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>To Calculate</th>
              <th>Formulas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Decimal to Binary Conversion</td>
              <td>To convert a decimal number to binary, divide the decimal number by 2 repeatedly and note the remainders in reverse order.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Binary to Decimal Conversion</td>
              <td>To convert a binary number to decimal, multiply each digit by its positional value and sum the results.</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Decimal to Hexadecimal Conversion</td>
              <td>To convert a decimal number to hexadecimal, divide the decimal number by 16 repeatedly and note the remainders in reverse order.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Hexadecimal to Decimal Conversion</td>
              <td>To convert a hexadecimal number to decimal, multiply each digit by its positional value and sum the results.</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Binary Addition</td>
              <td>Perform addition of binary numbers following the rules of binary addition: 0 + 0 = 0, 0 + 1 = 1, 1 + 0 = 1, 1 + 1 = 10 (carry 1, write 0).</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Binary Subtraction</td>
              <td>Perform subtraction of binary numbers following the rules of binary subtraction: 0 - 0 = 0, 1 - 0 = 1, 1 - 1 = 0, borrow from higher place value if necessary.</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Binary Multiplication</td>
              <td>Perform multiplication of binary numbers following the rules of binary multiplication: 0 × 0 = 0, 0 × 1 = 0, 1 × 0 = 0, 1 × 1 = 1.</td>
            </tr>
          </tbody>
        </table>
        <p>
          Quick Tip: Do you know? You can learn number system formulas quickly if you first understand the fundamental concepts of number system.
        </p>
      </div>
    );
  }

  function practiceQuestions() {
    return (
      <div className="practice-questions">
        <h2>Practice Questions</h2>
        <p>Practice questions for number systems...</p>
      </div>
    );
  }

  function TabsExample() {
    return (
      <Nav variant="tabs" defaultActiveKey="numberSystemIntro">
        <Nav.Item>
          <Nav.Link eventKey="numberSystemIntro" onClick={() => setActiveTab('numberSystemIntro')}>Introduction</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="concepts" onClick={() => setActiveTab('concepts')}>Concepts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="formulas" onClick={() => setActiveTab('formulas')}>Formulas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="practiceQuestions" onClick={() => setActiveTab('practiceQuestions')}>Practice Questions</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }

  function renderContent() {
    switch (activeTab) {
      case 'concepts':
        return concepts();
      case 'formulas':
        return formulas();
      case 'practiceQuestions':
        return practiceQuestions();
      case 'numberSystemIntro':
      default:
        return numberSystemIntro();
    }
  }

  return (
    <div>
      <Header />
      {TabsExample()}
      {renderContent()}
    </div>
  );
}

export default NumberSystem;
