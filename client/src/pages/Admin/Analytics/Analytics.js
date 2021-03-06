import React, { useState } from "react";
import ToolBar from "pages/Admin/Analytics/AnalyticsToolBar";
import AnalyticsItem from "pages/Admin/Analytics/AnalyticsItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Animated } from "react-animated-css";
import { toast } from "react-toastify";
import axios from "utils/axios";
import { formatTime, formatAccuracy } from "utils/format";

import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Analytics = () => {
  // use state hooks
  const [items, setItems] = useState([]); //default empty object
  const [levelName, setLevelName] = useState(0); //default
  const [timesCompleted, setTimesCompleted] = useState(0);
  const [sourceItems, setSourceItems] = useState([]);
  const [showChart, setShowChart] = useState(false);

  const ChartArea = () => (
    <Animated animationIn="fadeInLeft" animationOut="rubberBand" isVisible={true}>
      <div className="recharts-wrapper">
        <ResponsiveContainer width="50%" height={250} className="hvr-grow">
          <AreaChart
            data={rechart_data}
            margin={{ top: 20, right: 20, left: 5, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="rgb(64, 223, 159)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="rgb(64, 223, 159)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis dataKey="username" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="accuracy"
              stroke="rgb(64, 223, 159)"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="50%" height={250} className="hvr-grow">
          <AreaChart
            data={rechart_data}
            margin={{ top: 20, right: 5, left: 20, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="rgb(194, 79, 79)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="rgb(194, 79, 79)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis dataKey="username" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="time"
              stroke="rgb(194, 79, 79)"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Animated>
  );

  // get the average accuracy of the corresponding level
  const averageAccuracy = () => {
    const average = parseFloat(
      items.map((item) => formatAccuracy(item.accuracy)).reduce((a, value) => a + value, 0) /
        timesCompleted
    ).toFixed(2);
    return average;
  };

  //  get the fastest record in the response
  const fastestTime = () => {
    let times = items.map((item) => item.time);
    var min = Math.min.apply(null, times);
    return formatTime(min);
  };

  // search function
  const search = (text) => {
    // get a new array
    let _items = [...sourceItems];
    // filter new array
    _items = _items.filter((item) => {
      const matchArray = item.username.match(new RegExp(text, "gi"));
      return !!matchArray;
    });
    // set state of new array
    setItems(_items);
  };

  // ------ sorting functions ----- //

  const sortByAccuracy = () => {
    // get a new array
    let _items = [...sourceItems];
    function SortArray(x, y) {
      if (x.accuracy < y.accuracy) {
        return 1;
      }
      if (x.accuracy > y.accuracy) {
        return -1;
      }
      return 0;
    }
    _items = _items.sort(SortArray);
    // set state of new array
    setItems(_items);
    toast.success("Data is now sorted by accuracy");
  };

  const sortByUsername = () => {
    // get a new array
    let _items = [...sourceItems];
    function SortArray(x, y) {
      if (x.username < y.username) {
        return -1;
      }
      if (x.username > y.username) {
        return 1;
      }
      return 0;
    }
    _items = _items.sort(SortArray);
    // set state of new array
    setItems(_items);
    toast.success("Data is now sorted by username");
  };

  const sortByTime = () => {
    // get a new array
    let _items = [...sourceItems];
    function SortArray(x, y) {
      if (x.time < y.time) {
        return -1;
      }
      if (x.time > y.time) {
        return 1;
      }
      return 0;
    }
    _items = _items.sort(SortArray);
    // set state of new array
    setItems(_items);
    toast.success("Data is now sorted by time");
  };

  const sortByDate = () => {
    // get a new array
    let _items = [...sourceItems];
    function SortArray(x, y) {
      if (x.complete_date < y.complete_date) {
        return 1;
      }
      if (x.complete_date > y.complete_date) {
        return -1;
      }
      return 0;
    }
    _items = _items.sort(SortArray);
    // set state of new array
    setItems(_items);
    toast.success("Data is now sorted by date");
  };

  // load data into AnalyticItems
  const loadData = (level) => {
    if (level === "level1") {
      axios.get("/level1").then((res) => {
        setItems(res.data);
        setSourceItems(res.data);
        setLevelName(1);
        setTimesCompleted(res.data.length);
      });
    } else if (level === "level2") {
      axios.get("/level2").then((res) => {
        setItems(res.data);
        setSourceItems(res.data);
        setLevelName(2);
        setTimesCompleted(res.data.length);
      });
    } else if (level === "level3") {
      axios.get("/level3").then((res) => {
        setItems(res.data);
        setSourceItems(res.data);
        setLevelName(3);
        setTimesCompleted(res.data.length);
      });
    } else if (level === "level4") {
      axios.get("/level4").then((res) => {
        setItems(res.data);
        setSourceItems(res.data);
        setLevelName(4);
        setTimesCompleted(res.data.length);
      });
    } else if (level === "level5") {
      axios.get("/level5").then((res) => {
        setItems(res.data);
        setSourceItems(res.data);
        setLevelName(5);
        setTimesCompleted(res.data.length);
      });
    } else if (level === "custom") {
      axios.get("/custom").then((res) => {
        setItems(res.data);
        setSourceItems(res.data);
        setLevelName("Custom");
        setTimesCompleted(res.data.length);
      });
    }
  };

  const handleShowChart = () => {
    if (showChart === true) {
      setShowChart(false);
    } else {
      setShowChart(true);
    }
  };

  // data for rechart visualization tool
  const rechart_data = [...items];
  return (
    <div>
      <ToolBar
        search={search}
        sortTime={sortByTime}
        sortAccuracy={sortByAccuracy}
        sortName={sortByUsername}
        sortDate={sortByDate}
        showChart={showChart}
        handleShowChart={handleShowChart}
      />
      <div className="analytics-wrapper">
        <Animated animationIn="flipInX" animationOut="bounce" isVisible={true}>
          {/* choose which level to show */}
          <div className="level-container">
            {/* each line has 12 slots */}
            <div className="columns">
              <div className="column is-2">
                <div
                  className="level-btn button is-primary is-outlined hvr-underline-from-left"
                  onClick={() => loadData("level1")}
                >
                  Level 1
                </div>
              </div>
              <div className="column is-2">
                <div
                  className="level-btn  button is-primary is-outlined hvr-underline-from-left"
                  onClick={() => loadData("level2")}
                >
                  Level 2
                </div>
              </div>
              <div className="column is-2">
                <div
                  className="level-btn button is-primary is-outlined hvr-underline-from-left"
                  onClick={() => loadData("level3")}
                >
                  Level 3
                </div>
              </div>
              <div className="column is-2">
                <div
                  className="level-btn button is-primary is-outlined hvr-underline-from-left"
                  onClick={() => loadData("level4")}
                >
                  Level 4
                </div>
              </div>
              <div className="column is-2">
                <div
                  className="level-btn button is-primary is-outlined hvr-underline-from-left"
                  onClick={() => loadData("level5")}
                >
                  Level 5
                </div>
              </div>
              <div className="column is-2">
                <div
                  className="level-btn  button is-primary is-outlined hvr-underline-from-left"
                  onClick={() => loadData("custom")}
                >
                  Custom
                </div>
              </div>
            </div>
          </div>
        </Animated>

        {/* stats level */}
        <nav className="level mt-5 has-text-light">
          <div className="level-item has-text-centered">
            <div className="hvr-wobble-horizontal">
              <p className="heading">Level</p>
              <p className="title a-stat ">{levelName}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div className="hvr-wobble-horizontal">
              <p className="heading">Total Entry</p>
              <p className="title a-stat">{timesCompleted}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div className="hvr-wobble-horizontal">
              <p className="heading">Fastest Time</p>
              <p className="title a-stat">{fastestTime()}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div className="hvr-wobble-horizontal">
              <p className="heading">Average Accuracy</p>
              <p className="title a-stat">{averageAccuracy()}%</p>
            </div>
          </div>
        </nav>

        {showChart ? <ChartArea /> : null}

        {/* list*/}
        <Animated
          animationIn="fadeInRight"
          animationOut="bounce"
          isVisible={true}
        >
          <div className="items-list mt-4">
            {/* table header */}
            <div className="columns is-vcentered has-text-dark has-background-primary has-text-centered">
              <div className="column">
                <strong>ID</strong>
              </div>

              <div className="column">
                <strong>Username</strong>
              </div>

              <div className="column">
                <strong>HH:MM:SS</strong>
              </div>

              <div className="column">
                <strong>Accuracy</strong>
              </div>

              <div className="column">
                <strong>Activity Date</strong>
              </div>
            </div>

            <TransitionGroup component={null}>
              {items.map((item) => (
                <CSSTransition
                  classNames="analytics-fade"
                  timeout={300}
                  key={item.id}
                >
                  <AnalyticsItem key={item.id} item={item} />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </Animated>
      </div>
    </div>
  );
};

export default Analytics;
