import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Summary = () => {
    const data = [
        {
          month: "Mar",
          sell: 50,
          bought: 200,
        },
        {
          month: "Apr",
          sell: 75,
          bought: 100,
        },
        {
          month: "May",
          sell: 40,
          bought: 100,
        },
      ];
    return (
        <div>
            <div>
                <h2 className="text-center my-4">
                    SALES SUMMARY
                </h2>
                <div className="d-flex justify-content-center mb-5">
                    <LineChart width={350} height={300} data={data}>
                        <Line  dataKey={"sell"}></Line>
                        <XAxis dataKey={"bought"}></XAxis>
                        <YAxis ></YAxis>
                        <Tooltip></Tooltip>
                        <Legend />
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Summary;