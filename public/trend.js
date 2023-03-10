const cssColorVars = {
    messages: "var(--messages)",
    calls: "var(--calls)",
    emails: "var(--emails)",
    barBack: "var(--bar-bck)",
  };
  let data = [
    {
      startDate: "12/01/2022",
      endDate: "12/07/2022",
      emails: 15,
      calls: 10,
      messages: 4,
    },
    {
      startDate: "12/08/2022",
      endDate: "12/14/2022",
      emails: 24,
      calls: 10,
      messages: 10,
    },
    {
      startDate: "12/15/2022",
      endDate: "12/21/2022",
      emails: 20,
      calls: 14,
      messages: 12,
    },
    {
      startDate: "12/22/2022",
      endDate: "12/28/2022",
      emails: 24,
      calls: 10,
      messages: 5,
    },
    {
      startDate: "12/29/2022",
      endDate: "01/04/2023",
      emails: 30,
      calls: 10,
      messages: 3,
    },
    {
      startDate: "01/05/2022",
      endDate: "01/11/2022",
      emails: 10,
      calls: 35,
      messages: 3,
    },
    {
      startDate: "01/12/2022",
      endDate: "01/18/2022",
      emails: 10,
      calls: 25,
      messages: 2,
    },
    {
      startDate: "01/19/2022",
      endDate: "01/25/2022",
      emails: 5,
      calls: 33,
      messages: 2,
    },
    {
      startDate: "01/26/2022",
      endDate: "02/02/2022",
      emails: 20,
      calls: 10,
      messages: 3,
    },
    {
      startDate: "02/03/2022",
      endDate: "02/09/2022",
      emails: 40,
      calls: 5,
      messages: 10,
    },
    {
      startDate: "02/10/2022",
      endDate: "02/16/2022",
      emails: 16,
      calls: 10,
      messages: 14,
    },
    {
      startDate: "02/17/2022",
      endDate: "02/23/2022",
      emails: 10,
      calls: 10,
      messages: 33,
    },
  ];
  const months = {
    7: {
      longest: "January",
      long: "Jan",
      short: "Ja",
    },
    8: {
      longest: "February",
      long: "Feb",
      short: "Fe",
    },
    9: {
      longest: "March",
      long: "Mar",
      short: "Ma",
    },
  };
  
  const bars = [...document.querySelectorAll(".bar")];
  const xAxisScale = document.querySelector(".x-axis-scale");
  const yAxisScale = [...document.querySelectorAll(".y-axis-number")];
  const main = document.querySelector("main");
  const tooltip = document.querySelector(".bar-tooltip");
  const tooltipStatCountDom = {
    dateRange: document.querySelector(".tt-st-dt"),
    emails: document.querySelector(".tt-emails-stat-count"),
    calls: document.querySelector(".tt-calls-stat-count"),
    messages: document.querySelector(".tt-messages-stat-count"),
  };
  
  function getPercentage(numerator, denominator, round = false) {
    const percentage = (numerator / denominator) * 100;
    if (round) return Math.round(percentage * 100) / 100;
    return percentage;
  }
  
  function getPercentageOf(percentage, inPercentage, round = false) {
    const value = (percentage * inPercentage) / 100;
    if (round) return Math.ceil(value * 100) / 100;
    return value;
  }
  
  function processXAxis() {
    let maxTotalCommunicationCount = 0;
    data = data.map(function processWeekDataForXAxisScale(weekData) {
      const { emails, calls, messages } = weekData;
      const totalCommunicationsForWeek = emails + calls + messages;
      if (totalCommunicationsForWeek > maxTotalCommunicationCount)
        maxTotalCommunicationCount = totalCommunicationsForWeek;
      const emailsPercentage = getPercentage(emails, totalCommunicationsForWeek);
      const callsPercentage = getPercentage(calls, totalCommunicationsForWeek);
      const messagesPercentage = getPercentage(
        messages,
        totalCommunicationsForWeek
      );
      return {
        ...weekData,
        emailsPercentage,
        callsPercentage,
        messagesPercentage,
        totalCommunicationsForWeek,
      };
    });
    maxTotalCommunicationCount += 5;
    data = data.map(function interpolateXAxisWeekData(weekData, index) {
      const maxPercentageHeightOfTheWeekBar = Math.ceil(
        getPercentage(
          weekData.totalCommunicationsForWeek,
          maxTotalCommunicationCount
        )
      );
      const gradientHeightOfMessages = getPercentageOf(
        weekData.messagesPercentage,
        maxPercentageHeightOfTheWeekBar
      );
      const gradientHeightOfCalls =
        getPercentageOf(
          weekData.callsPercentage,
          maxPercentageHeightOfTheWeekBar
        ) + gradientHeightOfMessages;
      const gradientHeightOfEmails =
        getPercentageOf(
          weekData.emailsPercentage,
          maxPercentageHeightOfTheWeekBar
        ) + gradientHeightOfCalls;
      const messagesGradient = `${cssColorVars.messages} ${gradientHeightOfMessages}%`;
      const callsGradient = `${cssColorVars.calls} ${gradientHeightOfMessages}%, ${cssColorVars.calls} ${gradientHeightOfCalls}%`;
      const emailsGradient = `${cssColorVars.emails} ${gradientHeightOfCalls}%, ${cssColorVars.emails} ${gradientHeightOfEmails}%`;
      let linearGradient = `linear-gradient(to top, ${messagesGradient}, ${callsGradient}, ${emailsGradient}, ${cssColorVars.barBack} 0%)`;
      bars[index].style.setProperty("background", linearGradient);
      bars[index].setAttribute("data-index", index);
      bars[index].setAttribute("data-emails", weekData.emails);
      bars[index].setAttribute("data-calls", weekData.calls);
      bars[index].setAttribute("data-messages", weekData.messages);
      return {
        ...weekData,
        gradientHeightOfEmails,
        gradientHeightOfCalls,
        gradientHeightOfMessages,
        maxPercentageHeightOfTheWeekBar,
        linearGradient,
      };
    });
    const q1 = Math.ceil((maxTotalCommunicationCount + 1) / 4);
    const q2 = Math.ceil((maxTotalCommunicationCount + 1) / 2);
    const q3 = Math.ceil((maxTotalCommunicationCount + 1) * (3 / 4));
    let xPlotPoints = [maxTotalCommunicationCount, q3, q2, q1, 0];
    xAxisScale.innerHTML = xPlotPoints.reduce((acc, xPlotPoint) => {
      return acc + `<span>${xPlotPoint}</span>`;
    }, "");
  }
  
  function getGraphPlotData() {
    processXAxis();
    processYAxis();
    handleHoverOnBars();
  }
  
  function processYAxis() {
    data.forEach(function plotYAxisScale(weekData, index, arr) {
      const startDate = new Date(weekData.startDate);
      const endDate = new Date(weekData.endDate);
      let startDay = startDate.getDate();
      startDay = startDay < 10 ? `0${startDay}` : startDay;
      let endDay = endDate.getDate();
      endDay = endDay < 10 ? `0${endDay}` : endDay;
      const day = `${startDay}-${endDay}`;
      const startMonth = startDate.getMonth();
      const endMonth = endDate.getMonth();
      let month = months[startMonth].long;
      if (startMonth !== endMonth) {
        month = `${months[startMonth].short}-${months[endMonth].short}`;
      }
      yAxisScale[index].innerHTML = `${day}<br />${month}`;
    });
  }
  
  function handleHoverOnBars() {
    main.addEventListener("mousemove", handleHoverOnBar);
  }
  
  function handleHoverOnBar(event) {
    requestAnimationFrame(() => {
      if (!event.target.classList.contains("bar")) return;
      const bar = event.target;
      const barBoundRect = bar.getBoundingClientRect();
      const barIndex = bar.getAttribute("data-index");
      const emails = data[barIndex].emails;
      const calls = data[barIndex].calls;
      const messages = data[barIndex].messages;
      tooltipStatCountDom.emails.textContent = emails;
      tooltipStatCountDom.calls.textContent = calls;
      tooltipStatCountDom.messages.textContent = messages;
      let left = barBoundRect.left + barBoundRect.width + 5;
      const maxTop = barBoundRect.y;
      const minTop = barBoundRect.y + barBoundRect.height - tooltip.clientHeight;
      if (barIndex > 5)
        left = left - tooltip.clientWidth - barBoundRect.width - 10;
      tooltip.style.setProperty("left", `${left}px`);
      let top = event.clientY - tooltip.clientHeight / 2;
      if (top < maxTop) top = maxTop;
      if (top > minTop) top = minTop;
      tooltip.style.setProperty("top", `${top}px`);
      tooltipStatCountDom.dateRange.innerHTML = getFormattedDateForToolTip(
        data[barIndex]
      );
    });
  }
  
  function getFormattedDateForToolTip(bar) {
    try {
      const startDate = new Date(bar.startDate);
      const endDate = new Date(bar.endDate);
      const startDay = startDate.getDate();
      const startMonth = months[startDate.getMonth()].long;
      const startDayMarkup = `${getDayPrefixWithZero(
        startDay
      )}<sup>${getDatePrefix(startDay)}</sup> ${startMonth}`;
      const endDay = endDate.getDate();
      const endMonth = months[endDate.getMonth()].long;
      const endDayMarkup = `${getDayPrefixWithZero(endDay)}<sup>${getDatePrefix(
        endDay
      )}</sup> ${endMonth}`;
      return `${startDayMarkup} - ${endDayMarkup}`;
    } catch (err) {
      console.error(err);
      return "";
    }
  }
  
  function getDayPrefixWithZero(day) {
    return day < 10 ? `0${day}` : day;
  }
  
  function getDatePrefix(date) {
    switch (date) {
      case 1:
      case 21:
      case 31:
        return "st";
      case 2:
      case 22:
        return "nd";
      case 3:
      case 23:
        return "rd";
      default:
        return "th";
    }
  }
  
  getGraphPlotData();