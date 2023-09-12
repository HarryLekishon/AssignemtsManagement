import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    date: "2000-01",
    NonCompliant: 4000,
    Compliant: 2400,
    amt: 2400,
  },
  {
    date: "2000-02",
    NonCompliant: 3000,
    Compliant: 1398,
    amt: 2210,
  },
  {
    date: "2000-03",
    NonCompliant: 2000,
    Compliant: 9800,
    amt: 2290,
  },
  {
    date: "2000-04",
    NonCompliant: 2780,
    Compliant: 3908,
    amt: 2000,
  },
  {
    date: "2000-05",
    NonCompliant: 1890,
    Compliant: 4800,
    amt: 2181,
  },
  {
    date: "2000-06",
    NonCompliant: 2390,
    Compliant: 3800,
    amt: 2500,
  },
  {
    date: "2000-07",
    NonCompliant: 3490,
    Compliant: 4300,
    amt: 2100,
  },
  {
    date: "2000-08",
    NonCompliant: 4000,
    Compliant: 2400,
    amt: 2400,
  },
  {
    date: "2000-09",
    NonCompliant: 3000,
    Compliant: 1398,
    amt: 2210,
  },
  {
    date: "2000-10",
    NonCompliant: 2000,
    Compliant: 9800,
    amt: 2290,
  },
  {
    date: "2000-11",
    NonCompliant: 2780,
    Compliant: 3908,
    amt: 2000,
  },
  {
    date: "2000-12",
    NonCompliant: 1890,
    Compliant: 4800,
    amt: 2181,
  },
];

const monthTickFormatter = (tick) => {
  const date = new Date(tick);

  return date.getMonth() + 1;
};

const renderQuarterTick = (tickProps) => {
  const { x, y, payload } = tickProps;
  const { value, offset } = payload;
  const date = new Date(value);
  const month = date.getMonth();
  const quarterNo = Math.floor(month / 3) + 1;
  const isMidMonth = month % 3 === 1;

  if (month % 3 === 1) {
    return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
  }

  const isLast = month === 11;

  if (month % 3 === 0 || isLast) {
    const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;

    return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
  }
  return null;
};
function HomeBarChart({ title }) {
  return (
    <div style={{ height: "50em" }}>
      <p style={{ fontSize: "20px", fontWeight: "600", marginBottom: "1em" }}>
        {title}
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            interval={0}
            tick={renderQuarterTick}
            height={1}
            scale="band"
            xAxisId="quarter"
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Compliant" fill="#82ca9d" />
          <Bar dataKey="NonCompliant" fill=" #da3832" />
        </BarChart>
      </ResponsiveContainer>

      <p style={{ fontSize: "25px", fontWeight: "bolder" }}>
        compliance rate:{" "}
        <span style={{ color: "green", fontWeight: "bold" }}>95%</span>
      </p>
    </div>
  );
}

export default HomeBarChart;
