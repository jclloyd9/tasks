import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [revealed, setRevealed] = useState<boolean>(false);

    function flipVisibility(): void {
        setRevealed(!revealed);
    }

    return (
        <span>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {revealed && <div>42</div>}
        </span>
    );
}
