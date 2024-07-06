import React, { useState } from "react";
import Header from "../Header";
import Nav from 'react-bootstrap/Nav';
import "./index.css"; // Import your CSS file here

function ProfitAndLoss() {
  const [activeTab, setActiveTab] = useState('plIntro');

  function plIntro() {
    return (
      <div className="background">
        <div className="heading-dec-container">
          <h1 className="main-heading">Profit and Loss</h1>
          <p className="main-desc">
            Profit and Loss is a fundamental concept in finance used to determine the financial performance of a business or investment over a specified period.
          </p>
        </div>
      </div>
    );
  }

  function concepts() {
    return (
      <div className="concepts">
        <h2>Understanding the Concepts of Profit and Loss</h2>
        <p>
          Profit and Loss can be calculated based on the difference between the selling price (SP) and the cost price (CP) of goods or services.
        </p>
        <ul className="concepts-list">
          <li>
            <h3>Cost Price (CP)</h3>
            <p>The original price of an item before any markups or discounts.</p>
          </li>
          <li>
            <h3>Selling Price (SP)</h3>
            <p>The price at which goods or services are sold.</p>
          </li>
          <li>
            <h3>Profit</h3>
            <p>The difference between SP and CP, where SP > CP.</p>
          </li>
          <li>
            <h3>Loss</h3>
            <p>The difference between CP and SP, where CP > SP.</p>
          </li>
        </ul>
      </div>
    );
  }

  function formulas() {
    return (
      <div className="formulas">
        <h2>Formulas for Profit and Loss</h2>
        <p>Here are the basic formulas for calculating Profit and Loss:</p>

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
              <td>Profit = SP - CP</td>
              <td>Calculate Profit</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Loss = CP - SP</td>
              <td>Calculate Loss</td>
            </tr>
            <tr>
              <td>3</td>
              <td>SP = CP + Profit</td>
              <td>Calculate Selling Price given Profit</td>
            </tr>
            <tr>
              <td>4</td>
              <td>SP = CP - Loss</td>
              <td>Calculate Selling Price given Loss</td>
            </tr>
            <tr>
              <td>5</td>
              <td>CP = SP - Profit</td>
              <td>Calculate Cost Price given Profit</td>
            </tr>
            <tr>
              <td>6</td>
              <td>CP = SP + Loss</td>
              <td>Calculate Cost Price given Loss</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Profit Percentage = (Profit / CP) * 100</td>
              <td>Calculate Profit Percentage</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Loss Percentage = (Loss / CP) * 100</td>
              <td>Calculate Loss Percentage</td>
            </tr>
          </tbody>
        </table>

        <p>Understanding these formulas will help in analyzing financial performance effectively.</p>
      </div>
    );
  }

  function practiceQuestions() {
    return (
      <div className="practice-questions">
        <h2>Practice Questions</h2>
        <p>Practice questions for Profit and Loss...</p>
      </div>
    );
  }

  function TabsExample() {
    return (
      <Nav variant="tabs" defaultActiveKey="plIntro">
        <Nav.Item>
          <Nav.Link eventKey="plIntro" onClick={() => setActiveTab('plIntro')}>Introduction</Nav.Link>
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
      case 'plIntro':
      default:
        return plIntro();
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

export default ProfitAndLoss;
 