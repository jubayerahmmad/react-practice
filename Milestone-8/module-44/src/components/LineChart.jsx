import {
  CartesianGrid,
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";

const LineChart = () => {
  const mathMarks = [
    { id: 1, name: "Test 1", math: 75, physics: 68, chemistry: 82 },
    { id: 2, name: "Test 2", math: 40, physics: 74, chemistry: 76 },
    { id: 3, name: "Test 3", math: 78, physics: 72, chemistry: 70 },
    { id: 4, name: "Test 4", math: 45, physics: 80, chemistry: 78 },
    { id: 5, name: "Test 5", math: 88, physics: 62, chemistry: 84 },
    { id: 6, name: "Test 6", math: 92, physics: 89, chemistry: 47 },
    { id: 7, name: "Test 7", math: 89, physics: 85, chemistry: 60 },
  ];

  return (
    <div>
      <LChart width={500} height={400} data={mathMarks}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="rebeccapurple"></Line>
        <Line dataKey="physics" stroke="teal"></Line>
        <Line dataKey="chemistry" stroke="magenta"></Line>
        <CartesianGrid></CartesianGrid>
      </LChart>
    </div>
  );
};

export default LineChart;
