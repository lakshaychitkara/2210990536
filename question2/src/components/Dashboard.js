import React from 'react';
import MetricsCard from './MetricsCard';
import AnalyticsChart from './AnalyticsChart';

const sampleMetrics = [
  { id: 1, title: 'Followers', value: 12000 },
  { id: 2, title: 'Likes', value: 54000 },
  { id: 3, title: 'Shares', value: 3200 },
  { id: 4, title: 'Comments', value: 1500 },
];

const sampleChartData = [
  { name: 'Jan', followers: 4000, likes: 2400 },
  { name: 'Feb', followers: 3000, likes: 1398 },
  { name: 'Mar', followers: 2000, likes: 9800 },
  { name: 'Apr', followers: 2780, likes: 3908 },
  { name: 'May', followers: 1890, likes: 4800 },
  { name: 'Jun', followers: 2390, likes: 3800 },
  { name: 'Jul', followers: 3490, likes: 4300 },
];

function Dashboard() {
  return (
    <div>
      <h1>Social Media Analytics Dashboard</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {sampleMetrics.map(metric => (
          <MetricsCard key={metric.id} title={metric.title} value={metric.value} />
        ))}
      </div>
      <div style={{ marginTop: '40px' }}>
        <AnalyticsChart data={sampleChartData} />
      </div>
    </div>
  );
}

export default Dashboard;
