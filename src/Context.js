import React, { createContext, useState, useMemo } from 'react';

const SocketContext = createContext();

const IMAGE_NAMES = {
    ROCK: 'Rock.png',
    PAPER: 'Paper.png',
    SCISSOR: 'Scissor.png',
    VS: 'Vs.png',
    WIN: 'Win.png',
    LOSS: 'Loss.png',
};

const ContextProvider = ({ children }) => {
    const [userpick, setUserPick] = useState(IMAGE_NAMES.ROCK);
    const [cpupick, setCpuPick] = useState(IMAGE_NAMES.ROCK);
    const [result, setResult] = useState(IMAGE_NAMES.VS);
    const [userscore, setUserScore] = useState(0);
    const [cpuscore, setCpuScore] = useState(0);
    const [round, setRound] = useState(0);

    const handleRound = () => {
        setTimeout(() => {
            setRound(round + 1);
        }, 200);
    }

    const pick = (userpick) => {
        setUserPick(userpick);
        CpuChoise();
        handleRound();
    };

    const CpuChoise = () => {
        const Choises = [IMAGE_NAMES.ROCK, IMAGE_NAMES.PAPER, IMAGE_NAMES.SCISSOR];
        const number = Math.floor(Math.random() * Choises.length);
        setCpuPick(Choises[number]);
    };

    useMemo(() => {
        if (userpick === cpupick && round >= 1) {
            alert('TIE')
        }
        else if (
            (userpick === IMAGE_NAMES.ROCK && cpupick === IMAGE_NAMES.SCISSOR) ||
            (userpick === IMAGE_NAMES.PAPER && cpupick === IMAGE_NAMES.ROCK) ||
            (userpick === IMAGE_NAMES.SCISSOR && cpupick === IMAGE_NAMES.PAPER)) {
            setResult(IMAGE_NAMES.WIN);
            setTimeout(() => {
                setResult(IMAGE_NAMES.VS);

            }, 1500);
            setUserScore(userscore + 1)
        }
        else if (
            (cpupick === IMAGE_NAMES.ROCK && userpick === IMAGE_NAMES.SCISSOR) ||
            (cpupick === IMAGE_NAMES.PAPER && userpick === IMAGE_NAMES.ROCK) ||
            (cpupick === IMAGE_NAMES.SCISSOR && userpick === IMAGE_NAMES.PAPER)) {
            setResult(IMAGE_NAMES.LOSS);
            setTimeout(() => {
                setResult(IMAGE_NAMES.VS);
            }, 1500);
            setCpuScore(cpuscore + 1)
        }
        else {
            console.error(
                `Unexpected userpick or cpupick value: userpick = ${userpick}, cpupick = ${cpupick}`
            );
        }
    }, [round]);

    return (
        <SocketContext.Provider value={{
            userpick,
            cpupick,
            result,
            userscore,
            cpuscore,
            RockPick: () => pick(IMAGE_NAMES.ROCK),
            PaperPick: () => pick(IMAGE_NAMES.PAPER),
            ScissorPick: () => pick(IMAGE_NAMES.SCISSOR),
        }}
        >
            {children}
        </SocketContext.Provider >
    );
};

export { ContextProvider, SocketContext };
