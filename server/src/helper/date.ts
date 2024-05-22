import { Op } from "sequelize";
import { TypeQuery } from "src/api/issue/dto/Issue.dto";
import { TtypeDate } from "src/types/date.types";

const lastTimeAday: [number, number, number, number] = [23, 59, 59, 999];
const firstTimeAday: [number, number, number, number] = [0, 0, 0, 0];

// in this day, week, month, year

function getStartOfDay(today) {
    const date = new Date(today)
    date.setDate(date.getDate()-1)
    date.setHours(...firstTimeAday);
    return new Date(date.getTime() -1).toISOString();
}
  
function getEndOfDay(today) {
  const date = new Date(today)
  date.setHours(...lastTimeAday);
  return date.toISOString() ;
}

function getStartOfWeek(date) {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    startOfWeek.setHours(...firstTimeAday); 
    return startOfWeek.toISOString();
}

function getEndOfWeek(date) {
    const endOfWeek = new Date(date);
    endOfWeek.setDate(date.getDate() - date.getDay() + 6); 
    endOfWeek.setHours(...lastTimeAday);
    return endOfWeek.toISOString();
}

function getStartOfMonth(date) {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1); 
    startOfMonth.setHours(...firstTimeAday); 
    return startOfMonth.toISOString();
}
  
function getEndOfMonth(date) {
  const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0); 
  endOfMonth.setHours(...lastTimeAday); 
  return endOfMonth.toISOString();
}

function getStartOfYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    startOfYear.setHours(...firstTimeAday); 
    return startOfYear.toISOString();
}
  
function getEndOfYear(date) {
  const endOfYear = new Date(date.getFullYear() + 1, 0, 0); 
  endOfYear.setHours(...lastTimeAday); 
  return endOfYear.toISOString();
}

// ago

function getMonthFromNow(date, space:number = 1, isAgo:boolean=true){
  var today = new Date();
  var curentMonth = isAgo ? (today.getMonth() - space):today.getMonth() + space
  var oneMonthAgo = new Date(today.getFullYear(),curentMonth, today.getDate());
  if (oneMonthAgo.getMonth() !== curentMonth) {
      oneMonthAgo = new Date(today.getFullYear(), today.getMonth(), 0); 
  }
  return oneMonthAgo.toISOString();
}

function getWeekFromNow(date, space:number = 1, isAgo:boolean=true){
  var today = new Date();
  var curentDay = isAgo? today.getDate() - (space * 7) : today.getDate() + (space*7)
  return new Date(today.getFullYear(), today.getMonth(), curentDay).toISOString();
}

const thisTime = {
  day: {
    start: getStartOfDay,
    end: getEndOfDay
  },
  week:{
    start: getStartOfWeek,
    end: getEndOfWeek
  },
  month: {
    start: getStartOfMonth,
    end: getEndOfMonth
  },
  year: {
    start: getStartOfYear,
    end: getEndOfYear
  },
  today:{
    start: getStartOfDay,
    end: getEndOfDay
  }
}

function getQueryTime(typeDate:TtypeDate):any{
  const date = new Date()
  if(!typeDate || typeDate == "all") return {}

  const queries  = {
      month: [thisTime.month.start(date), thisTime.month.end(date)],
      week: [thisTime.week.start(date), thisTime.week.end(date)],
      today: [thisTime.today.start(date), thisTime.today.end(date)],
      year: [thisTime.year.start(date), thisTime.year.end(date)]
  }
  
  return {
      target_date: {
          [Op.between]: queries[typeDate],
          [Op.not]: null
      }
  }
}

function getQueryTimeFromNowDue(typeDate:string, TypeQuery: TypeQuery = 'between'):any{
  const date = new Date
  if(!typeDate || typeDate == 'all') return {}

  const queries  = {
      'today': [thisTime.today.start(date), thisTime.today.end(date)],
      'week':[thisTime.week.start(date), thisTime.week.end(date)],
      'month':[thisTime.month.start(date), thisTime.month.end(date)],
      'year':[thisTime.year.start(date), thisTime.year.end(date)],
      '1_week': [thisTime.today.start(date), getWeekFromNow(date, 1,false)],//today to 1 week
      '2_weeks': [thisTime.today.start(date), getWeekFromNow(date,2,false)],
      '1_month': [thisTime.today.start(date), getMonthFromNow(date, 1,false)],
      '2_months': [thisTime.today.start(date), getMonthFromNow(date,2,false)],
  }

  const Ops ={
    between:queries[typeDate],
    lt:queries[typeDate][0],
    lte:queries[typeDate][0],
    gte:queries[typeDate][1],
    gt:queries[typeDate][1],
  }
  
  return {
      target_date: {
          [Op[TypeQuery]]: Ops[TypeQuery],
          [Op.not]: null
      }
  }
}

function getQueryTimeFromNowStart(typeDate:string):any{
  const date = new Date
  if(!typeDate) return {}

  const queries  = {
      '1_week': [getWeekFromNow(date), thisTime.today.end(date)],
      '2_weeks': [getWeekFromNow(date, 2), thisTime.today.end(date)],
      '1_month': [getMonthFromNow(date), thisTime.today.end(date)],
      '2_months': [getMonthFromNow(date, 2), thisTime.today.end(date)],
  }
  return {
      start_date: {
          [Op.between]: queries[typeDate],
          [Op.not]: null
      }
  }
}

export {getQueryTime, getQueryTimeFromNowDue, getQueryTimeFromNowStart}