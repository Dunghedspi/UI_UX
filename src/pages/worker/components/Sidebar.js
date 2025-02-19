import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Card,
  ListGroup,
  Nav,
  Tabs,
  ButtonGroup,
  FloatingLabel,
  Modal,
  Spinner,
  InputGroup,
  Table,
} from "@themesberg/react-bootstrap";
import React from "react";
import "./styles/sidebar.css";
import Countdown, { zeroPad } from "react-countdown";
import { Tab } from "bootstrap";
import { useForm } from "react-hook-form";

const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <Col xs={4} className="countdown-time">
        {zeroPad(hours)} : {zeroPad(minutes)} : {zeroPad(seconds)}
      </Col>
    );
  }
};

const IOT = () => {
  return (
    <>
      <Row>
        <Col xs={6}>
          <Row>
            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={12}>
                  Sensor Options Product Success
                </Form.Label>
                <Col sm={12}>
                  <Form.Check
                    type="radio"
                    label="Sensor 1"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    checked
                  />
                  <Form.Check
                    type="radio"
                    label="Sensor 2"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                </Col>
              </Form.Group>
            </fieldset>
          </Row>
          <br />
        </Col>
        <Col xs={6}>
          <Row>
            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={12}>
                  Sensor Options Product Error
                </Form.Label>
                <Col sm={12}>
                  <Form.Check
                    type="radio"
                    label="Sensor 1"
                    name="sensor"
                    id="sensor"
                    checked
                    disabled
                  />
                </Col>
              </Form.Group>
            </fieldset>
          </Row>
          <br />
          <br />
        </Col>
      </Row>
      <Row>
        <h5>Sản xuất sản phẩm theo bó (20 sản phẩm / bó)</h5>
      </Row>
    </>
  );
};

const ThuCong = () => {
  return (
    <>
      <Row>
        <h5>Sản xuất sản phẩm theo bó (20 sản phẩm / bó)</h5>
      </Row>
    </>
  );
};

const HuongDan = () => {
  return (
    <>
      <Row>
        <h4>Hệ thống đếm sản phẩm tự động</h4>
        <div>
          <p>
            Mỗi vị trí làm việc gồm có 2 bằng truyền (sản phẩm tốt, sản phẩm
            lỗi). Trên mỗi băng chuyền đã được gắn các thiết bị giúp nhận biết
            số lượng công nhân đã làm. Số lượn sản phẩm công nhân đã làm được
            cập nhập liên tục trên màn hình, công nhân hãy quan sát để quản lý
            tiến độ của mình.
          </p>
        </div>
      </Row>
      <hr />
      <Row>
        <h4>Hệ thống đếm sản phẩm thủ công</h4>
        <div>
          <p>
            Công nhân cũng có thể nhập số lượng sản phẩm bằng cách thủ công,
            công nhân sẽ làm việc theo bó sản phẩm, mỗi bó sản phẩm bao gồm một
            số lượng sản phẩm nhất định mà công nhân đã nhập vào từ trước. Đối
            với trường hợp số lượng sản phẩm còn lại không đủ bó, công nhân hãy
            nhập số lượng sản phẩm vào ô số lượng sản phẩm dư
          </p>
        </div>
      </Row>
    </>
  );
};

