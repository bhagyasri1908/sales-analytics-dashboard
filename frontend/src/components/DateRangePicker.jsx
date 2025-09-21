import React from "react";
import { TextField, Box } from "@mui/material";

function DateRangePicker({ startDate, endDate, onStartDateChange, onEndDateChange }) {
  return (
    <Box display="flex" gap={2} mb={3}>
      <TextField
        type="date"
        label="Start Date"
        value={startDate}
        onChange={(e) => onStartDateChange(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        type="date"
        label="End Date"
        value={endDate}
        onChange={(e) => onEndDateChange(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
    </Box>
  );
}

export default DateRangePicker;
