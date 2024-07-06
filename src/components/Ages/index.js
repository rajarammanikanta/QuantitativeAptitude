import React, { useState } from "react";
import Header from "../Header";
import Nav from 'react-bootstrap/Nav';
import "./index.css";

function Ages() {
  const [activeTab, setActiveTab] = useState('agesIntro');

  function agesIntro() {
    return (
      <div className="background">
        <div className="heading-dec-container">
          <h1 className="main-heading">Ages</h1>
          <p className="main-desc">
            Calculating ages involves determining the difference in years between two dates, often used in various contexts such as demographics, insurance, and historical analysis.
          </p>
        </div>
      </div>
    );
  }

  function concepts() {
    return (
      <div className="concepts">
        <h2>Understanding Age Calculation</h2>
        <p>
          Age calculation typically involves subtracting the birth date from the current date to determine the number of full years between them.
        </p>
        <p>Key concepts include:</p>
        <ul className="concepts-list">
          <li>
            <h3>Birth Date</h3>
            <p>The date of birth of an individual.</p>
          </li>
          <li>
            <h3>Current Date</h3>
            <p>The date at which the age is being calculated.</p>
          </li>
          <li>
            <h3>Age Calculation</h3>
            <p>The process of determining the age based on the difference in years between the birth date and the current date.</p>
          </li>
        </ul>
      </div>
    );
  }

  function formulas() {
    return (
      <div className="formulas">
        <h2>Formulas for Age Calculation</h2>
        <p>Here are different formulas for calculating ages:</p>
        <table className="formulas-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Formula</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Basic Age Calculation</td>
              <td>Age = Current Year - Birth Year</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Age in Months</td>
              <td>Age in Months = (Current Year - Birth Year) * 12 + (Current Month - Birth Month)</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Age in Days</td>
              <td>Age in Days = Calculate considering leap years and month lengths</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Average Age Calculation</td>
              <td>Average Age = (Sum of all ages) / Number of individuals</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Projected Age Calculation</td>
              <td>Projected Age = Current Age + Years</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Age Difference Calculation</td>
              <td>Age Difference = Age of Person A - Age of Person B</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Age Growth Rate</td>
              <td>Age Growth Rate = ((Current Age - Previous Age) / Previous Age) * 100</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  function practiceQuestions() {
    return (
      <div className="practice-questions">
        <h2>Practice Questions</h2>
        <p>Practice questions for age calculation...</p>
      </div>
    );
  }

  function TabsExample() {
    return (
      <Nav variant="tabs" defaultActiveKey="agesIntro">
        <Nav.Item>
          <Nav.Link eventKey="agesIntro" onClick={() => setActiveTab('agesIntro')}>Introduction</Nav.Link>
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
      case 'agesIntro':
      default:
        return agesIntro();
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

export default Ages;
