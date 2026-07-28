import { useLoaderData } from "react-router";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
const Statistics = () => {
  const data = useLoaderData();

  const colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff8042",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF6666",
    "#A28CFF",
    "#36CFC9",
  ];
  return (
    <div className="max-w-7xl mx-auto py-10">
      {/* Banner */}
      <div className="bg-purple-600 text-white text-center rounded-xl py-10 mb-10">
        <h1 className="text-4xl font-bold">Statistics</h1>

        <p className="mt-3 max-w-2xl mx-auto">
          Visual representation of product prices.
        </p>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl shadow-lg p-5">
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 120,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="product_title"
              angle={-45}
              textAnchor="end"
              interval={0}
              height={120}
            />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar dataKey="price" radius={[8, 8, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={index} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
