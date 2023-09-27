function Clock() {
  return (
    <div className="clock-container">
      <h1>현재 시간은 {new Date().toLocaleTimeString()}입니다</h1>
    </div>
  );
}

export default Clock;
