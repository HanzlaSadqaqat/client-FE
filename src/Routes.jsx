import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import ReactLoading from "react-loading";
import Cases from "pages/Cases";
import Insurance from "pages/HealthInsurance";
import ClaimSummary from "pages/ClaimSummary";
import LoginPage from "pages/Login";
import Signup from "pages/Signup";

const SummaryAnalysis = React.lazy(() => import("pages/SummaryAnalysis"));

const Overview = React.lazy(() => import("pages/Overview"));

const Documents = React.lazy(() => import("pages/Documents"));

const SearchRag = React.lazy(() => import("pages/SearchRag"));

const ProjectRoutes = () => {
  const [casename, setcasename] = useState("Case Name");
  return (
    <React.Suspense
      fallback={
        <ReactLoading
          type={"bars"}
          color={"skyblue"}
          height={"210%"}
          width={"10%"}
          className={"m-auto"}
        />
      }
    >
      <Router>
        {/* <div className="absolute w-[500px] h-[500px] bg-slate-300 m-auto"></div> */}
        <Routes>
          <Route
            path="/login"
            element={
              <LoginPage casename={casename} setcasename={setcasename} />
            }
          />
          <Route
            path="/signup"
            element={<Signup casename={casename} setcasename={setcasename} />}
          />
          <Route
            path="/login"
            element={
              <ClaimSummary casename={casename} setcasename={setcasename} />
            }
          />
          <Route
            path="/searchrag"
            element={
              <SearchRag casename={casename} setcasename={setcasename} />
            }
          />
          <Route
            path="/insurance"
            element={
              <Insurance casename={casename} setcasename={setcasename} />
            }
          />
          <Route
            path="/cases"
            element={<Cases casename={casename} setcasename={setcasename} />}
          />
          <Route
            path="/documents"
            element={
              <Documents casename={casename} setcasename={setcasename} />
            }
          />
          <Route
            path="/analysis"
            element={
              <SummaryAnalysis casename={casename} setcasename={setcasename} />
            }
          />
          <Route
            path="/"
            element={<Overview casename={casename} setcasename={setcasename} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
