import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const daysOfWeek = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz']; // Pazartesi'den başlıyor

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getWeekDays = () => {
    const currentDay = currentDate.getDay();
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDay);

    const weekDays = Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      return day;
    });

    return weekDays;
  };

  const renderCalendar = () => {
    const weekDays = getWeekDays();
    const todayIndex = currentDate.getDay();

    return weekDays.map((day, index) => (
      <View key={index} style={[styles.dayContainer, index === todayIndex && styles.todayContainer]}>
        <Text style={[styles.weekDayText, index === todayIndex && styles.todayText]}>
          {daysOfWeek[index]}
        </Text>
        <Text style={[styles.dateText, index === todayIndex && styles.todayText]}>
          {day.getDate()}
        </Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>{renderCalendar()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
  },
  weekDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  weekDayText: {
    fontSize: 16,
    color: 'grey'
  },
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayContainer: {
    width: '13%', // Eşit 7 sütun
    aspectRatio: 0.7, // Kare şeklinde hücreler
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    marginTop: 3,
    color: 'grey'
  },
  todayContainer: {
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: 'lightgrey'
  },
  todayText: {
    color: 'black',
  },
});

export default Calendar;
