"use client"
import { useBalance } from "@repo/store/useBalance";

export default function Page(): JSX.Element {
  const balance = useBalance();
  console.log(balance[0])
  return (
    <>
      <div>
        The current balance is <span>{`${balance[0]}`}</span>
      </div>
    </>
  );
}
