import React from "react";
import { Box, Divider } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { useTheme } from "@mui/material/styles";
import styled, { css } from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";

const SHeader = styled(Box)<{ isMobile: boolean; textcolor: string }>`
  ${(props) => css`
    color: ${props.textcolor};
    font-size: ${props.isMobile ? "24px" : "3em"};
    font-weight: 600;
  `}
`;

const SDivider = styled(Divider)<{ color: string }>`
  ${(props) => css`
    margin-top: 0.5em;
    color: ${props.color};
  `}
`;

const SBox = styled(Box)`
  margin-top: 2em;
  margin-bottom: 2em;
  justify-content: start;
`;

const DateBox = styled(Box)<{ isMobile: boolean }>`
  ${(props) => css`
    margin-left: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: ${props.isMobile ? "start" : "center"};
    align-items: center;
    font-weight: 600;
  `}
`;

const ContentBox = styled(Box)<{ isMobile?: boolean; textcolor?: string }>`
  ${(props) => css`
    margin-left: ${props.isMobile ? "8px" : "12px"};
    color: ${props.textcolor ? props.textcolor : "black"};
  `}
`;

const STimelineContent = styled(TimelineContent)<{ isMobile: boolean }>`
  ${(props) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: ${props.isMobile ? "4px" : "12px"};
    margin-bottom: 2em;
  `}
`;

interface RDateBoxProps {
  start: string;
  end: string;
}

const RDateBox: React.FC<RDateBoxProps> = ({ start, end }) => {
  const [startMonth, startYear] = start.split(" ");
  const [endMonth, endYear] = end.split(" ");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <DateBox isMobile={isMobile}>
      <Box display="flex" fontWeight={600}>
        {startMonth}
      </Box>
      <Box display="flex">{startYear}</Box>
      <Box display="flex">-</Box>
      <Box display="flex">{endMonth}</Box>
      <Box display="flex">{endYear}</Box>
    </DateBox>
  );
};

const experiences = [
  {
    start: "Jan 2023",
    end: "Jun 2023",
    header: "Automation Engineer, Autodesk, Singapore",
    content:
      "Automated AutoCAD smoke and negative testing through Selenium, WinAppDriver, and Robot framework, resulting in a 75% increase in efficiency",
  },
  {
    start: "May 2022",
    end: "Aug 2022",
    header: "Software Engineer Intern, Switcheo Labs, Singapore",
    content:
      "Developed reusable components and main pages of a trading website using React, Typescript, and Material UI\nCreated the skeleton of a Github repository to validate node details submitted by external parties using Python and JSON",
  },
  {
    start: "Jan 2022",
    end: "May 2022",
    header: "Software Developer, Out of the Box Education, Singapore",
    content:
      "Integrated new components and features constructed with React to a web application serving as a mobile classroom-in-a-box for preschoolers\nEnhanced the quality of the codebase by incorporating reusable components, reducing code duplication by 50%",
  },
];

const projects = [
  {
    start: "Aug 2023",
    end: "Nov 2023",
    header: "Software Engineer, Static Program Analyzer, Singapore",
    content:
      "Built a well-designed, well-tested, large-scale software system in C++ to help users answer queries about programs",
  },
  {
    start: "Aug 2020",
    end: "Dec 2021",
    header: "Frontend Engineer, Challo, Singapore",
    content:
      "Implemented new features of a web platform connecting tourists and tour guides in the Indian Himalayas with React, Typescript, and CSS",
  },
  {
    start: "May 2021",
    end: "Aug 2021",
    header: "Independent Software Development Project (Orbital), plEASE",
    content:
      "Implemented an Android application prototype for students staying in university residential hostels in Dart, Flutter and Firebase\nAwarded an Apollo 11 Level of Achievement (Second highest Level of Achievement) under the module",
  },
];

interface RTimelineProps {
  color: string;
  title: string;
  dicts: {
    start: string;
    end: string;
    header: string;
    content: string;
  }[];
}

const RTimeline: React.FC<RTimelineProps> = ({ color, title, dicts }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <SBox>
      <SHeader isMobile={isMobile} textcolor={color}>
        {title}
      </SHeader>
      <SDivider color={color} />
      <Timeline
        sx={{
          px: isMobile ? "2px" : "10em",
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {dicts.map((exp) => (
          <TimelineItem key={exp.header}>
            <TimelineSeparator>
              <TimelineConnector
                sx={{ backgroundColor: color, width: "1px" }}
              />
              <TimelineDot />
              <TimelineConnector
                sx={{ backgroundColor: color, width: "1px" }}
              />
            </TimelineSeparator>
            <STimelineContent isMobile={isMobile}>
              <RDateBox start={exp.start} end={exp.end}></RDateBox>
              <ContentBox
                display="flex"
                alignSelf="start"
                flexDirection="column"
                isMobile={isMobile}
              >
                <ContentBox
                  fontWeight={600}
                  textcolor={theme.palette.primary.main}
                >
                  {exp.header}
                </ContentBox>
                {exp.content.split("\n").map((line: string, index: number) => (
                  <ContentBox key={`${exp.header}-line-${index}`}>
                    - {line}
                  </ContentBox>
                ))}
              </ContentBox>
            </STimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </SBox>
  );
};

export const Portfolio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box marginX={isMobile ? "2rem" : "10rem"}>
      <RTimeline
        color={theme.palette.secondary.main}
        title="Experience"
        dicts={experiences}
      />
      <RTimeline
        color={theme.palette.secondary.light}
        title="Projects"
        dicts={projects}
      />
    </Box>
  );
};
