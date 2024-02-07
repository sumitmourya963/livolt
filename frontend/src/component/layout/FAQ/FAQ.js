import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FAQ() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            Q.What factors should I consider before installing solar panels?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Solar panels convert sunlight into electricity using photovoltaic
            cells. When sunlight hits these cells, it generates an electric
            current, which is then converted into usable electricity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Q.How long do solar panels last?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Solar panels typically have a lifespan of 25-30 years. Manufacturers
            often provide warranties for this period, ensuring performance and
            product quality.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Q.How much space do I need for solar panels?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The space required depends on factors such as your energy needs, the
            efficiency of the panels, and local sunlight conditions. On average,
            a typical residential solar panel system requires about 100-400
            square feet of roof space.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            Q.Do I need to clean and maintain my solar panels?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            While solar panels are generally low-maintenance, it's advisable to
            clean them periodically to remove dirt and debris. Additionally, an
            annual professional inspection can ensure optimal performance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            Q.Can I get 100% waiver on my electricity bill by installing solar
            panels
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The size of your solar panel system should be designed to meet or
            exceed your energy consumption. If your solar installation produces
            more energy than you use, some jurisdictions allow you to feed
            excess electricity back into the grid, earning credits or
            compensation.While solar panels can significantly reduce electricity
            bills and, in some cases, lead to a near-zero bill
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
