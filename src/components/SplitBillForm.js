import { useState } from "react";

export function SplitBillForm({ friend, onSplitBill }) {
  const [billData, setBillData] = useState({
    total: "",
    yourExpense: "",
    billPaidBy: "you",
  });
  const amountPaidByFriend = billData.total - billData.yourExpense;

  function handleSubmit(e) {
    e.preventDefault();

    if (!billData.total || !billData.yourExpense) return;

    console.log(billData);

    onSplitBill(
      billData.billPaidBy === "you" ? amountPaidByFriend : -amountPaidByFriend
    );
  }

  function handleBillInput(e) {
    const { name, value } = e.target;

    if (name === "billPaidBy") {
      setBillData({
        ...billData,
        [name]: value,
      });
    } else {
      setBillData({
        ...billData,
        [name]: parseInt(value),
      });
    }
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a Bill with {friend.name}</h2>
      <label>💰 Bill value</label>
      <input
        name="total"
        type="text"
        value={billData.total}
        onChange={handleBillInput}
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        name="yourExpense"
        type="text"
        value={billData.yourExpense}
        onChange={handleBillInput}
      />
      <label>👫 {friend.name}'s expense</label>
      <input
        name="friendExpense"
        type="text"
        value={billData.total - billData.yourExpense || ""}
        disabled
      />
      <label>🤑 Who is paying the bill</label>
      <select
        name="billPaidBy"
        value={billData.billPaidBy}
        onChange={handleBillInput}
      >
        <option value="you">You</option>
        <option value={friend.name}>{friend.name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}
