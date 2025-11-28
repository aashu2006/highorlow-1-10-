"use client"

import { useState, useEffect } from "react"
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { parseEther, formatEther } from "viem"
import { contractABI, contractAddress } from "@/lib/contract"

export const useGuessContract = () => {
  const { address } = useAccount()

  const { data: betAmount, refetch: refetchBet } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "betAmount",
  })

  const { data: prizePool, refetch: refetchPool } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "prizePool",
  })

  const { writeContractAsync, data: hash, error, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash })

  useEffect(() => {
    if (isConfirmed) {
      refetchBet()
      refetchPool()
    }
  }, [isConfirmed, refetchBet, refetchPool])

  const [isLoading, setIsLoading] = useState(false)

  const makeGuess = async (guess: number) => {
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "guess",
        args: [guess],
        value: betAmount as bigint,
      })
    } catch (err) {
      console.error("Guess failed:", err)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return {
    data: {
      betAmount: betAmount ? formatEther(betAmount as bigint) : "0",
      prizePool: prizePool ? formatEther(prizePool as bigint) : "0",
    },
    actions: {
      makeGuess,
    },
    state: {
      isLoading: isLoading || isPending || isConfirming,
      isPending,
      isConfirming,
      isConfirmed,
      hash,
      error,
    },
  }
}
