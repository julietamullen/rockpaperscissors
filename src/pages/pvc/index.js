import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"

function PvC () {
    const [p, setP] = useState("")
    const [computer, setComputer] = useState("")
    const choices = [...document.getElementsByClassName("option1")]
    const computerOptions = ["rock", "paper", "scissors"]

    const choice = (e) => {
        let choice = e.target.value
        let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
        setP(choice)
        setComputer(computerChoice)
        console.log(computerChoice)
    }

    const disable = () => {
        if (p !== "") {
            choices.forEach(function(option) {
                option.disabled = true
            })
        }
    }

    const result = () => {
        if (p !== "" && computer !== "") {
            if (p === computer) {
                alert("It's a tie!")
                window.location.reload()
            } else if (p === "rock" && computer === "paper") {
                alert(`Computer chose paper, it wins!`)
                window.location.reload()
            } else if (p === "rock" && computer === "scissors") {
                alert("Computer chose scissors, you win!")
                window.location.reload()
            } else if (p === "paper" && computer === "rock") {
                alert("Computer chose rock, you win!")
                window.location.reload()
            } else if (p === "paper" && computer === "scissors") {
                alert("Computer chose scissors, it wins!")
                window.location.reload()
            } else if (p === "scissors" && computer === "rock") {
                alert(`Computer chose rock, it wins!`)
                window.location.reload()
            } else if (p === "scissors" && computer === "paper") {
                alert("Computer chose paper, you win!")
                window.location.reload()
            } else {
                alert("Try again")
                window.location.reload()
            }
        }
    }

    useEffect(() => {disable()}, [p])

    return (
    <main className="main">
        <h1>Player vs. Computer</h1>
    <div className="game">
        <section className="player">
            <h3>Your choice:</h3>
            <h3>{p}</h3>
            <button className="option1" value="rock" onClick={choice}>Rock</button>
            <button className="option1" value="paper" onClick={choice}>Paper</button>
            <button className="option1" value="scissors" onClick={choice}>Scissors</button>
        </section>
    </div>
        <button className="submit" onClick={result}>Submit</button>
    <Link to="/"><button className="goBack">Go back</button></Link>
    </main>
    )
}

export default PvC