import React, { createContext, useState, useMemo } from 'react';

const SocketContext = createContext();

const ContextProvider = ({ children }) => {
    const [userpick, setUserPick] = useState('Rock.png');
    const [cpupick, setCpuPick] = useState('Rock.png');
    const [result, setResult] = useState('Vs.png');
    const [userscore, setUserScore] = useState(0);
    const [cpuscore, setCpuScore] = useState(0);
    const [round, setRound] = useState(0);

    const rondamas = () => {
        setTimeout(() => {
            setRound(round + 1);
        }, 200);
    }

    const RockPick = () => {
        setUserPick('Rock.png')
        CpuChoise();
        rondamas();
    }

    const PaperPick = () => {
        setUserPick('Paper.png')
        CpuChoise();
        rondamas();
    }

    const ScissorPick = () => {
        setUserPick('Scissor.png')
        CpuChoise();
        rondamas();
    }

    const CpuChoise = () => {
        const Choises = ['Rock.png', 'Paper.png', 'Scissor.png'];
        const number = Math.floor(Math.random() * Choises.length);
        setCpuPick(Choises[number])
    }

    useMemo(() => {
        if (userpick === cpupick && round >= 1) {
            alert('TIE')
        }
        else if ((userpick === "Rock.png" && cpupick === "Scissor.png") || (userpick === "Paper.png" && cpupick === "Rock.png") || (userpick === "Scissor.png" && cpupick === "Paper.png")) {
            setResult('Win.png');
            setTimeout(() => {
                setResult('Vs.png')
            }, 1500);
            setUserScore(userscore + 1)
        }
        else if ((cpupick === "Rock.png" && userpick === "Scissor.png") || (cpupick === "Paper.png" && userpick === "Rock.png") || (cpupick === "Scissor.png" && userpick === "Paper.png")) {
            setResult('Loser.png');
            setTimeout(() => {
                setResult('Vs.png')
            }, 1500);
            setCpuScore(cpuscore + 1)
        }
    }, [round]);

    return (
        <SocketContext.Provider value={{
            userpick,
            cpupick,
            result,
            userscore,
            cpuscore,
            RockPick,
            PaperPick,
            ScissorPick
        }}
        >
            {children}
        </SocketContext.Provider>
    );  
};

export { ContextProvider, SocketContext };
