import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [inProgress, changeProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setAttempt(attempt - 1);
        changeProgress(!inProgress);
    }

    function flipProgress() {
        changeProgress(false);
    }

    function mulligan(): void {
        setAttempt(attempt + 1);
    }

    /*function checkZero(): boolean {
        if (attempt === 0) {
            return true;
        } else {
            return false;
        }
        () => changeProgress(true)
    }*/

    return (
        <span>
            <Button
                onClick={startQuiz}
                disabled={inProgress === true || attempt === 0}
            >
                Start Quiz
            </Button>
            {inProgress === false}
            <Button onClick={flipProgress} disabled={inProgress === false}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress === true}>
                Mulligan
            </Button>
            {attempt}
        </span>
    );
}
