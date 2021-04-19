import React from "react"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

function PvP () {
    const [p1, setP1] = useState("")
    const [p2, setP2] = useState("")
    const choices1 = [...document.getElementsByClassName("option1")]
    const choices2 = [...document.getElementsByClassName("option2")]

    const choice = (e) => {
        let choice = e.target.value
        let player = e.target.className
        if (player === "option1") {
        setP1(choice)}
        else if (player === "option2")
        {setP2(choice)}
    }

    const disable = (p, choices) => {
        if (p !== "") {
            choices.forEach(function(option) {
                option.disabled = true
            })
        }
    }

    const result = () => {
        if (p1 !== "" && p2 !== "") {
            if (p1 === p2) {
                alert("It's a tie!")
                window.location.reload()
            } else if (p1 === "rock" && p2 === "paper") {
                alert("Player 2 wins!")
                window.location.reload()
            } else if (p1 === "rock" && p2 === "scissors") {
                alert("Player 1 wins!")
                window.location.reload()
            } else if (p1 === "paper" && p2 === "rock") {
                alert("Player 1 wins!")
                window.location.reload()
            } else if (p1 === "paper" && p2 === "scissors") {
                alert("Player 2 wins!")
                window.location.reload()
            } else if (p1 === "scissors" && p2 === "rock") {
                alert("Player 2 wins!")
                window.location.reload()
            } else if (p1 === "scissors" && p2 === "paper") {
                alert("Player 1 wins!")
                window.location.reload()
            } else {
                alert("Try again")
                window.location.reload()
            }
        }
    }

    useEffect(() => {disable(p1, choices1)}, [p1])
    useEffect(() => {disable(p2, choices2)}, [p2])

    return (
    <main className="main">
        <h1>Player vs. Player</h1>
    <div className="game">
        <section className="player">
            <h2>Player 1</h2>
            <button className="option1" value="rock" onClick={choice}>Rock</button>
            <button className="option1" value="paper" onClick={choice}>Paper</button>
            <button className="option1" value="scissors" onClick={choice}>Scissors</button>
        </section>
        <section className="player">
            <h2>Player 2</h2>
            <button className="option2" value="rock" onClick={choice}>Rock</button>
            <button className="option2" value="paper" onClick={choice}>Paper</button>
            <button className="option2" value="scissors" onClick={choice}>Scissors</button>
        </section>
        </div>
        <button className="submit" onClick={result}>Submit</button>

    <Link to="/"><button className="goBack">Go back</button></Link>
    </main>
    )
}

export default PvP
