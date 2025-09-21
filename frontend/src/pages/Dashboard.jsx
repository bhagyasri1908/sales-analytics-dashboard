import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Paper } from "@mui/material";
import DateRangePicker from "../components/DateRangePicker";
import RevenueChart from "../components/RevenueChart";
import TopProducts from "../components/TopProducts";
import RegionStats from "../components/RegionStats";
import api from "../services/api";

function Dashboard() {
  const [startDate, setStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 30))
      .toISOString()
      .split("T")[0]
  );
  const [endDate, setEndDate] = useState(new Date().toISOString().split("T")[0]);

  const [revenueData, setRevenueData] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [topProducts, setTopProducts] = useState([]);
  const [regionStats, setRegionStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Revenue data
        const revenueRes = await api.get("/analytics/revenue", {
          params: { startDate, endDate },
        });
        setRevenueData(revenueRes.data.sales);
        setTotalRevenue(revenueRes.data.totalRevenue);

        // Top products
        const productsRes = await api.get("/analytics/top-products");
        setTopProducts(productsRes.data);

        // Region stats
        const regionsRes = await api.get("/analytics/region-stats");
        setRegionStats(regionsRes.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, [startDate, endDate]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Sales Analytics Dashboard
      </Typography>

      {/* Date Picker */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </Paper>

      {/* Grid Layout */}
      <Grid container spacing={3}>
        {/* Revenue Chart */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <RevenueChart data={revenueData} totalRevenue={totalRevenue} />
          </Paper>
        </Grid>

        {/* Top Products */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <TopProducts products={topProducts} />
          </Paper>
        </Grid>

        {/* Region Stats */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <RegionStats regions={regionStats} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
