import { Container, Row, Col } from "@themesberg/react-bootstrap";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import { Chat } from "react-chat-popup";
import Sidebar from "../../components/Sidebar";

const WorkerLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Row>
        <Sidebar />
        <Outlet />
      </Row>
      <Chat title="Report" subtitle="And my cool subtitle" />
    </React.Fragment>
  );
};

export default WorkerLayout;
