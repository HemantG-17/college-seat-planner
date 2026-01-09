# College Exam Seat Planner

A full-stack web application that allocates classrooms for college exams using an optimized greedy algorithm.  
The system minimizes the number of rooms used while preferring lower-floor classrooms.

---

## Live Application

Frontend: https://college-seat-planner.vercel.app  
Backend: https://college-seat-planner.onrender.com  

---

## Overview

This application helps colleges efficiently allocate classrooms for examinations.  
It ensures that the total number of students is accommodated using the minimum number of classrooms, while also prioritizing classrooms located on lower floors.

---

## Features

- Add classroom details including room ID, seating capacity, floor number, and washroom proximity  
- View all available classrooms  
- Allocate classrooms for any number of students  
- Greedy allocation algorithm  
- Real-time updates  
- Input validation and error handling  
- Clean and modern user interface  

---

## Allocation Strategy

The application uses a greedy approach for seat allocation.

1. Classrooms are sorted by floor number in ascending order  
2. Within the same floor, classrooms are sorted by capacity in descending order  
3. Classrooms are selected one by one until the total capacity satisfies the number of students  

This ensures lower floors are used first and the number of classrooms is minimized.

---

## Technology Stack

Frontend  
- React  
- Vite  
- CSS  

Backend  
- Node.js  
- Express  

Deployment  
- Frontend deployed on Vercel  
- Backend deployed on Render
