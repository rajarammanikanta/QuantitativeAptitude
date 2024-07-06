import React, { useState } from "react";
import Header from "../Header";
import Nav from 'react-bootstrap/Nav';
import "./index.css";

function Average() {
  const [activeTab, setActiveTab] = useState('averageIntro');

  function averageIntro() {
    return (
      <div className="background">
        <div className="heading-dec-container">
          <h1 className="main-heading">Average</h1>
          <p className="main-desc">
            The average is a measure of central tendency that is commonly used to find the central value of a set of numbers. It is calculated by dividing the sum of all the values by the number of values.
          </p>
        </div>
      </div>
    );
  }

  function concepts() {
    return (
      <div className="concepts">
        <h2>Understanding the Concepts of Average</h2>
        <p>
          The average is a statistical concept that is used to summarize data. It is widely used in various fields such as finance, economics, and social sciences.
        </p>
        <p>The following are the important average concepts:</p>
        <ul className="concepts-list">
          <li>
            <h3>Mean</h3>
            <p>
              The mean is the most common type of average. It is calculated by adding all the values together and dividing by the number of values.
              <br />
              <strong>Mean = (Sum of all values) / (Number of values)</strong>
            </p>
          </li>
          <li>
            <h3>Median</h3>
            <p>
              The median is the middle value in a data set when the values are arranged in ascending or descending order.
            </p>
          </li>
          <li>
            <h3>Mode</h3>
            <p>
              The mode is the value that appears most frequently in a data set.
            </p>
          </li>
        </ul>
      </div>
    );
  }

  function formulas() {
    return (
      <div className="formulas">
        <h2>Basic Formulas of Average</h2>
        <p>Here are some of the most important formulas for calculating averages:</p>
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
              <td>Mean</td>
              <td>(Sum of all values) / (Number of values)</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Weighted Mean</td>
              <td>(Sum of weighted values) / (Sum of weights)</td>
            </tr>
          </tbody>
        </table>
        <p>
          Quick Tip: Understanding the basic average formulas and concepts will help you tackle a variety of problems related to averages effectively.
        </p>
      </div>
    );
  }

  function practiceQuestions() {
    return (
      <div className="practice-questions">
        <h2>Practice Questions</h2>
        <p>Practice questions for average...</p>
      </div>
    );
  }

  function TabsExample() {
    return (
      <Nav variant="tabs" defaultActiveKey="averageIntro">
        <Nav.Item>
          <Nav.Link eventKey="averageIntro" onClick={() => setActiveTab('averageIntro')}>Introduction</Nav.Link>
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
      case 'averageIntro':
      default:
        return averageIntro();
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

export default Average;