const data = [
  {
    id: 1,
    checked: false,
    text: " Kiểm tra kết nốt",
  },
  {
    id: 2,
    checked: false,
    text: " Kiểm tra bộ phận phát tín hiệu",
  },
  {
    id: 3,
    checked: false,
    text: " Kiểm tra bộ phận thu tín hiệu",
  },
  {
    id: 4,
    checked: false,
    text: " Kiểm tra độ nhạy nhận biết sản phẩm",
  },
];
function MyVerticallyCenteredModal(props) {
  const [listCheckStatus, setListCheckStatus] = React.useState(data);
  const [done, setDone] = React.useState(false);
  const updateCheck = (id) => {
    const newList = listCheckStatus.map((item) => {
      if (item.id <= id) {
        return {
          ...item,
          checked: true,
        };
      } else return item;
    });
    console.log(newList, listCheckStatus);
    setListCheckStatus(newList);
  };
  const fakeCheck = () => {
    for (let i = 1; i <= 4; i++) {
      setTimeout(() => {
        updateCheck(i);
        if (i === 4) {
          setDone(true);
        }
      }, i * 2000);
    }
  };
  React.useEffect(() => {
    fakeCheck();
  }, []);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Kiểm tra thiết bị 1
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Hướng dẫn</h4>
        <p>Đưa sản phẩm mẫu qua trước thiết bị.</p>
        {listCheckStatus.map((item, index) => {
          return (
            <div key={index} className="mb-3">
              <Form.Check type={"checkbox"} id={`check-api-checkbox`}>
                <Form.Check.Input
                  type={"checkbox"}
                  isValid={item.checked}
                  checked={item.checked}
                />
                <Form.Check.Label>{item.text}</Form.Check.Label>
                <Form.Control.Feedback type="valid">
                  {item.checked ? "Tốt" : <Spinner animation="border" />}
                </Form.Control.Feedback>
              </Form.Check>
            </div>
          );
        })}
        <br />
        <hr />
        {done ? (
          <span>Thiết bị tốt</span>
        ) : (
          <Spinner animation="border" variant="secondary" />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Đóng</Button>
      </Modal.Footer>
    </Modal>
  );
}

const CongViecInfo = (props = {}) => {
  return (
    <Card>
      <Card.Header>Chi Tiết Công Việc</Card.Header>
      <Card.Body>
        <div>
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <span>Tên Công việc</span>
            <span>May cổ áo</span>
          </div>
          <hr />
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <span>Thời gian thực hiện 1 sản phẩm</span>
            <span>2 (s)</span>
          </div>
          <hr />
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <span>Trọng số công việc</span>
            <span>0.8</span>
          </div>
          <hr />
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <span>Số lượng sản phẩm yêu cầu</span>
            <span>1000 (sp)</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

const TestDevise = (props = {}) => {
  const { showModal } = props;
  return (
    <Card>
      <Card.Header>Kiểm tra kết nối bị đếm tự động</Card.Header>
      <Card.Body>
        <div>
          <h5>Thiết bị đếm sản phẩm tốt</h5>
          <ul>
            <li className="mb-1">
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <span>Thiết bị 1</span>
                <Button variant="outline-dark" size="sm" onClick={showModal}>
                  Kiểm tra
                </Button>
              </div>
            </li>
            <li>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <span>Thiết bị 2</span>
                <Button variant="outline-dark" size="sm" onClick={showModal}>
                  Kiểm tra
                </Button>
              </div>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h5>Thiết bị đếm sản phẩm lỗi</h5>
          <ul>
            <li>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <span>Thiết bị 1</span>
                <Button variant="outline-dark" size="sm" onClick={showModal}>
                  Kiểm tra
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
};

const DateConvert = (date) => {
  return date.toLocaleString();
};
const WorkingContentIOT = (props = {}) => {
  const [statusSuccess, setStatusSuccess] = React.useState(false);
  const [statusError, setStatusError] = React.useState(false);
  const [pause, setPause] = React.useState(false);
  const [listBo, setListBo] = React.useState([]);
  const [status, setStatus] = React.useState(-1);
  const {
    successP,
    setSuccessP,
    errorP,
    setErrorP,
    showTongKet,
    startTime,
    onHide,
  } = props;
  const handleProduct = (product) => {
    if (!pause) {
      if (product.status) {
        setStatusSuccess(true);
        setG(4);
        setStatus(0);
        setSuccess((success) => success + 1);
        setTimeout(() => {
          setStatusSuccess(false);
          setG(0);
          setStatus(-1);
        }, 1000);
      } else {
        setStatusError(true);
        setStatus(1);
        setError((error) => error + 1);
        setTimeout(() => {
          setStatusError(false);
          setStatus(-1);
        }, 1000);
      }
    }
  };
  React.useEffect(() => {
    const success = setInterval(() => {
      const fakeProduct = {
        status: Number.parseInt(Math.random() * 10) % 2 ? true : false,
      };
      handleProduct(fakeProduct);
    }, 4000);
    return () => {
      clearInterval(success);
    };
  }, []);
  const [giay, setG] = React.useState(0);
  const [success, setSuccess] = React.useState(0);
  const [error, setError] = React.useState(0);
  const [error1, setError1] = React.useState(0);
  const handleBaoCao = () => {
    const bo = {
      id: listBo.length + 1,
      sp: success,
      epi: error,
      epo: error1,
    };
    setSuccess(0);
    setError(0);
    setError1(0);
    setListBo((listBo) => [...listBo, bo]);
  };
  return (
    <Container>
      <Row>
        <Col xs={8}>
          <Card>
            <Card.Header>Tiến độ</Card.Header>
            <Card.Body>
              <Row>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#ID bó</th>
                      <th>Số sản phẩm tốt</th>
                      <th>Số sản phẩm lỗi đầu vào</th>
                      <th>Số sản phẩm làm lỗi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listBo.map((item, index) => (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.sp}</td>
                        <td>{item.epi}</td>
                        <td>{item.epo}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Row>
              <br />
              <Row>
                <Col xs={4}>
                  <Card>
                    <Card.Header>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "baseline",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>Sản phẩm tốt</div>
                        <div
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            border: "black 1px solid",
                            background: status === 0 ? "green" : "none",
                            display: "block",
                          }}
                        ></div>
                      </div>
                    </Card.Header>
                    <Card.Body>{success}</Card.Body>
                  </Card>
                </Col>
                <Col xs={4}>
                  <Card>
                    <Card.Header>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "baseline",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>Sản phẩm lỗi đầu vào</div>
                        <div
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            border: "black 1px solid",
                            background: status === 1 ? "red" : "none",
                            display: "block",
                          }}
                        ></div>
                      </div>
                    </Card.Header>
                    <Card.Body>{error}</Card.Body>
                  </Card>
                </Col>
                <Col xs={4}>
                  <Card>
                    <Card.Header>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "baseline",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>Sản phẩm làm lỗi</div>
                        <div
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            border: "black 1px solid",
                            background: status === 2 ? "yellow" : "none",
                            display: "block",
                          }}
                        ></div>
                      </div>
                    </Card.Header>
                    <Card.Body>{error1}</Card.Body>
                  </Card>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Card>
                    <Card.Header>
                      <strong>
                        Thời gian trung bình hoàn thành 1 bó sản phẩm
                      </strong>
                    </Card.Header>
                    <Card.Body>10 (phút/bó sản phẩm)</Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <ButtonGroup
                className="d-flex"
                style={{ justifyContent: "center" }}
              >
                <div className="mb-2">
                  <Button
                    variant="outline-primary"
                    size="lg"
                    onClick={() => handleBaoCao()}
                  >
                    {"Báo Cáo"}
                  </Button>{" "}
                  <Button
                    variant="outline-primary"
                    size="lg"
                    onClick={() => {
                      setError1((error1) => error1 + 1);
                      setStatus(2);
                      setTimeout(() => {
                        setStatus(-1);
                      }, 1000);
                    }}
                  >
                    Sản phẩm làm lỗi
                  </Button>{" "}
                  <Button
                    variant="outline-primary"
                    size="lg"
                    onClick={() => {
                      showTongKet(true);
                      onHide();
                    }}
                  >
                    Kết Thúc
                  </Button>{" "}
                </div>
              </ButtonGroup>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={4}>
          <Card>
            <Card.Header>Kiểu: Tự động</Card.Header>
            <Card.Body>
              <h6>Thiết bị đếm sản phẩm tốt</h6>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <span>
                  Thiết bị 1
                  <strong style={{ color: "green" }}>
                    (Trạng thái: hoạt động)
                  </strong>
                </span>
                <div>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      border: "black 1px solid",
                      background: statusSuccess ? "green" : "none",
                    }}
                  ></div>
                </div>
              </div>
              <span>Thời gian làm sản phẩm: {giay}s</span>
              <hr />
              <br />
              <h6>Thiết bị đếm sản phẩm lỗi</h6>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <span>
                  Thiết bị 3{" "}
                  <strong style={{ color: "green" }}>
                    (Trạng thái: hoạt động)
                  </strong>
                </span>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: "black 1px solid",
                    background: statusError ? "red" : "none",
                  }}
                ></div>
              </div>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Header>Tốc độ làm việc trung bình</Card.Header>
            <Card.Body>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <span>Công nhân quy trình tiếp theo</span>
                <span style={{ color: "green" }}>
                  {parseInt(Math.random() * 10)} phút/bó
                </span>
              </div>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <span>Công nhân quy trình trước</span>
                <span style={{ color: "green" }}>
                  {parseInt(Math.random() * 10)} phút/bó
                </span>
              </div>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Header>Thời gian làm việc</Card.Header>
            <Card.Body>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <span>Thời gian bắt đầu</span>
                <span>{DateConvert(startTime)}</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const WorkingContentTC = (props = {}) => {
  const [statusSuccess, setStatusSuccess] = React.useState(false);
  const [statusError, setStatusError] = React.useState(false);
  const [pause, setPause] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleSubmit = () => {
    // setSuccessP(Number.parseInt(successP) + Number.parseInt(sl));
    handleBaoCao();
    setShow(false);
  };
  const [sl, setSl] = React.useState("");
  const [listBo, setListBo] = React.useState([]);
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");
  const [error1, setError1] = React.useState(0);
  const handleBaoCao = () => {
    const bo = {
      id: listBo.length + 1,
      sp: success,
      epi: error,
      epo: error1,
    };
    setSuccess(0);
    setError(0);
    setListBo((listBo) => [...listBo, bo]);
  };
  const {
    successP,
    setSuccessP,
    errorP,
    setErrorP,
    showTongKet,
    startTime,
    onHide,
  } = props;
  return (
    <>
      <Container>
        <Row>
          <Col xs={8}>
            <Card>
              <Card.Header>Tiến độ</Card.Header>
              <Card.Body>
                {/* <Row>
                  <Col xs={4}>
                    <Card>
                      <Card.Header>
                        <strong>Sản phẩm tốt</strong>
                      </Card.Header>
                      <Card.Body>{successP}</Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4}>
                    <Card>
                      <Card.Header>
                        <strong>Sản phẩm lỗi</strong>
                      </Card.Header>
                      <Card.Body>{errorP}</Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4}>
                    <Card>
                      <Card.Header>Số lượng yêu cầu</Card.Header>
                      <Card.Body>1000</Card.Body>
                    </Card>
                  </Col>
                </Row> */}
                <Row>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>#ID bó</th>
                        <th>Số sản phẩm tốt</th>
                        <th>Số sản phẩm lỗi đầu vào</th>
                        <th>Số sản phẩm làm lỗi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listBo.map((item, index) => (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.sp}</td>
                          <td>{item.epi}</td>
                          <td>{item.epo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Row>
                <br />
                <Row>
                  <Col>
                    <Card>
                      <Card.Header>
                        <strong>
                          Thời gian trung bình hoàn thành 1 bó sản phẩm
                        </strong>
                      </Card.Header>
                      <Card.Body>10 (phút/bó sản phẩm)</Card.Body>
                    </Card>
                  </Col>
                </Row>
                <br />
                {/* <Row>
                  <ButtonGroup
                    className="d-flex"
                    style={{ justifyContent: "center" }}
                  >
                    <div className="mb-2">
                      <Button
                        variant="outline-primary"
                        size="lg"
                        onClick={() => setSuccessP(successP + 5)}
                      >
                        1 bó sản phẩm tốt
                      </Button>{" "}
                      <Button
                        variant="outline-primary"
                        size="lg"
                        onClick={() => setErrorP(errorP + 1)}
                      >
                        1 bó sản phẩm lỗi
                      </Button>{" "}
                      <Button
                        variant="outline-primary"
                        size="lg"
                        onClick={() => setShow(true)}
                      >
                        Số lượng dư
                      </Button>
                    </div>
                  </ButtonGroup>
                </Row> */}
              </Card.Body>
              <Card.Footer>
                <ButtonGroup
                  className="d-flex"
                  style={{ justifyContent: "center" }}
                >
                  <div className="mb-2">
                    <Button
                      variant="outline-primary"
                      size="lg"
                      onClick={() => setShow(true)}
                    >
                      {"Báo Cáo"}
                    </Button>{" "}
                    <Button
                      variant="outline-primary"
                      size="lg"
                      onClick={() => {
                        showTongKet(true);
                        onHide();
                      }}
                    >
                      Kết Thúc
                    </Button>
                  </div>
                </ButtonGroup>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={4}>
            <Card>
              <Card.Header>Kiểu: Thủ Công</Card.Header>
              <Card.Body>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>Số lượng sản phẩm tốt trong mỗi bó</span>
                  <div>
                    <div
                      style={{
                        color: "green",
                      }}
                    >
                      20
                    </div>
                  </div>
                </div>
                <br />
                <hr />
                <br />
                {/* <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>
                    <h6>Số lượng sản phẩm lỗi trong mỗi bó</h6>
                  </span>
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    1
                  </div>
                </div> */}
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Header>Tốc độ làm việc trung bình</Card.Header>
              <Card.Body>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>Công nhân quy trình tiếp theo</span>
                  <span style={{ color: "green" }}>
                    {parseInt(Math.random() * 10)} phút/bó
                  </span>
                </div>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>Công nhân quy trình trước</span>
                  <span style={{ color: "green" }}>
                    {parseInt(Math.random() * 10)} phút/bó
                  </span>
                </div>
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Header>Thời gian làm việc</Card.Header>
              <Card.Body>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>Thời gian bắt đầu</span>
                  <span>{DateConvert(startTime)}</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group id="email" className="mb-4">
            <Form.Label>Số lượng sản tốt</Form.Label>
            <InputGroup>
              <Form.Control
                autoFocus
                required
                value={success}
                onChange={(event) => setSuccess(event.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group id="email" className="mb-4">
            <Form.Label>Số lượng sản phẩm lỗi đầu vào</Form.Label>
            <InputGroup>
              <Form.Control
                autoFocus
                required
                value={error}
                onChange={(event) => setError(event.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group id="email" className="mb-4">
            <Form.Label>Số lượng sản phẩm làm lỗi</Form.Label>
            <InputGroup>
              <Form.Control
                autoFocus
                required
                value={error1}
                onChange={(event) => setError1(event.target.value)}
              />
            </InputGroup>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Đóng
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => handleSubmit()}
          >
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const convetTime = (mili) => {
  const h = Number.parseInt(mili / 3600000);
  const p = Number.parseInt((mili % 3600000) / 60000);
  const s = Number.parseInt(((mili % 3600000) % 60000) / 1000);
  return `${h}h:${p}p:${s}s`;
};
const TongKet = (props = {}) => {
  const { show, setShow, successP, errorP, startTime } = props;
  return (
    <Modal show={show} onHide={() => setShow(false)} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Tiến độ thực hiện công việc</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={3}>
            <Card>
              <Card.Header>
                <strong>Số bó sản phẩm</strong>
              </Card.Header>
              <Card.Body>{10}</Card.Body>
            </Card>
          </Col>
          <Col xs={3}>
            <Card>
              <Card.Header>
                <strong>Sản phẩm tốt</strong>
              </Card.Header>
              <Card.Body>{200}</Card.Body>
            </Card>
          </Col>
          <Col xs={3}>
            <Card>
              <Card.Header>
                <strong>Sản phẩm lỗi đầu vào</strong>
              </Card.Header>
              <Card.Body>{10}</Card.Body>
            </Card>
          </Col>
          <Col xs={3}>
            <Card>
              <Card.Header>Số lượng yêu cầu</Card.Header>
              <Card.Body>1000</Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Header>Thời gian thực hiện</Card.Header>
              <Card.Body>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>Thời gian bắt đầu</span>
                  <span>{DateConvert(startTime)}</span>
                </div>
              </Card.Body>
              <Card.Body>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>Thời gian kết thúc</span>
                  <span>{DateConvert(new Date())}</span>
                </div>
              </Card.Body>
              <Card.Body>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>Thời gian làm việc</span>
                  <span>{convetTime(new Date() - startTime)}</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Header>Đánh giá</Card.Header>
              <Card.Body>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>Thời gian làm 1 bó sản phẩm</span>
                  <span>10 (phút/bó sản phẩm)</span>
                </div>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>
                    Thời gian trung bình 1 bó sản phẩm <strong>yêu cầu</strong>
                  </span>
                  <span>10(phút/bó sản phẩm)</span>
                </div>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>Đánh giá trung bình</span>
                  <span style={{ color: "green" }}>Đạt</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default function SideBar(props = {}) {
  const [startState, setStartState] = React.useState(false);
  const [sensorListSuccess, setSensorListSuccess] = React.useState([]);
  const [sensorListErrors, setSensorListErrors] = React.useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [successP, setSuccessP] = React.useState(0);
  const [errorP, setErrorP] = React.useState(0);
  const [startTime, setStartTime] = React.useState(new Date());
  const [type, setType] = React.useState("1");
  return (
    <>
      <Container>
        {/* <Container className="d-flex justify-content-center align-items-center"> */}
        <Row>
          <Col xs={8} className="mb-4">
            <Card>
              <Card.Header as="h2">Thiết lập thiết bị</Card.Header>
              <Card.Body>
                <Tabs
                  defaultActiveKey="1"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                  onSelect={(key) => setType(key)}
                >
                  <Tab eventKey="1" title="Tự động ( mặc định ) ">
                    <IOT />
                  </Tab>
                  <Tab eventKey="2" title="Thủ công">
                    <ThuCong />
                  </Tab>
                  <Tab eventKey="3" title="Hướng dẫn sử  dụng">
                    <HuongDan />
                  </Tab>
                </Tabs>
                <Row className="d-flex justify-content-center align-items-center mt-2">
                  <Button
                    onClick={() => {
                      setShow(true);
                    }}
                    style={{ maxWidth: "50%" }}
                    disabled={startState}
                  >
                    {"Bắt đầu công việc"}
                  </Button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <CongViecInfo />
            <br />
            <TestDevise showModal={() => setModalShow(true)} />
          </Col>
        </Row>
      </Container>
      {modalShow ? (
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : (
        ""
      )}
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Tiến độ thực hiện công việc</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {type === "1" ? (
            <WorkingContentIOT
              successP={successP}
              setSuccessP={setSuccessP}
              errorP={errorP}
              setErrorP={setErrorP}
              showTongKet={setShow1}
              startTime={startTime}
              onHide={() => setShow(false)}
            />
          ) : (
            <WorkingContentTC
              successP={successP}
              setSuccessP={setSuccessP}
              errorP={errorP}
              setErrorP={setErrorP}
              showTongKet={setShow1}
              startTime={startTime}
              onHide={() => setShow(false)}
            />
          )}
        </Modal.Body>
      </Modal>
      <TongKet
        show={show1}
        setShow={setShow1}
        successP={successP}
        errorP={errorP}
        startTime={startTime}
      />
    </>
  );
}
