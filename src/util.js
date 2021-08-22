import truncate from "lodash/truncate";

export function excerpt(string) {
  return truncate(string, {
    length: 400, // maximum 400 characters
    separator: /,?\.* +/, // separate by spaces, including preceding commas and periods
  });
}

export function isLoggedInUser() {
  let userSessionId = localStorage.getItem("session");
  return userSessionId;
}
export function existingGuestSession() {
  let guestSessionId = localStorage.getItem("guest-session");
  return guestSessionId;
}
export function determinePaginationRange(resultsLength) {
  return Math.ceil(resultsLength / 20);
}
export function populateFilterTableRows(advancedFilterData) {
  let rows = [];
  if (
    advancedFilterData.releaseYear &&
    advancedFilterData.releaseYear.length > 0
  ) {
    rows.push({ title: "Release Year", value: advancedFilterData.releaseYear });
  }
  if (advancedFilterData.averageRatingGreaterThan > 0) {
    rows.push({
      title: "Average Rating Greater Than",
      value: advancedFilterData.averageRatingGreaterThan,
    });
  }
  if (advancedFilterData.averageRatingLessThan.length > 0) {
    rows.push({
      title: "Average Rating Less Than",
      value: advancedFilterData.averageRatingLessThan,
    });
  }
  if (advancedFilterData.durationGreaterThan.length > 0) {
    rows.push({
      title: "Duration Greater Than",
      value: advancedFilterData.durationGreaterThan,
    });
  }
  if (advancedFilterData.durationLessThan.length > 0) {
    rows.push({
      title: "Duration Less Than",
      value: advancedFilterData.durationLessThan,
    });
  }
  if (advancedFilterData.originalLanguage.length > 0) {
    let originalLanguage;
    switch (advancedFilterData.originalLanguage) {
      case "de":
        originalLanguage = "German";
        break;
      case "fr":
        originalLanguage = "French";
        break;
      case "ja":
        originalLanguage = "Japanese";
        break;
      case "es":
        originalLanguage = "Spanish";
        break;
      case "it":
        originalLanguage = "Italian";
        break;
    }
    rows.push({ title: "Original Language", value: originalLanguage });
  }
  if (advancedFilterData.sortCategory.length > 0) {
    let sortCategory;
    switch (advancedFilterData.sortCategory) {
      case "popularity.asc":
        sortCategory = "Most Popular";
        break;
      case "popularity.desc":
        sortCategory = "Least Popular";
        break;
      case "revenue.asc":
        sortCategory = "Highest Revenue";
        break;
      case "revenue.desc":
        sortCategory = "Lowest Revenue";
        break;
      case "vote_count.asc":
        sortCategory = "Most Votes";
        break;
      case "vote_count.desc":
        sortCategory = "Least Votes";
        break;
    }

    rows.push({ title: "Sort Category", value: sortCategory });
  }
  if (advancedFilterData.firstAirDate.length > 0) {
    rows.push({
      title: "First Air Date",
      value: advancedFilterData.firstAirDate,
    });
  }

  return rows;
}

export function RatingOptions(value, metric, array) {
  let arr = [];
  let originalArr = [...array];
  if (metric === "greaterThan") {
    arr = originalArr.slice(
      originalArr.indexOf(Number(value)) + 1,
      originalArr.length
    );
  } else if (metric === "lessThan") {
    arr = originalArr.slice(0, originalArr.indexOf(Number(value)));
  }

  return arr;
}

export function ratingOptions() {
  return [
    {
      value: 10,
      label: "Outstanding - 10/10",
    },
    {
      value: 9,
      label: "Excellent - 9/10",
    },
    {
      value: 8,
      label: "Excellent - 8/10",
    },
    {
      value: 7,
      label: "Good - 7/10",
    },
    {
      value: 6,
      label: "Good - 6/10",
    },
    {
      value: 5,
      label: "Average - 5/10",
    },
    {
      value: 4,
      label: "Average - 4/10",
    },
    {
      value: 3,
      label: "Average - 3/10",
    },
    {
      value: 2,
      label: "Terrible - 2/10",
    },
    {
      value: 1,
      label: "Terrible - 1/10",
    },
  ];
}
