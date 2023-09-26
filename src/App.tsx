import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
import goated from "./waitimgoated.png";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

>>>>>>> upstream/task-state
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <Container>
                <Row>
                    <Col>
                        <h1>James Lloyd</h1>
                        <p>Hello World!</p>
                        <div>
                            Best Video Games of All Time:
                            <ol>
                                <li>Mario Kart Wii</li>
                                <li>Prime Fortnite</li>
                                <li>Rocket League</li>
                            </ol>
                        </div>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <div className="rectangle"></div>
                    </Col>
                    <Col>
                        <div className="rectangle"></div>
                        <span></span>
                        <img src={goated} alt="wait im goated" />
                    </Col>
                </Row>
            </Container>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}
export default App;
