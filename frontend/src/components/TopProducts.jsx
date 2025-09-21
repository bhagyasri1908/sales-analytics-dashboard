import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

function TopProducts({ products }) {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Top Products
      </Typography>
      <List>
        {products.length === 0 && (
          <Typography variant="body2">No data available</Typography>
        )}
        {products.map((product, index) => (
          <div key={index}>
            <ListItem>
              <ListItemText
                primary={`Product ID: ${product._id}`}
                secondary={`Total Sales: ${product.totalQuantity || 0} | Revenue: ₹${product.totalRevenue || 0}`}
              />
            </ListItem>
            {index < products.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </div>
  );
}

export default TopProducts;
