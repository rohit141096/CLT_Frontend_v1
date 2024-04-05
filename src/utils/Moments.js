import moment from "moment"

const getBasicDateFormat = (date) => {
  let formatted_date = moment(new Date(date)).format("MMMM Do YYYY, h:mm a")
  return formatted_date
}

const getActivityOnFormat = (date) => {
  let formatted_date = moment(new Date(date)).format("lll")
  return formatted_date
}

const moments = {
  getBasicDateFormat,
  getActivityOnFormat,
}

export default moments
