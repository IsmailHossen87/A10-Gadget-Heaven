import React from "react";
import { useLoaderData } from "react-router-dom";
import "../../App.css";
import { Helmet } from "react-helmet";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Headingdescrip from "../HeadingDescription/Headingdescrip";

function GrapPages() {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const data = useLoaderData();
  return (
    <div>
        <Helmet>
        <title>Static</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="bg-purple-500 max-w-screen-xl mx-auto rounded-xl">
        <div className="text-center md:w-2/3 mx-auto space-y-4 py-9 ">
          <h2 className="text-4xl font-semibold text-white">Subtitle</h2>
          <h2 className="md:w-2/3 mx-auto text-gray-200">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </h2>
          <div className="flex gap-5 justify-center"></div>
        </div>
      </div>
      <div className="flex justify-center items-center my-6 bg-base-200 py-4">
        <BarChart
          width={1000}
          height={350}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="price" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="price"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
}

export default GrapPages;
