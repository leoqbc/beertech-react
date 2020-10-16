const ClockFormatter = (seconds: number): string => {
    console.log("======= render de formatação do timer ========");

    const timer: Date = new Date("1970-01-01 GMT-0300");

    timer.setSeconds(seconds);

    return timer.toLocaleTimeString();
};

export default ClockFormatter;