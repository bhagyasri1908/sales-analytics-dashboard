import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

function RegionStats({ regions }) {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Region-wise Revenue
      </Typography>
      <List>
        {regions.length === 0 && (
          <Typography variant="body2">No data available</Typography>
        )}
        {regions.map((region, index) => (
          <div key={index}>
            <ListItem>
              <ListItemText
                primary={region._id}
                secondary={`Revenue: ₹${region.totalRevenue || 0}`}
              />
            </ListItem>
            {index < regions.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </div>
  );
}

export default RegionStats;
