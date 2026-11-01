import {
  Home,
  Login,
  StockSummary,
  StockRequests,
  DistributionRuns,
  ReturnApprovals,
} from "@/pages";

export const routes = [
  {
    route: "/",
    page: <Home />,
  },
  {
    route: "/login",
    page: <Login />,
  },
  {
    route: "/stock-summary",
    page: <StockSummary />,
  },
  {
    route: "/stock-requests",
    page: <StockRequests />,
  },
  {
    route: "/distribution-runs",
    page: <DistributionRuns />,
  },
  {
    route: "/return-approvals",
    page: <ReturnApprovals />,
  },
];
