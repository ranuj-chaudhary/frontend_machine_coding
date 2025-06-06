import React from 'react';
const style = {
  input: 'border-2 border-black w-16 h-16 text-3xl text-center',
  label: 'text-2xl text-center py-2',
  span: 'border-2 border-black w-16 h-16 text-3xl flex items-center justify-center outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
};
const CountDownInput = ({
  hours,
  minutes,
  seconds,
  handleInput,
  startToggle,
}) => {
  if (startToggle) {
    return (
      <div className="countdown-timer__time py-2 flex justify-center gap-8">
        <div className="countdown-timer__input-hours flex flex-col">
          <label className={style.label} htmlFor="hours">
            hours
          </label>
          <span className={style.span}>
            {hours < 10 ? `0${hours}` : `${hours}`}
          </span>
        </div>
        <div className="countdown-timer__input-hours flex flex-col">
          <label className={style.label} htmlFor="hours">
            minutes
          </label>

          <span className={style.span}>
            {minutes < 10 ? `0${minutes}` : `${minutes}`}
          </span>
        </div>
        <div className="countdown-timer__input-hours flex flex-col">
          <label className={style.label} htmlFor="hours">
            seconds
          </label>
          <span className={style.span}>
            {seconds < 10 ? `0${seconds}` : `${seconds}`}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="countdown-timer__time py-2 flex justify-center gap-8">
      <div className="countdown-timer__input-hours flex flex-col">
        <label className={style.label} htmlFor="hours">
          hours
        </label>
        <input
          type="number"
          id="hours"
          value={hours}
          onChange={handleInput}
          min={0}
          max={12}
          required
          disabled={startToggle}
          className={style.input}
        />
      </div>
      <div className="countdown-timer__input-minutes flex flex-col">
        <label className={style.label} htmlFor="minutes">
          minutes
        </label>
        <input
          type="number"
          id="minutes"
          value={minutes}
          onChange={handleInput}
          min={0}
          max={59}
          required
          disabled={startToggle}
          className={style.input}
        />
      </div>
      <div className="countdown-timer__input-seconds flex flex-col">
        <label className={style.label} htmlFor="seconds">
          seconds
        </label>
        <input
          type="number"
          id="seconds"
          value={seconds}
          onChange={handleInput}
          min={0}
          max={59}
          required
          disabled={startToggle}
          className={style.input}
        />
      </div>
    </div>
  );
};

export default CountDownInput;
