import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Button from "./components/ui/Button";

import PetProfileCard from "./components/display/PetProfileCard";
import ActivityForm from "./components/forms/ActivityForm";
import ActivityTable from "./components/display/ActivityTable";
import HealthMetricForm from "./components/forms/HealthMetricForm";
import HealthMetricTable from "./components/display/HealthMetricTable";
import ActivityChart from "./components/charts/ActivityChart";
import HealthMetricChart from "./components/charts/HealthMetricChart";
import Input from "./components/ui/Input";
import Card from "./components/ui/Card";

function App() {
  const bubblesProfile = {
    name: "Bubbles",
    breed: "Pomeranian",
    age: 13,
    weight: 10,
  };

  const mockActivities = [];
  const mockHealthMetrics = [];

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>Welcome to Bubbles' Tracker!</h2>
                <p>
                  This is your personalized dashboard to track Bubbles' health
                  and activities.
                </p>
                <h3> Your Pet Profile</h3>
                <div
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    alignItems: "flex-start",
                  }}
                >
                  <Card>
                    <PetProfileCard {...bubblesProfile}>
                      <div
                        className="pet-profile-btns"
                        style={{ marginTop: "20px" }}
                      >
                        <Button variant="primary">Explore Bubbles' Data</Button>
                        <Button variant="danger">Delete Pet</Button>
                      </div>
                    </PetProfileCard>
                  </Card>
                  <Card>
                    <ActivityForm title="New Activity"></ActivityForm>
                  </Card>
                </div>
              </div>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
