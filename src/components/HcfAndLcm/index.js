import React, { useState } from "react";
import Header from "../Header";
import Nav from 'react-bootstrap/Nav';
import "./index.css";

function HcfAndLcm() {
  const [activeTab, setActiveTab] = useState('hcfAndLcmIntro');

  function hcfAndLcmIntro() {
    return (
      <div className="Hcf-and-Lcm-background">
        <div className="hcf-and-lcm-heading-dec-container">
          <h1 className="hcf-and-lcm-main-heading">HCF and LCM</h1>
          <p className="hcf-and-lcm-main-desc">
            HCF (Highest Common Factor) and LCM (Least Common Multiple) are two fundamental concepts in number theory. Understanding these concepts is essential for solving problems related to fractions, ratios, and divisibility rules. HCF represents the largest number that can divide two or more numbers without leaving a remainder, while LCM represents the smallest number that is a multiple of two or more numbers.
          </p>
        </div>
      </div>
    );
  }

  function concepts() {
    return (
      <div className="concepts">
        <h2>Understanding the Concepts of HCF and LCM</h2>
        <p>
          The concepts of HCF and LCM are used to solve various mathematical problems related to divisibility, fractions, and ratios. Here's an overview of these concepts:
        </p>
        <ul className="concepts-list">
          <li>
            <h3>Highest Common Factor (HCF)</h3>
            <p>
              The HCF of two or more numbers is the largest number that can divide all the numbers without leaving a remainder. It is also known as the greatest common divisor (GCD).
            </p>
            <p>
              For Example:
              <br />
              The HCF of 12 and 16 is 4.
            </p>
          </li>
          <li>
            <h3>Least Common Multiple (LCM)</h3>
            <p>
              The LCM of two or more numbers is the smallest number that is a multiple of all the numbers. It is used to find a common multiple for adding or subtracting fractions with different denominators.
            </p>
            <p>
              For Example:
              <br />
              The LCM of 12 and 16 is 48.
            </p>
          </li>
        </ul>
      </div>
    );
  }

  function formulas() {
    return (
      <div className="formulas">
        <h2>Basic Formulas for HCF and LCM</h2>
        <p>Here are some of the most important formulas for solving HCF and LCM problems:</p>
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
              <td>HCF of Two Numbers</td>
              <td>Use the Euclidean algorithm: HCF(a, b) = HCF(b, a % b) until b = 0.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>LCM of Two Numbers</td>
              <td>LCM(a, b) = (a × b) / HCF(a, b).</td>
            </tr>
            <tr>
              <td>3</td>
              <td>HCF and LCM Relationship</td>
              <td>HCF(a, b) × LCM(a, b) = a × b.</td>
            </tr>
          </tbody>
        </table>
        <p>
          Quick Tip: Understanding the relationship between HCF and LCM can help you solve problems quickly.
        </p>
      </div>
    );
  }

  function practiceQuestions() {
    return (
      <div className="practice-questions">
        <h2>Practice Questions</h2>
        <p>Practice questions for HCF and LCM...</p>
      </div>
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
      case 'hcfAndLcmIntro':
      default:
        return hcfAndLcmIntro();
    }
  }

  return (
    <div>
      <Header />
      <Nav variant="tabs" defaultActiveKey="hcfAndLcmIntro" onSelect={(selectedKey) => setActiveTab(selectedKey)}>
        <Nav.Item>
          <Nav.Link eventKey="hcfAndLcmIntro">Introduction</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="concepts">Concepts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="formulas">Formulas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="practiceQuestions">Practice Questions</Nav.Link>
        </Nav.Item>
      </Nav>
      {renderContent()}
    </div>
  );
}

export default HcfAndLcm;
