import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const Charts = () => {
  const pdata = [
    {
      timestamp: "2022-12-28T09:00:00Z",
      value: 1,
      lowerBound: -3.4976257038116447,
      upperBound: 7.407238512039186,
      isAnomaly: false,
      predictedValue: 1.807987093925476,
      forecastedValue: null,
      anomalyScore: 0,
      lineStatus: 0,
      lineScore: 0,
    },
    {
      timestamp: "2022-12-28T10:00:00Z",
      value: 1,
      lowerBound: -2.352470417022704,
      upperBound: 8.183004608154299,
      isAnomaly: false,
      predictedValue: 2.634077310562134,
      forecastedValue: null,
      anomalyScore: 0,
      lineStatus: 2,
      lineScore: 0,
    },
    {
      timestamp: "2022-12-28T11:00:00Z",
      value: 10,
      lowerBound: -1.9273393511772148,
      upperBound: 8.379164714813234,
      isAnomaly: true,
      predictedValue: 2.96527099609375,
      forecastedValue: null,
      anomalyScore: 40.075273414032665,
      lineStatus: 2,
      lineScore: 0,
    },
    {
      timestamp: "2022-12-28T12:00:00Z",
      value: 3,
      lowerBound: -2.7722623553506187,
      upperBound: 11.126340762755643,
      isAnomaly: false,
      predictedValue: 3.39349365234375,
      forecastedValue: null,
      anomalyScore: 0,
      lineStatus: 3,
      lineScore: 0,
    },
    {
      timestamp: "2022-12-28T13:00:00Z",
      value: 4,
      lowerBound: -5.159564036923833,
      upperBound: 12.39700236678103,
      isAnomaly: false,
      predictedValue: 4.212906360626221,
      forecastedValue: null,
      anomalyScore: 0,
      lineStatus: 0,
      lineScore: 0,
    },
    {
      timestamp: "2022-12-28T14:00:00Z",
      value: 11,
      lowerBound: -3.5922448304547396,
      upperBound: 12.187979284864989,
      isAnomaly: false,
      predictedValue: 4.833049297332764,
      forecastedValue: null,
      anomalyScore: 0,
      lineStatus: 0,
      lineScore: 0,
    },
    {
      timestamp: "2022-12-28T15:00:00Z",
      value: 5,
      lowerBound: -2.2525634047217595,
      upperBound: 13.98349301354693,
      isAnomaly: false,
      predictedValue: 4.780180931091309,
      forecastedValue: null,
      anomalyScore: 0,
      lineStatus: 0,
      lineScore: 0,
    },
    {
      timestamp: "2022-12-28T16:00:00Z",
      value: 8,
      lowerBound: -1.090925461276456,
      upperBound: 15.78402584688522,
      isAnomaly: false,
      predictedValue: 5.847266674041748,
      forecastedValue: null,
      anomalyScore: 0,
      lineStatus: 0,
      lineScore: 0,
    },
    {
      timestamp: "2022-12-28T17:00:00Z",
      value: 9,
      lowerBound: -3.2321106358554683,
      upperBound: 13.196178630553625,
      isAnomaly: false,
      predictedValue: 5.175632953643799,
      forecastedValue: null,
      anomalyScore: 0,
      lineStatus: 0,
      lineScore: 0,
    },
    {
      timestamp: "2022-12-28T18:00:00Z",
      value: 6,
      lowerBound: -2.5755706667754428,
      upperBound: 13.035247485860204,
      isAnomaly: false,
      predictedValue: 5.055788040161133,
      forecastedValue: null,
      anomalyScore: 0,
      lineStatus: 0,
      lineScore: 0,
    },
    {
      timestamp: "2022-12-28T19:00:00Z",
      value: 6,
      lowerBound: -0.04087461272928769,
      upperBound: 11.108869869718088,
      isAnomaly: false,
      predictedValue: 5.521362781524658,
      forecastedValue: null,
      anomalyScore: 0,
      lineStatus: 0,
      lineScore: 0,
    },
    {
      timestamp: "2022-12-28T20:00:00Z",
      value: 14,
      lowerBound: -2.1072707506502324,
      upperBound: 12.211864826262957,
      isAnomaly: true,
      predictedValue: 4.834415435791016,
      forecastedValue: null,
      anomalyScore: 46.043049917622604,
      lineStatus: 1,
      lineScore: 64.81547995219111,
    },
    {
      timestamp: "2022-12-28T21:00:00Z",
      value: 10,
      lowerBound: -1.0838963196327136,
      upperBound: 9.63610297967382,
      isAnomaly: true,
      predictedValue: 3.962801694869995,
      forecastedValue: null,
      anomalyScore: 25.007868900203373,
      lineStatus: 2,
      lineScore: 64.81547995219111,
    },
    {
      timestamp: "2022-12-28T22:00:00Z",
      value: 2,
      lowerBound: -1.177306720900488,
      upperBound: 9.718839341845396,
      isAnomaly: false,
      predictedValue: 4.121090888977051,
      forecastedValue: null,
      anomalyScore: 0,
      lineStatus: 3,
      lineScore: 0,
    },
    {
      timestamp: "2022-12-28T23:00:00Z",
      value: 2,
      lowerBound: -2.1572645518487086,
      upperBound: 6.503322828997055,
      isAnomaly: false,
      predictedValue: 2.4982731342315674,
      forecastedValue: null,
      anomalyScore: 0,
      lineStatus: 0,
      lineScore: 0,
    },
    {
      timestamp: "2022-12-29T00:00:00Z",
      value: 2,
      lowerBound: -0.8042352646362968,
      upperBound: 6.304598483182597,
      isAnomaly: false,
      predictedValue: 2.5839715003967285,
      forecastedValue: null,
      anomalyScore: 0,
      lineStatus: 0,
      lineScore: 0,
    },
    {
      timestamp: "2022-12-29T02:00:00Z",
      value: 3,
      lowerBound: -1.8492207871726476,
      upperBound: 5.7992613293160975,
      isAnomaly: false,
      predictedValue: 1.9344123601913452,
      forecastedValue: null,
      anomalyScore: 0,
      lineStatus: 0,
      lineScore: 0,
    },
    {
      timestamp: "2022-12-29T06:00:00Z",
      value: 1,
      lowerBound: -1.3533209184198474,
      upperBound: 6.011064820287136,
      isAnomaly: false,
      predictedValue: 2.38238525390625,
      forecastedValue: null,
      anomalyScore: 0,
      lineStatus: 0,
      lineScore: 0,
    },
    {
      timestamp: "2022-12-29T09:00:00Z",
      value: 1,
      lowerBound: -1.9605806628229847,
      upperBound: 7.008458679639278,
      isAnomaly: false,
      predictedValue: 2.299949884414673,
      forecastedValue: null,
      anomalyScore: 0,
      lineStatus: 0,
      lineScore: 0,
    },
    {
      timestamp: "2022-12-29T10:00:00Z",
      value: 1,
      lowerBound: -1.712357214271657,
      upperBound: 9.087500458626605,
      isAnomaly: false,
      predictedValue: 3.2739439010620117,
      forecastedValue: null,
      anomalyScore: 0,
      lineStatus: 0,
      lineScore: 0,
    },
    {
      timestamp: "2022-12-29T11:00:00Z",
      value: 3,
      lowerBound: -3.2161395313101973,
      upperBound: 9.284156199474726,
      isAnomaly: false,
      predictedValue: 3.1971495151519775,
      forecastedValue: null,
      anomalyScore: 0,
      lineStatus: 0,
      lineScore: 0,
    },
    {
      timestamp: "2022-12-29T12:00:00Z",
      value: 1,
      lowerBound: -3.087415452974921,
      upperBound: 11.79160908151977,
      isAnomaly: false,
      predictedValue: 4.038671016693115,
      forecastedValue: null,
      anomalyScore: 0,
      lineStatus: 0,
      lineScore: 0,
    },
  ];
  return (
    <>
      <div className="container">
        <ResponsiveContainer aspect={3}>
          <LineChart data={pdata}>
            <CartesianGrid />
            <XAxis tick={false} hide dataKey="timestamp" />
            <YAxis tick={false} hide dataKey="value"></YAxis>

            <Line dataKey="upperBound" stroke="gray" dot={false} />
            <Line
              dataKey="value"
              stroke="#0F52BA"
              dot={{
                stroke: "#0F52BA",
                strokeWidth: 1,
                r: 4,
                strokeDasharray: "",
              }}
            />
            <Line
              type="monotone"
              strokeDasharray="3 3"
              dataKey="forecastedValue"
              stroke="blue"
            />
            <Line dataKey="lowerBound" stroke="gray" dot={false} gradient />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Charts;
