import Sale from "../models/sale.js";

// Get revenue by date range
export const getRevenue = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const sales = await Sale.find({
      reportDate: { $gte: new Date(startDate), $lte: new Date(endDate) },
    }).populate("product");

    const totalRevenue = sales.reduce((sum, sale) => sum + sale.totalRevenue, 0);

    res.json({ totalRevenue, sales });
  } catch (error) {
    res.status(500).json({ message: "Error fetching revenue", error });
  }
};

// Get top selling products
export const getTopProducts = async (req, res) => {
  try {
    const topProducts = await Sale.aggregate([
      {
        $group: {
          _id: "$product",
          totalRevenue: { $sum: "$totalRevenue" },
          totalQuantity: { $sum: "$quantity" },
        },
      },
      { $sort: { totalRevenue: -1 } },
      { $limit: 5 },
    ]);

    res.json(topProducts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching top products", error });
  }
};

// Get revenue by region
export const getRevenueByRegion = async (req, res) => {
  try {
    const regionStats = await Sale.aggregate([
      {
        $lookup: {
          from: "customers",
          localField: "customer",
          foreignField: "_id",
          as: "customer",
        },
      },
      { $unwind: "$customer" },
      {
        $group: {
          _id: "$customer.region",
          totalRevenue: { $sum: "$totalRevenue" },
        },
      },
      { $sort: { totalRevenue: -1 } },
    ]);

    res.json(regionStats);
  } catch (error) {
    res.status(500).json({ message: "Error fetching region stats", error });
  }
};
