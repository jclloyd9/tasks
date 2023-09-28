import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type specialDay = "❤️" | "🐰" | "🎃" | "🦃" | "🎄";

    const YEARLY: Record<specialDay, specialDay> = {
        "❤️": "🐰",
        "🐰": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "❤️"
    };

    const ALPHABETICALLY: Record<specialDay, specialDay> = {
        "🎄": "🐰",
        "🐰": "🎃",
        "🎃": "🦃",
        "🦃": "❤️",
        "❤️": "🎄"
    };

    const [holiday, changeHoliday] = useState<specialDay>("❤️");

    function nextYearly(): void {
        const newHoliday = YEARLY[holiday];
        changeHoliday(newHoliday);
    }

    function nextAlphabetically(): void {
        const newHoliday = ALPHABETICALLY[holiday];
        changeHoliday(newHoliday);
    }

    return (
        <div>
            <div>
                Current Holiday: <span>{holiday}</span>
            </div>
            <span>
                <Button onClick={nextAlphabetically}>
                    Advance by Alphabet
                </Button>
            </span>
            <span>
                <Button onClick={nextYearly}>Advance by Year</Button>
            </span>
        </div>
    );
}
