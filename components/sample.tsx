"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import { useGuessContract } from "@/hooks/useContract"

const SampleIntregation = () => {
  const { isConnected } = useAccount()
  const [guess, setGuess] = useState("")

  const { data, actions, state } = useGuessContract()

  const handleGuess = async () => {
    const n = Number(guess)
    if (n < 1 || n > 10) return

    try {
      await actions.makeGuess(n)
      setGuess("")
    } catch (err) {
      console.error(err)
    }
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold mb-3">High or Low Game</h2>
          <p>Please connect your wallet to begin.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-xl mx-auto space-y-6">
        
        <h1 className="text-3xl font-bold">High / Low Game</h1>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground">Bet Amount</p>
            <p className="text-2xl font-semibold">{data.betAmount} FLR</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground">Prize Pool</p>
            <p className="text-2xl font-semibold">{data.prizePool} FLR</p>
          </div>
        </div>

        <div className="space-y-3">
          <label className="font-medium">Enter your guess (1–10)</label>
          <input
            type="number"
            min="1"
            max="10"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button
          onClick={handleGuess}
          disabled={state.isLoading || !guess}
          className="w-full py-2 bg-primary text-primary-foreground rounded-lg disabled:opacity-50"
        >
          {state.isLoading ? "Processing..." : "Submit Guess"}
        </button>

        {state.hash && (
          <div className="p-4 border rounded-lg mt-4">
            <p className="text-xs mb-1">Transaction Hash</p>
            <p className="text-sm break-words">{state.hash}</p>

            {state.isConfirming && <p className="text-primary">Waiting for confirmation...</p>}
            {state.isConfirmed && <p className="text-green-500">Confirmed!</p>}
          </div>
        )}

        {state.error && (
          <div className="p-4 border rounded-lg mt-4 border-destructive">
            <p className="text-destructive">{state.error.message}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SampleIntregation
