import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import goated from "./waitimgoated.png";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
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
        </div>
    );
}
export default App;
