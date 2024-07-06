import React, { useState } from "react";
import Header from "../Header";
import Nav from 'react-bootstrap/Nav';
import "./index.css"; // Import your CSS file here

function SimpleInterest() {
  const [activeTab, setActiveTab] = useState('siIntro');

  function siIntro() {
    return (
      <div className="background">
        <div className="heading-dec-container">
          <h1 className="main-heading">Simple Interest</h1>
          <p className="main-desc">
            Simple Interest is a basic concept in finance used to calculate interest on a principal amount over time, based on a fixed rate.
          </p>
        </div>
      </div>
    );
  }

  function concepts() {
    return (
      <div className="concepts">
        <h2>Understanding the Concepts of Simple Interest</h2>
        <p>
          Simple Interest is calculated using the formula: <strong>SI = P * R * T / 100</strong>, where:
        </p>
        <ul className="concepts-list">
          <li>
            <h3>Principal (P)</h3>
            <p>The initial amount of money.</p>
          </li>
          <li>
            <h3>Rate of Interest (R)</h3>
            <p>The annual interest rate as a percentage.</p>
          </li>
          <li>
            <h3>Time (T)</h3>
            <p>The duration for which interest is applied, usually in years.</p>
          </li>
        </ul>
      </div>
    );
  }

  function formulas() {
    return (
      <div className="formulas">
        <h2>Formulas for Simple Interest</h2>
        <p>Here are different formulas for calculating Simple Interest:</p>
  
        <table className="formulas-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Formula</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>SI = P * R * T / 100</td>
              <td>Simple Interest</td>
            </tr>
            <tr>
              <td>2</td>
              <td>A = P + SI</td>
              <td>Total Amount after Interest</td>
            </tr>
            <tr>
              <td>3</td>
              <td>P = SI / (R * T / 100)</td>
              <td>Principal Amount</td>
            </tr>
            <tr>
              <td>4</td>
              <td>T = SI / (P * R / 100)</td>
              <td>Time in years</td>
            </tr>
            <tr>
              <td>5</td>
              <td>R = (SI * 100) / (P * T)</td>
              <td>Rate of Interest per annum</td>
            </tr>
            <tr>
              <td>6</td>
              <td>FV = P * (1 + R/100)^T</td>
              <td>Future Value (with compound interest)</td>
            </tr>
            <tr>
              <td>7</td>
              <td>PV = FV / (1 + R/100)^T</td>
              <td>Present Value (of a future sum)</td>
            </tr>
            <tr>
              <td>8</td>
              <td>EIR = (1 + R/n)^n - 1</td>
              <td>Effective Interest Rate (where n is the compounding periods per year)</td>
            </tr>
          </tbody>
        </table>
  
        <p>Additional details and explanations:</p>
        <ul>
          <li><strong>SI:</strong> Simple Interest = P * R * T / 100</li>
          <li><strong>A:</strong> Total Amount = P + SI</li>
          <li><strong>P:</strong> Principal = SI / (R * T / 100)</li>
          <li><strong>T:</strong> Time = SI / (P * R / 100)</li>
          <li><strong>R:</strong> Rate of Interest = (SI * 100) / (P * T)</li>
          <li><strong>FV:</strong> Future Value = P * (1 + R/100)^T</li>
          <li><strong>PV:</strong> Present Value = FV / (1 + R/100)^T</li>
          <li><strong>EIR:</strong> Effective Interest Rate = (1 + R/n)^n - 1 (where n is the compounding periods per year)</li>
        </ul>
      </div>
    );
  }
  
  
  

  function practiceQuestions() {
    return (
      <div className="practice-questions">
        <h2>Practice Questions</h2>
        <p>Practice questions for Simple Interest...</p>
      </div>
    );
  }

  function TabsExample() {
    return (
      <Nav variant="tabs" defaultActiveKey="siIntro">
        <Nav.Item>
          <Nav.Link eventKey="siIntro" onClick={() => setActiveTab('siIntro')}>Introduction</Nav.Link>
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
      case 'siIntro':
      default:
        return siIntro();
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

export default SimpleInterest;
