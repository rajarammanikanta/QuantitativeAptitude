import React, { useState } from "react";
import Header from "../Header";
import Nav from 'react-bootstrap/Nav';
import "./index.css";

function Percentage() {
  const [activeTab, setActiveTab] = useState('percentageIntro');

  function percentageIntro() {
    return (
      <div className="background">
        <div className="heading-dec-container">
          <h1 className="main-heading">Percentage</h1>
          <p className="main-desc">
            Percentage is a way of expressing a number as a fraction of 100. It is denoted using the percent sign (%). Understanding percentages is crucial for various real-world applications, including financial calculations, data analysis, and more.
          </p>
        </div>
      </div>
    );
  }

  function concepts() {
    return (
      <div className="concepts">
        <h2>Understanding the Concepts of Percentage</h2>
        <p>
          Percentages are a fundamental concept in mathematics used to express proportions, comparisons, and changes. They are widely used in various fields such as finance, economics, and statistics.
        </p>
        <p>The following are the important percentage concepts:</p>
        <ul className="concepts-list">
          <li>
            <h3>Basic Percentage Formula</h3>
            <p>
              The basic formula for calculating a percentage is:
              <br />
              <strong>Percentage (%) = (Part / Whole) × 100</strong>
            </p>
          </li>
          <li>
            <h3>Percentage Increase and Decrease</h3>
            <p>
              To calculate percentage increase:
              <br />
              <strong>Percentage Increase = [(New Value - Old Value) / Old Value] × 100</strong>
            </p>
            <p>
              To calculate percentage decrease:
              <br />
              <strong>Percentage Decrease = [(Old Value - New Value) / Old Value] × 100</strong>
            </p>
          </li>
          <li>
            <h3>Converting Fractions and Decimals to Percentages</h3>
            <p>
              To convert a fraction to a percentage, multiply by 100 and add the percent sign (%).
              <br />
              Example: <strong>(3/4) × 100 = 75%</strong>
            </p>
            <p>
              To convert a decimal to a percentage, multiply by 100 and add the percent sign (%).
              <br />
              Example: <strong>0.75 × 100 = 75%</strong>
            </p>
          </li>
        </ul>
      </div>
    );
  }

  function formulas() {
    return (
      <div className="formulas">
        <h2>Basic Formulas of Percentage</h2>
        <p>Here are some of the most important formulas for solving percentage problems:</p>
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
              <td>Percentage</td>
              <td>(Part / Whole) × 100</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Percentage Increase</td>
              <td>[(New Value - Old Value) / Old Value] × 100</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Percentage Decrease</td>
              <td>[(Old Value - New Value) / Old Value] × 100</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Fraction to Percentage</td>
              <td>(Fraction Value) × 100</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Decimal to Percentage</td>
              <td>(Decimal Value) × 100</td>
            </tr>
          </tbody>
        </table>
        <p>
          Quick Tip: Understanding the basic percentage formulas and concepts will help you tackle a variety of problems related to percentages effectively.
        </p>
      </div>
    );
  }

  function practiceQuestions() {
    return (
      <div className="practice-questions">
        <h2>Practice Questions</h2>
        <p>Practice questions for percentage...</p>
      </div>
    );
  }

  function TabsExample() {
    return (
      <Nav variant="tabs" defaultActiveKey="percentageIntro">
        <Nav.Item>
          <Nav.Link eventKey="percentageIntro" onClick={() => setActiveTab('percentageIntro')}>Introduction</Nav.Link>
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
      case 'percentageIntro':
      default:
        return percentageIntro();
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

export default Percentage;
